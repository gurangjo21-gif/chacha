/**
 * KOCOM CS 업무용 백엔드 proc 파일 분석 스펙 (20개)
 * 생성일: 2026-04-15 (resolve_year_proc.php 추가: 2026-04-15)
 */
window.BUSINESS_SPECS = {
  categories: ["접수 처리", "자재/매장 처리", "TDB 처리", "팝업 처리"],
  files: [
    /* ============================================================
     * 1. 접수 처리 (5개)
     * ============================================================ */
    {
      filename: "receipt_proc.php",
      category: "접수 처리",
      purpose: "접수 팝업 > 등록/수정 처리 (일반/모바일/서비스이력)",
      totalLines: 320,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "신규 접수 등록",
          params: [
            { name: "mode", type: "string", required: true, desc: "insert 고정" },
            { name: "smode", type: "string", required: false, desc: "M=모바일, S=서비스이력, 그외=일반접수" },
            { name: "p_mode", type: "string", required: false, desc: "g=갤러리 뷰, 그외=팝업" },
            { name: "rct_gbn", type: "string", required: true, desc: "접수구분 (S=상담→완료, M=모바일)" },
            { name: "rct_date", type: "date", required: true, desc: "접수일 (YYYY-MM-DD)" },
            { name: "rct_basedate", type: "date", required: false, desc: "방문예약일" },
            { name: "custNUM", type: "string", required: false, desc: "기존 고객번호 (있으면 UPDATE)" },
            { name: "mb_name", type: "string", required: true, desc: "고객명" },
            { name: "mbr", type: "string", required: false, desc: "관계" },
            { name: "tel1,tel2,tel3", type: "string", required: false, desc: "발신번호 3분할" },
            { name: "phone1,phone2,phone3", type: "string", required: false, desc: "집전화 3분할" },
            { name: "mobile1,mobile2,mobile3", type: "string", required: false, desc: "휴대폰 3분할" },
            { name: "zip", type: "string", required: false, desc: "우편번호" },
            { name: "addr1", type: "string", required: false, desc: "주소" },
            { name: "addr2", type: "string", required: false, desc: "상세주소" },
            { name: "apt_no", type: "string", required: false, desc: "아파트코드" },
            { name: "sell_gbn", type: "string", required: false, desc: "판매유형" },
            { name: "model_no", type: "string", required: false, desc: "품번" },
            { name: "err_1", type: "string", required: false, desc: "장애구분" },
            { name: "err_2", type: "string", required: false, desc: "장애상세" },
            { name: "callprice", type: "string", required: false, desc: "유상통보여부" },
            { name: "memo", type: "text", required: false, desc: "상담내용" },
            { name: "smemo", type: "text", required: false, desc: "특이사항" },
            { name: "agency_no", type: "string", required: false, desc: "담당지점" },
            { name: "agent_no", type: "string", required: false, desc: "담당사원(u prefix 자동)" },
            { name: "gap_gbn", type: "string", required: false, desc: "구간구분 (기본 1구간)" },
            { name: "stat_gbn", type: "string", required: false, desc: "상태정보" },
            { name: "charge_agency", type: "string", required: false, desc: "담당지점명(코드 조회용)" }
          ],
          sqlOps: [
            { type: "SELECT", table: "AS지점", condition: "지점명으로 지점코드 조회" },
            { type: "UPDATE", table: "CS고객정보", condition: "custNUM 있을 때" },
            { type: "INSERT", table: "CS고객정보", condition: "custNUM 없을 때 (시퀀스 NEXTVAL)" },
            { type: "SELECT", table: "CS접수", condition: "오늘자 MAX(접수번호) 조회 → yymmdd+0001" },
            { type: "INSERT", table: "CS접수", condition: "항상 (처리완료=Y/N, 승인=Y, 자재신청=N)" },
            { type: "UPDATE", table: "CS접수", condition: "rct_gbn=M 이면 승인상태=N" },
            { type: "SELECT", table: "CS사원", condition: "담당기사 전화번호 조회(SMS)" },
            { type: "SELECT", table: "CS장애구분", condition: "장애명 조회(SMS 메시지)" }
          ],
          businessLogic: [
            "1. smode에 따라 리턴 URL 결정 (M/S/일반)",
            "2. 지점명으로 지점코드 조회 (AS지점)",
            "3. 전화/휴대폰 3분할 값 병합 (하이픈 결합)",
            "4. 사원번호 u prefix 보정",
            "5. gap_gbn 기본값 '1구간' 세팅",
            "6. rct_gbn=S(상담) 이면 처리완료=Y, 외는 N",
            "7. custNUM 있으면 CS고객정보 UPDATE, 없으면 시퀀스로 INSERT",
            "8. 접수번호 자동 생성 (yymmdd + LPAD 4자리)",
            "9. CS접수 INSERT (승인=Y, 자재신청=N, 방문약속=N)",
            "10. 모바일(rct_gbn=M) 이면 승인상태=N 로 추가 UPDATE",
            "11. 완료되지 않은 건(finish=N) SMS 발신자/수신자/메시지 구성",
            "12. 특정 사원(u112007/u100000/u1000)은 popup_sms_main, 그외 외부 sms_list",
            "13. p_mode=g 이면 top.content 프레임 리로드, 아니면 opener+self.close"
          ],
          output: {
            success: "JS alert + confirm(SMS) + window.open + redirect",
            fail: "alert + self.close 또는 top.content 리로드"
          },
          calledFrom: ["receipt.php", "receipt_mode.php", "receipt_m_list.php"],
          dbTables: ["CS고객정보", "CS접수", "AS지점", "CS사원", "CS장애구분"],
          securityIssues: [
            { level: "high", issue: "SQL Injection: $_REQUEST 값이 쿼리에 직접 문자열 결합됨 (addslashes/bind 없음)" },
            { level: "high", issue: "XSS: 입력값이 JS echo 스크립트에 그대로 출력됨" },
            { level: "medium", issue: "세션 권한 체크 없음 (로그인 여부만 암묵적 가정)" }
          ]
        },
        {
          name: "update",
          description: "접수건 수정 (결재 승인건은 차단)",
          params: [
            { name: "rct_no", type: "string", required: true, desc: "접수번호 (하이픈 제거)" },
            { name: "rct_date", type: "date", required: true, desc: "접수일" },
            { name: "rct_basedate", type: "datetime", required: false, desc: "방문예약일 (YYYY-MM-DD HH24:MI)" },
            { name: "custNUM,mb_name,mbr,tel*,phone*,mobile*,zip,addr1,addr2,apt_no", type: "mixed", required: false, desc: "고객/주소 정보" },
            { name: "sell_gbn,model_no,err_1,err_2,callprice,memo,smemo", type: "mixed", required: false, desc: "수리 정보" },
            { name: "agency_no,agent_no,gap_gbn,stat_gbn", type: "mixed", required: false, desc: "담당 정보" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS처리", condition: "결재여부='결재' 이면 수정 불가 차단" },
            { type: "UPDATE", table: "CS접수", condition: "접수번호 기준 전체 필드 업데이트" }
          ],
          businessLogic: [
            "1. CS처리.결재여부 체크 - '결재'이면 alert 후 종료",
            "2. 접수번호(하이픈 제거)로 CS접수 전 필드 UPDATE",
            "3. 성공: history.back() + (p_mode=g면 info 프레임 리로드)"
          ],
          output: {
            success: "alert + history.back()",
            fail: "alert + history.back()"
          },
          calledFrom: ["receipt_mode.php"],
          dbTables: ["CS처리", "CS접수"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" }
          ]
        }
      ],
      specialFeatures: [
        "접수번호 자동 생성 (yymmdd+0001)",
        "SMS 자동 발송 (담당기사)",
        "특정 사원에 한해 내부 SMS 팝업, 그 외는 외부 cs.kocom.com 링크",
        "모바일 접수는 승인상태=N로 구분"
      ]
    },
    {
      filename: "receipt_proc_1.php",
      category: "접수 처리",
      purpose: "receipt_proc.php 의 변형본 (거의 동일, 프레임 리다이렉트 경로만 다름)",
      totalLines: 320,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "신규 접수 등록 (동일 로직)",
          params: [{ name: "(receipt_proc.php 와 동일)", type: "-", required: false, desc: "파라미터 동일" }],
          sqlOps: [
            { type: "INSERT", table: "CS고객정보", condition: "custNUM 없을 때" },
            { type: "UPDATE", table: "CS고객정보", condition: "custNUM 있을 때" },
            { type: "INSERT", table: "CS접수", condition: "항상" },
            { type: "UPDATE", table: "CS접수", condition: "모바일(M)일 때 승인상태=N" }
          ],
          businessLogic: [
            "receipt_proc.php 와 99% 동일",
            "차이점: 성공 후 p_mode=g 분기에서 top.content.info.location.href 로 직접 이동 (r_content.rct 경유 X)"
          ],
          output: { success: "alert + redirect", fail: "alert + self.close" },
          calledFrom: ["receipt.php (특정 뷰)"],
          dbTables: ["CS고객정보", "CS접수", "AS지점", "CS사원"],
          securityIssues: [{ level: "high", issue: "SQL Injection (원본과 동일)" }]
        },
        {
          name: "update",
          description: "접수건 수정 (결재건 차단)",
          params: [{ name: "(receipt_proc.php 와 동일)", type: "-", required: false, desc: "" }],
          sqlOps: [
            { type: "SELECT", table: "CS처리", condition: "결재여부 체크" },
            { type: "UPDATE", table: "CS접수", condition: "접수번호" }
          ],
          businessLogic: ["receipt_proc.php update 와 거의 동일 - p_mode=g 분기만 다름"],
          output: { success: "alert + history.back()", fail: "alert + history.back()" },
          calledFrom: ["receipt_mode.php"],
          dbTables: ["CS처리", "CS접수"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["receipt_proc.php 의 레거시/병렬 버전으로 추정"]
    },
    {
      filename: "receipt_year_proc.php",
      category: "접수 처리",
      purpose: "연차접수 등록/수정 (아파트 연차별 AS 접수)",
      totalLines: 251,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "연차 신규 접수",
          params: [
            { name: "yearCnt", type: "string", required: true, desc: "연차(몇 년차)" },
            { name: "regdate", type: "date", required: true, desc: "접수일" },
            { name: "basedate", type: "date", required: false, desc: "기준일" },
            { name: "cname", type: "string", required: true, desc: "고객명" },
            { name: "phone1/2/3, mobile1/2/3", type: "string", required: false, desc: "전화 3분할" },
            { name: "zip,addr1,addr2,addr3,addr4,apt_no,apt_name", type: "mixed", required: false, desc: "주소/아파트" },
            { name: "model_no,err_1,err_2,smemo,callprice", type: "mixed", required: false, desc: "수리 정보" },
            { name: "centerCode", type: "string", required: false, desc: "담당지점" },
            { name: "chargeName", type: "string", required: false, desc: "담당사원" },
            { name: "visit_yn", type: "string", required: false, desc: "방문약속 Y/N" },
            { name: "visitdate", type: "date", required: false, desc: "방문예약일" },
            { name: "com_yn", type: "string", required: false, desc: "타공종유무" },
            { name: "gongjong", type: "string", required: false, desc: "공종명" },
            { name: "y_select", type: "string", required: false, desc: "연차구분" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS접수", condition: "오늘자 MAX(접수번호)" },
            { type: "INSERT", table: "CS접수", condition: "연차 필드 포함(접수구분='Y')" }
          ],
          businessLogic: [
            "1. 접수일/기준일 6자리면 '20' prefix",
            "2. 접수번호 yymmdd+0001 자동 생성",
            "3. visit_yn=Y 이면 to_date, 아니면 빈값",
            "4. CS접수 INSERT - 접수구분='Y'(연차), 승인=Y, 처리완료=com_yn"
          ],
          output: { success: "alert + form.submit('receipt_year_list.php')", fail: "form.submit('receipt_year_mode.php')" },
          calledFrom: ["receipt_year_mode.php"],
          dbTables: ["CS접수"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" }
          ]
        },
        {
          name: "update",
          description: "연차접수 수정",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "(기타 insert 와 동일 + kmemo 기사메모)", type: "-", required: false, desc: "" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS접수", condition: "접수번호 기준" }
          ],
          businessLogic: [
            "연차/기준일/고객/주소/수리/담당/공종/방문 필드 UPDATE",
            "kmemo(기사메모) 추가 저장"
          ],
          output: { success: "form.submit('receipt_year_list.php')", fail: "form.submit('receipt_year_mode.php')" },
          calledFrom: ["receipt_year_mode.php"],
          dbTables: ["CS접수"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["연차구분 전용 접수 (접수구분='Y' 하드코딩)", "일반 receipt_proc 와 스키마 일부 다름(동/호 필드)"]
    },
    {
      filename: "receipt_memo_proc.php",
      category: "접수 처리",
      purpose: "접수 > 특이사항(CS특이사항) 등록/수정 - 지식베이스",
      totalLines: 141,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "특이사항 신규 등록",
          params: [
            { name: "err_1", type: "string", required: true, desc: "장애구분" },
            { name: "err_2", type: "string", required: true, desc: "장애상세" },
            { name: "model_no", type: "string", required: false, desc: "모델번호" },
            { name: "memo1", type: "text", required: false, desc: "상담내용" },
            { name: "memo2", type: "text", required: false, desc: "처리내용" },
            { name: "p_mode", type: "string", required: false, desc: "g=갤러리 뷰" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS특이사항", condition: "max(일련번호)+1 채번" },
            { type: "INSERT", table: "CS특이사항", condition: "항상" }
          ],
          businessLogic: [
            "1. MAX(일련번호)+1 로 수동 채번",
            "2. CS특이사항 INSERT (장애구분+장애상세+모델+내용)",
            "3. p_mode=g 이면 history.go(-2), 그외 목록으로 submit"
          ],
          output: { success: "alert + redirect", fail: "alert + history.go(-1)" },
          calledFrom: ["receipt_memo_mode.php"],
          dbTables: ["CS특이사항"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" },
            { level: "low", issue: "동시성: MAX+1 채번은 race condition 위험 (시퀀스 미사용)" }
          ]
        },
        {
          name: "update",
          description: "특이사항 수정",
          params: [
            { name: "idx", type: "string", required: true, desc: "일련번호" },
            { name: "err_1,err_2,model_no,memo1,memo2", type: "-", required: false, desc: "수정 필드" }
          ],
          sqlOps: [{ type: "UPDATE", table: "CS특이사항", condition: "일련번호=idx" }],
          businessLogic: ["일련번호 기준 UPDATE, 입력자/입력일 갱신"],
          output: { success: "alert + redirect", fail: "alert + back" },
          calledFrom: ["receipt_memo_mode.php"],
          dbTables: ["CS특이사항"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["MAX+1 수동 채번 (시퀀스 미사용)"]
    },
    {
      filename: "receipt_menual_proc.php",
      category: "접수 처리",
      purpose: "접수 > 매뉴얼(CS매뉴얼) 파일 업로드 + 등록/수정",
      totalLines: 145,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "매뉴얼 신규 등록 + 파일 업로드",
          params: [
            { name: "model_no", type: "string", required: true, desc: "품번 (업로드 폴더)" },
            { name: "apt_no", type: "string", required: false, desc: "아파트코드" },
            { name: "subject", type: "string", required: true, desc: "제목" },
            { name: "file1..N", type: "file", required: false, desc: "첨부파일 (file_upfile.php 처리)" },
            { name: "p_mode", type: "string", required: false, desc: "g=갤러리" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS매뉴얼", condition: "MAX(일련번호)+1" },
            { type: "INSERT", table: "CS매뉴얼", condition: "항상" }
          ],
          businessLogic: [
            "1. ../manual/{model_no}/ 디렉토리 없으면 mkdir 0777",
            "2. file_upfile.php include 로 파일 업로드 처리 → $fNAME1",
            "3. CS매뉴얼 INSERT (품번, 아파트코드, 파일명, 제목)"
          ],
          output: { success: "alert + redirect", fail: "alert + back" },
          calledFrom: ["receipt_menual_mode.php"],
          dbTables: ["CS매뉴얼"],
          securityIssues: [
            { level: "critical", issue: "파일 업로드: mkdir 0777 권한, 확장자/MIME 검증 여부 불투명" },
            { level: "high", issue: "Path Traversal: model_no가 경로에 직접 삽입됨" },
            { level: "high", issue: "SQL Injection" }
          ]
        },
        {
          name: "update",
          description: "매뉴얼 수정 (파일 선택적 교체)",
          params: [
            { name: "idx", type: "string", required: true, desc: "일련번호" },
            { name: "apt_no,subject,file1", type: "-", required: false, desc: "" }
          ],
          sqlOps: [{ type: "UPDATE", table: "CS매뉴얼", condition: "일련번호=idx" }],
          businessLogic: ["fNAME1 있을 때만 파일명 UPDATE 포함", "아파트코드/제목/등록자/등록일 갱신"],
          output: { success: "alert + redirect", fail: "alert + back" },
          calledFrom: ["receipt_menual_mode.php"],
          dbTables: ["CS매뉴얼"],
          securityIssues: [{ level: "critical", issue: "파일 업로드 검증" }, { level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["품번별 디렉토리 자동 생성", "file_upfile.php 공용 업로더 사용"]
    },

    /* ============================================================
     * 2. 자재/매장 처리 (6개)
     * ============================================================ */
    {
      filename: "store_doing_proc.php",
      category: "자재/매장 처리",
      purpose: "자재관리 > 수리의뢰 진행상황 수정완료 (KM수리의뢰 처리상태)",
      totalLines: 92,
      httpMethod: "POST",
      modes: [
        {
          name: "(분기없음: status+지점 조합)",
          description: "수리의뢰 처리상태/내용/청구금액 UPDATE",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "status", type: "string", required: true, desc: "처리상태 (3=처리완료)" },
            { name: "status1", type: "string", required: false, desc: "하위 상태(1이면 청구금액 반영)" },
            { name: "content", type: "text", required: true, desc: "처리내용" },
            { name: "pay_won_modify", type: "number", required: false, desc: "청구금액 (본사11323 &status1=1)" },
            { name: "c_date", type: "date", required: false, desc: "(form 전달만)" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "KM수리의뢰", condition: "status=3 + user_agency=11323 + status1=1 → 청구금액 포함" },
            { type: "UPDATE", table: "KM수리의뢰", condition: "status=3 그 외 → 처리일 추가" },
            { type: "UPDATE", table: "KM수리의뢰", condition: "status≠3 + 본사 → 청구금액 포함" },
            { type: "UPDATE", table: "KM수리의뢰", condition: "status≠3 일반 → 처리내용/상태/사원만" }
          ],
          businessLogic: [
            "1. user_agency=11323(본사) + status1=1 이면 청구금액 포함",
            "2. status=3 이면 처리일=sysdate 기록",
            "3. 그 외는 처리일 미기록",
            "4. 처리사원번호는 현재 세션 사용자"
          ],
          output: { success: "alert + form.submit('store_doing_list.php')", fail: "submit('store_doing_mode.php')" },
          calledFrom: ["store_doing_mode.php"],
          dbTables: ["KM수리의뢰"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["본사(11323) 전용 청구금액 수정 권한", "KM수리의뢰 테이블 (접수자재와 구분)"]
    },
    {
      filename: "store_request_proc.php",
      category: "자재/매장 처리",
      purpose: "자재관리 > 접수자재 신청 완료 (신청구분=1)",
      totalLines: 196,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "접수건 연계 자재신청 등록",
          params: [
            { name: "receipt_no", type: "string", required: true, desc: "접수번호 (하이픈 제거)" },
            { name: "req_center_id", type: "string", required: true, desc: "신청지점" },
            { name: "in_dt", type: "date", required: true, desc: "접수일" },
            { name: "sub_cnt", type: "int", required: true, desc: "품목 개수" },
            { name: "s_no_N", type: "string", required: false, desc: "품번 (배열, N=0..sub_cnt-1)" },
            { name: "s_name_N,s_type_N,s_cnt_N,s_app_N,s_ha_N,s_os_N,s_memo_N,s_status_N", type: "-", required: false, desc: "품목 상세" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS자재신청", condition: "항상 (신청구분=1, 시퀀스)" },
            { type: "INSERT", table: "CS자재신청품목", condition: "품번마다 반복 (s_no 비면 skip)" },
            { type: "UPDATE", table: "CS접수", condition: "자재신청상태='Y'" }
          ],
          businessLogic: [
            "1. CS자재신청 INSERT (시퀀스 NEXTVAL, 신청구분=1, 출고지점=11323/창고=10004)",
            "2. 루프: 빈 값은 '.' 로 치환",
            "3. 품번별 CS자재신청품목 INSERT (CURRVAL 참조)",
            "4. CS접수.자재신청상태='Y' 플래그 갱신"
          ],
          output: { success: "alert + location.href='store_receipt_list.php'", fail: "alert + redirect" },
          calledFrom: ["store_request_mode.php (접수자재)"],
          dbTables: ["CS자재신청", "CS자재신청품목", "CS접수"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        },
        {
          name: "update",
          description: "기 등록된 자재신청에 품목 추가",
          params: [{ name: "sub_cnt + s_* 배열", type: "-", required: false, desc: "동일" }],
          sqlOps: [
            { type: "SELECT", table: "CS자재신청품목", condition: "중복 체크(신청번호+품번)" },
            { type: "INSERT", table: "CS자재신청품목", condition: "중복 아닐 때만" }
          ],
          businessLogic: ["중복 품번은 skip, 신규만 INSERT"],
          output: { success: "alert + redirect", fail: "alert" },
          calledFrom: ["store_request_mode.php"],
          dbTables: ["CS자재신청품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }, { level: "medium", issue: "$req_no 변수 미정의로 사용 - 버그 가능성" }]
        }
      ],
      specialFeatures: ["출고지점/창고 하드코딩(11323/10004)", "CS자재신청_신청번호_SEQ / 일련번호_SEQ 시퀀스 사용"]
    },
    {
      filename: "store_request_proc_nomal.php",
      category: "자재/매장 처리",
      purpose: "자재관리 > 일반자재 신청 완료 (신청구분=2, 접수와 무관)",
      totalLines: 233,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "일반 자재신청 등록",
          params: [
            { name: "receipt_no", type: "string", required: false, desc: "접수번호(있어도 무방)" },
            { name: "req_center_id", type: "string", required: true, desc: "신청지점" },
            { name: "model_no", type: "string", required: false, desc: "일반신청품번(대표)" },
            { name: "sub_cnt", type: "int", required: true, desc: "품목수" },
            { name: "s_*_N, model_no_N", type: "-", required: false, desc: "품목 배열(일반자재신청품목 포함)" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS자재신청", condition: "신청구분=2(일반)" },
            { type: "INSERT", table: "CS자재신청품목", condition: "일반자재신청품목 필드 포함" },
            { type: "UPDATE", table: "CS접수", condition: "처리완료='Y' (일반에서는 처리완료 마감)" }
          ],
          businessLogic: [
            "1. 접수자재와 달리 신청구분='2'",
            "2. 품목에 일반자재신청품목(원본 model_no_N) 추가 저장",
            "3. CS접수 처리완료='Y' (자재신청상태 아님에 주의)"
          ],
          output: { success: "alert + location.href='store_request_list_nomal.php'", fail: "alert" },
          calledFrom: ["store_request_mode_nomal.php"],
          dbTables: ["CS자재신청", "CS자재신청품목", "CS접수"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        },
        {
          name: "update",
          description: "일반 자재신청 품목 추가",
          params: [{ name: "sub_cnt + s_*_N + model_no_N", type: "-", required: false, desc: "" }],
          sqlOps: [
            { type: "SELECT", table: "CS자재신청품목", condition: "중복체크" },
            { type: "INSERT", table: "CS자재신청품목", condition: "신규 품번만" }
          ],
          businessLogic: ["중복 품번 skip, 신규만 INSERT"],
          output: { success: "alert + redirect", fail: "alert" },
          calledFrom: ["store_request_mode_nomal.php"],
          dbTables: ["CS자재신청품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["신청구분='2' 로 접수자재(1)와 구분", "특정 IP(116.39.158.167) 디버그용 echo 흔적"]
    },
    {
      filename: "store_request_release_proc.php",
      category: "자재/매장 처리",
      purpose: "자재신청현황 > 출고등록 완료 (품목별 진행상황 일괄 업데이트)",
      totalLines: 60,
      httpMethod: "POST",
      modes: [
        {
          name: "(분기없음)",
          description: "품목별 진행상황 일괄 UPDATE",
          params: [
            { name: "sub_cnt", type: "int", required: true, desc: "품목수" },
            { name: "ridx_N", type: "string", required: true, desc: "신청일련번호" },
            { name: "s_status_N", type: "string", required: true, desc: "진행상황" },
            { name: "keyfield,keyword,pageno,Tidx,Sidx,mode,idx,status,sday,eday", type: "-", required: false, desc: "검색 상태 유지용" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS자재신청품목", condition: "신청일련번호별 루프 UPDATE" }
          ],
          businessLogic: ["sub_cnt 만큼 루프 돌며 CS자재신청품목.진행상황 업데이트"],
          output: { success: "alert + form.submit('store_request_list.php')", fail: "submit 제자리" },
          calledFrom: ["store_request_release.php"],
          dbTables: ["CS자재신청품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["다건 일괄 처리", "$RES 누산($RES +=) 로 전체 성공 판정"]
    },
    {
      filename: "store_return_release_proc.php",
      category: "자재/매장 처리",
      purpose: "뇌전 자재관리 > 자재신청현황 > 출고등록 완료 (CS뇌전자재신청품목 일괄 UPDATE)",
      totalLines: 60,
      httpMethod: "POST",
      modes: [
        {
          name: "(분기없음)",
          description: "뇌전 품목별 진행상황 일괄 UPDATE",
          params: [
            { name: "sub_cnt", type: "int", required: true, desc: "품목수" },
            { name: "ridx_N,s_status_N", type: "-", required: true, desc: "일련번호/진행상황" }
          ],
          sqlOps: [{ type: "UPDATE", table: "CS뇌전자재신청품목", condition: "신청일련번호 기준 루프" }],
          businessLogic: ["store_request_release_proc.php 와 로직 동일, 테이블이 CS뇌전자재신청품목"],
          output: { success: "alert + submit('store_request_list.php')", fail: "alert" },
          calledFrom: ["store_return_release.php"],
          dbTables: ["CS뇌전자재신청품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["뇌전 전용 테이블 분리 구조"]
    },
    {
      filename: "store_suri_proc.php",
      category: "자재/매장 처리",
      purpose: "KM 수리의뢰 접수 등록 (본사/센터 수리의뢰)",
      totalLines: 175,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "수리의뢰 신규 등록",
          params: [
            { name: "charge", type: "string", required: true, desc: "고객명" },
            { name: "telno", type: "string", required: true, desc: "연락처" },
            { name: "req_dt", type: "date", required: true, desc: "접수일" },
            { name: "req_center_id,centerCode", type: "string", required: false, desc: "접수지점(센터코드)" },
            { name: "zip,addr1,addr2", type: "string", required: false, desc: "주소" },
            { name: "model_no,model_name", type: "string", required: false, desc: "모델" },
            { name: "rgb_type", type: "string", required: true, desc: "의뢰방법 (1=송장, 기타=방문)" },
            { name: "invoice_no", type: "string", required: false, desc: "송장번호 (rgb_type=1)" },
            { name: "visit_dt", type: "date", required: false, desc: "방문일자 (rgb_type≠1)" },
            { name: "serial_no", type: "string", required: false, desc: "시리얼번호" },
            { name: "s_type", type: "string", required: false, desc: "유무상" },
            { name: "error_msg,memo,pay_won", type: "-", required: false, desc: "불량증상/특이/청구금액" }
          ],
          sqlOps: [
            { type: "SELECT", table: "KM수리의뢰", condition: "오늘자 MAX(접수번호)" },
            { type: "INSERT", table: "KM수리의뢰", condition: "항상" }
          ],
          businessLogic: [
            "1. req_dt 6자리면 '20' prefix, 날짜 정규화",
            "2. rgb_type=1(송장) → invoice_no 저장 / 그 외 → visit_dt",
            "3. 접수번호 yymmdd+0001 채번",
            "4. KM수리의뢰 INSERT"
          ],
          output: { success: "alert + location.href='store_suri_list.php'", fail: "alert + form submit" },
          calledFrom: ["store_suri_mode.php"],
          dbTables: ["KM수리의뢰"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["update 블록은 주석처리됨 (insert 전용)", "CS접수와 분리된 KM수리의뢰 테이블 사용"]
    },

    /* ============================================================
     * 3. TDB 처리 (3개)
     * ============================================================ */
    {
      filename: "tdb_in_proc.php",
      category: "TDB 처리",
      purpose: "뇌전보고 > 접수 등록/수정 (낙뢰 피해 접수)",
      totalLines: 171,
      httpMethod: "POST (update multipart)",
      modes: [
        {
          name: "insert",
          description: "뇌전 신규 접수",
          params: [
            { name: "seace_name", type: "string", required: true, desc: "현장명" },
            { name: "apt_no", type: "string", required: true, desc: "아파트코드" },
            { name: "in_date", type: "date", required: true, desc: "접수일" },
            { name: "zip,addr1,addr2", type: "string", required: false, desc: "주소" },
            { name: "tdb_date", type: "date", required: true, desc: "뇌전일" },
            { name: "model_no,model_name", type: "string", required: false, desc: "품번/모델명" }
          ],
          sqlOps: [
            { type: "SELECT", table: "KSIS.처리담당자", condition: "우편번호 앞 3자리로 담당사원 조회" },
            { type: "SELECT", table: "KSIS.AS사원", condition: "담당사원의 지점코드 조회" },
            { type: "SELECT", table: "CS뇌전접수", condition: "오늘자 MAX(접수번호)" },
            { type: "INSERT", table: "CS뇌전접수", condition: "항상 (진행상태=1)" }
          ],
          businessLogic: [
            "1. zip 앞 3자리 → KSIS.처리담당자 → 담당사원 → KSIS.AS사원.지점코드 도출",
            "2. 접수번호 yymmdd+0001",
            "3. CS뇌전접수 INSERT - 접수센터=지역담당지점, 진행상태=1"
          ],
          output: { success: "alert + submit('tdb_in_list.php')", fail: "alert + submit('tdb_in_mode.php')" },
          calledFrom: ["tdb_in_mode.php"],
          dbTables: ["CS뇌전접수", "KSIS.처리담당자", "KSIS.AS사원"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        },
        {
          name: "update",
          description: "뇌전접수 수정 + 첨부파일 업로드 + 기타목록",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "insurance,insurance_name,insurance_charge,insurance_tel", type: "string", required: false, desc: "보험사 정보" },
            { name: "status", type: "string", required: true, desc: "진행상태" },
            { name: "file1", type: "file", required: false, desc: "서류파일 (../filedir/tdb/)" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS뇌전접수", condition: "보험사+진행상태 업데이트" },
            { type: "INSERT", table: "CS뇌전서류파일", condition: "파일 있을 때 (시퀀스)" }
          ],
          businessLogic: [
            "1. file_upfile.php include, 업로드 폴더 ../filedir/tdb/",
            "2. 보험사 타입/업체/담당자/연락처/진행상태 UPDATE",
            "3. fNAME1 있으면 CS뇌전서류파일 INSERT",
            "4. CS뇌전기타목록 코드는 주석처리됨"
          ],
          output: { success: "alert + submit('tdb_in_list.php')", fail: "alert + submit('tdb_in_mode.php')" },
          calledFrom: ["tdb_in_mode.php"],
          dbTables: ["CS뇌전접수", "CS뇌전서류파일"],
          securityIssues: [
            { level: "critical", issue: "파일 업로드 검증" },
            { level: "high", issue: "SQL Injection" }
          ]
        }
      ],
      specialFeatures: ["지역코드 기반 자동 담당 센터 배정", "첨부파일 다건 저장 구조"]
    },
    {
      filename: "tdb_in_proc_release.php",
      category: "TDB 처리",
      purpose: "뇌전 접수 확정 + 현장품목 낙뢰 이력 추가 (tdb_in_proc.php 릴리즈 버전)",
      totalLines: 154,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "뇌전접수 + CS현장품목 '낙뢰' 항목 동시 등록",
          params: [
            { name: "seace_name,apt_no,in_date,zip,addr1,addr2,tdb_date,model_no,model_name", type: "-", required: true, desc: "기본 뇌전 정보" },
            { name: "tdb_num", type: "string", required: true, desc: "수량 (낙뢰 피해 수량)" }
          ],
          sqlOps: [
            { type: "SELECT", table: "KSIS.처리담당자,KSIS.AS사원", condition: "지점코드 자동 배정" },
            { type: "INSERT", table: "CS뇌전접수", condition: "접수일=sysdate, 진행상태=1" },
            { type: "INSERT", table: "CS현장품목", condition: "설치항목='낙뢰', 수량=tdb_num, 회사=10000" }
          ],
          businessLogic: [
            "1. 지역코드→담당사원→지점 자동 조회",
            "2. CS뇌전접수 INSERT (접수일=sysdate, tdb_in_proc.php와 다름)",
            "3. CS현장품목 INSERT - 설치항목 '낙뢰' 하드코딩",
            "4. 두 INSERT 모두 성공해야 완료 처리"
          ],
          output: { success: "alert + location.href='tdb_in_list.php'", fail: "alert + history.back()" },
          calledFrom: ["tdb_in_mode_release.php"],
          dbTables: ["CS뇌전접수", "CS현장품목", "KSIS.처리담당자", "KSIS.AS사원"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }, { level: "medium", issue: "트랜잭션 없이 두 INSERT 처리 - 부분 성공 시 정합성 깨짐" }]
        },
        {
          name: "update",
          description: "보험사/진행상태 업데이트 (tdb_in_proc.php와 동일)",
          params: [{ name: "idx,insurance*,status", type: "-", required: true, desc: "" }],
          sqlOps: [{ type: "UPDATE", table: "CS뇌전접수", condition: "접수번호 기준" }],
          businessLogic: ["파일 업로드 로직 없음 (tdb_in_proc.php 대비 축약)"],
          output: { success: "submit('tdb_in_list.php')", fail: "submit('tdb_in_mode.php')" },
          calledFrom: ["tdb_in_mode_release.php"],
          dbTables: ["CS뇌전접수"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["현장품목에 '낙뢰' 설치항목 자동 추가", "form echo 부분 주석처리 (hidden 전달 안함)"]
    },
    {
      filename: "tdb_store_proc.php",
      category: "TDB 처리",
      purpose: "뇌전 자재신청 완료 (CS뇌전자재신청 + 품목 + 가격 스냅샷)",
      totalLines: 180,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "뇌전자재신청 등록",
          params: [
            { name: "receipt_no", type: "string", required: true, desc: "뇌전접수번호" },
            { name: "req_center_id", type: "string", required: true, desc: "신청지점" },
            { name: "receipt_date", type: "date", required: true, desc: "접수일" },
            { name: "m_no", type: "string", required: false, desc: "모델품번(대표)" },
            { name: "sub_cnt", type: "int", required: true, desc: "품목수" },
            { name: "s_no_N,s_gb_N,s_cnt_N,s_app_N,s_ha_N,s_os_N,s_memo_N,s_status_N", type: "-", required: false, desc: "품목 배열 (s_gb=양품/불량 구분)" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS뇌전자재신청", condition: "항상 (시퀀스, 신청진행상태=1)" },
            { type: "UPDATE", table: "CS뇌전접수", condition: "자재신청상태='Y'" },
            { type: "SELECT", table: "AS품목", condition: "품번별 가격 9종 조회" },
            { type: "INSERT", table: "CS뇌전자재신청품목", condition: "품목마다 (가격 스냅샷 저장)" }
          ],
          businessLogic: [
            "1. CS뇌전자재신청 INSERT (신청진행상태=1, 접수여부=N)",
            "2. CS뇌전접수.자재신청상태='Y' UPDATE",
            "3. 품목 루프: AS품목에서 가격 9종(센터반납가A/R, 미반납가A/R, 유지보수, 결산, 소비자가A/R, 유지보수) 조회",
            "4. CS뇌전자재신청품목 INSERT - s_gb(양품불량), 출고일=sysdate, 가격 스냅샷 포함"
          ],
          output: { success: "alert + submit('tdb_store_list.php')", fail: "submit('tdb_store_mode.php')" },
          calledFrom: ["tdb_store_mode.php"],
          dbTables: ["CS뇌전자재신청", "CS뇌전자재신청품목", "CS뇌전접수", "AS품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        },
        {
          name: "update",
          description: "비활성 (전체 주석처리됨)",
          params: [{ name: "-", type: "-", required: false, desc: "미구현" }],
          sqlOps: [],
          businessLogic: ["코드 전체가 /* */ 주석 - 실행되지 않음"],
          output: { success: "-", fail: "-" },
          calledFrom: [],
          dbTables: [],
          securityIssues: []
        }
      ],
      specialFeatures: ["가격 9종 스냅샷 저장 (정산용)", "양품/불량 구분 필드(s_gb)"]
    },

    /* ============================================================
     * 4. 팝업 처리 (5개)
     * ============================================================ */
    {
      filename: "popup_svc_proc.php",
      category: "팝업 처리",
      purpose: "처리 > 접수처리 팝업 > 입력/수정 완료 (CS처리 + 자재계리)",
      totalLines: 219,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "접수처리 신규 등록",
          params: [
            { name: "rct_no", type: "string", required: true, desc: "접수번호" },
            { name: "ed_day", type: "date", required: true, desc: "처리일" },
            { name: "agency_no", type: "string", required: true, desc: "처리지점" },
            { name: "ps_agent", type: "string", required: true, desc: "처리사원" },
            { name: "sell_gbn", type: "string", required: false, desc: "판매유형" },
            { name: "model_no", type: "string", required: false, desc: "처리 품번" },
            { name: "pay_gbn", type: "string", required: true, desc: "Y=유상/N=무상/I=유지보수/C=취소" },
            { name: "serial_no", type: "string", required: false, desc: "제품일련번호 (C이면 '취소')" },
            { name: "ps_memo", type: "text", required: false, desc: "특별처리" },
            { name: "price_gongim,price_gugan,pay1,pay2,memo,sobi_price", type: "-", required: false, desc: "공임/출장/청구/징구/기사의견/자재비" },
            { name: "vat", type: "string", required: false, desc: "부가세포함 (C/N은 N 강제)" },
            { name: "sub_cnt + s_no_N, s_type_N, s_cnt_N, s_price_N", type: "-", required: false, desc: "자재 배열" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS접수", condition: "원래 품번 조회" },
            { type: "UPDATE", table: "CS접수", condition: "처리완료='Y'" },
            { type: "UPDATE", table: "CS접수", condition: "품번 변경시" },
            { type: "SELECT", table: "CS처리", condition: "MAX(처리번호)+1 채번" },
            { type: "INSERT", table: "CS처리", condition: "항상" },
            { type: "SELECT", table: "CS처리부품", condition: "MAX(처리일련번호)+1" },
            { type: "INSERT", table: "CS처리부품", condition: "자재 품번별" }
          ],
          businessLogic: [
            "1. pay_gbn=C(취소) 이면 serial_no='취소' 강제",
            "2. vat null + C/N 이면 vat='N' 강제",
            "3. CS접수 처리완료='Y' UPDATE",
            "4. 원본 품번과 다르면 CS접수 품번도 UPDATE",
            "5. MAX(처리번호)+1 채번 후 CS처리 INSERT",
            "6. 자재(sub_cnt) 루프 - CS처리부품 INSERT (등급=s_type, 회사=10000 하드코딩)"
          ],
          output: { success: "alert + opener.search_next() + self.close()", fail: "alert + self.close()" },
          calledFrom: ["popup_svc.php (서비스처리 팝업)"],
          dbTables: ["CS접수", "CS처리", "CS처리부품"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" },
            { level: "medium", issue: "$rc_1/$rc_2/$cs_1/$cs_2 변수 undefined 사용 (수리구분/원인)" },
            { level: "low", issue: "MAX+1 채번 race condition" }
          ]
        },
        {
          name: "update",
          description: "기 처리건 수정",
          params: [
            { name: "num", type: "string", required: true, desc: "처리번호" },
            { name: "serial_no,price_gongim,ps_memo,pay_gbn,pay1,pay2,memo,vat,sobi_price", type: "-", required: false, desc: "" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS처리", condition: "처리번호=num" },
            { type: "INSERT", table: "CS처리부품", condition: "품번별 추가 (기존 삭제 X → 누적)" }
          ],
          businessLogic: [
            "1. CS처리 필드 UPDATE (수리/원인/공임/청구/징구 등)",
            "2. 자재 루프 - 기존 삭제 없이 INSERT 만 (중복 위험)",
            "3. delaymemo 변수 undefined"
          ],
          output: { success: "alert + opener.search_next() + self.close()", fail: "alert + self.close()" },
          calledFrom: ["popup_svc.php"],
          dbTables: ["CS처리", "CS처리부품"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" },
            { level: "medium", issue: "자재부품 누적 INSERT - 중복 위험" },
            { level: "low", issue: "$delaymemo 변수 undefined" }
          ]
        },
        {
          name: "else",
          description: "잘못된 mode 접근 차단",
          params: [],
          sqlOps: [],
          businessLogic: ["alert + self.close"],
          output: { success: "-", fail: "alert" },
          calledFrom: [],
          dbTables: [],
          securityIssues: []
        }
      ],
      specialFeatures: ["자재 처리부품 다건 저장", "처리번호 수동 채번", "취소 시 serial '취소' 하드코딩"]
    },
    {
      filename: "popup_return_proc.php",
      category: "팝업 처리",
      purpose: "자재관리 > 자재반납신청확인 > 반납시리얼 확정 완료",
      totalLines: 71,
      httpMethod: "POST",
      modes: [
        {
          name: "(분기없음)",
          description: "반납시리얼 등록 + 반납상태 자동 판정",
          params: [
            { name: "idx", type: "string", required: true, desc: "신청번호" },
            { name: "sid", type: "string", required: true, desc: "신청일련번호" },
            { name: "mid", type: "string", required: false, desc: "품번" },
            { name: "cnt", type: "int", required: true, desc: "수량 (루프 횟수)" },
            { name: "idx_N", type: "string", required: true, desc: "CS시리얼 관리번호" },
            { name: "serial_N", type: "string", required: false, desc: "반납시리얼" },
            { name: "serial_ok_N", type: "string", required: false, desc: "반납확정여부 (빈값이면 갱신 대상)" },
            { name: "serial_type_N", type: "string", required: false, desc: "반납등급" },
            { name: "r_succes_N", type: "string", required: false, desc: "반납확정=2" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS시리얼", condition: "관리번호별 반납시리얼/사원/일/등급/확정=1" },
            { type: "SELECT", table: "CS시리얼", condition: "출고시리얼 있는 건 count" },
            { type: "SELECT", table: "CS시리얼", condition: "반납시리얼+확정 건 count" },
            { type: "UPDATE", table: "CS자재신청품목", condition: "반납상태=1/2 + 반납량/잔량 갱신" }
          ],
          businessLogic: [
            "1. 루프: serial 있고 serial_ok 없으면 CS시리얼 UPDATE (반납시리얼/사원/일/등급, 확정=1)",
            "2. 출고수량(s_cnt3) 과 반납수량(s_cnt1) 비교",
            "3. 같음 또는 부분반품 → 반납상태='2', 반납일=sysdate",
            "4. 미반납(s_cnt1=0) → 반납상태='1'",
            "5. CS자재신청품목 반납량/잔량 동기화"
          ],
          output: { success: "alert + opener.go_next() + self.close()", fail: "alert (이미 반납신청됨) + self.close()" },
          calledFrom: ["popup_return.php"],
          dbTables: ["CS시리얼", "CS자재신청품목"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["출고/반납 수량 자동 상태 판정", "관리번호 단위 개별 UPDATE"]
    },
    {
      filename: "popup_scene_mode_proc.php",
      category: "팝업 처리",
      purpose: "관리 > 현장관리 > 현장(아파트) 입력/수정 + 품목 다건 편집",
      totalLines: 278,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "현장 신규 등록",
          params: [
            { name: "apt_name,scene_name,house_cnt", type: "string", required: true, desc: "아파트명/현장명/세대수" },
            { name: "grt_term1,grt_term2", type: "date", required: false, desc: "보증기간" },
            { name: "livein_turm1,livein_turm2", type: "date", required: false, desc: "입주기간" },
            { name: "zip,addr1,addr2,memo", type: "-", required: false, desc: "주소/비고" },
            { name: "inst_name,inst_grade,inst_phone", type: "string", required: false, desc: "설치담당" },
            { name: "scn_name,scn_grade,scn_phone", type: "string", required: false, desc: "현장담당" },
            { name: "house_goods,qtt,appver,hwver,gateway,swver", type: "-", required: false, desc: "기기/버전" },
            { name: "tkPN,tkTime,tkname", type: "-", required: false, desc: "TK 상태/입력일/점검자 (tkPN=N이면 tktime=null)" },
            { name: "issue_memo,centerCode,tdb_YN", type: "-", required: false, desc: "이슈/담당지점/뇌전유무" },
            { name: "val1,model_name,val3,val4,val5,model_no,val7", type: "-", required: false, desc: "첫 품목(설치항목/모델명/수량/제조사/연락처/품번/뇌전일)" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS현장_현장번호_SEQ", condition: "NEXTVAL 채번" },
            { type: "INSERT", table: "CS현장", condition: "항상" },
            { type: "INSERT", table: "CS현장품목", condition: "val1 있을 때 1건" }
          ],
          businessLogic: [
            "1. 6자리 날짜면 '20' prefix, 빈값 처리",
            "2. tkPN='N' 이면 tktime=null",
            "3. 시퀀스 NEXTVAL로 아파트코드 확보",
            "4. CS현장 INSERT (전체 필드)",
            "5. val1 입력돼 있으면 CS현장품목 INSERT (첫 품목)",
            "6. insert 후 save_mode='update' 로 전환 (연속 편집용)"
          ],
          output: { success: "alert + submit('popup_scene_mode.php')", fail: "submit('popup_scene_list.php')" },
          calledFrom: ["popup_scene_mode.php"],
          dbTables: ["CS현장", "CS현장품목"],
          securityIssues: [
            { level: "high", issue: "SQL Injection - $_POST[idx] 직접 사용" }
          ]
        },
        {
          name: "update",
          description: "현장 수정 + 품목 일괄 수정/추가",
          params: [
            { name: "idx", type: "string", required: true, desc: "아파트코드" },
            { name: "seq[]", type: "array", required: false, desc: "품목 일련번호 배열" },
            { name: "cate[],model[],ea[],maker[],phone[],mno[],tdb_date[]", type: "array", required: false, desc: "품목 필드 배열" },
            { name: "val1~val7", type: "-", required: false, desc: "신규 추가 품목" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS현장", condition: "아파트코드=idx" },
            { type: "INSERT", table: "CS현장품목", condition: "val1 있으면 신규 추가" },
            { type: "UPDATE", table: "CS현장품목", condition: "seq[i] 루프 수정" }
          ],
          businessLogic: [
            "1. CS현장 전체 필드 UPDATE",
            "2. val1 있으면 CS현장품목 INSERT",
            "3. seq 배열 길이만큼 루프 돌며 품목 UPDATE (설치항목/뇌전일/품번/모델명/수량/제조사/연락처)"
          ],
          output: { success: "alert + submit('popup_scene_mode.php')", fail: "submit('popup_scene_mode.php')" },
          calledFrom: ["popup_scene_mode.php"],
          dbTables: ["CS현장", "CS현장품목"],
          securityIssues: [
            { level: "high", issue: "SQL Injection - 배열 인덱스 직접 결합" }
          ]
        }
      ],
      specialFeatures: ["insert 후 update 모드로 자동 전환", "TK 상태 연계 tkTime null 처리", "품목 대량 편집"]
    },
    {
      filename: "popup_receipt_year_proc.php",
      category: "팝업 처리",
      purpose: "접수 팝업 > 연차접수 수정 전용 (처리완료건 차단)",
      totalLines: 90,
      httpMethod: "POST",
      modes: [
        {
          name: "update",
          description: "연차접수 수정",
          params: [
            { name: "rct_no", type: "string", required: true, desc: "접수번호" },
            { name: "rct_date", type: "date", required: true, desc: "접수일" },
            { name: "custNUM,mb_name,mbr", type: "-", required: false, desc: "고객" },
            { name: "phone1/2/3,mobile1/2/3", type: "-", required: false, desc: "전화" },
            { name: "zip,addr1,addr2,apt_no,apt_dong,apt_ho", type: "-", required: false, desc: "주소 (동/호 포함)" },
            { name: "model_no,err_1,err_2,callprice,memo,smemo", type: "-", required: false, desc: "수리" },
            { name: "agency_no,agent_no,gap_gbn,charge_agency", type: "-", required: false, desc: "담당" },
            { name: "rct_year,rct_basedate,rct_gongjong,rct_tagj_yn", type: "-", required: false, desc: "연차/기준일/공종/타공종유무" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS접수", condition: "처리완료='Y' 면 차단" },
            { type: "SELECT", table: "AS지점", condition: "지점명으로 코드 조회" },
            { type: "UPDATE", table: "CS접수", condition: "접수번호 기준 (접수구분='Y' 강제)" }
          ],
          businessLogic: [
            "1. 처리완료='Y' 체크 - alert + self.close로 차단",
            "2. 지점명→지점코드 조회",
            "3. 전화 3분할 병합",
            "4. CS접수 UPDATE - 접수구분='Y'(연차) 강제, 동/호 필드 포함"
          ],
          output: { success: "alert + opener.location='receipt_consult_list.php' + self.close()", fail: "alert + self.close()" },
          calledFrom: ["popup_receipt_year.php"],
          dbTables: ["CS접수", "AS지점"],
          securityIssues: [{ level: "high", issue: "SQL Injection" }]
        }
      ],
      specialFeatures: ["처리완료건 수정 차단", "연차 전용(접수구분='Y' 강제)"]
    },
    {
      filename: "popup_serial_proc.php",
      category: "팝업 처리",
      purpose: "자재신청현황 > 시리얼등록 완료 (출고시리얼 입력)",
      totalLines: 113,
      httpMethod: "POST",
      modes: [
        {
          name: "(분기없음)",
          description: "출고시리얼 등록 + 진행상황/반납상태 자동 판정",
          params: [
            { name: "idx", type: "string", required: true, desc: "신청번호" },
            { name: "sid", type: "string", required: true, desc: "신청일련번호" },
            { name: "mid", type: "string", required: false, desc: "품번" },
            { name: "cnt", type: "int", required: true, desc: "수량 (루프 횟수)" },
            { name: "idx_N", type: "string", required: false, desc: "기존 CS시리얼 출고번호" },
            { name: "serial_N", type: "string", required: true, desc: "출고시리얼" },
            { name: "serial_type_N", type: "string", required: true, desc: "출고등급" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS시리얼", condition: "기 등록 수량 체크" },
            { type: "SELECT", table: "CS시리얼", condition: "MAX(출고번호)+1" },
            { type: "INSERT", table: "CS시리얼", condition: "idx_N 빈값 + 시리얼+등급 있을 때" },
            { type: "UPDATE", table: "CS시리얼", condition: "idx_N 있을 때 시리얼만 수정" },
            { type: "SELECT", table: "CS자재신청품목", condition: "반납량 조회" },
            { type: "SELECT", table: "CS시리얼", condition: "출고/반납 count" },
            { type: "UPDATE", table: "CS자재신청품목", condition: "진행상황(3/5/4) + 반납상태(4/2/1) 자동 판정" }
          ],
          businessLogic: [
            "1. 이미 출고건 있으면 차단 (alert + self.close)",
            "2. 반납예정일 = sysdate + 1개월",
            "3. 루프: idx_N 없고 시리얼+등급 있으면 INSERT (MAX+1 채번, 출고창고=11323 하드코딩)",
            "4. idx_N 있으면 시리얼 UPDATE 만",
            "5. 출고수량 vs 신청수량 비교 → 진행상황=3(완료)/5(부분)/4(미출고)",
            "6. 반납수량 vs 출고수량 비교 → 반납상태=4(완료)/2(중)/1(미반납)"
          ],
          output: { success: "alert + opener.go_next(idx) + self.close()", fail: "alert + self.close()" },
          calledFrom: ["popup_serial.php"],
          dbTables: ["CS시리얼", "CS자재신청품목"],
          securityIssues: [
            { level: "high", issue: "SQL Injection" },
            { level: "medium", issue: "if($cnt = $s_cnt_query) 대입 연산자 사용 (== 오타 추정 - 로직 버그)" },
            { level: "low", issue: "MAX+1 채번 race condition" }
          ]
        }
      ],
      specialFeatures: ["출고/반납 상태 자동 계산 로직", "반납예정일 자동 계산(+1개월)", "대입연산자(=) 오타 추정 버그 존재"]
    },
    /* ============================================
     * 연차처리 (추가: resolve_year_proc.php)
     * ============================================ */
    {
      filename: "resolve_year_proc.php",
      category: "접수 처리",
      purpose: "연차처리(연차 AS/현장점검) 등록/수정/삭제",
      totalLines: 240,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "연차처리 신규 등록",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "ch_date", type: "date", required: true, desc: "처리일" },
            { name: "suri_1", type: "string", required: true, desc: "수리분류(대)" },
            { name: "suri_2", type: "string", required: true, desc: "수리상세(소)" },
            { name: "resion_1", type: "string", required: true, desc: "원인분류(대)" },
            { name: "resion_2", type: "string", required: true, desc: "원인상세(소)" },
            { name: "agency_no", type: "string", required: true, desc: "담당지점" },
            { name: "ps_agent", type: "string", required: true, desc: "처리기사" },
            { name: "charge_memo", type: "text", required: false, desc: "처리내용" },
            { name: "filenm", type: "file", required: false, desc: "서명파일" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS연차처리", condition: "항상" },
            { type: "UPDATE", table: "CS접수", condition: "처리완료=Y" }
          ],
          businessLogic: [
            "1. 처리일 포맷 정규화(6자리 YYMMDD → YYYY-MM-DD)",
            "2. CS연차처리 테이블 INSERT",
            "3. CS접수 처리완료='Y' UPDATE",
            "4. 서명파일 업로드 처리",
            "5. 성공시 resolve_year_list.php로 redirect"
          ],
          output: { success: "location.href='resolve_year_list.php'", fail: "alert + history.back()" },
          calledFrom: ["resolve_year_mode.php", "resolve_year_mode1.php"],
          dbTables: ["CS연차처리", "CS접수"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection - $_REQUEST 쿼리 직접 삽입" },
            { level: "high", issue: "파일 업로드 확장자/MIME 검증 없음" },
            { level: "medium", issue: "트랜잭션 없이 다중 DML 실행" }
          ]
        },
        {
          name: "update",
          description: "연차처리 수정",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "idx2", type: "string", required: true, desc: "처리번호" }
          ],
          sqlOps: [{ type: "UPDATE", table: "CS연차처리", condition: "WHERE 접수번호 AND 처리번호" }],
          businessLogic: ["1. 처리번호 기반 조회", "2. 수정 필드 UPDATE", "3. 첨부파일 교체"],
          output: { success: "location.href redirect", fail: "alert" },
          calledFrom: ["resolve_year_mode.php"],
          dbTables: ["CS연차처리"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "권한 체크 부재" }
          ]
        },
        {
          name: "delete",
          description: "연차처리 삭제",
          params: [
            { name: "idx", type: "string", required: true, desc: "접수번호" },
            { name: "idx2", type: "string", required: true, desc: "처리번호" },
            { name: "del_reason", type: "text", required: true, desc: "삭제사유" }
          ],
          sqlOps: [
            { type: "DELETE", table: "CS연차처리", condition: "WHERE 접수번호 AND 처리번호" },
            { type: "UPDATE", table: "CS접수", condition: "처리완료=N 복원" }
          ],
          businessLogic: ["1. 삭제사유 필수 검증", "2. CS연차처리 DELETE", "3. CS접수 상태 복원"],
          output: { success: "location.href redirect", fail: "alert" },
          calledFrom: ["resolve_year_list.php"],
          dbTables: ["CS연차처리", "CS접수"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "CSRF 방어 없음 ($_REQUEST 사용)" }
          ]
        }
      ],
      specialFeatures: [
        "연차 AS 전용 처리 (일반 서비스처리와 분리)",
        "서명파일 업로드 지원",
        "처리일 자동 포맷 정규화 (6자리 → 8자리)"
      ]
    }
  ]
};

// 카테고리별 그룹화 helper
window.BUSINESS_SPECS.byCategory = function() {
  const grouped = {};
  this.files.forEach(f => {
    if (!grouped[f.category]) grouped[f.category] = [];
    grouped[f.category].push(f);
  });
  return grouped;
};
