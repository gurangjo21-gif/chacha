// KOCOM CS 프로토타입 목업 데이터
// PHP 소스 분석 기반: svc_list.php, receipt.php, popup_svc.php, store_doing_list.php, admin_user_list.php
window.MOCK = {

  // ─────────────────────────────────────────────
  // 접수 처리 리스트 (15건)
  // 출처: svc_list.php 테이블 헤더 + receipt.php 폼 필드
  // ─────────────────────────────────────────────
  svcList: [
    {
      receiptNo:      '260415-0001',          // 접수번호 (CS접수.접수번호)
      receiptDate:    '2026-04-15 09:12',     // 접수일시 (CS접수.접수일)
      processNo:      '260415-P001',          // 처리번호 (CS처리.처리번호)
      receiptType:    'T',                    // 접수구분 T=전화 P=우편 F=팩스 L=LED S=상담 M=모바일 Y=연차
      approvalStatus: 'Y',                    // 승인상태 (CS접수.승인상태) Y=승인 N=미승인
      customerName:   '홍길동',               // 고객명 (CS접수.고객명)
      callerNo:       '02-1234-5678',         // 발신번호 (CS접수.발신번호)
      contact:        '02-1234-5678',         // 연락처 (CS접수.연락처)
      mobile:         '010-1234-5678',        // 휴대폰 (CS접수.휴대폰)
      address:        '서울시 강남구 테헤란로 123 xx아파트 101동 201호', // 고객주소
      aptName:        'xx아파트',             // 아파트명 (CS현장.아파트명)
      model:          'SHK-1000H',            // 품명 (AS품목.품명)
      sellType:       'HN',                   // 판매유형 (CS접수.판매유형) HN/특판/시판
      errorMain:      '동작불량',             // 증상분류 / 장애구분명 (CS장애구분)
      errorSub:       '전원불량',             // 세부증상 / 장애상세명
      processMain:    '수리',                 // 처리분류 / 수리구분명
      processSub:     '부품교체',             // 처리상세 / 수리상세명
      causeMain:      '부품불량',             // 원인분류 / 원인구분명
      causeSub:       'PCB 불량',             // 원인상세 / 원인상세명
      remark:         '초인종 누를 때만 발생', // 특이사항 (CS접수.특이사항)
      branch:         '강남지점',             // 담당지점명 (AS지점.지점명)
      engineer:       '이기사(u1001)',        // 담당사원명(사원번호) (CS사원)
      engineerTel:    '010-5555-1001',        // 기사연락처 (CS사원.전화번호1)
      section:        '1구간',                // 구간구분 (CS접수.구간구분) 1/2/3구간
      processDate:    '2026-04-16',           // 처리일
      processBranch:  '강남지점',             // 처리지점명
      processEngineer:'이기사',              // 처리사원명
      processContent: '현장방문 후 PCB 교체 완료', // 특별처리(처리내용)
      payType:        'N',                    // 요금적용 Y=유상 N=무상 I=유지보수 C=취소
      billAmount:     0,                      // 청구금액
      collectAmount:  0,                      // 징구금액
      signFile:       '',                     // 서명파일
      sineFile:       '',                     // 싸인파일
    },
    {
      receiptNo:      '260415-0002',
      receiptDate:    '2026-04-15 09:45',
      processNo:      '',
      receiptType:    'T',
      approvalStatus: 'N',
      customerName:   '김철수',
      callerNo:       '031-987-6543',
      contact:        '031-987-6543',
      mobile:         '010-9876-5432',
      address:        '경기도 성남시 분당구 판교로 567 판교아파트 203동 1502호',
      aptName:        '판교아파트',
      model:          'IDS-400L',
      sellType:       '특판',
      errorMain:      '음성불량',
      errorSub:       '잡음발생',
      processMain:    '',
      processSub:     '',
      causeMain:      '',
      causeSub:       '',
      remark:         '',
      branch:         '분당지점',
      engineer:       '박기사(u1002)',
      engineerTel:    '010-5555-1002',
      section:        '2구간',
      processDate:    '',
      processBranch:  '',
      processEngineer:'',
      processContent: '',
      payType:        '',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260415-0003',
      receiptDate:    '2026-04-15 10:05',
      processNo:      '260415-P002',
      receiptType:    'M',
      approvalStatus: 'Y',
      customerName:   '이영희',
      callerNo:       '051-222-3344',
      contact:        '051-222-3344',
      mobile:         '010-2222-3344',
      address:        '부산시 해운대구 센텀중앙로 89 마린아파트 5동 803호',
      aptName:        '마린아파트',
      model:          'SHK-2200',
      sellType:       'HN',
      errorMain:      '화상불량',
      errorSub:       '카메라 흐림',
      processMain:    '수리',
      processSub:     '렌즈 청소',
      causeMain:      '오염',
      causeSub:       '먼지 누적',
      remark:         '강성고객 주의요망',
      branch:         '부산지점',
      engineer:       '최기사(u1003)',
      engineerTel:    '010-5555-1003',
      section:        '3구간',
      processDate:    '2026-04-15',
      processBranch:  '부산지점',
      processEngineer:'최기사',
      processContent: '카메라 렌즈 청소 완료',
      payType:        'Y',
      billAmount:     55000,
      collectAmount:  55000,
      signFile:       'sign_260415_0003.pdf',
      sineFile:       '',
    },
    {
      receiptNo:      '260414-0012',
      receiptDate:    '2026-04-14 14:30',
      processNo:      '260414-P010',
      receiptType:    'S',
      approvalStatus: 'Y',
      customerName:   '박민준',
      callerNo:       '',
      contact:        '02-3344-5566',
      mobile:         '010-3344-5566',
      address:        '서울시 서초구 서초대로 200 서초아이파크 301동 401호',
      aptName:        '서초아이파크',
      model:          'KCV-D374',
      sellType:       '시판',
      errorMain:      '통화불량',
      errorSub:       '음성 끊김',
      processMain:    '교체',
      processSub:     '본체 교체',
      causeMain:      '노후화',
      causeSub:       '사용연한 초과',
      remark:         '',
      branch:         '서초지점',
      engineer:       '정기사(u1004)',
      engineerTel:    '010-5555-1004',
      section:        '1구간',
      processDate:    '2026-04-15',
      processBranch:  '서초지점',
      processEngineer:'정기사',
      processContent: '도어폰 본체 전면 교체 완료',
      payType:        'I',
      billAmount:     88000,
      collectAmount:  88000,
      signFile:       '',
      sineFile:       'sine_260414_0012.pdf',
    },
    {
      receiptNo:      '260414-0015',
      receiptDate:    '2026-04-14 16:10',
      processNo:      '',
      receiptType:    'T',
      approvalStatus: 'N',
      customerName:   '강수진',
      callerNo:       '032-111-2233',
      contact:        '032-111-2233',
      mobile:         '010-1111-2233',
      address:        '인천시 남동구 논현로 340 논현아파트 7동 1203호',
      aptName:        '논현아파트',
      model:          'SHK-3000',
      sellType:       '특판',
      errorMain:      '전원불량',
      errorSub:       '전원 안켜짐',
      processMain:    '',
      processSub:     '',
      causeMain:      '',
      causeSub:       '',
      remark:         '긴급처리 요청',
      branch:         '인천지점',
      engineer:       '임기사(u1005)',
      engineerTel:    '010-5555-1005',
      section:        '2구간',
      processDate:    '',
      processBranch:  '',
      processEngineer:'',
      processContent: '',
      payType:        '',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260413-0008',
      receiptDate:    '2026-04-13 11:20',
      processNo:      '260413-P006',
      receiptType:    'T',
      approvalStatus: 'Y',
      customerName:   '조현우',
      callerNo:       '053-555-6677',
      contact:        '053-555-6677',
      mobile:         '010-5555-6677',
      address:        '대구시 수성구 달구벌대로 1234 수성아파트 2동 501호',
      aptName:        '수성아파트',
      model:          'IDS-400L',
      sellType:       'HN',
      errorMain:      '동작불량',
      errorSub:       '버튼 무반응',
      processMain:    '수리',
      processSub:     '버튼 교체',
      causeMain:      '부품불량',
      causeSub:       '스위치 접점 불량',
      remark:         '',
      branch:         '대구지점',
      engineer:       '윤기사(u1006)',
      engineerTel:    '010-5555-1006',
      section:        '3구간',
      processDate:    '2026-04-14',
      processBranch:  '대구지점',
      processEngineer:'윤기사',
      processContent: '호출버튼 스위치 교체 완료',
      payType:        'N',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260413-0010',
      receiptDate:    '2026-04-13 13:55',
      processNo:      '260413-P007',
      receiptType:    'F',
      approvalStatus: 'Y',
      customerName:   '손지영',
      callerNo:       '',
      contact:        '042-777-8899',
      mobile:         '010-7777-8899',
      address:        '대전시 유성구 대학로 99 유성아파트 10동 2001호',
      aptName:        '유성아파트',
      model:          'KCV-D374',
      sellType:       '시판',
      errorMain:      '영상불량',
      errorSub:       '화면 깜빡임',
      processMain:    '수리',
      processSub:     '케이블 재접속',
      causeMain:      '접촉불량',
      causeSub:       '커넥터 헐거움',
      remark:         '',
      branch:         '대전지점',
      engineer:       '한기사(u1007)',
      engineerTel:    '010-5555-1007',
      section:        '1구간',
      processDate:    '2026-04-14',
      processBranch:  '대전지점',
      processEngineer:'한기사',
      processContent: '영상 케이블 커넥터 재정비 완료',
      payType:        'Y',
      billAmount:     33000,
      collectAmount:  33000,
      signFile:       'sign_260413_0010.pdf',
      sineFile:       'sine_260413_0010.pdf',
    },
    {
      receiptNo:      '260412-0005',
      receiptDate:    '2026-04-12 09:30',
      processNo:      '260412-P003',
      receiptType:    'T',
      approvalStatus: 'Y',
      customerName:   '문재원',
      callerNo:       '062-333-4455',
      contact:        '062-333-4455',
      mobile:         '010-3333-4455',
      address:        '광주시 북구 용봉로 77 북구아파트 4동 305호',
      aptName:        '북구아파트',
      model:          'SHK-1000H',
      sellType:       'HN',
      errorMain:      '음성불량',
      errorSub:       '통화 안됨',
      processMain:    '교체',
      processSub:     '스피커 교체',
      causeMain:      '부품불량',
      causeSub:       '스피커 단선',
      remark:         '강성고객',
      branch:         '광주지점',
      engineer:       '오기사(u1008)',
      engineerTel:    '010-5555-1008',
      section:        '2구간',
      processDate:    '2026-04-13',
      processBranch:  '광주지점',
      processEngineer:'오기사',
      processContent: '스피커 모듈 교체 완료',
      payType:        'N',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260412-0009',
      receiptDate:    '2026-04-12 15:40',
      processNo:      '',
      receiptType:    'L',
      approvalStatus: 'N',
      customerName:   '서민아',
      callerNo:       '',
      contact:        '044-444-5566',
      mobile:         '010-4444-5566',
      address:        '세종시 다정로 100 다정아파트 1동 102호',
      aptName:        '다정아파트',
      model:          'IDS-400L',
      sellType:       '특판',
      errorMain:      '동작불량',
      errorSub:       'LED 미점등',
      processMain:    '',
      processSub:     '',
      causeMain:      '',
      causeSub:       '',
      remark:         '',
      branch:         '세종지점',
      engineer:       '권기사(u1009)',
      engineerTel:    '010-5555-1009',
      section:        '1구간',
      processDate:    '',
      processBranch:  '',
      processEngineer:'',
      processContent: '',
      payType:        '',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260411-0003',
      receiptDate:    '2026-04-11 10:15',
      processNo:      '260411-P002',
      receiptType:    'T',
      approvalStatus: 'Y',
      customerName:   '노태현',
      callerNo:       '055-666-7788',
      contact:        '055-666-7788',
      mobile:         '010-6666-7788',
      address:        '경남 창원시 성산구 중앙대로 150 창원아파트 8동 604호',
      aptName:        '창원아파트',
      model:          'SHK-2200',
      sellType:       'HN',
      errorMain:      '전원불량',
      errorSub:       '전원 간헐적 꺼짐',
      processMain:    '수리',
      processSub:     '전원부 수리',
      causeMain:      '부품불량',
      causeSub:       '콘덴서 불량',
      remark:         '',
      branch:         '창원지점',
      engineer:       '신기사(u1010)',
      engineerTel:    '010-5555-1010',
      section:        '2구간',
      processDate:    '2026-04-12',
      processBranch:  '창원지점',
      processEngineer:'신기사',
      processContent: '전원부 콘덴서 교체 완료',
      payType:        'Y',
      billAmount:     44000,
      collectAmount:  44000,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260411-0007',
      receiptDate:    '2026-04-11 14:05',
      processNo:      '',
      receiptType:    'T',
      approvalStatus: 'N',
      customerName:   '황보영',
      callerNo:       '064-111-2200',
      contact:        '064-111-2200',
      mobile:         '010-1111-2200',
      address:        '제주시 연동 신제주로 55 신제주아파트 3동 1101호',
      aptName:        '신제주아파트',
      model:          'KCV-D374',
      sellType:       '시판',
      errorMain:      '화상불량',
      errorSub:       '야간 화면 어두움',
      processMain:    '',
      processSub:     '',
      causeMain:      '',
      causeSub:       '',
      remark:         '긴급',
      branch:         '제주지점',
      engineer:       '류기사(u1011)',
      engineerTel:    '010-5555-1011',
      section:        '3구간',
      processDate:    '',
      processBranch:  '',
      processEngineer:'',
      processContent: '',
      payType:        '',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260410-0020',
      receiptDate:    '2026-04-10 11:00',
      processNo:      '260410-P015',
      receiptType:    'T',
      approvalStatus: 'Y',
      customerName:   '안채원',
      callerNo:       '02-8888-9900',
      contact:        '02-8888-9900',
      mobile:         '010-8888-9900',
      address:        '서울시 마포구 월드컵로 300 마포래미안 201동 903호',
      aptName:        '마포래미안',
      model:          'SHK-3000',
      sellType:       'HN',
      errorMain:      '통화불량',
      errorSub:       '노이즈',
      processMain:    '수리',
      processSub:     '기판 수리',
      causeMain:      '습기침투',
      causeSub:       '욕실 인접 배선 문제',
      remark:         '',
      branch:         '마포지점',
      engineer:       '남기사(u1012)',
      engineerTel:    '010-5555-1012',
      section:        '1구간',
      processDate:    '2026-04-11',
      processBranch:  '마포지점',
      processEngineer:'남기사',
      processContent: '기판 습기 제거 및 방습처리 완료',
      payType:        'I',
      billAmount:     66000,
      collectAmount:  66000,
      signFile:       'sign_260410_0020.pdf',
      sineFile:       '',
    },
    {
      receiptNo:      '260410-0022',
      receiptDate:    '2026-04-10 13:30',
      processNo:      '260410-P016',
      receiptType:    'P',
      approvalStatus: 'Y',
      customerName:   '백도현',
      callerNo:       '',
      contact:        '031-222-3300',
      mobile:         '010-2222-3300',
      address:        '경기도 수원시 영통구 광교중앙로 145 광교아이파크 501동 302호',
      aptName:        '광교아이파크',
      model:          'IDS-400L',
      sellType:       '특판',
      errorMain:      '음성불량',
      errorSub:       '스피커 잡음',
      processMain:    '교체',
      processSub:     '스피커 교체',
      causeMain:      '부품불량',
      causeSub:       '스피커 코일 단선',
      remark:         '',
      branch:         '수원지점',
      engineer:       '하기사(u1013)',
      engineerTel:    '010-5555-1013',
      section:        '2구간',
      processDate:    '2026-04-11',
      processBranch:  '수원지점',
      processEngineer:'하기사',
      processContent: '스피커 유닛 교체 완료',
      payType:        'C',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260409-0011',
      receiptDate:    '2026-04-09 09:55',
      processNo:      '260409-P009',
      receiptType:    'T',
      approvalStatus: 'Y',
      customerName:   '전소희',
      callerNo:       '043-333-4400',
      contact:        '043-333-4400',
      mobile:         '010-3333-4400',
      address:        '충북 청주시 상당구 상당로 80 청주자이 105동 1403호',
      aptName:        '청주자이',
      model:          'SHK-1000H',
      sellType:       'HN',
      errorMain:      '동작불량',
      errorSub:       '도어락 연동 안됨',
      processMain:    '수리',
      processSub:     '연동 설정',
      causeMain:      '설정오류',
      causeSub:       '초기화 후 미설정',
      remark:         '고객 재문의 2회차',
      branch:         '청주지점',
      engineer:       '황기사(u1014)',
      engineerTel:    '010-5555-1014',
      section:        '1구간',
      processDate:    '2026-04-10',
      processBranch:  '청주지점',
      processEngineer:'황기사',
      processContent: '도어락 연동 재설정 완료',
      payType:        'N',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
    {
      receiptNo:      '260409-0014',
      receiptDate:    '2026-04-09 16:45',
      processNo:      '',
      receiptType:    'T',
      approvalStatus: 'N',
      customerName:   '차준혁',
      callerNo:       '033-555-6600',
      contact:        '033-555-6600',
      mobile:         '010-5555-6600',
      address:        '강원도 원주시 혁신로 200 원주아파트 2동 705호',
      aptName:        '원주아파트',
      model:          'KCV-D374',
      sellType:       '시판',
      errorMain:      '화상불량',
      errorSub:       '화면 무표시',
      processMain:    '',
      processSub:     '',
      causeMain:      '',
      causeSub:       '',
      remark:         '',
      branch:         '원주지점',
      engineer:       '강기사(u1015)',
      engineerTel:    '010-5555-1015',
      section:        '3구간',
      processDate:    '',
      processBranch:  '',
      processEngineer:'',
      processContent: '',
      payType:        '',
      billAmount:     0,
      collectAmount:  0,
      signFile:       '',
      sineFile:       '',
    },
  ],

  // ─────────────────────────────────────────────
  // 고객 상태정보 (접수 목록에서 별도 표시)
  // CS접수.상태정보 : 0=일반 1=강성 2=긴급
  // ─────────────────────────────────────────────
  customerStatusMap: {
    '260415-0001': '0',   // 일반
    '260415-0002': '0',   // 일반
    '260415-0003': '1',   // 강성 (remark에 표기)
    '260414-0012': '0',
    '260414-0015': '2',   // 긴급
    '260413-0008': '0',
    '260413-0010': '0',
    '260412-0005': '1',   // 강성
    '260412-0009': '0',
    '260411-0003': '0',
    '260411-0007': '2',   // 긴급
    '260410-0020': '0',
    '260410-0022': '0',
    '260409-0011': '0',
    '260409-0014': '0',
  },

  // ─────────────────────────────────────────────
  // 자재 작업현황 목록 (10건)
  // 출처: store_doing_list.php
  // 필드: 접수번호, 접수일, 센터명, 고객명, 모델품번, 모델명, 신청사원, 시리얼번호, 송장번호, 청구금액, 처리상태
  // ─────────────────────────────────────────────
  storeDoingList: [
    {
      receiptNo:    '260415-0001',
      receiptDate:  '2026-04-15',
      centerName:   '강남지점',
      customerName: '홍길동',
      modelCode:    'SHK-1000H',
      modelName:    '홈네트워크 세대단말기 SHK-1000H',
      applier:      '이기사',            // 신청사원
      serialNo:     'SN202604150001',    // S/N
      invoiceNo:    'CJ1234567890',      // 송장번호
      billAmount:   55000,
      processStatus:'1',                 // 1=접수완료 2=수리중 3=수리완료
    },
    {
      receiptNo:    '260413-0010',
      receiptDate:  '2026-04-13',
      centerName:   '대전지점',
      customerName: '손지영',
      modelCode:    'KCV-D374',
      modelName:    '도어폰 컬러 KCV-D374',
      applier:      '한기사',
      serialNo:     'SN202604130010',
      invoiceNo:    'KG9876543210',
      billAmount:   33000,
      processStatus:'2',
    },
    {
      receiptNo:    '260412-0005',
      receiptDate:  '2026-04-12',
      centerName:   '광주지점',
      customerName: '문재원',
      modelCode:    'SHK-1000H',
      modelName:    '홈네트워크 세대단말기 SHK-1000H',
      applier:      '오기사',
      serialNo:     'SN202604120005',
      invoiceNo:    '',
      billAmount:   0,
      processStatus:'3',
    },
    {
      receiptNo:    '260411-0003',
      receiptDate:  '2026-04-11',
      centerName:   '창원지점',
      customerName: '노태현',
      modelCode:    'SHK-2200',
      modelName:    '홈네트워크 컨트롤러 SHK-2200',
      applier:      '신기사',
      serialNo:     'SN202604110003',
      invoiceNo:    'CJ0011223344',
      billAmount:   44000,
      processStatus:'2',
    },
    {
      receiptNo:    '260410-0020',
      receiptDate:  '2026-04-10',
      centerName:   '마포지점',
      customerName: '안채원',
      modelCode:    'SHK-3000',
      modelName:    '스마트홈 허브 SHK-3000',
      applier:      '남기사',
      serialNo:     'SN202604100020',
      invoiceNo:    'HJ5566778899',
      billAmount:   66000,
      processStatus:'3',
    },
    {
      receiptNo:    '260410-0022',
      receiptDate:  '2026-04-10',
      centerName:   '수원지점',
      customerName: '백도현',
      modelCode:    'IDS-400L',
      modelName:    '도어비전 IDS-400L',
      applier:      '하기사',
      serialNo:     'SN202604100022',
      invoiceNo:    '',
      billAmount:   0,
      processStatus:'1',
    },
    {
      receiptNo:    '260409-0011',
      receiptDate:  '2026-04-09',
      centerName:   '청주지점',
      customerName: '전소희',
      modelCode:    'SHK-1000H',
      modelName:    '홈네트워크 세대단말기 SHK-1000H',
      applier:      '황기사',
      serialNo:     'SN202604090011',
      invoiceNo:    'CJ3344556677',
      billAmount:   0,
      processStatus:'3',
    },
    {
      receiptNo:    '260408-0007',
      receiptDate:  '2026-04-08',
      centerName:   '강남지점',
      customerName: '김미래',
      modelCode:    'KCV-D374',
      modelName:    '도어폰 컬러 KCV-D374',
      applier:      '이기사',
      serialNo:     'SN202604080007',
      invoiceNo:    'KG1122334455',
      billAmount:   78000,
      processStatus:'2',
    },
    {
      receiptNo:    '260407-0019',
      receiptDate:  '2026-04-07',
      centerName:   '분당지점',
      customerName: '이준서',
      modelCode:    'SHK-2200',
      modelName:    '홈네트워크 컨트롤러 SHK-2200',
      applier:      '박기사',
      serialNo:     'SN202604070019',
      invoiceNo:    'CJ6677889900',
      billAmount:   99000,
      processStatus:'3',
    },
    {
      receiptNo:    '260406-0004',
      receiptDate:  '2026-04-06',
      centerName:   '서초지점',
      customerName: '최유나',
      modelCode:    'IDS-400L',
      modelName:    '도어비전 IDS-400L',
      applier:      '정기사',
      serialNo:     'SN202604060004',
      invoiceNo:    '',
      billAmount:   0,
      processStatus:'1',
    },
  ],

  // ─────────────────────────────────────────────
  // 해피콜 목록 (10건)
  // ─────────────────────────────────────────────
  happycallList: [
    { receiptNo: '260413-0010', processDate: '2026-04-14', customerName: '손지영',   mobile: '010-7777-8899', model: 'KCV-D374',  callStatus: 'Y', callDate: '2026-04-16', callMemo: '만족' },
    { receiptNo: '260412-0005', processDate: '2026-04-13', customerName: '문재원',   mobile: '010-3333-4455', model: 'SHK-1000H', callStatus: 'Y', callDate: '2026-04-15', callMemo: '매우만족' },
    { receiptNo: '260411-0003', processDate: '2026-04-12', customerName: '노태현',   mobile: '010-6666-7788', model: 'SHK-2200',  callStatus: 'N', callDate: '',            callMemo: '' },
    { receiptNo: '260410-0020', processDate: '2026-04-11', customerName: '안채원',   mobile: '010-8888-9900', model: 'SHK-3000',  callStatus: 'Y', callDate: '2026-04-13', callMemo: '보통' },
    { receiptNo: '260409-0011', processDate: '2026-04-10', customerName: '전소희',   mobile: '010-3333-4400', model: 'SHK-1000H', callStatus: 'Y', callDate: '2026-04-12', callMemo: '만족' },
    { receiptNo: '260415-0001', processDate: '2026-04-16', customerName: '홍길동',   mobile: '010-1234-5678', model: 'SHK-1000H', callStatus: 'N', callDate: '',            callMemo: '' },
    { receiptNo: '260413-0008', processDate: '2026-04-14', customerName: '조현우',   mobile: '010-5555-6677', model: 'IDS-400L',  callStatus: 'Y', callDate: '2026-04-15', callMemo: '만족' },
    { receiptNo: '260407-0019', processDate: '2026-04-08', customerName: '이준서',   mobile: '010-9988-7766', model: 'SHK-2200',  callStatus: 'Y', callDate: '2026-04-10', callMemo: '매우만족' },
    { receiptNo: '260406-0004', processDate: '2026-04-07', customerName: '최유나',   mobile: '010-6655-4433', model: 'IDS-400L',  callStatus: 'N', callDate: '',            callMemo: '' },
    { receiptNo: '260414-0012', processDate: '2026-04-15', customerName: '박민준',   mobile: '010-3344-5566', model: 'KCV-D374',  callStatus: 'Y', callDate: '2026-04-16', callMemo: '보통' },
  ],

  // ─────────────────────────────────────────────
  // 사원 목록 (10건)
  // 출처: admin_user_list.php
  // 필드: 사원번호, 사원명, 직급, 부서, 권한, 콜아이디, 지점코드(센터명), 현재사원여부
  // ─────────────────────────────────────────────
  userList: [
    { employeeNo: 'u9001', employeeName: '김상담', position: '사원',  department: 'CS상담팀',   permission: 1, callId: 'CID001', centerCode: '11301', centerName: '본사',   activeYn: 'Y' },
    { employeeNo: 'u9002', employeeName: '이팀장', position: '팀장',  department: 'CS상담팀',   permission: 7, callId: 'CID002', centerCode: '11301', centerName: '본사',   activeYn: 'Y' },
    { employeeNo: 'u9003', employeeName: '박관리', position: '과장',  department: '관리팀',     permission: 9, callId: '',       centerCode: '11301', centerName: '본사',   activeYn: 'Y' },
    { employeeNo: 'u1001', employeeName: '이기사', position: '사원',  department: '강남출장팀', permission: 2, callId: '',       centerCode: '11310', centerName: '강남지점', activeYn: 'Y' },
    { employeeNo: 'u1002', employeeName: '박기사', position: '사원',  department: '분당출장팀', permission: 2, callId: '',       centerCode: '11320', centerName: '분당지점', activeYn: 'Y' },
    { employeeNo: 'u1003', employeeName: '최기사', position: '사원',  department: '부산출장팀', permission: 2, callId: '',       centerCode: '11330', centerName: '부산지점', activeYn: 'Y' },
    { employeeNo: 'u1004', employeeName: '정기사', position: '주임',  department: '서초출장팀', permission: 2, callId: '',       centerCode: '11340', centerName: '서초지점', activeYn: 'Y' },
    { employeeNo: 'u1005', employeeName: '임기사', position: '사원',  department: '인천출장팀', permission: 2, callId: '',       centerCode: '11350', centerName: '인천지점', activeYn: 'Y' },
    { employeeNo: 'u1006', employeeName: '윤기사', position: '사원',  department: '대구출장팀', permission: 2, callId: '',       centerCode: '11360', centerName: '대구지점', activeYn: 'Y' },
    { employeeNo: 'u8001', employeeName: '홍퇴사', position: '사원',  department: 'CS상담팀',   permission: 1, callId: 'CID099', centerCode: '11301', centerName: '본사',   activeYn: 'N' },
  ],

  // ─────────────────────────────────────────────
  // 게시판 목록 (10건) — 공지/자료실 겸용
  // ─────────────────────────────────────────────
  forumList: [
    { id: 10, category: '공지', title: '2026년 2분기 AS 처리 지침 안내',           author: '박관리', date: '2026-04-14', views: 245, isNotice: true  },
    { id:  9, category: '공지', title: '자재 신청 마감일 변경 공지 (4월)',          author: '이팀장', date: '2026-04-10', views: 188, isNotice: true  },
    { id:  8, category: '자료', title: 'SHK-3000 설치 매뉴얼 v2.1',               author: '박관리', date: '2026-04-08', views:  92, isNotice: false },
    { id:  7, category: '자료', title: 'KCV-D374 고장진단 가이드',                 author: '이팀장', date: '2026-04-05', views: 134, isNotice: false },
    { id:  6, category: '공지', title: '해피콜 작성 기준 개정 안내',               author: '박관리', date: '2026-04-02', views: 310, isNotice: true  },
    { id:  5, category: '자료', title: 'IDS-400L 부품 교체 절차서',                author: '김상담', date: '2026-03-28', views:  67, isNotice: false },
    { id:  4, category: '일반', title: '강남지점 4월 출장비 정산 요청',            author: '이기사', date: '2026-03-25', views:  45, isNotice: false },
    { id:  3, category: '일반', title: '부산지점 자재 재고 부족 보고',             author: '최기사', date: '2026-03-20', views:  38, isNotice: false },
    { id:  2, category: '자료', title: '2026 AS 표준 처리시간 기준표',             author: '박관리', date: '2026-03-15', views: 201, isNotice: false },
    { id:  1, category: '공지', title: '코콤 CS 시스템 교육 일정 안내 (3월)',      author: '이팀장', date: '2026-03-10', views: 278, isNotice: true  },
  ],

  // ─────────────────────────────────────────────
  // 공통 코드 맵
  // 출처: svc_list.php, receipt.php, popup_svc.php의 SELECT 옵션
  // ─────────────────────────────────────────────
  codeMap: {
    // 접수구분 (CS접수.접수구분)
    receiptType: {
      'T': '전화',
      'P': '우편',
      'F': '팩스',
      'L': 'LED',
      'S': '상담',
      'M': '모바일',
      'Y': '연차',
    },
    // 승인상태 (CS접수.승인상태)
    approvalStatus: {
      'Y': '승인',
      'N': '미승인',
    },
    // 결재여부 (CS처리.결재여부)
    paymentStatus: {
      '결재':     '승인',
      '미결재':   '미승인',
      '결재취소': '부적합',
    },
    // 고객 상태정보 (CS접수.상태정보)
    customerStatus: {
      '0': '일반',
      '1': '강성',
      '2': '긴급',
    },
    // 판매유형 (CS접수.판매유형)
    sellType: {
      'HN':  'HN',
      '특판': '특판',
      '시판': '시판',
    },
    // 요금적용 (CS처리.유상여부)
    payType: {
      'Y': '유상',
      'N': '무상',
      'I': '유지보수',
      'C': '취소',
    },
    // 구간구분 (CS접수.구간구분)
    section: {
      '1구간': '1구간',
      '2구간': '2구간',
      '3구간': '3구간',
    },
    // 사원 권한
    permission: {
      1: '상담원',
      2: '기사',
      7: '팀장',
      9: '관리자',
    },
    // 직급 (GRADE 배열)
    position: {
      '10': '사원',
      '20': '주임',
      '30': '대리',
      '40': '과장',
      '50': '차장',
      '60': '부장',
      '70': '이사',
    },
    // 자재 처리상태 (store_doing_list.php)
    storeStatus: {
      '1': '접수완료',
      '2': '수리중',
      '3': '수리완료',
    },
    // 재직상태 (admin_user_list.php)
    activeYn: {
      'Y': '재직',
      'N': '퇴직',
    },
    // 관계 (CS접수.관계)
    relation: {
      '본인':     '본인',
      '직계가족': '직계가족',
      '대리인':   '대리인',
    },
    // 유상통보여부 (CS접수.유상통보여부)
    paidNotify: {
      'N': '무상',
      'Y': '유상',
    },
    // 부가세
    vat: {
      'Y': '포함',
      'N': '미포함',
    },
    // 자재 등급
    itemGrade: {
      'A': 'A등급',
    },
    // 검색 기준일
    baseday: {
      '':  '접수일',
      '2': '처리일',
    },
    // 검색 필드 (svc_list.php keyfield)
    keyfield: {
      '1':  '접수번호',
      '2':  '처리번호',
      '3':  '접수구분',
      '4':  '고객명',
      '5':  '발신번호',
      '6':  '연락처',
      '7':  '주소',
      '8':  'CS품명',
      '9':  '판매유형',
      '10': '증상분류',
      '11': '세부증상',
      '12': '처리분류',
      '13': '처리상세',
      '14': '원인분류',
      '15': '원인상세',
      '16': '특이사항',
      '17': '담당지점',
      '18': '담당기사',
      '19': '기사연락처',
      '20': '구간구분',
      '21': '처리일',
      '22': '처리지점',
      '23': '처리사원',
      '24': '처리내용',
      '25': '요금적용',
      '26': '청구금액',
      '27': '징구금액',
      '28': '접수사원',
      '29': '기사메모',
    },
    // 해피콜 상태
    callStatus: {
      'Y': '완료',
      'N': '미완료',
    },
  },

  // ─────────────────────────────────────────────
  // 팝업 데이터 — 아파트 검색 결과
  // 출처: receipt.php aptsel() 팝업 → CS현장 테이블
  // ─────────────────────────────────────────────
  aptList: [
    { aptCode: 'APT001', aptName: 'xx아파트',     zipCode: '06234', address: '서울시 강남구 테헤란로 123',    totalUnits: 300 },
    { aptCode: 'APT002', aptName: '판교아파트',   zipCode: '13494', address: '경기도 성남시 분당구 판교로 567', totalUnits: 450 },
    { aptCode: 'APT003', aptName: '마린아파트',   zipCode: '48100', address: '부산시 해운대구 센텀중앙로 89', totalUnits: 600 },
    { aptCode: 'APT004', aptName: '서초아이파크', zipCode: '06647', address: '서울시 서초구 서초대로 200',    totalUnits: 800 },
    { aptCode: 'APT005', aptName: '논현아파트',   zipCode: '21552', address: '인천시 남동구 논현로 340',      totalUnits: 200 },
    { aptCode: 'APT006', aptName: '수성아파트',   zipCode: '42000', address: '대구시 수성구 달구벌대로 1234', totalUnits: 350 },
    { aptCode: 'APT007', aptName: '유성아파트',   zipCode: '34134', address: '대전시 유성구 대학로 99',       totalUnits: 280 },
    { aptCode: 'APT008', aptName: '북구아파트',   zipCode: '61489', address: '광주시 북구 용봉로 77',        totalUnits: 400 },
    { aptCode: 'APT009', aptName: '마포래미안',   zipCode: '04065', address: '서울시 마포구 월드컵로 300',   totalUnits: 1200 },
    { aptCode: 'APT010', aptName: '광교아이파크', zipCode: '16488', address: '경기도 수원시 영통구 광교중앙로 145', totalUnits: 900 },
  ],

  // ─────────────────────────────────────────────
  // 팝업 데이터 — 모델 검색 결과
  // 출처: receipt.php modelsel() 팝업 → AS품목 테이블
  // ─────────────────────────────────────────────
  modelList: [
    { modelCode: 'SHK-1000H', modelName: '홈네트워크 세대단말기 SHK-1000H', category: '세대기기',   consumerPrice: 150000 },
    { modelCode: 'SHK-2200',  modelName: '홈네트워크 컨트롤러 SHK-2200',    category: '세대기기',   consumerPrice: 220000 },
    { modelCode: 'SHK-3000',  modelName: '스마트홈 허브 SHK-3000',          category: '세대기기',   consumerPrice: 300000 },
    { modelCode: 'KCV-D374',  modelName: '도어폰 컬러 KCV-D374',            category: '도어폰',     consumerPrice: 180000 },
    { modelCode: 'IDS-400L',  modelName: '도어비전 IDS-400L',               category: '도어비전',   consumerPrice: 250000 },
    { modelCode: 'KLP-1000',  modelName: '로비폰 KLP-1000',                 category: '공동현관',   consumerPrice: 450000 },
    { modelCode: 'IOT-HUB01', modelName: 'IoT 통합허브 IOT-HUB01',         category: '허브',       consumerPrice: 120000 },
    { modelCode: 'SHK-500',   modelName: '홈네트워크 보급형 SHK-500',       category: '세대기기',   consumerPrice:  95000 },
  ],

  // ─────────────────────────────────────────────
  // 지점(센터) 목록
  // 출처: AS지점 테이블 (store_doing_list.php 센터 select)
  // ─────────────────────────────────────────────
  centerList: [
    { centerCode: '11301', centerName: '본사'     },
    { centerCode: '11310', centerName: '강남지점' },
    { centerCode: '11320', centerName: '분당지점' },
    { centerCode: '11323', centerName: '서비스센터' },
    { centerCode: '11330', centerName: '부산지점' },
    { centerCode: '11340', centerName: '서초지점' },
    { centerCode: '11350', centerName: '인천지점' },
    { centerCode: '11360', centerName: '대구지점' },
    { centerCode: '11370', centerName: '대전지점' },
    { centerCode: '11380', centerName: '광주지점' },
    { centerCode: '11390', centerName: '창원지점' },
    { centerCode: '11400', centerName: '수원지점' },
    { centerCode: '11410', centerName: '청주지점' },
    { centerCode: '11420', centerName: '제주지점' },
    { centerCode: '11430', centerName: '마포지점' },
  ],

  // ─────────────────────────────────────────────
  // 증상분류(장애구분) 코드 목록
  // 출처: receipt.php → CS장애구분 테이블 (상위/하위 2단계)
  // ─────────────────────────────────────────────
  errorCodeList: [
    { code: '001', name: '동작불량', parentCode: null,  children: [
        { code: '001-01', name: '전원불량'    },
        { code: '001-02', name: '버튼 무반응' },
        { code: '001-03', name: 'LED 미점등'  },
      ]
    },
    { code: '002', name: '음성불량', parentCode: null,  children: [
        { code: '002-01', name: '통화 안됨'   },
        { code: '002-02', name: '잡음발생'    },
        { code: '002-03', name: '음성 끊김'   },
      ]
    },
    { code: '003', name: '화상불량', parentCode: null,  children: [
        { code: '003-01', name: '카메라 흐림' },
        { code: '003-02', name: '화면 깜빡임' },
        { code: '003-03', name: '화면 무표시' },
        { code: '003-04', name: '야간 화면 어두움' },
      ]
    },
    { code: '004', name: '통화불량', parentCode: null,  children: [
        { code: '004-01', name: '노이즈'      },
        { code: '004-02', name: '도어락 연동 안됨' },
      ]
    },
    { code: '005', name: '전원불량', parentCode: null,  children: [
        { code: '005-01', name: '전원 안켜짐'     },
        { code: '005-02', name: '전원 간헐적 꺼짐' },
      ]
    },
    { code: '013', name: '취소',     parentCode: null,  children: [
        { code: '013-01', name: '고객취소'    },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  // 처리분류(수리구분) 코드 목록
  // 출처: popup_svc.php → rc_1 / rc_2 SELECT
  // ─────────────────────────────────────────────
  repairCodeList: [
    { code: '001', name: '수리',   children: [
        { code: '001-01', name: '부품교체' },
        { code: '001-02', name: '케이블 재접속' },
        { code: '001-03', name: '기판 수리' },
        { code: '001-04', name: '연동 설정' },
        { code: '001-05', name: '렌즈 청소' },
        { code: '001-06', name: '전원부 수리' },
        { code: '001-07', name: '버튼 교체' },
      ]
    },
    { code: '002', name: '교체',   children: [
        { code: '002-01', name: '본체 교체'   },
        { code: '002-02', name: '스피커 교체' },
      ]
    },
    { code: '013', name: '취소',   children: [
        { code: '085', name: '고객취소요청'   },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  // 원인분류(원인구분) 코드 목록
  // 출처: popup_svc.php → cs_1 / cs_2 SELECT
  // ─────────────────────────────────────────────
  causeCodeList: [
    { code: '001', name: '부품불량',  children: [
        { code: '001-01', name: 'PCB 불량'       },
        { code: '001-02', name: '스피커 단선'    },
        { code: '001-03', name: '스위치 접점 불량' },
        { code: '001-04', name: '콘덴서 불량'    },
        { code: '001-05', name: '스피커 코일 단선' },
      ]
    },
    { code: '002', name: '접촉불량',  children: [
        { code: '002-01', name: '커넥터 헐거움'  },
      ]
    },
    { code: '003', name: '노후화',    children: [
        { code: '003-01', name: '사용연한 초과'  },
      ]
    },
    { code: '004', name: '습기침투',  children: [
        { code: '004-01', name: '욕실 인접 배선 문제' },
      ]
    },
    { code: '005', name: '오염',      children: [
        { code: '005-01', name: '먼지 누적'      },
      ]
    },
    { code: '006', name: '설정오류',  children: [
        { code: '006-01', name: '초기화 후 미설정' },
      ]
    },
    { code: '007', name: '고객취소',  children: [
        { code: '037', name: '고객취소요청'      },
      ]
    },
  ],

};
