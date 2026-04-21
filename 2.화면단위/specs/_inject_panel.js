// Injects the spec panel snippet before </body> in each receipt_*.html
// Idempotent: skips files that already contain the marker.
const fs = require('fs');
const path = require('path');

const DIR = path.resolve(__dirname, '..', 'screens', 'receipt');
const MARKER = '<!-- 개발자 스펙 패널 (프론트 개발 참고용) -->';

const SNIPPET = `
${MARKER}
<div x-data="{ open: false, spec: null }"
     x-init="fetch('../../specs/receipt.json').then(r=>r.json()).then(d=>{ const k=location.pathname.split('/').pop().replace('.html',''); spec = d[k] })"
     class="fixed right-0 top-0 h-screen z-50">
  <button @click="open = !open"
          class="fixed right-0 top-1/2 -translate-y-1/2 bg-[#6699FF] text-white px-2 py-4 rounded-l text-xs shadow-lg" style="writing-mode: vertical-rl;">
    스펙
  </button>
  <div x-show="open" @click.away="open = false" x-cloak
       class="fixed right-0 top-0 h-screen w-96 bg-white border-l-2 border-[#6699FF] shadow-2xl overflow-y-auto p-4 text-xs">
    <button @click="open = false" class="absolute top-2 right-2 text-gray-500 text-lg leading-none">&times;</button>
    <h3 class="font-bold text-sm text-[#6699FF] mb-1" x-text="spec?.title || '로딩중...'"></h3>
    <div class="text-[#999] mb-1" x-text="spec?.phpFile"></div>
    <div class="text-[#333] mb-2 text-[11px]" x-text="'업무: ' + (spec?.workflow || '')"></div>
    <div class="text-[#555] mb-3 text-[11px] leading-snug" x-text="spec?.purpose"></div>

    <div x-show="spec?.searchFields?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">검색/입력 필드</div>
      <table class="w-full text-[10px] border border-gray-200">
        <template x-for="f in spec?.searchFields">
          <tr class="border-b">
            <td class="px-2 py-1 font-mono text-[#6699FF] align-top" x-text="f.name"></td>
            <td class="px-2 py-1 align-top" x-text="f.label"></td>
            <td class="px-2 py-1 text-[#999] align-top" x-text="f.type"></td>
          </tr>
        </template>
      </table>
    </div>

    <div x-show="spec?.tableColumns?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">테이블 컬럼</div>
      <table class="w-full text-[10px] border border-gray-200">
        <template x-for="c in spec?.tableColumns">
          <tr class="border-b">
            <td class="px-2 py-1 align-top" x-text="c.name"></td>
            <td class="px-2 py-1 font-mono text-[#999] align-top" x-text="c.dbField"></td>
            <td class="px-2 py-1 text-[#999] align-top" x-text="c.format || ''"></td>
          </tr>
        </template>
      </table>
    </div>

    <div x-show="spec?.buttons?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">버튼</div>
      <template x-for="b in spec?.buttons">
        <div class="text-[10px] border-l-2 border-[#6699FF] pl-2 mb-1">
          <span class="font-bold" x-text="b.label"></span>: <span class="text-[#999]" x-text="b.action"></span>
        </div>
      </template>
    </div>

    <div x-show="spec?.popupsCalled?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">호출하는 팝업</div>
      <template x-for="p in spec?.popupsCalled">
        <div class="text-[10px] mb-1">
          <span x-text="p.trigger"></span> &rarr; <span class="font-mono text-[#6699FF]" x-text="p.popup"></span>
          <span class="text-[#999]" x-text="p.size ? '('+p.size+')' : ''"></span>
        </div>
      </template>
    </div>

    <div x-show="spec?.ajaxCalls?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">AJAX 호출</div>
      <template x-for="a in spec?.ajaxCalls">
        <div class="text-[10px] mb-1">
          <span x-text="a.trigger"></span> &rarr; <span class="font-mono text-[#6699FF]" x-text="a.url"></span>
          <span class="text-[#999]" x-text="' ['+a.mode+']'"></span>
        </div>
      </template>
    </div>

    <div x-show="spec?.iframes?.length" class="mb-3">
      <div class="font-bold text-[#333] mb-1">iframe 구성</div>
      <template x-for="i in spec?.iframes">
        <div class="text-[10px] mb-1">
          <span class="font-mono text-[#6699FF]" x-text="i.name"></span>:
          <span class="text-[#666]" x-text="i.src"></span>
        </div>
      </template>
    </div>

    <div x-show="spec?.flowFrom?.length" class="mb-2">
      <div class="font-bold text-[#333] mb-1">유입 화면</div>
      <template x-for="t in spec?.flowFrom">
        <span class="inline-block bg-gray-100 text-[#666] px-2 py-0.5 rounded mr-1 mb-1 text-[10px]" x-text="t"></span>
      </template>
    </div>

    <div x-show="spec?.flowTo?.length" class="mb-2">
      <div class="font-bold text-[#333] mb-1">이동 가능한 화면</div>
      <template x-for="t in spec?.flowTo">
        <span class="inline-block bg-blue-50 text-[#6699FF] px-2 py-0.5 rounded mr-1 mb-1 text-[10px]" x-text="t"></span>
      </template>
    </div>
  </div>
</div>
`;

const files = fs.readdirSync(DIR).filter(f => /^(receipt_|resolve_year|svc_list|receipt\.html)/.test(f) && f.endsWith('.html') && f !== 'index.html');

let injected = 0, skipped = 0;
for (const f of files) {
  const p = path.join(DIR, f);
  let html = fs.readFileSync(p, 'utf8');
  if (html.includes(MARKER)) { skipped++; continue; }
  if (!html.includes('</body>')) { console.warn('no </body> in', f); continue; }
  html = html.replace('</body>', SNIPPET + '\n</body>');
  fs.writeFileSync(p, html, 'utf8');
  injected++;
}
console.log(`injected=${injected} skipped=${skipped} total=${files.length}`);
