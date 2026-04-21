# KOCOM CS 차세대 전산 · 개발북

KOCOM CS 시스템의 **레거시(AS-IS) 화면**과 **차세대(TO-BE) 화면**을 나란히 보여주고,
비개발자 직원들도 번호 라벨을 짚으며 의견을 낼 수 있는 "의견수렴 북".

## 📘 구성

- **`index.html`** — 메인 개발북 (브라우저에서 열면 전체 UI)
- **`1.업무단위/`** — 45개 업무단위 전체 체인 지도 + 202개 레거시 화면 preview
- **`2.화면단위/`** — 12개 모던화된 화면 (P1-core / P2-major / P3-extra)
- **`KOCOM_CS_의견수집.xlsx`** — 45개 업무단위별 의견수집 엑셀 (직원 배포용)
- **`make_excel.py`** — 엑셀 파일 재생성 스크립트 (index.html의 BUS 데이터 기준)

## 🗺 시스템 개요

- **206개 화면** (201개 preview + iframe 외부)
- **45개 업무 단위(BU)** — 14개 도메인으로 그룹
- **17개 핵심 DB 프로시저** + 관련 테이블 40+
- **5단 사다리 구조**: 📋목록 → ✏️입력 → ⚡처리 → 🧩프로시저 → 🗄️테이블

## 🚀 로컬에서 실행

한글 폴더명 때문에 `file://` 로는 iframe 로드가 막힙니다. HTTP 서버로 띄우세요:

```bash
cd /path/to/this/repo
python -m http.server 8080
```

브라우저에서 `http://localhost:8080/` 접속.

## 🌐 GitHub Pages 배포

1. Settings → Pages → Source: `main` branch / `/ (root)` 선택
2. 수 분 후 `https://<user>.github.io/<repo>/` 로 접속 가능
3. Notion 페이지에 `/embed` 로 붙여서 사용

## 💡 의견수렴 워크플로우

1. 발표 자리에서 `index.html` 을 열고 BU별로 AS-IS/TO-BE 나란히 보여주기
2. 직원들은 번호 라벨을 짚으며 4블록(🟢유지 🟡개선 🔴삭제 💡신규)에 의견
3. 또는 엑셀 파일을 배포하여 각자 자기 업무 시트를 그려서 회신
4. 모은 의견으로 33개 BU의 TO-BE 초안 설계 → 차세대 전산 구현
