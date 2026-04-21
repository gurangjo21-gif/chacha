// KOCOM CS 나머지 백엔드 파일 명세 (29개)
// 관리자 처리(5) + 게시판 처리(6) + 팝업 처리(8) + 유틸리티(10)
window.OTHERS_SPECS = {
  files: [
    // ============ 관리자 처리 (5) ============
    {
      filename: "admin_user_proc.php",
      category: "관리자 처리",
      purpose: "CS 사원 CRUD (등록/수정) + Xline agent 연동",
      totalLines: 159,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "신규 사원 등록 (CS사원 + CS로그인 + Xline agent)",
          params: [
            { name: "uNUM_tmp", type: "string", required: true, desc: "사원번호" },
            { name: "uPASS", type: "string", required: true, desc: "비밀번호" },
            { name: "uNAME", type: "string", required: true, desc: "사원명" },
            { name: "uPOS", type: "string", required: false, desc: "직급" },
            { name: "uTEL1", type: "string", required: false, desc: "전화번호1" },
            { name: "uTEL2", type: "string", required: false, desc: "전화번호2" },
            { name: "uPERMISSION", type: "string", required: true, desc: "권한(2=상담원)" },
            { name: "callID", type: "string", required: false, desc: "콜아이디" },
            { name: "ctNAME", type: "string", required: false, desc: "지점코드" },
            { name: "INDate", type: "date", required: false, desc: "적용일" },
            { name: "OUTDate", type: "date", required: false, desc: "종료일" },
            { name: "uYN", type: "string", required: true, desc: "현재사원여부" },
            { name: "menu_array", type: "string", required: false, desc: "메뉴권한" }
          ],
          sqlOps: [
            { type: "INSERT", table: "Xline5.xline_agent_list", condition: "권한=2일 때만 (MySQL)" },
            { type: "INSERT", table: "CS사원", condition: "항상 (Oracle)" },
            { type: "SELECT", table: "CS로그인", condition: "MAX(NUM)+1 취득" },
            { type: "INSERT", table: "CS로그인", condition: "항상" }
          ],
          businessLogic: [
            "1. 권한=2이면 MySQL Xline agent 등록",
            "2. CS사원 테이블 INSERT (직급/부서/연락처/권한/지점/기간)",
            "3. CS로그인 시퀀스 생성 후 INSERT",
            "4. 성공시 admin_user_list 이동, 실패시 mode 복귀"
          ],
          output: { success: "alert + form submit to admin_user_list.php", fail: "alert + mode.php" },
          calledFrom: ["admin_user_mode.php"],
          dbTables: ["CS사원", "CS로그인", "Xline5.xline_agent_list"],
          securityIssues: [
            { level: "critical", issue: "비밀번호 평문 저장 (해시 없음)" },
            { level: "critical", issue: "SQL Injection - 모든 파라미터 문자열 연결" },
            { level: "high", issue: "관리자 권한 체크 부재 (세션 검증 없음)" }
          ]
        },
        {
          name: "update",
          description: "사원 정보 수정",
          params: [
            { name: "uNUM_tmp", type: "string", required: true, desc: "사원번호" },
            { name: "uPASS1", type: "string", required: false, desc: "기존 비밀번호 (uPASS 없을 때)" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "Xline5.xline_agent_list", condition: "권한=2 시 del_yn 토글" },
            { type: "UPDATE", table: "CS사원", condition: "WHERE 사원번호" }
          ],
          businessLogic: [
            "1. 비밀번호 없으면 기존값 유지 (uPASS1)",
            "2. 권한=2 && uYN=N이면 Xline agent del_yn=Y",
            "3. CS사원 UPDATE"
          ],
          output: { success: "admin_user_list.php", fail: "admin_user_mode.php" },
          calledFrom: ["admin_user_mode.php"],
          dbTables: ["CS사원", "Xline5.xline_agent_list"],
          securityIssues: [
            { level: "critical", issue: "비밀번호 평문 저장" },
            { level: "critical", issue: "SQL Injection" }
          ]
        }
      ]
    },
    {
      filename: "admin_member_proc.php",
      category: "관리자 처리",
      purpose: "고객정보 등록/수정",
      totalLines: 115,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "신규 고객 등록",
          params: [
            { name: "cNAME", type: "string", required: true, desc: "고객명" },
            { name: "cTEL1/2/3", type: "string", required: false, desc: "집전화(3분할)" },
            { name: "cCELL1/2/3", type: "string", required: false, desc: "휴대폰(3분할)" },
            { name: "zip", type: "string", required: false, desc: "우편번호" },
            { name: "addr1", type: "string", required: false, desc: "주소" },
            { name: "addr2", type: "string", required: false, desc: "상세주소" },
            { name: "cAPT", type: "string", required: false, desc: "아파트코드" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS고객정보", condition: "SEQ.NEXTVAL 사용" }
          ],
          businessLogic: [
            "1. 전화/휴대폰 3분할 합치기",
            "2. CS고객정보_고객번호_SEQ.NEXTVAL로 INSERT",
            "3. 등록자=세션 user_id"
          ],
          output: { success: "admin_member_list.php", fail: "admin_member_mode.php" },
          calledFrom: ["admin_member_mode.php"],
          dbTables: ["CS고객정보"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "입력값 검증 없음" }
          ]
        },
        {
          name: "update",
          description: "고객정보 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "고객번호" }],
          sqlOps: [{ type: "UPDATE", table: "CS고객정보", condition: "WHERE 고객번호" }],
          businessLogic: ["1. UPDATE 후 list로 복귀"],
          output: { success: "admin_member_list.php", fail: "admin_member_mode.php" },
          calledFrom: ["admin_member_mode.php"],
          dbTables: ["CS고객정보"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        }
      ]
    },
    {
      filename: "admin_centermanager_proc.php",
      category: "관리자 처리",
      purpose: "대리점(센터) 등록/수정 + 약도 이미지 업로드",
      totalLines: 123,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "대리점 신규 등록",
          params: [
            { name: "oOFFICE", type: "string", required: true, desc: "대리점명" },
            { name: "oCELL", type: "string", required: false, desc: "핸드폰" },
            { name: "oTEL", type: "string", required: false, desc: "전화번호" },
            { name: "zip/addr1/addr2", type: "string", required: false, desc: "주소" },
            { name: "oNAME", type: "string", required: false, desc: "담당자명" },
            { name: "oFLAG", type: "string", required: false, desc: "형태" },
            { name: "upfile1", type: "file", required: false, desc: "약도 이미지" }
          ],
          sqlOps: [
            { type: "SELECT", table: "대리점", condition: "MAX(대리점코드)+1" },
            { type: "INSERT", table: "대리점", condition: "약도 경로 ./minimap/" }
          ],
          businessLogic: [
            "1. file_upfile.php include (upload_dir=../filedir/minimap/)",
            "2. 대리점코드 MAX+1 발번",
            "3. INSERT (약도='./minimap/'.$fNAME1)"
          ],
          output: { success: "admin_centermanager_list.php", fail: "mode.php" },
          calledFrom: ["admin_centermanager_mode.php"],
          dbTables: ["대리점"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "파일 업로드 확장자 검증 없음" },
            { level: "medium", issue: "파일 크기 10MB 제한만 있음" }
          ]
        },
        {
          name: "update",
          description: "대리점 수정 (약도는 업로드한 경우만 변경)",
          params: [{ name: "user_idx", type: "string", required: true, desc: "대리점코드" }],
          sqlOps: [{ type: "UPDATE", table: "대리점", condition: "WHERE 대리점코드" }],
          businessLogic: ["1. fNAME1 있으면 약도 필드도 UPDATE", "2. 조건부 SQL 동적 생성"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["admin_centermanager_mode.php"],
          dbTables: ["대리점"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "파일 업로드 검증 부재" }
          ]
        }
      ]
    },
    {
      filename: "admin_offmanager_proc.php",
      category: "관리자 처리",
      purpose: "본사/지사 담당자 CRUD",
      totalLines: 115,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "담당자 등록",
          params: [
            { name: "oQUATER", type: "string", required: true, desc: "업무부서" },
            { name: "oNAME", type: "string", required: true, desc: "담당자" },
            { name: "oPOS", type: "string", required: false, desc: "직급" },
            { name: "oPART", type: "string", required: false, desc: "담당업무" },
            { name: "oTEL1-4", type: "string", required: false, desc: "전화/내선" },
            { name: "oCELL1-3", type: "string", required: false, desc: "휴대폰" }
          ],
          sqlOps: [
            { type: "INSERT", table: "CS담당자", condition: "SEQ.NEXTVAL" }
          ],
          businessLogic: [
            "1. oPART htmlspecialchars 처리",
            "2. CS담당자_일련번호_SEQ.NEXTVAL로 INSERT",
            "3. 전화/휴대폰 '-' 결합"
          ],
          output: { success: "admin_offmanager_list.php", fail: "mode.php" },
          calledFrom: ["admin_offmanager_mode.php"],
          dbTables: ["CS담당자"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection (htmlspecialchars만 있음)" }
          ]
        },
        {
          name: "update",
          description: "담당자 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "일련번호" }],
          sqlOps: [{ type: "UPDATE", table: "CS담당자", condition: "WHERE 일련번호" }],
          businessLogic: ["1. UPDATE"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["admin_offmanager_mode.php"],
          dbTables: ["CS담당자"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        }
      ]
    },
    {
      filename: "admin_scene_proc.php",
      category: "관리자 처리",
      purpose: "현장(아파트) CRUD + 현장품목 관리 (복합 트랜잭션)",
      totalLines: 298,
      httpMethod: "POST",
      modes: [
        {
          name: "insert",
          description: "현장 신규 등록 + 품목 1건 동시 등록",
          params: [
            { name: "apt_name", type: "string", required: true, desc: "아파트명" },
            { name: "scene_name", type: "string", required: true, desc: "현장명" },
            { name: "house_cnt", type: "number", required: false, desc: "세대수" },
            { name: "grt_term1/2", type: "date", required: false, desc: "보증기간(YYMMDD 지원)" },
            { name: "livein_turm1/2", type: "date", required: false, desc: "입주기간" },
            { name: "inst_name/grade/phone", type: "string", required: false, desc: "설치담당" },
            { name: "scn_name/grade/phone", type: "string", required: false, desc: "현장담당" },
            { name: "appver/hwver/gateway/swver", type: "string", required: false, desc: "버전정보" },
            { name: "tkPN", type: "string", required: false, desc: "TK상태" },
            { name: "tkTime", type: "date", required: false, desc: "TK입력일" },
            { name: "centerCode", type: "string", required: false, desc: "담당지점" },
            { name: "tdb_YN", type: "string", required: false, desc: "뇌전유무" },
            { name: "val1-7", type: "string", required: false, desc: "품목 1건 (설치항목/모델/수량/제조사/연락처/품번/뇌전일)" }
          ],
          sqlOps: [
            { type: "SELECT", table: "CS현장_현장번호_SEQ", condition: "nextval" },
            { type: "INSERT", table: "CS현장", condition: "30개 컬럼" },
            { type: "INSERT", table: "CS현장품목", condition: "val1 존재 시" }
          ],
          businessLogic: [
            "1. 날짜 6자리는 '20' prefix (YYMMDD→YYYYMMDD)",
            "2. tkPN=N이면 tktime=null",
            "3. CS현장_현장번호_SEQ.nextval로 idx 확보",
            "4. CS현장 INSERT",
            "5. val1 있으면 CS현장품목 INSERT (currval 연동)"
          ],
          output: { success: "admin_scene_mode.php", fail: "admin_scene_list.php" },
          calledFrom: ["admin_scene_mode.php", "admin_scene_mode1.php"],
          dbTables: ["CS현장", "CS현장품목"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "날짜 형식 검증 미흡" }
          ]
        },
        {
          name: "update",
          description: "현장 수정 + 품목 일괄 UPDATE (배열)",
          params: [
            { name: "idx", type: "string", required: true, desc: "아파트코드" },
            { name: "seq[]/cate[]/model[]/ea[]/maker[]/phone[]/mno[]/tdb_date[]", type: "array", required: false, desc: "기존 품목 배열" }
          ],
          sqlOps: [
            { type: "UPDATE", table: "CS현장", condition: "WHERE 아파트코드" },
            { type: "INSERT", table: "CS현장품목", condition: "val1 있을 때 신규 추가" },
            { type: "UPDATE", table: "CS현장품목", condition: "배열 길이만큼 반복 (WHERE 일련번호)" }
          ],
          businessLogic: [
            "1. CS현장 UPDATE (30개 필드)",
            "2. val1 있으면 신규 품목 INSERT",
            "3. for 루프로 기존 품목들 일괄 UPDATE (품번/뇌전일/모델/수량/제조사/연락처)"
          ],
          output: { success: "admin_scene_mode.php (p_mode=g 분기)", fail: "mode.php" },
          calledFrom: ["admin_scene_mode.php"],
          dbTables: ["CS현장", "CS현장품목"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "배열 반복 INSERT/UPDATE 시 트랜잭션 없음 (부분 실패 가능)" }
          ]
        }
      ]
    },

    // ============ 게시판 처리 (6) ============
    {
      filename: "forum_notice_proc.php",
      category: "게시판 처리",
      purpose: "공지게시판 등록/수정 (파일 2개)",
      totalLines: 110,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "공지 등록",
          params: [
            { name: "qtitle", type: "string", required: true, desc: "제목" },
            { name: "content", type: "string", required: true, desc: "내용" },
            { name: "upfile1/2", type: "file", required: false, desc: "첨부파일" }
          ],
          sqlOps: [
            { type: "SELECT", table: "공지게시판", condition: "MAX(글번호)+1" },
            { type: "INSERT", table: "공지게시판", condition: "항상" }
          ],
          businessLogic: [
            "1. file_upfile.php include (../filedir/notice/)",
            "2. 글번호 MAX+1 채번",
            "3. htmlspecialchars(title, content)",
            "4. INSERT (작성자=세션 user_id)"
          ],
          output: { success: "forum_notice_list.php", fail: "forum_notice_mode.php" },
          calledFrom: ["forum_notice_mode.php"],
          dbTables: ["공지게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "파일 업로드 확장자 검증 없음" }
          ]
        },
        {
          name: "update",
          description: "공지 수정 (파일은 업로드한 경우만 변경)",
          params: [{ name: "user_idx", type: "string", required: true, desc: "글번호" }],
          sqlOps: [{ type: "UPDATE", table: "공지게시판", condition: "WHERE 글번호" }],
          businessLogic: ["1. fNAMEi 있으면 해당 컬럼만 동적 SQL 생성"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_notice_mode.php"],
          dbTables: ["공지게시판"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        }
      ]
    },
    {
      filename: "forum_free_proc.php",
      category: "게시판 처리",
      purpose: "자유게시판 CRUD + 답글 (파일 5개)",
      totalLines: 215,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "자유게시판 신규 글 등록",
          params: [
            { name: "qtitle/content", type: "string", required: true, desc: "제목/내용" },
            { name: "is_html", type: "string", required: false, desc: "HTML 허용" },
            { name: "is_secret", type: "string", required: false, desc: "비밀글" },
            { name: "upfile1-5", type: "file", required: false, desc: "첨부 5개" }
          ],
          sqlOps: [
            { type: "SELECT", table: "자유게시판", condition: "MAX(글번호)+1" },
            { type: "INSERT", table: "자유게시판", condition: "참조글번호=자기자신" }
          ],
          businessLogic: [
            "1. 글번호 MAX+1",
            "2. 작성자IP = REMOTE_ADDR",
            "3. 참조글번호=글번호 (원글)"
          ],
          output: { success: "forum_free_list.php", fail: "mode.php" },
          calledFrom: ["forum_free_mode.php"],
          dbTables: ["자유게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "is_html=Y 허용 시 XSS 위험" }
          ]
        },
        {
          name: "update",
          description: "자유게시판 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "글번호" }],
          sqlOps: [{ type: "UPDATE", table: "자유게시판", condition: "WHERE 글번호" }],
          businessLogic: ["1. 파일 조건부 UPDATE"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_free_mode.php"],
          dbTables: ["자유게시판"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        },
        {
          name: "reply",
          description: "답글 등록 (단계 트리 구조)",
          params: [{ name: "user_idx", type: "string", required: true, desc: "원글 글번호" }],
          sqlOps: [
            { type: "SELECT", table: "자유게시판", condition: "참조글번호/단계 조회" },
            { type: "SELECT", table: "자유게시판", condition: "같은 단계 내 최대값" },
            { type: "INSERT", table: "자유게시판", condition: "참조글번호+단계 계산" }
          ],
          businessLogic: [
            "1. 원글의 참조글번호/단계 취득",
            "2. 원글이 원글이면 A,B,C… 단계 chr 증가",
            "3. 원글이 응답글이면 기존단계+A,B,C…",
            "4. INSERT (단계 트리 유지)"
          ],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_free_mode.php (답글)"],
          dbTables: ["자유게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "단계 계산 로직 오탈자 ($or vs $orDB)" }
          ]
        }
      ]
    },
    {
      filename: "forum_qna_proc.php",
      category: "게시판 처리",
      purpose: "Q&A 게시판 CRUD + 답글 (파일 5개)",
      totalLines: 201,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "QA 문의 등록",
          params: [
            { name: "qtitle/content", type: "string", required: true, desc: "제목/내용" },
            { name: "is_secret", type: "string", required: false, desc: "비밀글" },
            { name: "upfile1-5", type: "file", required: false, desc: "첨부" }
          ],
          sqlOps: [
            { type: "SELECT", table: "QA게시판", condition: "MAX(글번호)+1" },
            { type: "INSERT", table: "QA게시판", condition: "항상" }
          ],
          businessLogic: ["1. file_upfile.php (../filedir/qna/)", "2. 글번호 채번 후 INSERT"],
          output: { success: "forum_qna_list.php", fail: "mode.php" },
          calledFrom: ["forum_qna_mode.php"],
          dbTables: ["QA게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "업로드 검증 부재" }
          ]
        },
        {
          name: "update",
          description: "QA 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "글번호" }],
          sqlOps: [{ type: "UPDATE", table: "QA게시판", condition: "WHERE 글번호" }],
          businessLogic: ["1. 파일 조건부 UPDATE"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_qna_mode.php"],
          dbTables: ["QA게시판"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        },
        {
          name: "reply",
          description: "답변 등록",
          params: [{ name: "user_idx", type: "string", required: true, desc: "원글 글번호" }],
          sqlOps: [
            { type: "SELECT", table: "QA게시판", condition: "참조글번호/단계" },
            { type: "INSERT", table: "QA게시판", condition: "단계 계산 후" }
          ],
          businessLogic: ["1. 단계 트리 계산 (chr A,B,C)", "2. 답글 INSERT"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_qna_mode.php"],
          dbTables: ["QA게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "$or 오탈자 (미정의 변수)" }
          ]
        }
      ]
    },
    {
      filename: "forum_pds_proc.php",
      category: "게시판 처리",
      purpose: "자료게시판 등록/수정 (파일 9개)",
      totalLines: 108,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "자료 등록",
          params: [
            { name: "qtitle/content", type: "string", required: true, desc: "제목/내용" },
            { name: "upfile1-9", type: "file", required: false, desc: "첨부 9개" }
          ],
          sqlOps: [
            { type: "SELECT", table: "자료게시판", condition: "MAX(글번호)+1" },
            { type: "INSERT", table: "자료게시판", condition: "항상" }
          ],
          businessLogic: ["1. file_upfile.php (../filedir/pds/)", "2. 파일 최대 9개 연결"],
          output: { success: "forum_pds_list.php", fail: "mode.php" },
          calledFrom: ["forum_pds_mode.php"],
          dbTables: ["자료게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "high", issue: "업로드 확장자 검증 없음" }
          ]
        },
        {
          name: "update",
          description: "자료 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "글번호" }],
          sqlOps: [{ type: "UPDATE", table: "자료게시판", condition: "WHERE 글번호" }],
          businessLogic: ["1. 9개 파일 조건부 UPDATE"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_pds_mode.php"],
          dbTables: ["자료게시판"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        }
      ]
    },
    {
      filename: "forum_memo_proc.php",
      category: "게시판 처리",
      purpose: "쪽지 발송/수정",
      totalLines: 105,
      httpMethod: "POST (multipart)",
      modes: [
        {
          name: "insert",
          description: "쪽지 발송",
          params: [
            { name: "qtitle", type: "string", required: true, desc: "제목" },
            { name: "content", type: "string", required: true, desc: "내용" },
            { name: "to", type: "string", required: true, desc: "수신인 사번" },
            { name: "upfile1", type: "file", required: false, desc: "첨부 1개" }
          ],
          sqlOps: [
            { type: "SELECT", table: "쪽지게시판", condition: "MAX(글번호)+1" },
            { type: "INSERT", table: "쪽지게시판", condition: "발신인DEL=N, 수신인DEL=N" }
          ],
          businessLogic: ["1. 발신인=세션, 수신인=to", "2. 발신/수신 DEL 플래그 N으로 초기화"],
          output: { success: "forum_memo_list.php", fail: "mode.php" },
          calledFrom: ["forum_memo_mode.php"],
          dbTables: ["쪽지게시판"],
          securityIssues: [
            { level: "critical", issue: "SQL Injection" },
            { level: "medium", issue: "수신인 존재 검증 없음" }
          ]
        },
        {
          name: "update",
          description: "쪽지 수정",
          params: [{ name: "user_idx", type: "string", required: true, desc: "글번호" }],
          sqlOps: [{ type: "UPDATE", table: "쪽지게시판", condition: "WHERE 글번호" }],
          businessLogic: ["1. 파일 조건부 UPDATE"],
          output: { success: "list.php", fail: "mode.php" },
          calledFrom: ["forum_memo_mode.php"],
          dbTables: ["쪽지게시판"],
          securityIssues: [{ level: "critical", issue: "SQL Injection" }]
        }
      ]
    },
    {
      filename: "forum_free_upfile.php",
      category: "게시판 처리",
      purpose: "자유게시판 전용 파일 업로드 처리 (5개)",
      totalLines: 224,
      httpMethod: "POST (multipart, include)",
      params: [
        { name: "upfile1-5", type: "file", required: false, desc: "업로드 파일 5개" },
        { name: "mapSIZE1-5", type: "number", required: false, desc: "파일 크기" }
      ],
      businessLogic: [
        "1. upload_dir = ../filedir/board/ 강제 지정",
        "2. 각 파일별 10MB 초과 체크 (alert+history.back)",
        "3. 크기 단위 변환 (KB/MB)",
        "4. 파일명에서 ';' 특수문자 제거",
        "5. fNAMEi = 원본[timestamp].확장자 형식 생성",
        "6. copy() 후 unlink() (tmp 제거)"
      ],
      output: { type: "variables", desc: "fNAME1-5, fSIZE1-5 변수 설정 (include용)" },
      calledFrom: ["forum_free_proc.php (include)"],
      dbTables: [],
      securityIssues: [
        { level: "critical", issue: "파일 확장자 검증 없음 (PHP/JSP 업로드 가능)" },
        { level: "high", issue: "MIME 타입 검증 없음" },
        { level: "high", issue: "원본 파일명 그대로 사용 (Path Traversal 가능성)" },
        { level: "medium", issue: "업로드 디렉토리 웹 접근 가능 시 코드 실행 위험" }
      ]
    },

    // ============ 팝업 처리 (8) ============
    {
      filename: "popup_serial_store_proc.php",
      category: "팝업 처리",
      purpose: "자재 반납 시리얼 등록 완료 처리",
      totalLines: 67,
      httpMethod: "POST",
      params: [
        { name: "idx", type: "string", required: true, desc: "신청번호" },
        { name: "sid", type: "string", required: true, desc: "일련번호" },
        { name: "cnt", type: "number", required: true, desc: "수량(반복)" },
        { name: "idx_N/serial_N/serial_type_N", type: "array", required: true, desc: "시리얼 배열" }
      ],
      businessLogic: [
        "1. cnt만큼 루프 - CS시리얼 UPDATE (반납시리얼/등급/사원/일)",
        "2. 출고/반품 카운트 조회 (버그: $Total_query 미정의)",
        "3. s_cnt1==s_cnt2 → 반납상태=4(완료), 부분=5, 처리중=3",
        "4. CS자재신청품목 UPDATE"
      ],
      output: { success: "opener.go_next() + self.close()", fail: "alert+close" },
      calledFrom: ["popup_serial_return.php"],
      dbTables: ["CS시리얼", "CS자재신청품목"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection" },
        { level: "high", issue: "변수 오탈자 ($Total_query, $scnt2) - 미완성 로직" }
      ],
      modes: []
    },
    {
      filename: "popup_serial_tdb_proc.php",
      category: "팝업 처리",
      purpose: "뇌전 자재 출고 등록 처리",
      totalLines: 60,
      httpMethod: "POST",
      params: [
        { name: "idx/sid/mid/cnt", type: "string", required: true, desc: "신청정보" },
        { name: "store_cnt", type: "number", required: true, desc: "출고량" },
        { name: "serial_type", type: "string", required: false, desc: "등급" }
      ],
      businessLogic: [
        "1. CS뇌전자재신청품목 UPDATE (등급/출고량/미출고량)",
        "2. cnt==store_cnt → 진행상황=3(완료), 부분출고=5, 미출고=4",
        "3. 차수(MAX+1) 업데이트"
      ],
      output: { success: "opener.go_next() + close", fail: "alert+close" },
      calledFrom: ["popup_serial_tdb.php"],
      dbTables: ["CS뇌전자재신청품목"],
      securityIssues: [{ level: "critical", issue: "SQL Injection" }],
      modes: []
    },
    {
      filename: "popup_serial_return_release_proc.php",
      category: "팝업 처리",
      purpose: "자재 반납 시리얼 확정 완료",
      totalLines: 72,
      httpMethod: "POST",
      params: [
        { name: "idx/sid/cnt", type: "string", required: true, desc: "신청정보" },
        { name: "idx_N/r_succes_N/serial_N", type: "array", required: true, desc: "확정 배열" }
      ],
      businessLogic: [
        "1. cnt 루프 - 반납시리얼 있으면 반납확정여부=2(확정)/1(미확정)",
        "2. CS시리얼 UPDATE (확정사원/확정일)",
        "3. 출고/반납확정 카운트로 반납상태 결정 (4/5/3)"
      ],
      output: { success: "opener.go_next() + close", fail: "alert+close" },
      calledFrom: ["popup_serial_return_confirm.php"],
      dbTables: ["CS시리얼", "CS자재신청품목"],
      securityIssues: [{ level: "critical", issue: "SQL Injection" }],
      modes: []
    },
    {
      filename: "popup_serial_return_release2_proc.php",
      category: "팝업 처리",
      purpose: "자재 반납 시리얼 2차 등록 (반납신청)",
      totalLines: 75,
      httpMethod: "POST",
      params: [
        { name: "idx/sid/cnt", type: "string", required: true, desc: "신청정보" },
        { name: "r_snumber_N/serial_type_N/r_succes_N", type: "array", required: true, desc: "반납 배열" }
      ],
      businessLogic: [
        "1. 반납시리얼 있는 건만 처리",
        "2. 반납확정(1/2)된 것은 스킵 (수정 방지)",
        "3. CS시리얼 UPDATE (반납시리얼/등급/사원/일)",
        "4. CS자재신청품목 반납상태=2 (반납신청중)"
      ],
      output: { success: "opener.go_next() + close", fail: "alert (close 주석)" },
      calledFrom: ["popup_serial_return2.php"],
      dbTables: ["CS시리얼", "CS자재신청품목"],
      securityIssues: [{ level: "critical", issue: "SQL Injection" }],
      modes: []
    },
    {
      filename: "popup_serial_tdb_return_proc.php",
      category: "팝업 처리",
      purpose: "뇌전 자재 반납 확정 처리",
      totalLines: 52,
      httpMethod: "POST",
      params: [
        { name: "idx/sid/cnt", type: "string", required: true, desc: "신청정보" },
        { name: "store_cnt", type: "number", required: true, desc: "확정수량" }
      ],
      businessLogic: [
        "1. CS뇌전자재신청품목 UPDATE (확정수량/미확정수량/확정사원/확정일)",
        "2. s_cnt==0 → 반납상태=4(완료), >0=5(부분), else=3"
      ],
      output: { success: "opener.go_next() + close", fail: "alert+close" },
      calledFrom: ["popup_serial_tdb_return.php"],
      dbTables: ["CS뇌전자재신청품목"],
      securityIssues: [{ level: "critical", issue: "SQL Injection" }],
      modes: []
    },
    {
      filename: "popup_serial_tdb_return_ins_proc.php",
      category: "팝업 처리",
      purpose: "뇌전 반납 신청 등록 (양품/불량 구분)",
      totalLines: 60,
      httpMethod: "POST",
      params: [
        { name: "idx/sid/cnt/cnt2", type: "string", required: true, desc: "신청/출고수량" },
        { name: "store_cnt1", type: "number", required: true, desc: "양품 수량" },
        { name: "store_cnt2", type: "number", required: true, desc: "불량 수량" }
      ],
      businessLogic: [
        "1. store_cnt3 = 양품+불량",
        "2. CS뇌전자재신청품목 UPDATE (반납량/양품/불량/미반납량)",
        "3. s_cnt=0 → 반납상태=4(완료), >0=5(부분)"
      ],
      output: { success: "opener.go_next() + close", fail: "alert+close" },
      calledFrom: ["popup_serial_tdb_return_ins.php"],
      dbTables: ["CS뇌전자재신청품목"],
      securityIssues: [{ level: "critical", issue: "SQL Injection" }],
      modes: []
    },
    {
      filename: "popup_tk_G_proc.php",
      category: "팝업 처리",
      purpose: "TK 점검 설정 등록 - 공용부분",
      totalLines: 47,
      httpMethod: "POST",
      params: [
        { name: "apt_no", type: "string", required: true, desc: "아파트코드" },
        { name: "dong", type: "string", required: true, desc: "동" },
        { name: "tkuser", type: "string", required: true, desc: "점검자" },
        { name: "add_gy", type: "string", required: true, desc: "공용부분" }
      ],
      businessLogic: [
        "1. CSTK설정/CSTK공용 MAX(접수번호)+1 채번",
        "2. CSTK설정 INSERT (공용접수번호 연동)",
        "3. CSTK공용 INSERT"
      ],
      output: { success: "alert + history.back()", fail: "alert + history.back()" },
      calledFrom: ["popup_tk_G.php"],
      dbTables: ["CSTK설정", "CSTK공용"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection" },
        { level: "medium", issue: "접수번호 동시성 문제 (MAX+1 레이스 컨디션)" }
      ],
      modes: []
    },
    {
      filename: "popup_tk_S_proc.php",
      category: "팝업 처리",
      purpose: "TK 점검 설정 등록 - 세대별 (라인/범위)",
      totalLines: 79,
      httpMethod: "POST",
      params: [
        { name: "apt_no/dong/tkuser", type: "string", required: true, desc: "기본정보" },
        { name: "line", type: "string", required: true, desc: "라인" },
        { name: "add_sd/add_sd_e", type: "number", required: true, desc: "호수 시작/끝" }
      ],
      businessLogic: [
        "1. line이 1자리면 '0' prefix",
        "2. 동일 아파트/동의 라인 중복 검사 (CSTK설정 SELECT)",
        "3. 중복 시 alert + history.back()",
        "4. add_sd ~ add_sd_e 범위 루프",
        "5. 각 호마다 CSTK설정/CSTK세대 INSERT (MAX+1 채번)"
      ],
      output: { success: "alert + history.back()", fail: "alert + history.back()" },
      calledFrom: ["popup_tk_S.php"],
      dbTables: ["CSTK설정", "CSTK세대"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection" },
        { level: "high", issue: "루프 내 MAX(접수번호)+1 - 동시 INSERT 시 중복 가능" },
        { level: "low", issue: "파일 끝 'ㅛ' 오타" }
      ],
      modes: []
    },

    // ============ 유틸리티 (10) ============
    {
      filename: "login_check.php",
      category: "유틸리티",
      purpose: "중복 로그인 감지 - 세션 로그인시간 불일치 시 강제 로그아웃",
      totalLines: 27,
      httpMethod: "N/A (include)",
      params: [],
      businessLogic: [
        "1. CS로그인 테이블에서 로그인시간 조회",
        "2. SESSION[lo_time] != DB값이면",
        "3. session_unset + session_destroy",
        "4. window.close + opener → login.html"
      ],
      output: { type: "script", desc: "JS alert/리다이렉트 또는 무동작" },
      calledFrom: ["각 페이지 상단 include (member_find.php, sms_send.php 등)"],
      dbTables: ["CS로그인"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection ($_SESSION 직접 연결)" },
        { level: "medium", issue: "세션 검증 로직 우회 가능 (session 미설정 시 빈 쿼리)" }
      ]
    },
    {
      filename: "member_find.php",
      category: "유틸리티",
      purpose: "고객 간략 조회 팝업 (이름/전화/주소 검색, 페이징)",
      totalLines: 253,
      httpMethod: "GET",
      params: [
        { name: "find", type: "string", required: false, desc: "검색유형(name/phone/addr/all)" },
        { name: "keyword", type: "string", required: false, desc: "검색어" },
        { name: "pageno", type: "number", required: false, desc: "페이지" }
      ],
      businessLogic: [
        "1. find에 따라 WHERE 절 분기",
        "2. CS고객정보 COUNT → 페이징 계산 (block=14)",
        "3. 페이지 데이터 SELECT (rownum 기반)",
        "4. CS현장 JOIN하여 아파트명/보증기간 취득",
        "5. 보증기간2 < today면 유상(Y)",
        "6. movedata() JS로 opener 폼 채움 (receipt_form)"
      ],
      output: { type: "html", desc: "팝업 HTML + 선택 시 부모창 값 전달" },
      calledFrom: ["receipt_mode.php 고객검색 버튼"],
      dbTables: ["CS고객정보", "CS현장"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection - keyword 직접 연결" },
        { level: "high", issue: "LIKE 검색 인덱스 비효율" }
      ]
    },
    {
      filename: "page_search.php",
      category: "유틸리티",
      purpose: "페이징 네비게이션 include (첫/이전/번호/다음/마지막)",
      totalLines: 40,
      httpMethod: "N/A (include)",
      params: [
        { name: "pageno/first_page/last_page/total_block", type: "number", required: true, desc: "페이징 변수" },
        { name: "p_mode", type: "string", required: false, desc: "paging1/paging CSS 분기" }
      ],
      businessLogic: [
        "1. QUERY_STRING에서 &pageno= 제거",
        "2. 첫/이전/번호 루프/다음/마지막 링크 생성",
        "3. 현재 페이지 'on' 클래스 적용"
      ],
      output: { type: "html", desc: "페이지네이션 HTML" },
      calledFrom: ["member_find.php 등 다수 list 페이지"],
      dbTables: [],
      securityIssues: [
        { level: "medium", issue: "QUERY_STRING XSS (이스케이프 없음)" }
      ]
    },
    {
      filename: "download.php",
      category: "유틸리티",
      purpose: "파일 다운로드 (매뉴얼/게시판/자료 공용)",
      totalLines: 94,
      httpMethod: "GET",
      params: [
        { name: "downMODE", type: "string", required: true, desc: "경로 모드(manual/board/pds 등)" },
        { name: "fname", type: "string", required: true, desc: "파일명(urlencoded)" },
        { name: "dir", type: "string", required: false, desc: "manual 하위 폴더" },
        { name: "comma", type: "number", required: false, desc: "확장자 분리 방식" }
      ],
      businessLogic: [
        "1. 세션 user_id 체크 (없으면 로그인 이동)",
        "2. downMODE=manual이면 ../manual/dir/, 아니면 ../filedir/mode/",
        "3. 파일명 [timestamp] 접두 제거",
        "4. User-Agent별 Content-Disposition (MSIE 5~6 대응)",
        "5. iconv UTF-8→CP949 파일명",
        "6. fpassthru로 바이너리 전송"
      ],
      output: { type: "binary", contentType: "file/unknown or application/x-msdownload" },
      calledFrom: ["forum_pds_list.php", "forum_notice_view.php", "receipt_menual_list.php"],
      dbTables: [],
      securityIssues: [
        { level: "critical", issue: "Path Traversal - fname/dir/downMODE 검증 없음 (../ 가능)" },
        { level: "high", issue: "임의 파일 다운로드 (권한 체크 로그인만 확인)" },
        { level: "medium", issue: "$HTTP_USER_AGENT 구식 변수 (PHP 5.4+ 미정의)" }
      ]
    },
    {
      filename: "excel.php",
      category: "유틸리티",
      purpose: "eworks 주문 엑셀 다운로드 샘플 (PHPExcel)",
      totalLines: 81,
      httpMethod: "GET",
      params: [],
      businessLogic: [
        "1. PHPExcel 로드",
        "2. eworks_order + product + branch JOIN (mysql_query)",
        "3. 주문일 2012-07-10 ~ 2012-08-01 고정 (하드코딩)",
        "4. A1부터 헤더, 이후 행별로 setData",
        "5. Excel2007 Writer로 출력"
      ],
      output: { type: "binary", contentType: "application/vnd.ms-excel" },
      calledFrom: ["(테스트/샘플, 실제 호출 없음)"],
      dbTables: ["eworks_order", "eworks_product", "eworks_branch"],
      securityIssues: [
        { level: "high", issue: "인증 체크 없음" },
        { level: "medium", issue: "하드코딩된 날짜" },
        { level: "low", issue: "$title 공백으로 파일명 생성" }
      ]
    },
    {
      filename: "file_upfile.php",
      category: "유틸리티",
      purpose: "범용 파일 업로드 처리 (최대 9개, include용)",
      totalLines: 408,
      httpMethod: "POST (multipart, include)",
      params: [
        { name: "upfile1-9", type: "file", required: false, desc: "업로드 파일" },
        { name: "mapSIZE1-9", type: "number", required: false, desc: "크기" },
        { name: "upload_dir", type: "string", required: true, desc: "외부에서 설정 (호출자)" }
      ],
      businessLogic: [
        "1. upfile1-9 각각 10MB 체크",
        "2. 파일명 ';' → '_' 치환",
        "3. fNAMEi = 원본[timestamp].확장자",
        "4. copy + unlink (tmp 제거)",
        "5. 실패 시 alert + history.back"
      ],
      output: { type: "variables", desc: "fNAME1-9, fSIZE1-9 전역 변수" },
      calledFrom: [
        "forum_notice_proc.php", "forum_qna_proc.php", "forum_pds_proc.php",
        "forum_memo_proc.php", "admin_centermanager_proc.php", "receipt_*_proc.php"
      ],
      dbTables: [],
      securityIssues: [
        { level: "critical", issue: "확장자 검증 없음 (PHP shell 업로드 가능)" },
        { level: "critical", issue: "MIME 타입 검증 없음" },
        { level: "high", issue: "원본 파일명 유지 (XSS/Path Traversal)" },
        { level: "medium", issue: "register_globals 의존 ($upfile1 변수)" }
      ]
    },
    {
      filename: "sms_send.php",
      category: "유틸리티",
      purpose: "SMS 발송 UI (휴대폰 모양 팝업)",
      totalLines: 253,
      httpMethod: "GET",
      params: [
        { name: "nIdx", type: "string", required: false, desc: "주문서 idx" },
        { name: "han_msg", type: "string", required: false, desc: "프리필 메시지" },
        { name: "han_callback", type: "string", required: false, desc: "발신번호 프리필" }
      ],
      businessLogic: [
        "1. login_check.php include",
        "2. 휴대폰 이미지 UI 렌더",
        "3. JS chk_byte() - 90byte 초과 시 lms 전환",
        "4. sms_send() - frm_handphone을 sms_send_proc로 submit",
        "5. iframe ifrm_trans로 결과 수신"
      ],
      output: { type: "html", desc: "SMS 작성 UI" },
      calledFrom: ["call_popup.php SMS 버튼", "각종 리스트의 SMS 발송"],
      dbTables: [],
      securityIssues: [
        { level: "medium", issue: "han_msg prefill XSS (입력 직접 출력)" },
        { level: "low", issue: "발신번호 검증 없음" }
      ]
    },
    {
      filename: "sms_send_proc.php",
      category: "유틸리티",
      purpose: "SMS/LMS 발송 처리 (STD_SMS 큐 등록)",
      totalLines: 83,
      httpMethod: "POST",
      params: [
        { name: "nIdx", type: "string", required: false, desc: "연관 주문서" },
        { name: "han_msg", type: "string", required: true, desc: "메시지" },
        { name: "receiver", type: "string", required: true, desc: "수신번호 (줄바꿈 구분)" },
        { name: "han_callback", type: "string", required: true, desc: "발신번호" }
      ],
      businessLogic: [
        "1. receiver를 \\n으로 split",
        "2. 메시지 길이 80byte 초과 시 LMS(MMS28/M), 미만 SMS(SMS28/A)",
        "3. cmp_msg_id = YYMMDD + NNNN (일별 시퀀스)",
        "4. 수신자 수만큼 STD_SMS INSERT",
        "5. 성공 건수 alert"
      ],
      output: { type: "script", desc: "alert + parent redirect" },
      calledFrom: ["sms_send.php (iframe)"],
      dbTables: ["STD_SMS"],
      securityIssues: [
        { level: "critical", issue: "SQL Injection (han_msg, receiver 직접 삽입)" },
        { level: "high", issue: "발신번호 스푸핑 - 발신번호 본인 인증 없음" },
        { level: "high", issue: "스팸/대량발송 제한 없음" }
      ]
    },
    {
      filename: "db_date.php",
      category: "유틸리티",
      purpose: "자재청구가 등록 프로시저 수동 실행 테스트",
      totalLines: 18,
      httpMethod: "GET",
      params: [],
      businessLogic: [
        "1. NLS_DATE_FORMAT = 'YYYY-MM-DD' 세션 설정",
        "2. P_CS자재청구가_등록 프로시저 호출 (2016-06-01~06-30 하드코딩)",
        "3. CS시리얼 신청일련번호 5900122 출고일 조회 및 출력"
      ],
      output: { type: "text", desc: "쿼리 + 결과 echo" },
      calledFrom: ["(관리자 수동 실행, 테스트용)"],
      dbTables: ["CS시리얼"],
      securityIssues: [
        { level: "critical", issue: "인증 없이 운영 프로시저 실행 가능" },
        { level: "high", issue: "하드코딩된 날짜와 사용자(admin)" }
      ]
    },
    {
      filename: "db_test.php",
      category: "유틸리티",
      purpose: "Oracle OCI 연결 테스트 및 프로시저 호출 샘플",
      totalLines: 35,
      httpMethod: "GET",
      params: [],
      businessLogic: [
        "1. ORA_ID=ksis, ORA_PW=ksis, 192.168.0.106:1521 하드코딩",
        "2. oci_connect → TEST_P 프로시저 호출",
        "3. 바인드: 접수번호=1605160001, 사원=admin, 정산일=2016-06-24, 회사=10000"
      ],
      output: { type: "text", desc: "성공/실패 echo" },
      calledFrom: ["(개발자 테스트)"],
      dbTables: [],
      securityIssues: [
        { level: "critical", issue: "DB 자격증명 하드코딩 (소스 노출)" },
        { level: "critical", issue: "인증 없이 프로시저 실행" },
        { level: "high", issue: "운영 서버 IP 노출" }
      ]
    },
    {
      filename: "pdf_sample.php",
      category: "유틸리티",
      purpose: "PDF 출력 샘플 (FPDF + 한글)",
      totalLines: 57,
      httpMethod: "GET",
      params: [],
      businessLogic: [
        "1. pdf_html.php include",
        "2. iconv UTF-8 → EUC-KR 변환 (헤더)",
        "3. BasicTable/ImprovedTable/FancyTable 3종 출력",
        "4. 샘플 데이터 (korea/test/123/444)"
      ],
      output: { type: "binary", contentType: "application/pdf (브라우저 출력)" },
      calledFrom: ["(개발자 테스트)"],
      dbTables: [],
      securityIssues: [
        { level: "medium", issue: "인증 없음" },
        { level: "low", issue: "dead code (주석된 구버전 블록 다수)" }
      ]
    }
  ]
};
