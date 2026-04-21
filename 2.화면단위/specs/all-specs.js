window.ALL_SPECS = {
  "receipt": {
    "receipt": {
      "phpFile": "receipt.php",
      "htmlFile": "screens/receipt/receipt.html",
      "type": "form",
      "title": "접수 등록/수정 폼",
      "purpose": "상담 접수건을 신규 등록하거나 기존 접수 내용을 수정",
      "workflow": "접수 > 등록",
      "searchFields": [
        {
          "name": "num",
          "type": "hidden",
          "label": "접수번호(PK)",
          "required": false
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update",
          "required": true
        },
        {
          "name": "cid_num",
          "type": "text",
          "label": "발신번호",
          "required": false
        },
        {
          "name": "UID",
          "type": "hidden",
          "label": "고객번호",
          "required": false
        },
        {
          "name": "rct_gbn",
          "type": "select",
          "label": "접수구분",
          "options": [
            "T:전화",
            "P:우편",
            "F:팩스",
            "L:LED",
            "S:상담",
            "M:모바일"
          ]
        },
        {
          "name": "고객명",
          "type": "text",
          "label": "고객명",
          "required": true
        },
        {
          "name": "연락처",
          "type": "text",
          "label": "연락처"
        },
        {
          "name": "휴대폰",
          "type": "text",
          "label": "휴대폰"
        },
        {
          "name": "우편번호",
          "type": "text",
          "label": "우편번호"
        },
        {
          "name": "주소",
          "type": "text",
          "label": "주소"
        },
        {
          "name": "상세주소",
          "type": "text",
          "label": "상세주소"
        },
        {
          "name": "동",
          "type": "text",
          "label": "동"
        },
        {
          "name": "호",
          "type": "text",
          "label": "호"
        },
        {
          "name": "아파트코드",
          "type": "popup",
          "label": "아파트명",
          "popup": "popup_apt_search.php"
        },
        {
          "name": "품번",
          "type": "popup",
          "label": "모델",
          "popup": "popup_model_search.php"
        },
        {
          "name": "장애구분",
          "type": "select",
          "label": "증상분류(대)"
        },
        {
          "name": "장애상세",
          "type": "select",
          "label": "세부증상(소)"
        },
        {
          "name": "유상통보여부",
          "type": "radio",
          "label": "유상통보(Y/N)"
        },
        {
          "name": "담당지점",
          "type": "select",
          "label": "담당지점"
        },
        {
          "name": "담당사원",
          "type": "select",
          "label": "담당기사"
        },
        {
          "name": "방문예약일",
          "type": "date",
          "label": "방문예약일"
        },
        {
          "name": "특이사항",
          "type": "textarea",
          "label": "특이사항"
        },
        {
          "name": "상담내용",
          "type": "textarea",
          "label": "상담내용"
        },
        {
          "name": "구간구분",
          "type": "radio",
          "label": "구간구분",
          "options": [
            "1구간",
            "2구간",
            "3구간"
          ]
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "저장(등록/수정)",
          "action": "submit form to receipt_proc.php"
        },
        {
          "label": "기사메모",
          "action": "popup receipt_g_memo.php 620x600"
        },
        {
          "label": "닫기",
          "action": "self.close()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "아파트 검색",
          "popup": "popup_apt_search.php",
          "size": "615x500"
        },
        {
          "trigger": "모델 검색",
          "popup": "popup_model_search.php",
          "size": "615x500"
        },
        {
          "trigger": "기사메모 버튼",
          "popup": "receipt_g_memo.php",
          "size": "620x600"
        },
        {
          "trigger": "처리 팝업",
          "popup": "popup_svc.php",
          "size": "660x700"
        }
      ],
      "ajaxCalls": [
        {
          "trigger": "고객조회",
          "url": "ajax_proc.php",
          "mode": "search_cust_number"
        },
        {
          "trigger": "장애구분 소메뉴 조회",
          "url": "ajax_proc.php",
          "mode": "get_err_detail"
        }
      ],
      "flowFrom": [
        "main.php",
        "receipt_all.php",
        "receipt_consult_list.php",
        "receipt_callback_list.php",
        "receipt_m_list.php",
        "receipt_service_list.php"
      ],
      "flowTo": [
        "receipt_proc.php",
        "popup_svc.php",
        "receipt_g_memo.php"
      ]
    },
    "receipt_all": {
      "phpFile": "receipt_all.php",
      "htmlFile": "screens/receipt/receipt_all.html",
      "type": "layout",
      "title": "접수등록(2단 레이아웃 - receipt_main 사용)",
      "purpose": "좌측 접수 입력폼 + 우측 상세/이력(FRAMESET 형식)을 한 화면에 배치",
      "workflow": "접수 > 등록(복합)",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok 여부"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        },
        {
          "name": "stmode",
          "type": "hidden",
          "label": "상태 모드"
        }
      ],
      "tableColumns": [],
      "buttons": [],
      "popupsCalled": [],
      "ajaxCalls": [],
      "iframes": [
        {
          "name": "receipt",
          "src": "receipt.php?p_mode=g&mode=insert",
          "width": "40%",
          "height": "730px"
        },
        {
          "name": "info",
          "src": "receipt_main.php",
          "width": "60%",
          "height": "780px"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "receipt_main.php"
      ]
    },
    "receipt_all_1": {
      "phpFile": "receipt_all_1.php",
      "htmlFile": "screens/receipt/receipt_all_1.html",
      "type": "layout",
      "title": "접수등록(2단 레이아웃 - receipt_info 사용)",
      "purpose": "receipt_all.php 변형. 우측을 receipt_info.php (iframe 형식)로 표시",
      "workflow": "접수 > 등록(복합)",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok 여부"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        }
      ],
      "tableColumns": [],
      "buttons": [],
      "popupsCalled": [],
      "ajaxCalls": [],
      "iframes": [
        {
          "name": "receipt",
          "src": "receipt.php?p_mode=g&mode=insert",
          "width": "40%",
          "height": "730px"
        },
        {
          "name": "info",
          "src": "receipt_info.php",
          "width": "60%",
          "height": "780px"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "receipt_info.php"
      ]
    },
    "receipt_callback_list": {
      "phpFile": "receipt_callback_list.php",
      "htmlFile": "screens/receipt/receipt_callback_list.html",
      "type": "list",
      "title": "콜백 리스트",
      "purpose": "부재중/콜백 대기 전화 목록 관리. 상담원이 전화 회신 후 처리완료 처리.",
      "workflow": "처리 > 콜백",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)",
          "required": false
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)",
          "required": false
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "전화번호"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g=갤러리(info 내장)"
        },
        {
          "name": "agent_id",
          "type": "hidden",
          "label": "상담원 ID"
        }
      ],
      "tableColumns": [
        {
          "name": "선택",
          "dbField": "checkbox(cust_id-uniq_id)",
          "width": "10%",
          "format": "checkbox"
        },
        {
          "name": "입력일시",
          "dbField": "in_time",
          "width": "15%",
          "format": "datetime"
        },
        {
          "name": "전화번호",
          "dbField": "tel_num",
          "width": "15%",
          "format": "tel"
        },
        {
          "name": "콜백처리 상담원",
          "dbField": "agent_name",
          "width": "15%",
          "format": "string"
        },
        {
          "name": "처리상태",
          "dbField": "state",
          "width": "15%",
          "format": "enum(0:미처리,1:확인,2:처리완료)"
        },
        {
          "name": "녹취",
          "dbField": "rec_file",
          "width": "10%",
          "format": "icon"
        },
        {
          "name": "녹음시간",
          "dbField": "cost_time",
          "width": "10%",
          "format": "duration"
        },
        {
          "name": "고객부재",
          "dbField": "(계산)",
          "width": "10%",
          "format": "string"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "link ../excel/receipt_callback_list_excel.php"
        },
        {
          "label": "선택처리",
          "action": "complete_with() - 일괄 처리완료"
        },
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "전체선택(checkbox)",
          "action": "all_check()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "전화번호 클릭 (미등록)",
          "popup": "receipt.php?num=new&mode=insert",
          "size": "685x755"
        },
        {
          "trigger": "녹취 아이콘",
          "popup": "record_list.php",
          "size": "fullscreen"
        }
      ],
      "ajaxCalls": [
        {
          "trigger": "전화번호 클릭",
          "url": "ajax_proc.php",
          "mode": "search_cust_number"
        },
        {
          "trigger": "선택처리",
          "url": "ajax_proc_mysql.php",
          "mode": "callback_complete_with"
        },
        {
          "trigger": "상태 더블클릭",
          "url": "ajax_proc_mysql.php",
          "mode": "callback_complete|callback_uncompleted"
        }
      ],
      "flowFrom": [
        "receipt_top.php",
        "receipt_info.php",
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "receipt_consult_list.php"
      ]
    },
    "receipt_consult_list": {
      "phpFile": "receipt_consult_list.php",
      "htmlFile": "screens/receipt/receipt_consult_list.html",
      "type": "list",
      "title": "상담이력",
      "purpose": "접수된 상담 이력 전체 목록 조회. 접수번호 클릭 시 접수수정/처리 팝업.",
      "workflow": "접수 > 상담 조회",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "rctgbn",
          "type": "select",
          "label": "접수구분",
          "options": [
            "T:전화",
            "P:우편",
            "F:팩스",
            "L:LED",
            "S:상담",
            "M:모바일"
          ]
        },
        {
          "name": "rcttype",
          "type": "select",
          "label": "접수종류"
        },
        {
          "name": "mt_status",
          "type": "select",
          "label": "자재신청상태"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g=갤러리"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "format": "clickable-popup"
        },
        {
          "name": "처리번호",
          "dbField": "처리번호",
          "format": "clickable-popup"
        },
        {
          "name": "접수일",
          "dbField": "접수일",
          "format": "date"
        },
        {
          "name": "방문예약일",
          "dbField": "방문예약일",
          "format": "date"
        },
        {
          "name": "승인상태",
          "dbField": "승인상태",
          "format": "enum"
        },
        {
          "name": "접수구분",
          "dbField": "접수구분",
          "format": "enum"
        },
        {
          "name": "접수사원",
          "dbField": "접수사원명"
        },
        {
          "name": "고객명(상태정보)",
          "dbField": "고객명",
          "format": "string"
        },
        {
          "name": "발신번호",
          "dbField": "발신번호",
          "format": "tel"
        },
        {
          "name": "연락처",
          "dbField": "연락처",
          "format": "tel"
        },
        {
          "name": "휴대폰",
          "dbField": "휴대폰",
          "format": "tel"
        },
        {
          "name": "녹취",
          "dbField": "녹취여부",
          "format": "icon"
        },
        {
          "name": "주소",
          "dbField": "주소"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "모델",
          "dbField": "품명"
        },
        {
          "name": "판매유형",
          "dbField": "판매유형"
        },
        {
          "name": "증상분류",
          "dbField": "장애구분명"
        },
        {
          "name": "세부증상",
          "dbField": "장애상세명"
        },
        {
          "name": "유상통보",
          "dbField": "유상통보여부"
        },
        {
          "name": "특이사항",
          "dbField": "특이사항"
        },
        {
          "name": "담당지점",
          "dbField": "담당지점명"
        },
        {
          "name": "담당기사",
          "dbField": "담당사원명"
        },
        {
          "name": "구간구분",
          "dbField": "구간구분"
        },
        {
          "name": "자재신청상태",
          "dbField": "자재신청상태"
        },
        {
          "name": "자재신청일",
          "dbField": "자재신청일",
          "format": "date"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "엑셀다운(주석처리)",
          "action": "excel_download()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭(연차)",
          "popup": "receipt_year.php",
          "size": "710x755"
        },
        {
          "trigger": "접수번호 클릭(일반)",
          "popup": "receipt.php",
          "size": "710x755"
        },
        {
          "trigger": "처리번호 클릭",
          "popup": "popup_svc.php",
          "size": "660x700"
        },
        {
          "trigger": "녹취 아이콘",
          "popup": "record_list.php",
          "size": "fullscreen"
        },
        {
          "trigger": "SMS",
          "popup": "popup_sms_main.php",
          "size": "1010x520"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_top.php",
        "receipt_info.php",
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "receipt_year.php",
        "popup_svc.php"
      ]
    },
    "receipt_g_memo": {
      "phpFile": "receipt_g_memo.php",
      "htmlFile": "screens/receipt/receipt_g_memo.html",
      "type": "popup",
      "title": "기사메모",
      "purpose": "접수건 기사 메모 등록/수정/삭제 팝업 (500px)",
      "workflow": "처리 > 기사메모",
      "searchFields": [
        {
          "name": "receipt_no",
          "type": "hidden",
          "label": "접수번호"
        },
        {
          "name": "end",
          "type": "hidden",
          "label": "처리완료 여부(Y/N)"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "모드"
        },
        {
          "name": "kmemo",
          "type": "text",
          "label": "메모 내용(500 byte)"
        },
        {
          "name": "memo_update",
          "type": "text",
          "label": "메모 수정 입력란"
        }
      ],
      "tableColumns": [
        {
          "name": "순번",
          "dbField": "(seq)"
        },
        {
          "name": "내용",
          "dbField": "메모"
        },
        {
          "name": "작성자",
          "dbField": "작성자"
        },
        {
          "name": "작성일",
          "dbField": "접수일시"
        },
        {
          "name": "비고",
          "dbField": "(수정/삭제 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "등록",
          "action": "memo_next() -> ajax mode=memo_next"
        },
        {
          "label": "수정(입력모드)",
          "action": "update_memo() -> ajax mode=memo_update"
        },
        {
          "label": "수정(행)",
          "action": "update_next(idx,'update',memo)"
        },
        {
          "label": "삭제",
          "action": "update_next(idx,'delete') -> ajax mode=memo_del"
        },
        {
          "label": "닫기",
          "action": "self.close()"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [
        {
          "trigger": "등록/수정/삭제",
          "url": "ajax_proc.php",
          "mode": "memo_next|memo_update|memo_del"
        }
      ],
      "flowFrom": [
        "receipt.php",
        "receipt_year.php",
        "receipt_year_mode.php",
        "resolve_year_mode.php"
      ],
      "flowTo": []
    },
    "receipt_happycall_list": {
      "phpFile": "receipt_happycall_list.php",
      "htmlFile": "screens/receipt/receipt_happycall_list.html",
      "type": "list",
      "title": "해피콜 리스트",
      "purpose": "처리 완료건에 대한 해피콜(만족도 조사) 대상 관리",
      "workflow": "처리 > 해피콜",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "시작일"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "종료일"
        },
        {
          "name": "orderby",
          "type": "select",
          "label": "정렬"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "순서",
          "dbField": "(seq)"
        },
        {
          "name": "센터명",
          "dbField": "센터명"
        },
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "format": "clickable-popup"
        },
        {
          "name": "처리번호",
          "dbField": "처리번호",
          "format": "clickable-popup"
        },
        {
          "name": "고객명",
          "dbField": "고객명"
        },
        {
          "name": "연락처",
          "dbField": "연락처",
          "format": "tel"
        },
        {
          "name": "유상여부",
          "dbField": "유상여부",
          "format": "enum(Y/N/I)"
        },
        {
          "name": "해피콜여부",
          "dbField": "해피콜여부",
          "format": "enum"
        },
        {
          "name": "처리사원",
          "dbField": "처리사원명"
        },
        {
          "name": "확인일",
          "dbField": "확인일",
          "format": "date"
        },
        {
          "name": "만족도",
          "dbField": "만족도",
          "format": "star|link"
        },
        {
          "name": "상담내용",
          "dbField": "상담내용",
          "format": "text"
        }
      ],
      "buttons": [
        {
          "label": "해피콜초기화",
          "action": "happycall_reset()"
        },
        {
          "label": "해피콜 적용",
          "action": "accept(finishrow)"
        },
        {
          "label": "엑셀다운(주석)",
          "action": "excel_download()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭",
          "popup": "popup_receipt_read.php",
          "size": "685x705"
        },
        {
          "trigger": "해피콜 입력",
          "popup": "popup_happycall.php",
          "size": "400x420"
        },
        {
          "trigger": "만족도 조회",
          "popup": "popup_satisfaction.php",
          "size": "400x400"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "popup_receipt_read.php",
        "popup_happycall.php",
        "popup_satisfaction.php"
      ]
    },
    "receipt_info": {
      "phpFile": "receipt_info.php",
      "htmlFile": "screens/receipt/receipt_info.html",
      "type": "layout",
      "title": "접수 정보 탭 컨테이너(단일뷰-상담이력)",
      "purpose": "receipt_top.php 메뉴 선택 후 우측에 상담이력 iframe을 출력하는 컨테이너",
      "workflow": "접수 > 상담(탭)",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok 여부"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        },
        {
          "name": "UID",
          "type": "hidden",
          "label": "고객번호"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g"
        }
      ],
      "tableColumns": [],
      "buttons": [],
      "popupsCalled": [],
      "ajaxCalls": [],
      "iframes": [
        {
          "name": "rct",
          "src": "receipt_consult_list.php?p_mode=g",
          "height": "715px"
        }
      ],
      "flowFrom": [
        "receipt_main.php",
        "receipt_all_1.php"
      ],
      "flowTo": [
        "receipt_consult_list.php"
      ]
    },
    "receipt_info_1": {
      "phpFile": "receipt_info_1.php",
      "htmlFile": "screens/receipt/receipt_info_1.html",
      "type": "layout",
      "title": "접수 정보 탭 컨테이너(멀티탭)",
      "purpose": "상담/서비스/현장/매뉴얼/특이사항/콜백/모바일 탭을 iframe으로 토글 표시",
      "workflow": "접수 > 상세탭",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        },
        {
          "name": "UID",
          "type": "hidden",
          "label": "고객번호"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "상담이력 탭",
          "action": "show rct iframe"
        },
        {
          "label": "서비스이력 탭",
          "action": "show svc iframe"
        },
        {
          "label": "현장정보 탭",
          "action": "show scn iframe"
        },
        {
          "label": "매뉴얼 탭",
          "action": "show mnu iframe"
        },
        {
          "label": "특이사항 탭",
          "action": "show sct iframe"
        },
        {
          "label": "콜백 탭",
          "action": "show cbl iframe"
        },
        {
          "label": "모바일 탭",
          "action": "show m iframe"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "iframes": [
        {
          "name": "rct",
          "src": "receipt_consult_list.php?p_mode=g"
        },
        {
          "name": "svc",
          "src": "receipt_service_list.php?p_mode=g"
        },
        {
          "name": "scn",
          "src": "admin_scene_list.php?p_mode=g"
        },
        {
          "name": "mnu",
          "src": "receipt_menual_list.php?p_mode=g"
        },
        {
          "name": "sct",
          "src": "receipt_memo_list.php?p_mode=g"
        },
        {
          "name": "cbl",
          "src": "receipt_callback_list.php?p_mode=g"
        },
        {
          "name": "cbl(M)",
          "src": "receipt_m_list.php?p_mode=g"
        }
      ],
      "flowFrom": [
        "receipt_all_1.php"
      ],
      "flowTo": [
        "receipt_consult_list.php",
        "receipt_service_list.php",
        "admin_scene_list.php",
        "receipt_menual_list.php",
        "receipt_memo_list.php",
        "receipt_callback_list.php",
        "receipt_m_list.php"
      ]
    },
    "receipt_m_list": {
      "phpFile": "receipt_m_list.php",
      "htmlFile": "screens/receipt/receipt_m_list.html",
      "type": "list",
      "title": "모바일 접수이력",
      "purpose": "모바일(M)로 접수된 건만 필터링하여 조회",
      "workflow": "접수 > 모바일 접수",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g=갤러리"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "format": "clickable-popup"
        },
        {
          "name": "접수일",
          "dbField": "접수일",
          "format": "date"
        },
        {
          "name": "접수구분",
          "dbField": "접수구분"
        },
        {
          "name": "접수사원",
          "dbField": "접수사원명"
        },
        {
          "name": "고객명",
          "dbField": "고객명"
        },
        {
          "name": "휴대폰",
          "dbField": "휴대폰",
          "format": "tel"
        },
        {
          "name": "연락처",
          "dbField": "연락처",
          "format": "tel"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "모델",
          "dbField": "품명"
        },
        {
          "name": "판매유형",
          "dbField": "판매유형"
        },
        {
          "name": "증상분류",
          "dbField": "장애구분명"
        },
        {
          "name": "세부증상",
          "dbField": "장애상세명"
        },
        {
          "name": "유상통보",
          "dbField": "유상통보여부"
        },
        {
          "name": "특이사항",
          "dbField": "특이사항"
        },
        {
          "name": "담당지점",
          "dbField": "담당지점명"
        },
        {
          "name": "담당기사",
          "dbField": "담당사원명"
        },
        {
          "name": "구간구분",
          "dbField": "구간구분"
        },
        {
          "name": "녹취",
          "dbField": "녹취파일",
          "format": "icon"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭",
          "popup": "receipt.php?smode=M",
          "size": "670x775"
        },
        {
          "trigger": "녹취",
          "popup": "proc_record_list_engine_1_cs.php",
          "size": "fullscreen"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_info_1.php",
        "main.php"
      ],
      "flowTo": [
        "receipt.php"
      ]
    },
    "receipt_main": {
      "phpFile": "receipt_main.php",
      "htmlFile": "screens/receipt/receipt_main.html",
      "type": "layout",
      "title": "접수 정보 프레임셋",
      "purpose": "receipt_all에서 우측에 표시되는 FRAMESET. 상단(receipt_top) + 본문(receipt_info)",
      "workflow": "접수 > 등록(우측 패널)",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        }
      ],
      "tableColumns": [],
      "buttons": [],
      "popupsCalled": [],
      "ajaxCalls": [],
      "iframes": [
        {
          "name": "r_top",
          "src": "receipt_top.php",
          "rows": "20"
        },
        {
          "name": "r_content",
          "src": "receipt_info.php",
          "rows": "*"
        }
      ],
      "flowFrom": [
        "receipt_all.php"
      ],
      "flowTo": [
        "receipt_top.php",
        "receipt_info.php"
      ]
    },
    "receipt_memo_list": {
      "phpFile": "receipt_memo_list.php",
      "htmlFile": "screens/receipt/receipt_memo_list.html",
      "type": "list",
      "title": "특이사항",
      "purpose": "장애구분별 특이사항(FAQ/노하우) 등록/조회",
      "workflow": "접수 > 특이사항",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드",
          "options": [
            "장애구분",
            "장애상세",
            "모델명",
            "등록자"
          ]
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "(seq)"
        },
        {
          "name": "장애구분",
          "dbField": "장애구분명"
        },
        {
          "name": "장애상세",
          "dbField": "장애상세명"
        },
        {
          "name": "모델명",
          "dbField": "품명"
        },
        {
          "name": "등록자",
          "dbField": "등록자명"
        },
        {
          "name": "최종수정일",
          "dbField": "수정일",
          "format": "date"
        },
        {
          "name": "조회수",
          "dbField": "조회수",
          "format": "number"
        },
        {
          "name": "비고",
          "dbField": "(상세 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "신규등록",
          "action": "goto receipt_memo_mode.php?mode=insert"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_info_1.php",
        "main.php"
      ],
      "flowTo": [
        "receipt_memo_mode.php"
      ]
    },
    "receipt_memo_mode": {
      "phpFile": "receipt_memo_mode.php",
      "htmlFile": "screens/receipt/receipt_memo_mode.html",
      "type": "form",
      "title": "특이사항 등록/수정",
      "purpose": "장애구분별 특이사항 신규 등록 또는 기존 건 수정",
      "workflow": "접수 > 특이사항 등록",
      "searchFields": [
        {
          "name": "idx",
          "type": "hidden",
          "label": "PK"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "장애구분",
          "type": "select",
          "label": "장애구분(대)"
        },
        {
          "name": "장애상세",
          "type": "select",
          "label": "세부증상(소)"
        },
        {
          "name": "품번",
          "type": "popup",
          "label": "모델",
          "popup": "popup_model_search.php"
        },
        {
          "name": "상담질문",
          "type": "textarea",
          "label": "상담질문"
        },
        {
          "name": "처리결과",
          "type": "textarea",
          "label": "처리결과"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "등록/수정",
          "action": "go_next(mode)"
        },
        {
          "label": "취소",
          "action": "go_next('cencle')"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "모델검색",
          "popup": "popup_model_search.php",
          "size": "615x500"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_memo_list.php"
      ],
      "flowTo": [
        "receipt_memo_proc.php"
      ]
    },
    "receipt_menual_list": {
      "phpFile": "receipt_menual_list.php",
      "htmlFile": "screens/receipt/receipt_menual_list.html",
      "type": "list",
      "title": "메뉴얼 리스트",
      "purpose": "제품/현장 매뉴얼(PDF) 목록. 열기 버튼으로 PDF 뷰어 팝업.",
      "workflow": "접수 > 매뉴얼",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드",
          "options": [
            "제목",
            "품번",
            "모델명",
            "현장명"
          ]
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g"
        }
      ],
      "tableColumns": [
        {
          "name": "제목",
          "dbField": "제목"
        },
        {
          "name": "품번",
          "dbField": "품번"
        },
        {
          "name": "모델명",
          "dbField": "품명"
        },
        {
          "name": "파일명",
          "dbField": "파일명"
        },
        {
          "name": "현장명",
          "dbField": "아파트명"
        },
        {
          "name": "열기",
          "dbField": "(pdf 열기 버튼)"
        },
        {
          "name": "비고",
          "dbField": "(수정/삭제 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "신규등록",
          "action": "goto receipt_menual_mode.php?mode=insert"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "열기",
          "popup": "../manual/{mno}/{file}",
          "size": "1000x800"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_info_1.php",
        "main.php"
      ],
      "flowTo": [
        "receipt_menual_mode.php"
      ]
    },
    "receipt_menual_list_link": {
      "phpFile": "receipt_menual_list_link.php",
      "htmlFile": "screens/receipt/receipt_menual_list_link.html",
      "type": "list",
      "title": "메뉴얼 리스트(링크 전용)",
      "purpose": "다른 화면에서 연결될 때 사용하는 축약형 메뉴얼 리스트 (제목 컬럼 없음)",
      "workflow": "접수 > 매뉴얼(링크)",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "품번"
        },
        {
          "name": "모델명",
          "dbField": "품명"
        },
        {
          "name": "파일명",
          "dbField": "파일명"
        },
        {
          "name": "현장명",
          "dbField": "아파트명"
        },
        {
          "name": "열기",
          "dbField": "(pdf 뷰어)"
        },
        {
          "name": "비고",
          "dbField": "(비고)"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "열기",
          "popup": "../manual/{mno}/{file}",
          "size": "1000x800"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt.php (모델정보 연동)"
      ],
      "flowTo": []
    },
    "receipt_menual_mode": {
      "phpFile": "receipt_menual_mode.php",
      "htmlFile": "screens/receipt/receipt_menual_mode.html",
      "type": "form",
      "title": "메뉴얼 등록/수정",
      "purpose": "매뉴얼 PDF 파일 신규 업로드 또는 기존 건 수정",
      "workflow": "접수 > 매뉴얼 등록",
      "searchFields": [
        {
          "name": "idx",
          "type": "hidden",
          "label": "PK"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "제목",
          "type": "text",
          "label": "제목"
        },
        {
          "name": "apt_name",
          "type": "popup",
          "label": "현장명",
          "popup": "popup_apt_search.php"
        },
        {
          "name": "model_name",
          "type": "popup",
          "label": "모델",
          "popup": "popup_model_search.php"
        },
        {
          "name": "file",
          "type": "file",
          "label": "PDF 파일"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "목록으로",
          "action": "go_next('list')"
        },
        {
          "label": "등록/수정",
          "action": "go_next(mode)"
        },
        {
          "label": "취소",
          "action": "go_next('cencle')"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "현장검색",
          "popup": "popup_apt_search.php",
          "size": "615x500"
        },
        {
          "trigger": "모델검색",
          "popup": "popup_model_search.php",
          "size": "615x500"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_menual_list.php"
      ],
      "flowTo": [
        "receipt_menual_proc.php"
      ]
    },
    "receipt_service_list": {
      "phpFile": "receipt_service_list.php",
      "htmlFile": "screens/receipt/receipt_service_list.html",
      "type": "list",
      "title": "서비스이력",
      "purpose": "처리 완료된 서비스(출장수리) 이력 조회",
      "workflow": "처리 > 서비스이력",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드",
          "options": [
            "접수번호",
            "처리번호",
            "처리지점",
            "처리사원",
            "고객명",
            "발신번호",
            "주소"
          ]
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "width": "100px",
          "format": "clickable-popup"
        },
        {
          "name": "처리번호",
          "dbField": "처리번호",
          "width": "80px",
          "format": "clickable-popup"
        },
        {
          "name": "처리일",
          "dbField": "처리일",
          "width": "90px",
          "format": "date"
        },
        {
          "name": "처리지점",
          "dbField": "처리지점명",
          "width": "120px"
        },
        {
          "name": "처리사원",
          "dbField": "처리사원명",
          "width": "90px"
        },
        {
          "name": "고객명",
          "dbField": "고객명",
          "width": "150px"
        },
        {
          "name": "요금적용",
          "dbField": "유상여부",
          "width": "90px",
          "format": "enum(Y:유상,N:무상,I:유지보수,C:취소)"
        },
        {
          "name": "청구금액",
          "dbField": "청구금액",
          "width": "90px",
          "format": "number"
        },
        {
          "name": "징구금액",
          "dbField": "징구금액",
          "width": "90px",
          "format": "number"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "link ../excel/receipt_service_list_excel.php"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭",
          "popup": "receipt.php?mode=update&smode=S",
          "size": "685x785"
        },
        {
          "trigger": "처리번호 클릭",
          "popup": "popup_svc_read.php",
          "size": "650x670"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_top.php",
        "receipt_info_1.php",
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "popup_svc_read.php"
      ]
    },
    "receipt_tk_detail_list": {
      "phpFile": "receipt_tk_detail_list.php",
      "htmlFile": "screens/receipt/receipt_tk_detail_list.html",
      "type": "list",
      "title": "TK 세대 리스트",
      "purpose": "TK(탁상) 현장의 세대부(개별 세대) 하자 리스트",
      "workflow": "TK > 세대 리스트",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "동",
          "dbField": "동"
        },
        {
          "name": "호",
          "dbField": "호"
        },
        {
          "name": "하자내용",
          "dbField": "하자내용"
        },
        {
          "name": "보수결과",
          "dbField": "보수결과"
        },
        {
          "name": "성명파일",
          "dbField": "성명파일",
          "format": "link"
        },
        {
          "name": "전유파일",
          "dbField": "전유파일",
          "format": "link"
        },
        {
          "name": "공용파일",
          "dbField": "공용파일",
          "format": "link"
        },
        {
          "name": "점검자",
          "dbField": "점검자"
        },
        {
          "name": "처리일",
          "dbField": "처리일",
          "format": "date"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "link ../excel/receipt_tk_detail_list_excel.php"
        },
        {
          "label": "목록으로",
          "action": "go_list()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "서명파일 보기",
          "popup": "../sign/TkPers/{file}",
          "size": "400x400"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_tk_list.php"
      ],
      "flowTo": []
    },
    "receipt_tk_list": {
      "phpFile": "receipt_tk_list.php",
      "htmlFile": "screens/receipt/receipt_tk_list.html",
      "type": "list",
      "title": "TK 공용 리스트",
      "purpose": "TK(탁상/특수) 현장의 공용부 하자 리스트 조회 및 엑셀 일괄업로드",
      "workflow": "TK > 공용부 리스트",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "접수건수",
          "dbField": "(count)",
          "format": "number"
        },
        {
          "name": "완료건수",
          "dbField": "(count)",
          "format": "number"
        },
        {
          "name": "처리율",
          "dbField": "(%)",
          "format": "percent"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "동",
          "dbField": "동"
        },
        {
          "name": "공용부분",
          "dbField": "공용부분"
        },
        {
          "name": "하자내용",
          "dbField": "하자내용"
        },
        {
          "name": "보수결과",
          "dbField": "보수결과"
        },
        {
          "name": "접수자",
          "dbField": "접수자"
        },
        {
          "name": "접수일자",
          "dbField": "접수일",
          "format": "date"
        },
        {
          "name": "점검자",
          "dbField": "점검자"
        },
        {
          "name": "처리일",
          "dbField": "처리일",
          "format": "date"
        },
        {
          "name": "비고",
          "dbField": "(서명파일)"
        }
      ],
      "buttons": [
        {
          "label": "샘플",
          "action": "excel_sample()"
        },
        {
          "label": "업로드",
          "action": "go_excel() - popup_receipt_tk_excel_upload.php"
        },
        {
          "label": "엑셀다운",
          "action": "link ../excel/receipt_tk_list_excel.php"
        },
        {
          "label": "목록으로",
          "action": "go_list()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "업로드",
          "popup": "popup_receipt_tk_excel_upload.php",
          "size": "520x320"
        },
        {
          "trigger": "서명파일",
          "popup": "../sign/TkPubl/{file}",
          "size": "400x400"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_tk_main_list.php"
      ],
      "flowTo": [
        "receipt_tk_detail_list.php"
      ]
    },
    "receipt_tk_main_list": {
      "phpFile": "receipt_tk_main_list.php",
      "htmlFile": "screens/receipt/receipt_tk_main_list.html",
      "type": "list",
      "title": "TK접수",
      "purpose": "TK 현장 단위 메인 리스트. 공용부/세대부 처리율 요약.",
      "workflow": "TK > 접수",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "시작일"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "종료일"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "순번",
          "dbField": "(seq)"
        },
        {
          "name": "현장명",
          "dbField": "현장명"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "공용부전체",
          "dbField": "(count)"
        },
        {
          "name": "공용부완료",
          "dbField": "(count)"
        },
        {
          "name": "처리율",
          "dbField": "(%)",
          "format": "percent"
        },
        {
          "name": "세대부전체",
          "dbField": "(count)"
        },
        {
          "name": "세대부완료",
          "dbField": "(count)"
        },
        {
          "name": "처리율",
          "dbField": "(%)",
          "format": "percent"
        },
        {
          "name": "상태",
          "dbField": "상태"
        },
        {
          "name": "입력년도",
          "dbField": "입력년도"
        },
        {
          "name": "비고",
          "dbField": "(비고)"
        },
        {
          "name": "설정",
          "dbField": "(TK 설정 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "샘플",
          "action": "excel_sample() (주석)"
        },
        {
          "label": "업로드",
          "action": "go_excel()"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "receipt_tk_list.php",
        "receipt_tk_setting.php"
      ]
    },
    "receipt_tk_setting": {
      "phpFile": "receipt_tk_setting.php",
      "htmlFile": "screens/receipt/receipt_tk_setting.html",
      "type": "form",
      "title": "TK 설정",
      "purpose": "TK 현장별 동/담당기사/담당자 설정 - 메인 설정 화면",
      "workflow": "TK > 설정",
      "searchFields": [
        {
          "name": "apt_no",
          "type": "hidden",
          "label": "아파트코드"
        },
        {
          "name": "dong",
          "type": "text",
          "label": "동"
        },
        {
          "name": "tkman",
          "type": "popup",
          "label": "TK담당기사"
        },
        {
          "name": "tkuser",
          "type": "popup",
          "label": "TK담당자"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "동 추가하기",
          "action": "add_dong()"
        },
        {
          "label": "목록으로",
          "action": "list_go()"
        },
        {
          "label": "공용부 설정",
          "action": "popup_tk_G.php"
        },
        {
          "label": "세대부 설정",
          "action": "popup_tk_S.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "공용부 설정",
          "popup": "popup_tk_G.php",
          "size": "600x650"
        },
        {
          "trigger": "세대부 설정",
          "popup": "popup_tk_S.php",
          "size": "600x650"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_tk_main_list.php"
      ],
      "flowTo": [
        "receipt_tk_setting1.php",
        "receipt_tk_setting2.php"
      ]
    },
    "receipt_tk_setting1": {
      "phpFile": "receipt_tk_setting1.php",
      "htmlFile": "screens/receipt/receipt_tk_setting1.html",
      "type": "form",
      "title": "TK 설정 - variant 1",
      "purpose": "receipt_tk_setting의 축약/대체 변형 (185 라인). 동 단위 설정.",
      "workflow": "TK > 설정(v1)",
      "searchFields": [
        {
          "name": "apt_no",
          "type": "hidden",
          "label": "아파트코드"
        },
        {
          "name": "dong",
          "type": "text",
          "label": "동"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "저장",
          "action": "submit"
        },
        {
          "label": "목록으로",
          "action": "list_go()"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_tk_setting.php"
      ],
      "flowTo": []
    },
    "receipt_tk_setting2": {
      "phpFile": "receipt_tk_setting2.php",
      "htmlFile": "screens/receipt/receipt_tk_setting2.html",
      "type": "form",
      "title": "TK 설정 - variant 2",
      "purpose": "receipt_tk_setting의 두번째 변형 (168 라인)",
      "workflow": "TK > 설정(v2)",
      "searchFields": [
        {
          "name": "apt_no",
          "type": "hidden",
          "label": "아파트코드"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "저장",
          "action": "submit"
        },
        {
          "label": "목록으로",
          "action": "list_go()"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_tk_setting.php"
      ],
      "flowTo": []
    },
    "receipt_tk_setting3": {
      "phpFile": "receipt_tk_setting3.php",
      "htmlFile": "screens/receipt/receipt_tk_setting3.html",
      "type": "form",
      "title": "TK 설정 - variant 3 (빈 파일)",
      "purpose": "예약된 슬롯이지만 원본 PHP는 0 라인(빈 파일). 향후 확장용.",
      "workflow": "TK > 설정(v3)",
      "searchFields": [],
      "tableColumns": [],
      "buttons": [],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [],
      "flowTo": []
    },
    "receipt_top": {
      "phpFile": "receipt_top.php",
      "htmlFile": "screens/receipt/receipt_top.html",
      "type": "layout",
      "title": "접수 상단 탭 바",
      "purpose": "현장정보/상담이력/서비스이력/매뉴얼/특이사항/콜백/모바일 - 7개 탭 메뉴 버튼 바. move_menu()로 우측 프레임 href 변경.",
      "workflow": "접수 > 탭 네비게이션",
      "searchFields": [
        {
          "name": "call",
          "type": "hidden",
          "label": "call=ok"
        },
        {
          "name": "cid_num",
          "type": "hidden",
          "label": "발신번호"
        },
        {
          "name": "p_mode",
          "type": "hidden",
          "label": "g"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "현장정보",
          "action": "move_menu(1) -> admin_scene_list|admin_scene_detail"
        },
        {
          "label": "상담이력",
          "action": "move_menu(2) -> receipt_consult_list.php"
        },
        {
          "label": "서비스이력",
          "action": "move_menu(3) -> receipt_service_list.php"
        },
        {
          "label": "매뉴얼",
          "action": "move_menu(4) -> receipt_menual_list.php"
        },
        {
          "label": "특이사항",
          "action": "move_menu(5) -> receipt_memo_list.php"
        },
        {
          "label": "콜백",
          "action": "move_menu(6) -> receipt_callback_list.php"
        },
        {
          "label": "모바일",
          "action": "move_menu(7) -> receipt_m_list.php"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_main.php"
      ],
      "flowTo": [
        "admin_scene_list.php",
        "admin_scene_detail.php",
        "receipt_consult_list.php",
        "receipt_service_list.php",
        "receipt_menual_list.php",
        "receipt_memo_list.php",
        "receipt_callback_list.php",
        "receipt_m_list.php"
      ]
    },
    "receipt_year": {
      "phpFile": "receipt_year.php",
      "htmlFile": "screens/receipt/receipt_year.html",
      "type": "form",
      "title": "연차 접수",
      "purpose": "연차(건설사 AS 의무기간) 접수 등록/수정 팝업 폼",
      "workflow": "연차 > 접수",
      "searchFields": [
        {
          "name": "num",
          "type": "hidden",
          "label": "접수번호"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "idx",
          "type": "hidden",
          "label": "PK"
        },
        {
          "name": "연차",
          "type": "select",
          "label": "연차"
        },
        {
          "name": "접수일자",
          "type": "date",
          "label": "접수일"
        },
        {
          "name": "기준일",
          "type": "date",
          "label": "기준일"
        },
        {
          "name": "고객번호",
          "type": "hidden",
          "label": "고객번호"
        },
        {
          "name": "고객명",
          "type": "text",
          "label": "고객명"
        },
        {
          "name": "연락처",
          "type": "text",
          "label": "연락처"
        },
        {
          "name": "휴대폰",
          "type": "text",
          "label": "휴대폰"
        },
        {
          "name": "우편번호",
          "type": "text",
          "label": "우편번호"
        },
        {
          "name": "주소",
          "type": "text",
          "label": "주소"
        },
        {
          "name": "상세주소",
          "type": "text",
          "label": "상세주소"
        },
        {
          "name": "동",
          "type": "text",
          "label": "동"
        },
        {
          "name": "호",
          "type": "text",
          "label": "호"
        },
        {
          "name": "아파트코드",
          "type": "popup",
          "label": "아파트명",
          "popup": "popup_apt_search.php"
        },
        {
          "name": "품번",
          "type": "popup",
          "label": "모델",
          "popup": "popup_model_search.php"
        },
        {
          "name": "장애구분",
          "type": "select",
          "label": "증상분류"
        },
        {
          "name": "장애상세",
          "type": "select",
          "label": "세부증상"
        },
        {
          "name": "특이사항",
          "type": "textarea",
          "label": "특이사항"
        },
        {
          "name": "기사메모",
          "type": "text",
          "label": "기사메모"
        },
        {
          "name": "담당지점",
          "type": "select",
          "label": "담당지점"
        },
        {
          "name": "담당사원",
          "type": "select",
          "label": "담당기사"
        },
        {
          "name": "방문예약일",
          "type": "date",
          "label": "방문예약일"
        },
        {
          "name": "유상통보여부",
          "type": "radio",
          "label": "유상통보"
        },
        {
          "name": "상담내용",
          "type": "textarea",
          "label": "상담내용"
        },
        {
          "name": "구간구분",
          "type": "radio",
          "label": "구간구분"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "저장",
          "action": "submit to receipt_year_proc.php"
        },
        {
          "label": "기사메모",
          "action": "window.open receipt_g_memo.php 620x600"
        },
        {
          "label": "닫기",
          "action": "self.close()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "기사메모",
          "popup": "receipt_g_memo.php",
          "size": "620x600"
        },
        {
          "trigger": "아파트검색",
          "popup": "popup_apt_search.php"
        },
        {
          "trigger": "모델검색",
          "popup": "popup_model_search.php"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_year_list.php",
        "receipt_consult_list.php"
      ],
      "flowTo": [
        "receipt_year_proc.php",
        "receipt_g_memo.php"
      ]
    },
    "receipt_year_list": {
      "phpFile": "receipt_year_list.php",
      "htmlFile": "screens/receipt/receipt_year_list.html",
      "type": "list",
      "title": "연차 접수 리스트",
      "purpose": "연차 접수건 목록. 엑셀 샘플 다운로드/업로드로 대량 등록 지원.",
      "workflow": "연차 > 접수 리스트",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "tab_idx",
          "type": "hidden",
          "label": "탭 인덱스"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "format": "clickable-popup"
        },
        {
          "name": "공종명",
          "dbField": "공종명"
        },
        {
          "name": "연차",
          "dbField": "연차"
        },
        {
          "name": "구분",
          "dbField": "구분"
        },
        {
          "name": "접수일",
          "dbField": "접수일",
          "format": "date"
        },
        {
          "name": "기준일",
          "dbField": "기준일",
          "format": "date"
        },
        {
          "name": "접수사원",
          "dbField": "접수사원명"
        },
        {
          "name": "고객명",
          "dbField": "고객명"
        },
        {
          "name": "연락처",
          "dbField": "연락처",
          "format": "tel"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "상세주소",
          "dbField": "상세주소"
        },
        {
          "name": "모델",
          "dbField": "품명"
        },
        {
          "name": "증상분류",
          "dbField": "장애구분명"
        },
        {
          "name": "세부증상",
          "dbField": "장애상세명"
        },
        {
          "name": "특이사항",
          "dbField": "특이사항"
        },
        {
          "name": "담당지점",
          "dbField": "담당지점명"
        },
        {
          "name": "담당기사",
          "dbField": "담당사원명"
        },
        {
          "name": "비고",
          "dbField": "(수정 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "연차접수",
          "action": "update_next('','insert') -> receipt_year.php"
        },
        {
          "label": "샘플_연차",
          "action": "excel_sample()"
        },
        {
          "label": "샘플_팩스",
          "action": "excel_sample_fax()"
        },
        {
          "label": "업로드",
          "action": "go_excel() -> popup_receipt_excel_upload.php"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "업로드",
          "popup": "popup_receipt_excel_upload.php",
          "size": "500x320"
        },
        {
          "trigger": "접수번호 클릭",
          "popup": "receipt_year.php",
          "size": "710x755"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "receipt_year.php",
        "receipt_year_mode.php"
      ]
    },
    "receipt_year_mode": {
      "phpFile": "receipt_year_mode.php",
      "htmlFile": "screens/receipt/receipt_year_mode.html",
      "type": "form",
      "title": "연차접수 등록/수정(처리 포함)",
      "purpose": "연차 접수 등록/수정 + 처리(자재, 공임비, 출장비, 파일 등) 포함 대형 폼 (1000+ 라인)",
      "workflow": "연차 > 접수/처리",
      "searchFields": [
        {
          "name": "num",
          "type": "hidden",
          "label": "접수번호"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "모델명",
          "type": "popup",
          "label": "모델"
        },
        {
          "name": "공종명",
          "type": "select",
          "label": "공종명"
        },
        {
          "name": "처리여부",
          "type": "radio",
          "label": "처리여부"
        },
        {
          "name": "특이사항",
          "type": "textarea",
          "label": "특이사항"
        },
        {
          "name": "기사메모",
          "type": "textarea",
          "label": "기사메모(readonly)"
        },
        {
          "name": "처리번호",
          "type": "hidden",
          "label": "처리번호"
        },
        {
          "name": "입력일",
          "type": "date",
          "label": "입력일"
        },
        {
          "name": "입력사원",
          "type": "text",
          "label": "입력사원"
        },
        {
          "name": "처리 고객명",
          "type": "text",
          "label": "처리 고객명"
        },
        {
          "name": "특별처리",
          "type": "checkbox",
          "label": "특별처리"
        },
        {
          "name": "출고위치",
          "type": "select",
          "label": "출고위치"
        },
        {
          "name": "요금적용",
          "type": "select",
          "label": "요금적용"
        },
        {
          "name": "자재추가",
          "type": "popup",
          "label": "자재 추가"
        },
        {
          "name": "기사의견",
          "type": "textarea",
          "label": "기사의견"
        },
        {
          "name": "부가세",
          "type": "number",
          "label": "부가세"
        },
        {
          "name": "공임비",
          "type": "number",
          "label": "공임비"
        },
        {
          "name": "출장비",
          "type": "number",
          "label": "출장비"
        },
        {
          "name": "파일명",
          "type": "file",
          "label": "파일명"
        }
      ],
      "tableColumns": [
        {
          "name": "모델명/공종명/처리여부/처리번호/입력일/입력사원",
          "dbField": "상단 요약 테이블"
        },
        {
          "name": "처리 고객명/특별처리/출고위치/요금적용/자재추가/기사의견/부가세/공임비/출장비/파일명",
          "dbField": "처리정보 테이블"
        }
      ],
      "buttons": [
        {
          "label": "메모보기",
          "action": "memo_btn(접수번호,처리완료)"
        },
        {
          "label": "작성하기",
          "action": "memo_btn(접수번호,처리완료)"
        },
        {
          "label": "메모 등록",
          "action": "message_next()"
        },
        {
          "label": "메모 수정",
          "action": "message_update()"
        },
        {
          "label": "저장(insert|update)",
          "action": "go_next(mode,complete,complete1)"
        },
        {
          "label": "취소",
          "action": "go_next('cencle','')"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "기사메모",
          "popup": "receipt_g_memo.php",
          "size": "620x600"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "receipt_year_list.php",
        "resolve_year_list.php"
      ],
      "flowTo": [
        "receipt_year_proc.php",
        "receipt_g_memo.php"
      ]
    },
    "resolve_year_list": {
      "phpFile": "resolve_year_list.php",
      "htmlFile": "screens/receipt/resolve_year_list.html",
      "type": "list",
      "title": "연차 처리 리스트",
      "purpose": "연차 접수 중 처리(기사 출동/수리) 대상 목록. 기사메모/방문예약일 컬럼 추가.",
      "workflow": "연차 > 처리 리스트",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "format": "clickable-popup"
        },
        {
          "name": "공종명",
          "dbField": "공종명"
        },
        {
          "name": "연차",
          "dbField": "연차"
        },
        {
          "name": "접수일",
          "dbField": "접수일",
          "format": "date"
        },
        {
          "name": "기준일",
          "dbField": "기준일",
          "format": "date"
        },
        {
          "name": "접수사원",
          "dbField": "접수사원명"
        },
        {
          "name": "고객명",
          "dbField": "고객명"
        },
        {
          "name": "연락처",
          "dbField": "연락처",
          "format": "tel"
        },
        {
          "name": "아파트명",
          "dbField": "아파트명"
        },
        {
          "name": "상세주소",
          "dbField": "상세주소"
        },
        {
          "name": "모델",
          "dbField": "품명"
        },
        {
          "name": "증상분류",
          "dbField": "장애구분명"
        },
        {
          "name": "세부증상",
          "dbField": "장애상세명"
        },
        {
          "name": "특이사항",
          "dbField": "특이사항"
        },
        {
          "name": "기사메모",
          "dbField": "기사메모"
        },
        {
          "name": "담당지점",
          "dbField": "담당지점명"
        },
        {
          "name": "담당기사",
          "dbField": "담당사원명"
        },
        {
          "name": "방문예약일",
          "dbField": "방문예약일",
          "format": "date"
        },
        {
          "name": "비고",
          "dbField": "(처리 버튼)"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "link ../excel/resolve_year_list_excel.php"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭",
          "popup": "resolve_year_mode.php",
          "size": "710x755"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "resolve_year_mode.php",
        "resolve_year_mode1.php"
      ]
    },
    "resolve_year_mode": {
      "phpFile": "resolve_year_mode.php",
      "htmlFile": "screens/receipt/resolve_year_mode.html",
      "type": "form",
      "title": "연차처리 폼(풀 버전)",
      "purpose": "연차 접수건 처리 입력(요금, 자재, 공임비, 출장비, 파일 포함) - 1041 라인 풀 버전",
      "workflow": "연차 > 처리 등록",
      "searchFields": [
        {
          "name": "num",
          "type": "hidden",
          "label": "접수번호"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "모델명",
          "type": "popup",
          "label": "모델"
        },
        {
          "name": "공종명",
          "type": "select",
          "label": "공종명"
        },
        {
          "name": "처리여부",
          "type": "radio",
          "label": "처리여부"
        },
        {
          "name": "처리번호",
          "type": "hidden",
          "label": "처리번호"
        },
        {
          "name": "입력일",
          "type": "date",
          "label": "입력일"
        },
        {
          "name": "입력사원",
          "type": "text",
          "label": "입력사원"
        },
        {
          "name": "처리 고객명",
          "type": "text",
          "label": "처리 고객명"
        },
        {
          "name": "특별처리",
          "type": "checkbox",
          "label": "특별처리"
        },
        {
          "name": "출고위치",
          "type": "select",
          "label": "출고위치"
        },
        {
          "name": "요금적용",
          "type": "radio",
          "label": "요금적용"
        },
        {
          "name": "자재추가",
          "type": "popup",
          "label": "자재 추가"
        },
        {
          "name": "기사의견",
          "type": "textarea",
          "label": "기사의견"
        },
        {
          "name": "부가세",
          "type": "number",
          "label": "부가세"
        },
        {
          "name": "공임비",
          "type": "number",
          "label": "공임비"
        },
        {
          "name": "출장비",
          "type": "number",
          "label": "출장비"
        },
        {
          "name": "파일명",
          "type": "file",
          "label": "파일 첨부"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "메모보기/작성하기",
          "action": "memo_btn()"
        },
        {
          "label": "등록/수정",
          "action": "go_next(mode,complete,complete1)"
        },
        {
          "label": "취소",
          "action": "go_next('cencle','')"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "기사메모",
          "popup": "receipt_g_memo.php",
          "size": "620x600"
        }
      ],
      "ajaxCalls": [],
      "flowFrom": [
        "resolve_year_list.php"
      ],
      "flowTo": [
        "resolve_year_proc.php",
        "receipt_g_memo.php"
      ]
    },
    "resolve_year_mode1": {
      "phpFile": "resolve_year_mode1.php",
      "htmlFile": "screens/receipt/resolve_year_mode1.html",
      "type": "form",
      "title": "연차처리 폼(경량 버전)",
      "purpose": "resolve_year_mode의 경량 변형 (552 라인). 지연사유 컬럼 활성화, 상단 요약 구조 동일.",
      "workflow": "연차 > 처리 등록(경량)",
      "searchFields": [
        {
          "name": "num",
          "type": "hidden",
          "label": "접수번호"
        },
        {
          "name": "mode",
          "type": "hidden",
          "label": "insert|update"
        },
        {
          "name": "모델명",
          "type": "popup",
          "label": "모델"
        },
        {
          "name": "공종명",
          "type": "select",
          "label": "공종명"
        },
        {
          "name": "처리여부",
          "type": "radio",
          "label": "처리여부"
        },
        {
          "name": "지연사유",
          "type": "textarea",
          "label": "지연사유"
        },
        {
          "name": "출고위치",
          "type": "select",
          "label": "출고위치"
        },
        {
          "name": "요금적용",
          "type": "radio",
          "label": "요금적용"
        },
        {
          "name": "공임비",
          "type": "number",
          "label": "공임비"
        },
        {
          "name": "출장비",
          "type": "number",
          "label": "출장비"
        },
        {
          "name": "기사의견",
          "type": "textarea",
          "label": "기사의견"
        },
        {
          "name": "파일명",
          "type": "file",
          "label": "파일 첨부"
        }
      ],
      "tableColumns": [],
      "buttons": [
        {
          "label": "등록/수정",
          "action": "go_next(mode)"
        },
        {
          "label": "취소",
          "action": "go_next('cencle')"
        }
      ],
      "popupsCalled": [],
      "ajaxCalls": [],
      "flowFrom": [
        "resolve_year_list.php"
      ],
      "flowTo": [
        "resolve_year_proc.php"
      ]
    },
    "svc_list": {
      "phpFile": "svc_list.php",
      "htmlFile": "screens/receipt/svc_list.html",
      "type": "list",
      "title": "접수 처리 리스트",
      "purpose": "전체 접수+처리 통합 리스트. 28개 세부 검색 필드, 전체/미처리/처리완료 라디오 필터.",
      "workflow": "처리 > 통합 리스트",
      "searchFields": [
        {
          "name": "baseday",
          "type": "select",
          "label": "조회조건(접수일/처리일)",
          "options": [
            "접수일",
            "처리일"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "시작일"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "종료일"
        },
        {
          "name": "svc_check",
          "type": "radio",
          "label": "처리상태",
          "options": [
            "svc0:전체",
            "svc2:미처리",
            "svc1:처리완료"
          ]
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색필드(28종)",
          "options": [
            "1:접수번호",
            "2:처리번호",
            "3:접수구분",
            "4:고객명",
            "5:발신번호",
            "6:연락처",
            "7:주소",
            "8:CS품명",
            "9:판매유형",
            "10:증상분류",
            "11:세부증상",
            "12:처리분류",
            "13:처리상세",
            "14:원인분류",
            "15:원인상세",
            "16:특이사항",
            "29:기사메모",
            "17:담당지점",
            "18:담당기사",
            "19:기사연락처",
            "20:구간구분",
            "21:처리일",
            "22:처리지점",
            "23:처리사원",
            "24:처리내용",
            "25:요금적용",
            "26:청구금액",
            "27:징구금액",
            "28:접수사원"
          ]
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "검색어"
        },
        {
          "name": "rctgbn",
          "type": "radio",
          "label": "접수구분",
          "options": [
            "Y:연차",
            "T:전화",
            "P:우편",
            "F:팩스",
            "L:LED",
            "S:상담",
            "M:모바일"
          ]
        },
        {
          "name": "selgbn",
          "type": "radio",
          "label": "판매유형",
          "options": [
            "민영",
            "특판",
            "시판"
          ]
        },
        {
          "name": "gugan",
          "type": "radio",
          "label": "구간구분",
          "options": [
            "1구간",
            "2구간",
            "3구간"
          ]
        },
        {
          "name": "costgbn",
          "type": "radio",
          "label": "요금적용",
          "options": [
            "Y:유상",
            "N:무상",
            "I:유지보수"
          ]
        }
      ],
      "tableColumns": [
        {
          "name": "(동적 생성 - svc_list DAO에서 echo)",
          "dbField": "접수번호/처리번호/접수일/처리일/접수구분/고객명/연락처/주소/아파트명/모델/증상/담당지점/담당기사/처리지점/처리사원/요금적용/청구금액/징구금액 등"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download() or svc_list_excel.php"
        },
        {
          "label": "검색",
          "action": "search_next()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "접수번호 클릭",
          "popup": "receipt.php?mode=update",
          "size": "685x785"
        },
        {
          "trigger": "처리번호 클릭",
          "popup": "popup_svc_read.php",
          "size": "650x670"
        }
      ],
      "ajaxCalls": [
        {
          "trigger": "검색필드 변경",
          "url": "select_change(value)",
          "mode": "show/hide dependent radio groups"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "receipt.php",
        "popup_svc_read.php"
      ]
    }
  },
  "store": {
    "store_doing_list": {
      "phpFile": "store_doing_list.php",
      "htmlFile": "screens/store/store_doing_list.html",
      "type": "list",
      "title": "진행상황 - 본사",
      "purpose": "수리의뢰 진행상황(접수완료/수리중/수리완료)을 본사에서 조회",
      "workflow": "자재관리 > 진행상황 > 본사용",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "1:접수완료",
            "2:수리중",
            "3:수리완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "center_id",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "접수번호",
          "width": 70
        },
        {
          "name": "접수일",
          "dbField": "접수일",
          "width": 80
        },
        {
          "name": "센터명",
          "dbField": "센터명",
          "width": 120
        },
        {
          "name": "고객명",
          "dbField": "고객명",
          "width": 120
        },
        {
          "name": "코드번호",
          "dbField": "모델품번",
          "width": 100
        },
        {
          "name": "모델명",
          "dbField": "모델명",
          "width": 250
        },
        {
          "name": "신청사원",
          "dbField": "신청사원",
          "width": 80
        },
        {
          "name": "S/N",
          "dbField": "시리얼번호",
          "width": 100
        },
        {
          "name": "송장번호",
          "dbField": "송장번호",
          "width": 100
        },
        {
          "name": "청구금액",
          "dbField": "청구금액",
          "width": 80
        },
        {
          "name": "진행상태",
          "dbField": "처리상태",
          "width": 100,
          "render": "1:접수완료(red) 2:수리중(yellow) 3:수리완료(green)"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download -> ../excel/store_doing_list.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "rowAction": {
        "event": "dblclick",
        "action": "update_mode(접수번호,'update') -> store_doing_mode.php"
      },
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_doing_mode.php"
      ]
    },
    "store_doing_list_center": {
      "phpFile": "store_doing_list_center.php",
      "htmlFile": "screens/store/store_doing_list_center.html",
      "type": "list",
      "title": "[센터명] 진행상황",
      "purpose": "수리의뢰 진행상황을 센터에서 읽기전용으로 조회",
      "workflow": "자재관리 > 진행상황 > 센터용",
      "searchFields": [
        {
          "name": "keyfield",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "접수완료",
            "수리중",
            "수리완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호"
        },
        {
          "name": "접수일"
        },
        {
          "name": "센터명"
        },
        {
          "name": "고객명"
        },
        {
          "name": "코드번호",
          "dbField": "모델품번"
        },
        {
          "name": "모델명"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "S/N",
          "dbField": "시리얼번호"
        },
        {
          "name": "송장번호"
        },
        {
          "name": "청구금액"
        },
        {
          "name": "진행상태",
          "dbField": "처리상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download -> ../excel/store_doing_list_center.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "rowAction": {
        "event": "dblclick",
        "action": "update_mode(접수번호,'update',smode=read) -> store_doing_mode.php"
      },
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_doing_mode.php"
      ]
    },
    "store_doing_mode": {
      "phpFile": "store_doing_mode.php",
      "htmlFile": "screens/store/store_doing_mode.html",
      "type": "detail",
      "title": "수리의뢰 상세",
      "purpose": "수리의뢰 상세 조회/처리 (처리내용, 진행상황 변경)",
      "workflow": "자재관리 > 진행상황 > 상세페이지",
      "formFields": [
        {
          "name": "고객명",
          "type": "text",
          "readonly": true
        },
        {
          "name": "연락처",
          "type": "text",
          "readonly": true
        },
        {
          "name": "접수일",
          "type": "text",
          "readonly": true,
          "label": "신청일"
        },
        {
          "name": "센터명",
          "type": "text",
          "readonly": true,
          "label": "신청센터"
        },
        {
          "name": "우편번호/주소/상세주소",
          "type": "composite"
        },
        {
          "name": "모델품번",
          "type": "text",
          "label": "코드번호",
          "readonly": true
        },
        {
          "name": "모델명",
          "type": "text",
          "readonly": true
        },
        {
          "name": "의뢰방법",
          "type": "display",
          "options": [
            "1:택배(송장번호)",
            "2:방문(방문일자)"
          ]
        },
        {
          "name": "시리얼번호",
          "type": "text",
          "label": "일련번호"
        },
        {
          "name": "유무상",
          "type": "display",
          "options": [
            "1:유상",
            "2:무상",
            "3:유지보수"
          ]
        },
        {
          "name": "pay_won_modify",
          "type": "text",
          "label": "청구금액",
          "conditional": "user_agency=11323 AND 처리상태=1"
        },
        {
          "name": "불량증상",
          "type": "text"
        },
        {
          "name": "특이사항",
          "type": "text"
        },
        {
          "name": "처리일",
          "type": "text",
          "label": "수리완료일자",
          "conditional": "처리상태=3"
        },
        {
          "name": "content",
          "type": "textarea",
          "label": "처리내용",
          "rows": 6,
          "cols": 120
        },
        {
          "name": "status",
          "type": "select",
          "label": "진행상황",
          "options": [
            "1:접수완료",
            "2:수리중",
            "3:수리완료"
          ]
        }
      ],
      "buttons": [
        {
          "label": "인쇄",
          "action": "print_doing -> store_doing_mode_print.php (popup 800x600)"
        },
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "변경처리",
          "action": "req_mode('update') -> store_doing_proc.php",
          "conditional": "smode!=read"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "인쇄",
          "popup": "store_doing_mode_print.php"
        }
      ],
      "flowFrom": [
        "store_doing_list.php",
        "store_doing_list_center.php"
      ],
      "flowTo": [
        "store_doing_proc.php",
        "store_doing_mode_print.php"
      ]
    },
    "store_doing_mode_print": {
      "phpFile": "store_doing_mode_print.php",
      "htmlFile": "screens/store/store_doing_mode_print.html",
      "type": "print",
      "title": "수리의뢰 (프린트)",
      "purpose": "수리의뢰 상세를 인쇄용 레이아웃으로 출력",
      "workflow": "자재관리 > 진행상황 > 인쇄",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호"
        },
        {
          "name": "고객명"
        },
        {
          "name": "연락처"
        },
        {
          "name": "신청일",
          "dbField": "접수일"
        },
        {
          "name": "신청센터",
          "dbField": "센터명"
        },
        {
          "name": "주소"
        },
        {
          "name": "코드번호",
          "dbField": "모델품번"
        },
        {
          "name": "모델명"
        },
        {
          "name": "의뢰방법"
        },
        {
          "name": "송장번호/방문일자"
        },
        {
          "name": "일련번호",
          "dbField": "시리얼번호"
        },
        {
          "name": "유무상"
        },
        {
          "name": "청구금액"
        },
        {
          "name": "불량증상"
        },
        {
          "name": "처리내용"
        },
        {
          "name": "특이사항"
        },
        {
          "name": "수리완료일자",
          "dbField": "처리일"
        },
        {
          "name": "진행상황",
          "dbField": "처리상태"
        }
      ],
      "buttons": [
        {
          "label": "인쇄",
          "action": "window.print()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store_doing_mode.php"
      ],
      "flowTo": []
    },
    "store_price_list": {
      "phpFile": "store_price_list.php",
      "htmlFile": "screens/store/store_price_list.html",
      "type": "list",
      "title": "자재신청 사용이력",
      "purpose": "자재신청 사용/반납/정산 이력을 조회. 11323(본사)는 단가 정산 가능",
      "workflow": "재고 > 사용이력",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "반납상태",
          "options": [
            "전체",
            "1:미반납",
            "2:반납중",
            "3:반납완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "state2",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "1:접수자재",
            "2:일반자재"
          ]
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터",
          "conditional": "user_agency=11323"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명",
          "dbField": "신청지점명",
          "click": "go_center -> store_price_release.php"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원",
          "dbField": "신청사원명"
        },
        {
          "name": "신청구분"
        },
        {
          "name": "코드번호",
          "dbField": "모델품번/접수품번"
        },
        {
          "name": "모델명"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명",
          "dbField": "CS품명"
        },
        {
          "name": "유/무상",
          "dbField": "유무"
        },
        {
          "name": "신청수량",
          "dbField": "신청량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량",
          "dbField": "신청잔량"
        },
        {
          "name": "출고상태",
          "render": "1,4:미출고 2,5:출고중 3:출고완료"
        },
        {
          "name": "반납수량",
          "dbField": "반납량"
        },
        {
          "name": "미반납량",
          "dbField": "반납잔량"
        },
        {
          "name": "반납상태",
          "render": "1:미반납 4:반납완료 else:반납중"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download -> ../excel/store_price_list.php"
        },
        {
          "label": "단가 정산",
          "action": "price_next -> ajax mode=price_store",
          "conditional": "user_agency=11323"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_price_release.php"
      ]
    },
    "store_price_release": {
      "phpFile": "store_price_release.php",
      "htmlFile": "screens/store/store_price_release.html",
      "type": "detail",
      "title": "자재 사용이력 상세",
      "purpose": "개별 자재신청 건의 사용이력 상세 조회. 센터 청구금액 확인 처리",
      "workflow": "자재관리 > 사용이력 > 상세보기",
      "formFields": [
        {
          "name": "req_no",
          "label": "신청번호"
        },
        {
          "name": "req_dt",
          "label": "신청일자"
        },
        {
          "name": "req_center",
          "label": "신청센터"
        },
        {
          "name": "req_center_id",
          "label": "센터코드"
        },
        {
          "name": "ps_agent",
          "label": "신청사원"
        },
        {
          "name": "gubun_type_str",
          "label": "구분사항"
        },
        {
          "name": "코드번호/모델명",
          "conditional": "신청구분=1"
        }
      ],
      "tableColumns": [
        {
          "name": "출고일"
        },
        {
          "name": "반납일"
        },
        {
          "name": "코드번호",
          "conditional": "신청구분=2"
        },
        {
          "name": "모델명",
          "conditional": "신청구분=2"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "유/무상",
          "dbField": "유무"
        },
        {
          "name": "신청",
          "dbField": "신청량"
        },
        {
          "name": "출고",
          "dbField": "출고수량"
        },
        {
          "name": "반납",
          "dbField": "반납량"
        },
        {
          "name": "미반납",
          "dbField": "반납잔량"
        },
        {
          "name": "양품"
        },
        {
          "name": "불량"
        },
        {
          "name": "반납상태"
        },
        {
          "name": "반납가A",
          "dbField": "센터반납가A"
        },
        {
          "name": "미반납가A",
          "dbField": "센터미반납가A"
        },
        {
          "name": "청구금액"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download -> ../excel/store_price_release.php"
        },
        {
          "label": "금액확인완료",
          "action": "center_ok -> ajax mode=price_center_ok",
          "conditional": "본사승인=1 AND 센터확인!=1 AND user_agency!=11323"
        },
        {
          "label": "목록으로",
          "action": "list_go -> store_price_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store_price_list.php"
      ],
      "flowTo": [
        "store_price_list.php"
      ]
    },
    "store_receipt_list": {
      "phpFile": "store_receipt_list.php",
      "htmlFile": "screens/store/store_receipt_list.html",
      "type": "list",
      "title": "접수 자재 신청",
      "purpose": "CS접수 리스트에서 자재 신청으로 연결되는 진입 화면",
      "workflow": "재고 > 접수리스트",
      "searchFields": [
        {
          "name": "psgbn",
          "type": "select",
          "label": "처리구분",
          "options": [
            "전체",
            "T:처리완료",
            "F:미처리"
          ]
        },
        {
          "name": "ask",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "S:신청완료",
            "R:신청중",
            "K:신청대기"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색조건",
          "options": [
            "접수번호",
            "고객명",
            "주소",
            "CS품명",
            "판매유형",
            "증상분류",
            "세부증상",
            "처리분류",
            "처리상세",
            "원인분류",
            "원인상세",
            "특이사항",
            "담당지점",
            "담당기사",
            "기사연락처",
            "구간",
            "처리일",
            "처리지점",
            "처리사원",
            "요금적용",
            "청구금액",
            "징구금액"
          ]
        },
        {
          "name": "keyword",
          "type": "text"
        },
        {
          "name": "selgbn",
          "type": "radio",
          "label": "판매유형",
          "options": [
            "민영",
            "특판",
            "시판"
          ],
          "conditional": "keyfield=9"
        },
        {
          "name": "gugan",
          "type": "radio",
          "label": "구간",
          "options": [
            "1구간",
            "2구간",
            "3구간"
          ],
          "conditional": "keyfield=20"
        },
        {
          "name": "costgbn",
          "type": "radio",
          "label": "요금적용",
          "options": [
            "Y:유상",
            "N:무상",
            "I:유지보수",
            "C:취소"
          ],
          "conditional": "keyfield=24"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호",
          "click": "update_next -> store_request.php"
        },
        {
          "name": "접수구분"
        },
        {
          "name": "접수일시"
        },
        {
          "name": "고객명"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "주소"
        },
        {
          "name": "모델",
          "dbField": "품명"
        },
        {
          "name": "판매유형"
        },
        {
          "name": "증상분류",
          "dbField": "장애구분명"
        },
        {
          "name": "세부증상",
          "dbField": "장애상세명"
        },
        {
          "name": "처리분류",
          "dbField": "수리구분명"
        },
        {
          "name": "처리상세",
          "dbField": "수리상세명"
        },
        {
          "name": "원인분류",
          "dbField": "원인구분명"
        },
        {
          "name": "원인상세",
          "dbField": "원인상세명"
        },
        {
          "name": "특이사항"
        },
        {
          "name": "담당지점",
          "dbField": "담당지점명"
        },
        {
          "name": "담당기사",
          "dbField": "담당사원명"
        },
        {
          "name": "기사연락처"
        },
        {
          "name": "구간",
          "dbField": "구간구분"
        },
        {
          "name": "처리일",
          "dbField": "처리일자"
        },
        {
          "name": "처리지점",
          "dbField": "처리지점명"
        },
        {
          "name": "처리사원",
          "dbField": "처리사원명"
        },
        {
          "name": "요금적용"
        },
        {
          "name": "청구금액"
        },
        {
          "name": "징구금액"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_receipt_list_excel.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_request.php"
      ]
    },
    "store_request": {
      "phpFile": "store_request.php",
      "htmlFile": "screens/store/store_request.html",
      "type": "form",
      "title": "자재신청 (접수자재)",
      "purpose": "CS접수 건에 대한 자재 신청서 작성/수정",
      "workflow": "자재관리 > 자재신청 페이지",
      "formFields": [
        {
          "name": "receipt_no",
          "label": "접수번호",
          "readonly": true
        },
        {
          "name": "in_dt",
          "label": "접수일시",
          "readonly": true
        },
        {
          "name": "req_no",
          "label": "신청번호",
          "readonly": true
        },
        {
          "name": "req_dt",
          "label": "신청일자",
          "readonly": true
        },
        {
          "name": "req_center",
          "label": "신청센터",
          "readonly": true
        },
        {
          "name": "req_user_name",
          "label": "신청사원",
          "readonly": true
        },
        {
          "name": "m_no",
          "label": "코드번호",
          "readonly": true
        },
        {
          "name": "m_name",
          "label": "모델명",
          "readonly": true
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "s_no"
        },
        {
          "name": "품명",
          "dbField": "s_name"
        },
        {
          "name": "출고구분",
          "dbField": "s_type",
          "required": true
        },
        {
          "name": "신청수량",
          "dbField": "s_cnt",
          "required": true
        },
        {
          "name": "APP",
          "dbField": "s_app"
        },
        {
          "name": "HA",
          "dbField": "s_ha"
        },
        {
          "name": "OS",
          "dbField": "s_os"
        },
        {
          "name": "비고",
          "dbField": "s_memo"
        },
        {
          "name": "출고상황",
          "dbField": "s_status",
          "render": "1,4:미출고 2,5:출고중 3:출고완료"
        },
        {
          "name": "삭제",
          "action": "update_next -> ajax store_request_delete"
        }
      ],
      "buttons": [
        {
          "label": "검색(자재)",
          "action": "search_model_sub -> popup_model_search_sub.php (popup 610x640)"
        },
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "신청의뢰",
          "action": "req_mode('insert') -> store_request_proc.php"
        },
        {
          "label": "신청수정",
          "action": "req_mode('update') -> store_request_proc.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "검색",
          "popup": "popup_model_search_sub.php"
        }
      ],
      "flowFrom": [
        "store_receipt_list.php"
      ],
      "flowTo": [
        "store_request_proc.php"
      ]
    },
    "store_request_list": {
      "phpFile": "store_request_list.php",
      "htmlFile": "screens/store/store_request_list.html",
      "type": "list",
      "title": "자재신청 현황 - 본사",
      "purpose": "자재신청 전체현황 본사 조회. 센터명 클릭하여 상세로 이동",
      "workflow": "재고 > 자재신청현황 > 본사용",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "1:미출고",
            "2:출고중",
            "3:출고완료"
          ]
        },
        {
          "name": "state2",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "1:접수자재",
            "2:일반자재"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "req_pno",
          "type": "text",
          "label": "자재품번"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명",
          "click": "go_center -> store_request_release.php"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "코드번호"
        },
        {
          "name": "모델명"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "출고일"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "신청구분"
        },
        {
          "name": "상태",
          "dbField": "진행상황"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_request_list_excel.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_request_release.php"
      ]
    },
    "store_request_list_center": {
      "phpFile": "store_request_list_center.php",
      "htmlFile": "screens/store/store_request_list_center.html",
      "type": "list",
      "title": "[센터명] 자재신청 현황",
      "purpose": "자재신청 현황을 센터에서 읽기전용으로 조회",
      "workflow": "재고 > 자재신청현황 > 센터용",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "1:미출고",
            "2:출고중",
            "3:출고완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "state2",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "1:접수자재",
            "2:일반자재"
          ]
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "검색조건",
          "options": [
            "신청번호",
            "접수번호",
            "품번",
            "신청사원",
            "고객명",
            "연락처",
            "신청지점"
          ]
        },
        {
          "name": "keyword",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "코드번호"
        },
        {
          "name": "모델명"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "출고일"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "신청구분"
        },
        {
          "name": "상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_request_release_center.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_request_release.php"
      ]
    },
    "store_request_list_nomal": {
      "phpFile": "store_request_list_nomal.php",
      "htmlFile": "screens/store/store_request_list_nomal.html",
      "type": "list",
      "title": "일반 자재 신청",
      "purpose": "접수와 무관한 일반 자재 신청 리스트 (신규 생성 가능)",
      "workflow": "재고 > 일반자재 접수리스트",
      "searchFields": [
        {
          "name": "status",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "1:신청중",
            "3:신청완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호",
          "click": "update_next -> store_request_nomal.php"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청센터",
          "dbField": "신청지점명"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "신청완료건수"
        },
        {
          "name": "신청대기건수"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "코드번호",
          "dbField": "모품번"
        },
        {
          "name": "모델명",
          "dbField": "모품명"
        },
        {
          "name": "품번",
          "dbField": "자품번"
        },
        {
          "name": "품명",
          "dbField": "자품명"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_request_list_normal_excel.php"
        },
        {
          "label": "자재신청",
          "action": "update_next('','insert') -> store_request_nomal.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_request_nomal.php"
      ]
    },
    "store_request_mater": {
      "phpFile": "store_request_mater.php",
      "htmlFile": "screens/store/store_request_mater.html",
      "type": "sublist",
      "title": "자재목록 리스트 (신청 카트)",
      "purpose": "자재신청 화면에서 선택된 자재를 유지/삭제하는 iframe용 서브리스트",
      "workflow": "자재신청 > 자재목록 리스트 (iframe)",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번"
        },
        {
          "name": "CS품명"
        },
        {
          "name": "출고구분"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "APP"
        },
        {
          "name": "HS"
        },
        {
          "name": "OS"
        },
        {
          "name": "비고"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "삭제",
          "action": "sub() -> remove from val list"
        }
      ],
      "buttons": [
        {
          "label": "삭제",
          "action": "sub(no) -> form resubmit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store_request.php (iframe)",
        "store_request_nomal.php (iframe)"
      ],
      "flowTo": []
    },
    "store_request_mater_list": {
      "phpFile": "store_request_mater_list.php",
      "htmlFile": "screens/store/store_request_mater_list.html",
      "type": "popup",
      "title": "자재조회 (팝업)",
      "purpose": "자재를 검색 후 체크박스로 선택하여 상위폼에 추가",
      "workflow": "자재신청 > 자재목록 리스트 (popup)",
      "searchFields": [
        {
          "name": "pp_no",
          "type": "text",
          "label": "모품번"
        },
        {
          "name": "p_no",
          "type": "text",
          "label": "품번"
        },
        {
          "name": "p_name",
          "type": "text",
          "label": "CS품명"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "재고",
          "options": [
            "전체",
            "Y:유(有)"
          ]
        }
      ],
      "tableColumns": [
        {
          "name": "체크박스(전체선택)",
          "dbField": "select_call"
        },
        {
          "name": "품번"
        },
        {
          "name": "CS품명"
        },
        {
          "name": "신품",
          "dbField": "양품수량"
        },
        {
          "name": "재생",
          "dbField": "재생수량"
        },
        {
          "name": "소비자가",
          "dbField": "판매가"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "submit"
        },
        {
          "label": "추가",
          "action": "add_item() -> parent.mater.list_form.submit()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store_request_mater.php"
      ],
      "flowTo": []
    },
    "store_request_nomal": {
      "phpFile": "store_request_nomal.php",
      "htmlFile": "screens/store/store_request_nomal.html",
      "type": "form",
      "title": "자재신청 (일반자재)",
      "purpose": "일반자재 신규 신청/수정 폼. 코드번호/모델은 팝업으로 검색",
      "workflow": "자재관리 > 일반 자재 신청 페이지",
      "formFields": [
        {
          "name": "req_no",
          "label": "신청번호",
          "readonly": true
        },
        {
          "name": "req_dt",
          "label": "신청일자",
          "readonly": true
        },
        {
          "name": "req_center",
          "label": "신청센터",
          "readonly": true
        },
        {
          "name": "ps_agent",
          "label": "신청사원",
          "type": "select",
          "required": true
        },
        {
          "name": "model_no",
          "label": "코드번호",
          "readonly": true
        },
        {
          "name": "model_name",
          "label": "모델명",
          "readonly": true
        }
      ],
      "tableColumns": [
        {
          "name": "코드번호",
          "dbField": "model_no"
        },
        {
          "name": "모델명",
          "dbField": "model_name"
        },
        {
          "name": "품번",
          "dbField": "s_no"
        },
        {
          "name": "품명",
          "dbField": "s_name"
        },
        {
          "name": "출고구분",
          "dbField": "s_type",
          "required": true
        },
        {
          "name": "신청수량",
          "dbField": "s_cnt",
          "required": true
        },
        {
          "name": "APP"
        },
        {
          "name": "HA"
        },
        {
          "name": "OS"
        },
        {
          "name": "비고"
        },
        {
          "name": "출고상황"
        },
        {
          "name": "삭제"
        }
      ],
      "buttons": [
        {
          "label": "자재검색",
          "action": "search_jaje -> popup_jaje.php (620x640)"
        },
        {
          "label": "검색(자재 by 모품)",
          "action": "search_model_sub -> popup_model_search_sub.php"
        },
        {
          "label": "모델",
          "action": "search_model -> modelsel (popup)"
        },
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "신청의뢰",
          "action": "req_mode('insert') -> store_request_proc_nomal.php"
        },
        {
          "label": "신청수정",
          "action": "req_mode('update') -> store_request_proc_nomal.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "자재검색",
          "popup": "popup_jaje.php"
        },
        {
          "trigger": "검색",
          "popup": "popup_model_search_sub.php"
        },
        {
          "trigger": "모델",
          "popup": "popup_model_search.php (modelsel)"
        }
      ],
      "flowFrom": [
        "store_request_list_nomal.php"
      ],
      "flowTo": [
        "store_request_proc_nomal.php"
      ]
    },
    "store_request_release": {
      "phpFile": "store_request_release.php",
      "htmlFile": "screens/store/store_request_release.html",
      "type": "detail",
      "title": "자재신청 현황 상세 (출고관리)",
      "purpose": "자재신청 건의 출고상태 변경/송장번호/방문일자 관리",
      "workflow": "자재관리 > 자재신청현황 > 상세보기",
      "formFields": [
        {
          "name": "req_no",
          "label": "신청번호"
        },
        {
          "name": "req_dt",
          "label": "신청일자"
        },
        {
          "name": "req_center",
          "label": "신청센터"
        },
        {
          "name": "req_center_id",
          "label": "센터코드"
        },
        {
          "name": "ps_agent",
          "label": "신청사원"
        },
        {
          "name": "gubun_type_str",
          "label": "구분사항"
        },
        {
          "name": "deliver",
          "label": "배송방법 (택배/방문)"
        }
      ],
      "tableColumns": [
        {
          "name": "출고예정일"
        },
        {
          "name": "출고일"
        },
        {
          "name": "코드번호(일반자재)"
        },
        {
          "name": "모델명(일반자재)"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "유/무상"
        },
        {
          "name": "신청",
          "dbField": "신청량"
        },
        {
          "name": "출고",
          "dbField": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "출고상태",
          "dbField": "진행상황"
        },
        {
          "name": "상태변경/S/N 액션"
        }
      ],
      "buttons": [
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "변경",
          "action": "update_next('update') -> ajax store_release_update"
        },
        {
          "label": "삭제",
          "action": "update_next('delete') -> ajax store_release"
        },
        {
          "label": "S/N",
          "action": "시리얼 팝업"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "S/N",
          "popup": "popup_serial_release.php"
        }
      ],
      "flowFrom": [
        "store_request_list.php",
        "store_request_list_center.php"
      ],
      "flowTo": []
    },
    "store_return_list": {
      "phpFile": "store_return_list.php",
      "htmlFile": "screens/store/store_return_list.html",
      "type": "list",
      "title": "자재반납신청 현황 - 본사",
      "purpose": "자재 반납신청 현황을 본사에서 관리. 미반납/반납중은 반납의뢰 팝업 호출",
      "workflow": "재고 > 자재반납신청현황 > 본사용",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "반납상태",
          "options": [
            "전체",
            "1:미반납",
            "2:반납중",
            "3:반납완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일(종료)"
        },
        {
          "name": "state3",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "1:접수자재",
            "2:일반자재"
          ]
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "자재품번"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명",
          "click": "go_center -> store_return_release.php"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명",
          "dbField": "CS품명"
        },
        {
          "name": "반납일"
        },
        {
          "name": "신청구분"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "출고상태"
        },
        {
          "name": "반납량"
        },
        {
          "name": "미반납량"
        },
        {
          "name": "반납상태",
          "click": "return_next -> popup_return.php"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_return_release.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "반납상태(미반납/반납중)",
          "popup": "popup_return.php (690x600)"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_return_release.php"
      ]
    },
    "store_return_list_center": {
      "phpFile": "store_return_list_center.php",
      "htmlFile": "screens/store/store_return_list_center.html",
      "type": "list",
      "title": "[센터명] 자재반납신청 현황",
      "purpose": "센터용 반납신청 현황 조회",
      "workflow": "재고 > 자재반납신청 > 센터용",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태",
          "options": [
            "전체",
            "1:출고중",
            "2:출고완료"
          ]
        },
        {
          "name": "state2",
          "type": "select",
          "label": "반납상태",
          "options": [
            "전체",
            "1:미반납",
            "2:반납중",
            "3:반납완료"
          ]
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일(종료)"
        },
        {
          "name": "state3",
          "type": "select",
          "label": "신청구분",
          "options": [
            "전체",
            "1:접수자재",
            "2:일반자재"
          ]
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "자재품번"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "촐고일"
        },
        {
          "name": "신청구분"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "반납량"
        },
        {
          "name": "미반납량"
        },
        {
          "name": "반납상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/store_return_release_center.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "반납상태(미반납/반납중)",
          "popup": "popup_return.php"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_return_release.php"
      ]
    },
    "store_return_release": {
      "phpFile": "store_return_release.php",
      "htmlFile": "screens/store/store_return_release.html",
      "type": "detail",
      "title": "자재반납신청현황 상세",
      "purpose": "반납신청 건의 상태(미반납/반납중/반납완료) 변경 및 시리얼 관리",
      "workflow": "자재관리 > 자재반납신청 > 상세보기",
      "formFields": [
        {
          "name": "req_no",
          "label": "신청번호"
        },
        {
          "name": "req_dt",
          "label": "신청일자"
        },
        {
          "name": "req_center",
          "label": "신청센터"
        },
        {
          "name": "req_center_id",
          "label": "센터코드"
        },
        {
          "name": "req_user_nm",
          "label": "신청사원"
        },
        {
          "name": "gubun_type_str",
          "label": "구분사항"
        },
        {
          "name": "model_no",
          "label": "코드번호",
          "conditional": "신청구분=1"
        },
        {
          "name": "model_name",
          "label": "모델명",
          "conditional": "신청구분=1"
        }
      ],
      "tableColumns": [
        {
          "name": "출고일"
        },
        {
          "name": "반납일",
          "dbField": "반납일자"
        },
        {
          "name": "코드번호",
          "dbField": "모델품번",
          "conditional": "신청구분=2"
        },
        {
          "name": "모델명",
          "dbField": "모델품명",
          "conditional": "신청구분=2"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "유/무상"
        },
        {
          "name": "신청수량",
          "dbField": "신청량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고수량"
        },
        {
          "name": "출고상태"
        },
        {
          "name": "반납수량"
        },
        {
          "name": "미반납수량"
        },
        {
          "name": "양품"
        },
        {
          "name": "불량"
        },
        {
          "name": "확정수량"
        },
        {
          "name": "미확정수량"
        },
        {
          "name": "반납상태(select+변경버튼)"
        }
      ],
      "buttons": [
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "S/N",
          "action": "serial_next -> popup_serial_return_release(2).php (610x600)"
        },
        {
          "label": "변경",
          "action": "update_next('update') -> ajax store_return_update",
          "conditional": "smode!=center"
        },
        {
          "label": "삭제",
          "action": "update_next('delete') -> ajax store_return_delete"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "S/N(본사)",
          "popup": "popup_serial_return_release.php"
        },
        {
          "trigger": "S/N(센터)",
          "popup": "popup_serial_return_release2.php"
        }
      ],
      "flowFrom": [
        "store_return_list.php",
        "store_return_list_center.php"
      ],
      "flowTo": []
    },
    "store_suri_list": {
      "phpFile": "store_suri_list.php",
      "htmlFile": "screens/store/store_suri_list.html",
      "type": "form",
      "title": "수리의뢰 신청",
      "purpose": "신규 수리의뢰 접수/수정 폼",
      "workflow": "자재관리 > 수리의뢰 > 신청 페이지",
      "formFields": [
        {
          "name": "charge",
          "label": "고객명",
          "required": true
        },
        {
          "name": "telno",
          "label": "연락처",
          "required": true
        },
        {
          "name": "req_dt",
          "label": "신청일",
          "type": "date",
          "required": true
        },
        {
          "name": "req_center_id",
          "label": "신청센터",
          "readonly": true
        },
        {
          "name": "zip",
          "label": "우편번호",
          "popup": "open_zipcodebook()"
        },
        {
          "name": "addr1",
          "label": "주소",
          "required": true
        },
        {
          "name": "addr2",
          "label": "상세주소"
        },
        {
          "name": "model_no",
          "label": "코드번호",
          "readonly": true
        },
        {
          "name": "model_name",
          "label": "모델명",
          "readonly": true,
          "popup": "modelsel"
        },
        {
          "name": "rgb_type",
          "label": "의뢰방법",
          "type": "select",
          "options": [
            "1:택배",
            "2:방문"
          ]
        },
        {
          "name": "invoice_no",
          "label": "송장번호",
          "conditional": "rgb_type=1"
        },
        {
          "name": "visit_dt",
          "label": "방문일자",
          "type": "date",
          "conditional": "rgb_type=2"
        },
        {
          "name": "serial_no",
          "label": "S/N"
        },
        {
          "name": "s_type",
          "label": "유무상",
          "type": "select",
          "options": [
            "1:유상",
            "2:무상",
            "3:유지보수"
          ]
        },
        {
          "name": "pay_won",
          "label": "청구금액"
        },
        {
          "name": "error_msg",
          "label": "불량증상"
        },
        {
          "name": "memo",
          "label": "특이사항",
          "type": "textarea"
        }
      ],
      "buttons": [
        {
          "label": "초기화",
          "action": "reset() -> location.reload"
        },
        {
          "label": "수리의뢰",
          "action": "req_mode('insert') -> store_suri_proc.php"
        },
        {
          "label": "수리수정",
          "action": "req_mode('update') -> store_suri_proc.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "우편번호 찾기",
          "popup": "zipcodebook"
        },
        {
          "trigger": "모델 찾기",
          "popup": "popup_model_search.php (modelsel)"
        }
      ],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "store_suri_proc.php",
        "store_doing_list.php"
      ]
    }
  },
  "tdb": {
    "tdb_in_list": {
      "phpFile": "tdb_in_list.php",
      "htmlFile": "screens/tdb/tdb_in_list.html",
      "type": "list",
      "title": "뇌전보고",
      "purpose": "뇌전(낙뢰) 접수 리스트 및 신규접수 이동",
      "workflow": "뇌전 > 뇌전보고 > 뇌전리스트 및 추가",
      "searchFields": [
        {
          "name": "sday",
          "type": "date",
          "label": "접수일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "접수일(종료)"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "현장명"
        }
      ],
      "tableColumns": [
        {
          "name": "접수일"
        },
        {
          "name": "현장명",
          "dbField": "현장명/아파트명"
        },
        {
          "name": "보험사",
          "dbField": "보험사타입+보험사업체명+담당자+연락처"
        },
        {
          "name": "뇌전일"
        },
        {
          "name": "진행상황",
          "dbField": "진행상태",
          "render": "1:접수대기 2:진행중 3:보류 4:완료"
        },
        {
          "name": "삭제여부",
          "action": "delete_next -> ajax tdb_in_delete",
          "conditional": "자재신청수=0 AND user_lv=9"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download -> ../excel/tdb_in_list.php"
        },
        {
          "label": "뇌전접수",
          "action": "update_next1('','insert') -> tdb_in_release.php (특정 IP에서는 tdb_in_mode.php)"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "rowAction": {
        "event": "dblclick",
        "action": "update_next(접수번호,'update') -> tdb_in_mode.php"
      },
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_in_mode.php",
        "tdb_in_release.php"
      ]
    },
    "tdb_in_mode": {
      "phpFile": "tdb_in_mode.php",
      "htmlFile": "screens/tdb/tdb_in_mode.html",
      "type": "form",
      "title": "뇌전 등록/수정",
      "purpose": "뇌전 접수의 상세 등록/수정. 보험사정보, 서류첨부, 기타메모 관리",
      "workflow": "뇌전 > 뇌전보고 > 접수",
      "formFields": [
        {
          "name": "seace_name",
          "label": "현장명",
          "readonly": true,
          "required": true,
          "popup": "search_secen -> popup_secen_search.php"
        },
        {
          "name": "apt_no",
          "type": "hidden",
          "label": "아파트코드"
        },
        {
          "name": "in_date",
          "label": "신청일자",
          "type": "date",
          "required": true,
          "readonly": true
        },
        {
          "name": "tdb_date",
          "label": "뇌전일",
          "type": "date",
          "readonly": true
        },
        {
          "name": "zip",
          "label": "우편번호",
          "readonly": true
        },
        {
          "name": "addr1",
          "label": "주소",
          "readonly": true
        },
        {
          "name": "addr2",
          "label": "상세주소",
          "readonly": true
        },
        {
          "name": "centerCode",
          "label": "담당지점",
          "type": "select"
        },
        {
          "name": "model_name",
          "label": "모델명",
          "readonly": true
        },
        {
          "name": "model_no",
          "type": "hidden"
        },
        {
          "name": "insurance",
          "label": "보험사 업체명(타입)",
          "type": "select",
          "options": [
            "선택",
            "1:보험사",
            "2:손해사정"
          ],
          "conditional": "mode=update"
        },
        {
          "name": "insurance_name",
          "label": "보험사 업체명"
        },
        {
          "name": "insurance_charge",
          "label": "보험사 담당자명"
        },
        {
          "name": "insurance_tel",
          "label": "보험사 연락처"
        },
        {
          "name": "status",
          "label": "진행상황",
          "type": "select",
          "options": [
            "1:뇌전접수",
            "2:진행중",
            "3:보류",
            "4:완료"
          ]
        },
        {
          "name": "upfile1",
          "label": "뇌전서류 첨부",
          "type": "file"
        },
        {
          "name": "subject",
          "label": "기타 제목"
        },
        {
          "name": "content",
          "label": "기타 내용",
          "type": "textarea"
        }
      ],
      "buttons": [
        {
          "label": "검색(현장)",
          "action": "search_secen -> popup_secen_search.php (660x560)"
        },
        {
          "label": "변경하기(담당지점)",
          "action": "ch_cen -> ajax tdb_change",
          "conditional": "user_agency=11323"
        },
        {
          "label": "자재신청현황",
          "action": "open_store_detail -> popup_tdb_store_list.php (1000x560)",
          "conditional": "자재신청상태=Y"
        },
        {
          "label": "저장(기타)",
          "action": "update_next('insert') -> ajax tdb_etc_ins"
        },
        {
          "label": "삭제(기타)",
          "action": "update_next('deleteETC') -> ajax tdb_etc_del"
        },
        {
          "label": "등록/수정",
          "action": "go_next(mode) -> tdb_in_proc.php"
        },
        {
          "label": "취소",
          "action": "tdb_in_list.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "현장검색",
          "popup": "popup_secen_search.php"
        },
        {
          "trigger": "자재신청현황",
          "popup": "popup_tdb_store_list.php"
        },
        {
          "trigger": "첨부파일",
          "popup": "../filedir/tdb/{filename}"
        }
      ],
      "flowFrom": [
        "tdb_in_list.php"
      ],
      "flowTo": [
        "tdb_in_proc.php",
        "tdb_in_list.php"
      ]
    },
    "tdb_in_release": {
      "phpFile": "tdb_in_release.php",
      "htmlFile": "screens/tdb/tdb_in_release.html",
      "type": "form",
      "title": "뇌전 등록 (간편)",
      "purpose": "뇌전 접수 간편 등록 폼(현장+수량+모델)",
      "workflow": "뇌전 > 뇌전보고 > 접수 (간편)",
      "formFields": [
        {
          "name": "seace_name",
          "label": "현장명",
          "readonly": true,
          "required": true,
          "popup": "search_secen -> popup_secen_search_release.php"
        },
        {
          "name": "apt_no",
          "type": "hidden"
        },
        {
          "name": "tdb_date",
          "label": "뇌전일",
          "type": "date",
          "required": true
        },
        {
          "name": "tdb_num",
          "label": "수량",
          "required": true,
          "unit": "대"
        },
        {
          "name": "zip/addr1/addr2",
          "label": "현장주소",
          "readonly": true,
          "required": true
        },
        {
          "name": "model_name",
          "label": "모델명",
          "readonly": true,
          "required": true,
          "popup": "search_model -> popup_model_search.php"
        },
        {
          "name": "model_no",
          "type": "hidden"
        }
      ],
      "buttons": [
        {
          "label": "검색(현장)",
          "action": "search_secen -> popup_secen_search_release.php"
        },
        {
          "label": "모델",
          "action": "search_model -> popup_model_search.php (600x560)"
        },
        {
          "label": "등록/수정",
          "action": "go_next(mode) -> tdb_in_proc_release.php"
        },
        {
          "label": "취소",
          "action": "tdb_in_list.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "현장검색",
          "popup": "popup_secen_search_release.php"
        },
        {
          "trigger": "모델",
          "popup": "popup_model_search.php"
        }
      ],
      "flowFrom": [
        "tdb_in_list.php"
      ],
      "flowTo": [
        "tdb_in_proc_release.php"
      ]
    },
    "tdb_price_list": {
      "phpFile": "tdb_price_list.php",
      "htmlFile": "screens/tdb/tdb_price_list.html",
      "type": "list",
      "title": "뇌전 자재 사용이력",
      "purpose": "뇌전건 자재 사용/반납 이력 조회",
      "workflow": "뇌전 > 사용이력",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "반납상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "반납일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "반납일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_price_list.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_price_release.php",
        "store_request.php"
      ]
    },
    "tdb_price_release": {
      "phpFile": "tdb_price_release.php",
      "htmlFile": "screens/tdb/tdb_price_release.html",
      "type": "detail",
      "title": "뇌전자재 사용이력 상세",
      "purpose": "뇌전건 자재 사용이력 상세. 정산/금액수정",
      "workflow": "뇌전 > 사용이력 > 상세",
      "formFields": [],
      "tableColumns": [
        {
          "name": "출고일"
        },
        {
          "name": "반납일"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청"
        },
        {
          "name": "출고"
        },
        {
          "name": "반납"
        },
        {
          "name": "미반납"
        },
        {
          "name": "양품"
        },
        {
          "name": "불량"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "반납가A"
        },
        {
          "name": "미반납가A"
        },
        {
          "name": "반납가R"
        },
        {
          "name": "미반납가R"
        },
        {
          "name": "유지보수가"
        },
        {
          "name": "청구금액"
        },
        {
          "name": "금액수정"
        },
        {
          "name": "비고"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_price_release.php"
        },
        {
          "label": "정산하기",
          "action": "price_next -> ajax"
        },
        {
          "label": "금액수정",
          "action": "price_next_modify"
        },
        {
          "label": "목록으로",
          "action": "-> tdb_price_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "tdb_price_list.php"
      ],
      "flowTo": [
        "tdb_price_list.php"
      ]
    },
    "tdb_return_ins_list": {
      "phpFile": "tdb_return_ins_list.php",
      "htmlFile": "screens/tdb/tdb_return_ins_list.html",
      "type": "list",
      "title": "뇌전자재반납 신청현황 (보험사용)",
      "purpose": "뇌전 보험사건의 자재반납 신청현황 조회",
      "workflow": "뇌전 > 반납신청현황(보험) > 본사",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태"
        },
        {
          "name": "state2",
          "type": "select",
          "label": "반납상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일(종료)"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "품번"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "반납일"
        },
        {
          "name": "모델명"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "반납량"
        },
        {
          "name": "미반납량"
        },
        {
          "name": "반납상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_return_ins_release.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_return_ins_release.php",
        "store_request.php"
      ]
    },
    "tdb_return_ins_release": {
      "phpFile": "tdb_return_ins_release.php",
      "htmlFile": "screens/tdb/tdb_return_ins_release.html",
      "type": "detail",
      "title": "자재반납현황 상세 (보험사)",
      "purpose": "보험사 건 반납신청 건의 상세/상태변경",
      "workflow": "뇌전 > 반납신청현황(보험) > 상세",
      "formFields": [],
      "tableColumns": [
        {
          "name": "출고일"
        },
        {
          "name": "반납일"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "유/무상"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고수량"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "반납수량"
        },
        {
          "name": "미반납수량"
        },
        {
          "name": "양품"
        },
        {
          "name": "불량"
        },
        {
          "name": "확정수량"
        },
        {
          "name": "미확정수량"
        },
        {
          "name": "반납상태"
        }
      ],
      "buttons": [
        {
          "label": "목록으로",
          "action": "history.back()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "tdb_return_ins_list.php"
      ],
      "flowTo": []
    },
    "tdb_return_list": {
      "phpFile": "tdb_return_list.php",
      "htmlFile": "screens/tdb/tdb_return_list.html",
      "type": "list",
      "title": "뇌전자재반납 신청현황",
      "purpose": "뇌전 자재반납 신청현황 조회 (본사)",
      "workflow": "뇌전 > 자재반납신청현황 > 본사",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태"
        },
        {
          "name": "state2",
          "type": "select",
          "label": "반납상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일(종료)"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "품번"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "모델명"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "반납일"
        },
        {
          "name": "반납량"
        },
        {
          "name": "미반납량"
        },
        {
          "name": "반납상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_return_release.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_return_release.php",
        "store_request.php"
      ]
    },
    "tdb_return_release": {
      "phpFile": "tdb_return_release.php",
      "htmlFile": "screens/tdb/tdb_return_release.html",
      "type": "detail",
      "title": "자재신청현황 (본사) - 반납",
      "purpose": "뇌전 자재 반납 상세 관리. 뇌전종료 처리 가능",
      "workflow": "뇌전 > 자재반납신청현황 > 상세",
      "formFields": [],
      "tableColumns": [
        {
          "name": "출고일"
        },
        {
          "name": "반납일"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "유/무상"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고수량"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "반납수량"
        },
        {
          "name": "미반납수량"
        },
        {
          "name": "양품"
        },
        {
          "name": "불량"
        },
        {
          "name": "확정수량"
        },
        {
          "name": "미확정수량"
        },
        {
          "name": "반납상태"
        }
      ],
      "buttons": [
        {
          "label": "뇌전종료",
          "action": "tdb_end()"
        },
        {
          "label": "목록으로",
          "action": "history.back()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "tdb_return_list.php"
      ],
      "flowTo": []
    },
    "tdb_store_doing_list": {
      "phpFile": "tdb_store_doing_list.php",
      "htmlFile": "screens/tdb/tdb_store_doing_list.html",
      "type": "list",
      "title": "뇌전 자재신청 현황 - 본사",
      "purpose": "뇌전건 자재신청 현황(본사)",
      "workflow": "뇌전 > 자재신청현황 > 본사",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "req_pno",
          "type": "text",
          "label": "품번"
        },
        {
          "name": "keyfield",
          "type": "select",
          "label": "센터"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_store_doing_release.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_store_release.php"
      ]
    },
    "tdb_store_doing_list_center": {
      "phpFile": "tdb_store_doing_list_center.php",
      "htmlFile": "screens/tdb/tdb_store_doing_list_center.html",
      "type": "list",
      "title": "[센터명] 뇌전 자재신청 현황",
      "purpose": "뇌전건 자재신청 현황(센터)",
      "workflow": "뇌전 > 자재신청현황 > 센터",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "req_pno",
          "type": "text",
          "label": "품번"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "신청사원"
        }
      ],
      "tableColumns": [
        {
          "name": "신청번호"
        },
        {
          "name": "센터명"
        },
        {
          "name": "신청일"
        },
        {
          "name": "신청사원"
        },
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_store_doing_release_center.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_store_release.php",
        "store_request.php"
      ]
    },
    "tdb_store_list": {
      "phpFile": "tdb_store_list.php",
      "htmlFile": "screens/tdb/tdb_store_list.html",
      "type": "list",
      "title": "뇌전 자재 신청",
      "purpose": "뇌전건 자재신청 리스트(접수)",
      "workflow": "뇌전 > 뇌전 자재 신청",
      "searchFields": [
        {
          "name": "state",
          "type": "select",
          "label": "진행상태"
        },
        {
          "name": "state2",
          "type": "select",
          "label": "자재신청상태"
        },
        {
          "name": "sday",
          "type": "date",
          "label": "신청일자(시작)"
        },
        {
          "name": "eday",
          "type": "date",
          "label": "신청일자(종료)"
        },
        {
          "name": "keyword",
          "type": "text",
          "label": "현장명"
        }
      ],
      "tableColumns": [
        {
          "name": "접수번호"
        },
        {
          "name": "접수일"
        },
        {
          "name": "현장명"
        },
        {
          "name": "모델명"
        },
        {
          "name": "보험사"
        },
        {
          "name": "담당자명"
        },
        {
          "name": "연락처"
        },
        {
          "name": "뇌전일"
        },
        {
          "name": "진행상태"
        },
        {
          "name": "자재신청상태"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "-> ../excel/tdb_store_list.php"
        },
        {
          "label": "검색",
          "action": "submit"
        }
      ],
      "rowAction": {
        "event": "click",
        "action": "update_next -> tdb_store_mode.php"
      },
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "tdb_store_mode.php"
      ]
    },
    "tdb_store_mode": {
      "phpFile": "tdb_store_mode.php",
      "htmlFile": "screens/tdb/tdb_store_mode.html",
      "type": "form",
      "title": "뇌전자재신청",
      "purpose": "뇌전 접수건에 대한 자재 신청서 작성",
      "workflow": "뇌전 > 자재신청 등록/수정",
      "formFields": [
        {
          "name": "req_no",
          "label": "신청번호"
        },
        {
          "name": "req_dt",
          "label": "신청일자"
        },
        {
          "name": "req_center",
          "label": "신청센터"
        },
        {
          "name": "ps_agent",
          "label": "신청사원",
          "type": "select"
        },
        {
          "name": "m_no/m_name",
          "label": "코드번호/모델명",
          "readonly": true
        }
      ],
      "tableColumns": [
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "상태",
          "required": true
        },
        {
          "name": "신청수량",
          "required": true
        },
        {
          "name": "APP"
        },
        {
          "name": "HA"
        },
        {
          "name": "OS"
        },
        {
          "name": "비고"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "삭제"
        }
      ],
      "buttons": [
        {
          "label": "검색(자재)",
          "action": "search_model_sub -> popup_model_search_sub.php"
        },
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "신청의뢰",
          "action": "go_update -> tdb_store_proc.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "검색",
          "popup": "popup_model_search_sub.php"
        }
      ],
      "flowFrom": [
        "tdb_store_list.php"
      ],
      "flowTo": [
        "tdb_store_proc.php"
      ]
    },
    "tdb_store_release": {
      "phpFile": "tdb_store_release.php",
      "htmlFile": "screens/tdb/tdb_store_release.html",
      "type": "detail",
      "title": "자재신청현황 상세 (뇌전 출고)",
      "purpose": "뇌전 자재신청 건의 출고상태 관리",
      "workflow": "뇌전 > 자재신청현황 > 상세(출고)",
      "formFields": [],
      "tableColumns": [
        {
          "name": "품번"
        },
        {
          "name": "품명"
        },
        {
          "name": "신청수량"
        },
        {
          "name": "출고수량"
        },
        {
          "name": "미출고량"
        },
        {
          "name": "APP"
        },
        {
          "name": "HA"
        },
        {
          "name": "OS"
        },
        {
          "name": "진행상황"
        },
        {
          "name": "삭제"
        }
      ],
      "buttons": [
        {
          "label": "목록으로",
          "action": "history.back()"
        },
        {
          "label": "S/N",
          "action": "시리얼 팝업"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "S/N",
          "popup": "popup_serial_release.php"
        }
      ],
      "flowFrom": [
        "tdb_store_doing_list.php",
        "tdb_store_doing_list_center.php"
      ],
      "flowTo": []
    }
  },
  "admin": {
    "admin_access_mode": {
      "phpFile": "admin_access_mode.php",
      "htmlFile": "screens/admin/admin_access_mode.html",
      "type": "mode",
      "title": "권한 설정",
      "purpose": "메뉴별 권한(조회/등록/수정/삭제) 설정",
      "workflow": "관리 > 권한 설정",
      "searchFields": [
        {
          "name": "Sidx",
          "label": "대상메뉴",
          "type": "hidden"
        }
      ],
      "tableColumns": [
        {
          "name": "메뉴명",
          "dbField": "menu_name"
        },
        {
          "name": "조회(view)",
          "dbField": "view"
        },
        {
          "name": "등록(ins)",
          "dbField": "ins"
        },
        {
          "name": "수정(upd)",
          "dbField": "upd"
        },
        {
          "name": "삭제(del)",
          "dbField": "del"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_access_proc.php 저장"
        },
        {
          "label": "취소",
          "action": "목록으로 복귀"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": []
    },
    "admin_audit_list": {
      "phpFile": "admin_audit_list.php",
      "htmlFile": "screens/admin/admin_audit_list.html",
      "type": "list",
      "title": "대행료 지급검정",
      "purpose": "월별 대행료 지급 검정 현황 조회",
      "workflow": "관리 > 대행료 지급검정",
      "searchFields": [
        {
          "name": "search_date",
          "label": "검정년월",
          "type": "month"
        },
        {
          "name": "center",
          "label": "센터",
          "type": "select"
        },
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "센터명",
          "dbField": "center_name"
        },
        {
          "name": "기사명",
          "dbField": "user_name"
        },
        {
          "name": "건수",
          "dbField": "svc_count"
        },
        {
          "name": "청구금액",
          "dbField": "req_amt"
        },
        {
          "name": "지급금액",
          "dbField": "pay_amt"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "지급확정",
          "action": "admin_audit_list_apply.php 이동"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_audit_list_apply.php"
      ]
    },
    "admin_audit_list_apply": {
      "phpFile": "admin_audit_list_apply.php",
      "htmlFile": "screens/admin/admin_audit_list_apply.html",
      "type": "list",
      "title": "대행료 지급검정 확정",
      "purpose": "대행료 지급 확정 처리",
      "workflow": "관리 > 대행료 지급검정 > 확정",
      "searchFields": [
        {
          "name": "search_date",
          "label": "검정년월",
          "type": "month"
        },
        {
          "name": "center",
          "label": "센터",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "센터명",
          "dbField": "center_name"
        },
        {
          "name": "기사명",
          "dbField": "user_name"
        },
        {
          "name": "지급금액",
          "dbField": "pay_amt"
        },
        {
          "name": "확정여부",
          "dbField": "confirm_yn"
        }
      ],
      "buttons": [
        {
          "label": "확정처리",
          "action": "audit_apply_proc"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_audit_list.php"
      ],
      "flowTo": []
    },
    "admin_centermanager_list": {
      "phpFile": "admin_centermanager_list.php",
      "htmlFile": "screens/admin/admin_centermanager_list.html",
      "type": "list",
      "title": "대리점 관리",
      "purpose": "대리점(센터) 목록 조회 및 관리",
      "workflow": "관리 > 대리점 관리",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "순번",
          "dbField": "rownum"
        },
        {
          "name": "대리점명",
          "dbField": "center_name"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "담당자명(ID)",
          "dbField": "manager_id"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "형태",
          "dbField": "center_type"
        },
        {
          "name": "약도",
          "dbField": "map"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "대리점추가",
          "action": "admin_centermanager_mode.php (insert)"
        },
        {
          "label": "수정",
          "action": "admin_centermanager_mode.php (update)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_centermanager_mode.php"
      ]
    },
    "admin_centermanager_mode": {
      "phpFile": "admin_centermanager_mode.php",
      "htmlFile": "screens/admin/admin_centermanager_mode.html",
      "type": "mode",
      "title": "대리점 등록/수정",
      "purpose": "대리점(센터) 신규등록 및 수정",
      "workflow": "관리 > 대리점 관리 > 등록/수정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "대리점코드",
          "dbField": "center_code"
        },
        {
          "name": "대리점명",
          "dbField": "center_name"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "담당자",
          "dbField": "manager"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "형태",
          "dbField": "center_type"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_centermanager_proc.php"
        },
        {
          "label": "목록",
          "action": "admin_centermanager_list.php"
        },
        {
          "label": "주소검색",
          "action": "address_popup.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        }
      ],
      "flowFrom": [
        "admin_centermanager_list.php"
      ],
      "flowTo": [
        "admin_centermanager_list.php"
      ]
    },
    "admin_code_error_list": {
      "phpFile": "admin_code_error_list.php",
      "htmlFile": "screens/admin/admin_code_error_list.html",
      "type": "list",
      "title": "장애코드 관리",
      "purpose": "장애(증상) 코드 관리",
      "workflow": "관리 > 코드 관리 > 장애",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        },
        {
          "name": "bUse",
          "label": "사용여부",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "장애코드",
          "dbField": "error_code"
        },
        {
          "name": "장애내용",
          "dbField": "error_name"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "코드 일괄 저장"
        },
        {
          "label": "추가",
          "action": "행 추가"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_code_list.php"
      ],
      "flowTo": []
    },
    "admin_code_list": {
      "phpFile": "admin_code_list.php",
      "htmlFile": "screens/admin/admin_code_list.html",
      "type": "list",
      "title": "Code 관리",
      "purpose": "코드 분류 메뉴(장애/원인/수리) 진입",
      "workflow": "관리 > 코드 관리",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "분류",
          "dbField": "category"
        },
        {
          "name": "설명",
          "dbField": "description"
        }
      ],
      "buttons": [
        {
          "label": "장애코드",
          "action": "admin_code_error_list.php"
        },
        {
          "label": "원인코드",
          "action": "admin_code_reason_list.php"
        },
        {
          "label": "수리코드",
          "action": "admin_code_repair_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_code_error_list.php",
        "admin_code_reason_list.php",
        "admin_code_repair_list.php"
      ]
    },
    "admin_code_reason_list": {
      "phpFile": "admin_code_reason_list.php",
      "htmlFile": "screens/admin/admin_code_reason_list.html",
      "type": "list",
      "title": "원인코드 관리",
      "purpose": "장애 원인 코드 관리",
      "workflow": "관리 > 코드 관리 > 원인",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        },
        {
          "name": "bUse",
          "label": "사용여부",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "코드번호",
          "dbField": "reason_code"
        },
        {
          "name": "원인내용",
          "dbField": "reason_name"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "코드 일괄 저장"
        },
        {
          "label": "추가",
          "action": "행 추가"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_code_list.php"
      ],
      "flowTo": []
    },
    "admin_code_repair_list": {
      "phpFile": "admin_code_repair_list.php",
      "htmlFile": "screens/admin/admin_code_repair_list.html",
      "type": "list",
      "title": "수리코드 관리",
      "purpose": "수리 내용 코드 관리",
      "workflow": "관리 > 코드 관리 > 수리",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        },
        {
          "name": "bUse",
          "label": "사용여부",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "코드번호",
          "dbField": "repair_code"
        },
        {
          "name": "수리내용",
          "dbField": "repair_name"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "코드 일괄 저장"
        },
        {
          "label": "추가",
          "action": "행 추가"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_code_list.php"
      ],
      "flowTo": []
    },
    "admin_member_list": {
      "phpFile": "admin_member_list.php",
      "htmlFile": "screens/admin/admin_member_list.html",
      "type": "list",
      "title": "고객 관리",
      "purpose": "고객 목록 조회 및 관리",
      "workflow": "관리 > 고객 관리",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "고객명",
          "dbField": "member_name"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "등록자",
          "dbField": "reg_user"
        },
        {
          "name": "등록일",
          "dbField": "reg_date"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "고객추가",
          "action": "admin_member_mode.php (insert)"
        },
        {
          "label": "수정",
          "action": "admin_member_mode.php (update)"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_member_mode.php"
      ]
    },
    "admin_member_mode": {
      "phpFile": "admin_member_mode.php",
      "htmlFile": "screens/admin/admin_member_mode.html",
      "type": "mode",
      "title": "고객 등록/수정",
      "purpose": "고객 신규등록 및 정보 수정",
      "workflow": "관리 > 고객 관리 > 등록/수정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "고객명",
          "dbField": "member_name"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "아파트",
          "dbField": "apt_name"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_member_proc.php"
        },
        {
          "label": "목록",
          "action": "admin_member_list.php"
        },
        {
          "label": "주소검색",
          "action": "address_popup.php"
        },
        {
          "label": "아파트검색",
          "action": "popup_apt_search.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        },
        {
          "trigger": "아파트검색",
          "popup": "popup_apt_search.php"
        }
      ],
      "flowFrom": [
        "admin_member_list.php"
      ],
      "flowTo": [
        "admin_member_list.php"
      ]
    },
    "admin_offmanager_list": {
      "phpFile": "admin_offmanager_list.php",
      "htmlFile": "screens/admin/admin_offmanager_list.html",
      "type": "list",
      "title": "업무담당자 관리",
      "purpose": "업무담당자 목록 조회 및 관리",
      "workflow": "관리 > 업무담당자 관리",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "순번",
          "dbField": "rownum"
        },
        {
          "name": "부서명",
          "dbField": "dept"
        },
        {
          "name": "담당자명",
          "dbField": "manager"
        },
        {
          "name": "직급",
          "dbField": "grade"
        },
        {
          "name": "담당업무",
          "dbField": "duty"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "내선번호",
          "dbField": "ext_no"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "담당자추가",
          "action": "admin_offmanager_mode.php (insert)"
        },
        {
          "label": "수정",
          "action": "admin_offmanager_mode.php (update)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_offmanager_mode.php"
      ]
    },
    "admin_offmanager_mode": {
      "phpFile": "admin_offmanager_mode.php",
      "htmlFile": "screens/admin/admin_offmanager_mode.html",
      "type": "mode",
      "title": "업무담당자 등록/수정",
      "purpose": "업무담당자 신규등록 및 수정",
      "workflow": "관리 > 업무담당자 관리 > 등록/수정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "부서명",
          "dbField": "dept"
        },
        {
          "name": "담당자명",
          "dbField": "manager"
        },
        {
          "name": "직급",
          "dbField": "grade"
        },
        {
          "name": "담당업무",
          "dbField": "duty"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "내선번호",
          "dbField": "ext_no"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_offmanager_proc.php"
        },
        {
          "label": "목록",
          "action": "admin_offmanager_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_offmanager_list.php"
      ],
      "flowTo": [
        "admin_offmanager_list.php"
      ]
    },
    "admin_scene_detail": {
      "phpFile": "admin_scene_detail.php",
      "htmlFile": "screens/admin/admin_scene_detail.html",
      "type": "detail",
      "title": "현장 상세보기",
      "purpose": "현장 상세 정보 읽기 전용 화면",
      "workflow": "관리 > 현장관리 > 상세보기",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "세대수",
          "dbField": "total_unit"
        },
        {
          "name": "보증기간",
          "dbField": "warranty"
        },
        {
          "name": "입주기간",
          "dbField": "move_in_period"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "담당지점",
          "dbField": "branch"
        },
        {
          "name": "비고",
          "dbField": "remark"
        },
        {
          "name": "뇌전유무",
          "dbField": "tdb_yn"
        },
        {
          "name": "설치담당",
          "dbField": "install_manager"
        },
        {
          "name": "현장담당",
          "dbField": "scene_manager"
        },
        {
          "name": "세대기기",
          "dbField": "device"
        },
        {
          "name": "게이트웨이",
          "dbField": "gateway"
        },
        {
          "name": "TK유무",
          "dbField": "tk_yn"
        },
        {
          "name": "현장이슈",
          "dbField": "scene_issue"
        }
      ],
      "buttons": [
        {
          "label": "닫기",
          "action": "window.close()"
        },
        {
          "label": "수정",
          "action": "admin_scene_mode.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_scene_list.php"
      ],
      "flowTo": [
        "admin_scene_mode.php"
      ]
    },
    "admin_scene_list": {
      "phpFile": "admin_scene_list.php",
      "htmlFile": "screens/admin/admin_scene_list.html",
      "type": "list",
      "title": "현장 관리",
      "purpose": "현장 목록 조회 및 관리",
      "workflow": "관리 > 현장 관리",
      "searchFields": [
        {
          "name": "apt_category",
          "label": "아파트분류",
          "type": "select"
        },
        {
          "name": "center",
          "label": "담당지점",
          "type": "select"
        },
        {
          "name": "tdb_yn",
          "label": "뇌전유무",
          "type": "select"
        },
        {
          "name": "tk_yn",
          "label": "TK유무",
          "type": "select"
        },
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트번호",
          "dbField": "apt_no",
          "sortable": true
        },
        {
          "name": "아파트명",
          "dbField": "apt_name",
          "sortable": true
        },
        {
          "name": "현장명",
          "dbField": "scene_name",
          "sortable": true
        },
        {
          "name": "현장담당자",
          "dbField": "scene_manager",
          "sortable": true
        },
        {
          "name": "모델명",
          "dbField": "model_name",
          "sortable": true
        },
        {
          "name": "담당지점",
          "dbField": "center",
          "sortable": true
        },
        {
          "name": "유상알림",
          "dbField": "paid_alert"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "엑셀다운",
          "action": "excel_download()"
        },
        {
          "label": "현장추가",
          "action": "admin_scene_mode.php (insert)"
        },
        {
          "label": "상세",
          "action": "admin_scene_detail.php"
        },
        {
          "label": "수정",
          "action": "admin_scene_mode.php (update)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_scene_detail.php",
        "admin_scene_mode.php",
        "admin_scene_mode1.php"
      ]
    },
    "admin_scene_mode": {
      "phpFile": "admin_scene_mode.php",
      "htmlFile": "screens/admin/admin_scene_mode.html",
      "type": "mode",
      "title": "현장 등록/수정",
      "purpose": "현장 신규등록 및 수정(신규 통합 등록 화면)",
      "workflow": "관리 > 현장 관리 > 등록/수정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "세대수",
          "dbField": "total_unit"
        },
        {
          "name": "보증기간",
          "dbField": "warranty"
        },
        {
          "name": "입주기간",
          "dbField": "move_in_period"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "담당지점",
          "dbField": "branch"
        },
        {
          "name": "뇌전유무",
          "dbField": "tdb_yn"
        },
        {
          "name": "TK유무",
          "dbField": "tk_yn"
        },
        {
          "name": "설치담당 성명/직함/연락처",
          "dbField": "install_manager"
        },
        {
          "name": "현장담당 성명/직함/연락처",
          "dbField": "scene_manager"
        },
        {
          "name": "세대기기 모델/수량/App/HW Ver",
          "dbField": "device"
        },
        {
          "name": "게이트웨이 모델/SW Ver",
          "dbField": "gateway"
        },
        {
          "name": "현장이슈",
          "dbField": "scene_issue"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_scene_proc.php"
        },
        {
          "label": "목록",
          "action": "admin_scene_list.php"
        },
        {
          "label": "주소검색",
          "action": "address_popup.php"
        },
        {
          "label": "아파트검색",
          "action": "popup_apt_search.php"
        },
        {
          "label": "모델검색",
          "action": "popup_model_search_scene.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        },
        {
          "trigger": "아파트검색",
          "popup": "popup_apt_search.php"
        },
        {
          "trigger": "모델검색",
          "popup": "popup_model_search_scene.php"
        }
      ],
      "flowFrom": [
        "admin_scene_list.php"
      ],
      "flowTo": [
        "admin_scene_list.php"
      ]
    },
    "admin_scene_mode1": {
      "phpFile": "admin_scene_mode1.php",
      "htmlFile": "screens/admin/admin_scene_mode1.html",
      "type": "mode",
      "title": "현장 부가정보",
      "purpose": "현장 등록 2단계(부가정보 입력)",
      "workflow": "관리 > 현장 관리 > 등록 > 2단계",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "설치담당",
          "dbField": "install_manager"
        },
        {
          "name": "현장이슈",
          "dbField": "scene_issue"
        },
        {
          "name": "Category",
          "dbField": "category"
        },
        {
          "name": "코드번호",
          "dbField": "part_code"
        },
        {
          "name": "모델명",
          "dbField": "model_name"
        },
        {
          "name": "수량",
          "dbField": "qty"
        },
        {
          "name": "제조사",
          "dbField": "maker"
        },
        {
          "name": "연락처",
          "dbField": "contact"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_scene_proc.php"
        },
        {
          "label": "이전",
          "action": "admin_scene_mode.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "모델검색",
          "popup": "popup_model_search_scene.php"
        }
      ],
      "flowFrom": [
        "admin_scene_mode.php"
      ],
      "flowTo": [
        "admin_scene_list.php"
      ]
    },
    "admin_user_list": {
      "phpFile": "admin_user_list.php",
      "htmlFile": "screens/admin/admin_user_list.html",
      "type": "list",
      "title": "사원 관리",
      "purpose": "시스템 사용자(사원) 조회 및 재직/퇴직 관리",
      "workflow": "관리 > 사원관리",
      "searchFields": [
        {
          "name": "bDel",
          "label": "재직상태",
          "type": "select",
          "options": [
            "전체",
            "퇴직(N)",
            "재직(Y)"
          ]
        },
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select",
          "options": [
            "사원명(N)",
            "센터명(C)",
            "부서명(P)"
          ]
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "순번",
          "dbField": "rownum"
        },
        {
          "name": "사원번호",
          "dbField": "사원번호"
        },
        {
          "name": "사원명",
          "dbField": "사원명"
        },
        {
          "name": "직급",
          "dbField": "직급"
        },
        {
          "name": "부서",
          "dbField": "부서"
        },
        {
          "name": "권한",
          "dbField": "권한"
        },
        {
          "name": "콜아이디",
          "dbField": "콜아이디"
        },
        {
          "name": "센터명",
          "dbField": "지점코드"
        },
        {
          "name": "사원여부",
          "dbField": "현재사원여부"
        },
        {
          "name": "비고(재직처리/수정)",
          "dbField": "actions"
        }
      ],
      "buttons": [
        {
          "label": "엑셀다운",
          "action": "excel_download() → excel/admin_user_list.php"
        },
        {
          "label": "직원추가",
          "action": "admin_user_mode.php (insert)"
        },
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "재직처리/퇴사처리",
          "action": "ajax_proc.php?mode=admin_user_del"
        },
        {
          "label": "수정",
          "action": "admin_user_mode.php (update)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "admin_user_mode.php"
      ]
    },
    "admin_user_mode": {
      "phpFile": "admin_user_mode.php",
      "htmlFile": "screens/admin/admin_user_mode.html",
      "type": "mode",
      "title": "사원 등록/수정",
      "purpose": "사원 신규등록 및 정보 수정, 비밀번호/권한 설정",
      "workflow": "관리 > 사원관리 > 등록/수정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "사원번호",
          "dbField": "user_id"
        },
        {
          "name": "비밀번호",
          "dbField": "passwd"
        },
        {
          "name": "사원명",
          "dbField": "user_name"
        },
        {
          "name": "직급",
          "dbField": "grade"
        },
        {
          "name": "부서",
          "dbField": "dept"
        },
        {
          "name": "권한",
          "dbField": "auth"
        },
        {
          "name": "콜아이디",
          "dbField": "call_id"
        },
        {
          "name": "센터",
          "dbField": "center"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "이메일",
          "dbField": "email"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "admin_user_proc.php"
        },
        {
          "label": "목록",
          "action": "admin_user_list.php"
        },
        {
          "label": "소속센터지정",
          "action": "popup_center_aff.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "소속센터지정",
          "popup": "popup_center_aff.php"
        }
      ],
      "flowFrom": [
        "admin_user_list.php"
      ],
      "flowTo": [
        "admin_user_list.php"
      ]
    },
    "my_info": {
      "phpFile": "my_info.php",
      "htmlFile": "screens/admin/my_info.html",
      "type": "mode",
      "title": "내 정보",
      "purpose": "현재 로그인 사원의 개인정보 확인 및 비밀번호 변경",
      "workflow": "상단 > 내 정보",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "사원번호",
          "dbField": "user_id"
        },
        {
          "name": "사원명",
          "dbField": "user_name"
        },
        {
          "name": "직급",
          "dbField": "grade"
        },
        {
          "name": "부서",
          "dbField": "dept"
        },
        {
          "name": "센터",
          "dbField": "center"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대전화",
          "dbField": "hp"
        },
        {
          "name": "이메일",
          "dbField": "email"
        },
        {
          "name": "현재 비밀번호",
          "dbField": "old_pw"
        },
        {
          "name": "새 비밀번호",
          "dbField": "new_pw"
        },
        {
          "name": "새 비밀번호 확인",
          "dbField": "new_pw_confirm"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax_proc.php?mode=my_info"
        },
        {
          "label": "취소",
          "action": "뒤로가기"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": []
    }
  },
  "forum": {
    "forum_free_list": {
      "phpFile": "forum_free_list.php",
      "htmlFile": "screens/forum/forum_free_list.html",
      "type": "list",
      "title": "자유게시판",
      "purpose": "자유게시판 글 목록 조회",
      "workflow": "게시판 > 자유게시판",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "작성자(ID)",
          "dbField": "writer_id"
        },
        {
          "name": "첨부파일",
          "dbField": "file_yn"
        },
        {
          "name": "작성일",
          "dbField": "reg_date"
        },
        {
          "name": "조회",
          "dbField": "read_count"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "글쓰기",
          "action": "forum_free_mode.php (insert)"
        },
        {
          "label": "읽기",
          "action": "forum_free_mode.php (read)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "forum_free_mode.php"
      ]
    },
    "forum_free_mode": {
      "phpFile": "forum_free_mode.php",
      "htmlFile": "screens/forum/forum_free_mode.html",
      "type": "mode",
      "title": "자유게시판 작성/수정",
      "purpose": "자유게시판 글 작성, 수정, 읽기",
      "workflow": "게시판 > 자유게시판 > 작성",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "작성자",
          "dbField": "writer"
        },
        {
          "name": "내용(FCKeditor)",
          "dbField": "content"
        },
        {
          "name": "첨부파일",
          "dbField": "upfile"
        },
        {
          "name": "작성일",
          "dbField": "reg_date"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "forum_free_proc.php"
        },
        {
          "label": "수정",
          "action": "forum_free_proc.php (update)"
        },
        {
          "label": "삭제",
          "action": "forum_free_proc.php (delete)"
        },
        {
          "label": "목록",
          "action": "forum_free_list.php"
        },
        {
          "label": "파일업로드",
          "action": "forum_free_upfile.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "forum_free_list.php"
      ],
      "flowTo": [
        "forum_free_list.php"
      ]
    },
    "forum_memo_list": {
      "phpFile": "forum_memo_list.php",
      "htmlFile": "screens/forum/forum_memo_list.html",
      "type": "list",
      "title": "쪽지",
      "purpose": "수신/발신 쪽지 목록 조회",
      "workflow": "게시판 > 쪽지",
      "searchFields": [
        {
          "name": "tab",
          "label": "구분",
          "type": "tab",
          "options": [
            "수신",
            "발신"
          ]
        },
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "구분",
          "dbField": "type"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "파일",
          "dbField": "file_yn"
        },
        {
          "name": "센터명",
          "dbField": "center"
        },
        {
          "name": "발신인",
          "dbField": "sender"
        },
        {
          "name": "발신일",
          "dbField": "send_date"
        },
        {
          "name": "수신인",
          "dbField": "receiver"
        },
        {
          "name": "수신일",
          "dbField": "recv_date"
        },
        {
          "name": "수신확인",
          "dbField": "read_yn"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "쪽지쓰기",
          "action": "forum_memo_mode.php (insert)"
        },
        {
          "label": "읽기",
          "action": "forum_memo_mode.php (read)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "forum_memo_mode.php"
      ]
    },
    "forum_memo_mode": {
      "phpFile": "forum_memo_mode.php",
      "htmlFile": "screens/forum/forum_memo_mode.html",
      "type": "mode",
      "title": "쪽지 작성/읽기",
      "purpose": "쪽지 보내기 및 받은 쪽지 읽기",
      "workflow": "게시판 > 쪽지 > 작성",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "수신자",
          "dbField": "receiver"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "내용",
          "dbField": "content"
        },
        {
          "name": "첨부파일",
          "dbField": "upfile"
        }
      ],
      "buttons": [
        {
          "label": "보내기",
          "action": "forum_memo_proc.php"
        },
        {
          "label": "답장",
          "action": "forum_memo_mode.php (reply)"
        },
        {
          "label": "삭제",
          "action": "forum_memo_proc.php (delete)"
        },
        {
          "label": "목록",
          "action": "forum_memo_list.php"
        },
        {
          "label": "수신자선택",
          "action": "popup_charge_select.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "수신자선택",
          "popup": "popup_charge_select.php"
        }
      ],
      "flowFrom": [
        "forum_memo_list.php"
      ],
      "flowTo": [
        "forum_memo_list.php"
      ]
    },
    "forum_notice_list": {
      "phpFile": "forum_notice_list.php",
      "htmlFile": "screens/forum/forum_notice_list.html",
      "type": "list",
      "title": "공지사항",
      "purpose": "공지사항 목록 조회",
      "workflow": "게시판 > 공지사항",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "작성자",
          "dbField": "writer"
        },
        {
          "name": "파일(ID)",
          "dbField": "file_id"
        },
        {
          "name": "작성일",
          "dbField": "reg_date"
        },
        {
          "name": "조회",
          "dbField": "read_count"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "공지등록",
          "action": "forum_notice_mode.php (insert)"
        },
        {
          "label": "읽기",
          "action": "forum_notice_mode.php (read)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "forum_notice_mode.php"
      ]
    },
    "forum_notice_mode": {
      "phpFile": "forum_notice_mode.php",
      "htmlFile": "screens/forum/forum_notice_mode.html",
      "type": "mode",
      "title": "공지사항 작성/수정",
      "purpose": "공지사항 작성, 수정, 읽기",
      "workflow": "게시판 > 공지사항 > 작성",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "내용(FCKeditor)",
          "dbField": "content"
        },
        {
          "name": "첨부파일",
          "dbField": "upfile"
        },
        {
          "name": "공지노출",
          "dbField": "notice_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "forum_notice_proc.php"
        },
        {
          "label": "수정",
          "action": "forum_notice_proc.php (update)"
        },
        {
          "label": "삭제",
          "action": "forum_notice_proc.php (delete)"
        },
        {
          "label": "목록",
          "action": "forum_notice_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "forum_notice_list.php"
      ],
      "flowTo": [
        "forum_notice_list.php"
      ]
    },
    "forum_pds_list": {
      "phpFile": "forum_pds_list.php",
      "htmlFile": "screens/forum/forum_pds_list.html",
      "type": "list",
      "title": "자료게시판",
      "purpose": "자료 파일 공유 게시판",
      "workflow": "게시판 > 자료게시판",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "작성자",
          "dbField": "writer"
        },
        {
          "name": "파일(ID)",
          "dbField": "file_id"
        },
        {
          "name": "작성일",
          "dbField": "reg_date"
        },
        {
          "name": "조회",
          "dbField": "read_count"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "자료등록",
          "action": "forum_pds_mode.php (insert)"
        },
        {
          "label": "다운로드",
          "action": "download.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "forum_pds_mode.php"
      ]
    },
    "forum_pds_mode": {
      "phpFile": "forum_pds_mode.php",
      "htmlFile": "screens/forum/forum_pds_mode.html",
      "type": "mode",
      "title": "자료 등록/수정",
      "purpose": "자료게시판 자료 등록/수정/다운로드",
      "workflow": "게시판 > 자료게시판 > 등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "내용",
          "dbField": "content"
        },
        {
          "name": "첨부파일",
          "dbField": "upfile"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "forum_pds_proc.php"
        },
        {
          "label": "수정",
          "action": "forum_pds_proc.php (update)"
        },
        {
          "label": "삭제",
          "action": "forum_pds_proc.php (delete)"
        },
        {
          "label": "목록",
          "action": "forum_pds_list.php"
        },
        {
          "label": "다운로드",
          "action": "download.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "forum_pds_list.php"
      ],
      "flowTo": [
        "forum_pds_list.php"
      ]
    },
    "forum_qna_list": {
      "phpFile": "forum_qna_list.php",
      "htmlFile": "screens/forum/forum_qna_list.html",
      "type": "list",
      "title": "Q&A 게시판",
      "purpose": "질문과 답변 게시판",
      "workflow": "게시판 > Q&A",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "작성자(ID)",
          "dbField": "writer_id"
        },
        {
          "name": "첨부파일",
          "dbField": "file_yn"
        },
        {
          "name": "작성일",
          "dbField": "reg_date"
        },
        {
          "name": "조회",
          "dbField": "read_count"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "질문등록",
          "action": "forum_qna_mode.php (insert)"
        },
        {
          "label": "답변",
          "action": "forum_qna_mode.php (reply)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main.php"
      ],
      "flowTo": [
        "forum_qna_mode.php"
      ]
    },
    "forum_qna_mode": {
      "phpFile": "forum_qna_mode.php",
      "htmlFile": "screens/forum/forum_qna_mode.html",
      "type": "mode",
      "title": "Q&A 작성/답변",
      "purpose": "Q&A 질문 작성 및 답변 등록",
      "workflow": "게시판 > Q&A > 작성/답변",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "제목",
          "dbField": "subject"
        },
        {
          "name": "내용",
          "dbField": "content"
        },
        {
          "name": "첨부파일",
          "dbField": "upfile"
        },
        {
          "name": "답변",
          "dbField": "reply"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "forum_qna_proc.php"
        },
        {
          "label": "답변등록",
          "action": "forum_qna_proc.php (reply)"
        },
        {
          "label": "수정",
          "action": "forum_qna_proc.php (update)"
        },
        {
          "label": "삭제",
          "action": "forum_qna_proc.php (delete)"
        },
        {
          "label": "목록",
          "action": "forum_qna_list.php"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "forum_qna_list.php"
      ],
      "flowTo": [
        "forum_qna_list.php"
      ]
    }
  },
  "popup": {
    "popup_apt_search": {
      "phpFile": "popup_apt_search.php",
      "htmlFile": "screens/popup/popup_apt_search.html",
      "type": "popup-search",
      "title": "현장검색",
      "purpose": "아파트/현장 검색 및 선택 팝업",
      "workflow": "부모화면 > 아파트검색 버튼",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트코드",
          "dbField": "apt_code"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem() → opener로 값 전달"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_member_mode.php",
        "admin_scene_mode.php",
        "popup_receipt_*"
      ],
      "flowTo": []
    },
    "popup_apt_search_1": {
      "phpFile": "popup_apt_search_1.php",
      "htmlFile": "screens/popup/popup_apt_search_1.html",
      "type": "popup-search",
      "title": "현장검색 (변형1)",
      "purpose": "아파트/현장 검색 변형 팝업 (모델/가격 포함 반환)",
      "workflow": "부모화면 > 아파트검색 버튼(확장)",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트코드",
          "dbField": "apt_code"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem(idx,apt_name,zip,addr1,addr2,callprice,품번,model)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_receipt_*"
      ],
      "flowTo": []
    },
    "popup_center_aff": {
      "phpFile": "popup_center_aff.php",
      "htmlFile": "screens/popup/popup_center_aff.html",
      "type": "popup-assign",
      "title": "소속센터지정",
      "purpose": "사원의 소속 센터(복수) 지정",
      "workflow": "admin_user_mode > 소속센터지정",
      "searchFields": [
        {
          "name": "keyword",
          "label": "센터명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "지점명",
          "dbField": "center_name"
        },
        {
          "name": "삭제",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "추가",
          "action": "센터 추가"
        },
        {
          "label": "삭제",
          "action": "센터 삭제"
        },
        {
          "label": "저장",
          "action": "ajax proc"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "센터검색",
          "popup": "popup_center_search.php"
        }
      ],
      "flowFrom": [
        "admin_user_mode.php"
      ],
      "flowTo": []
    },
    "popup_center_search": {
      "phpFile": "popup_center_search.php",
      "htmlFile": "screens/popup/popup_center_search.html",
      "type": "popup-search",
      "title": "대리점조회",
      "purpose": "대리점(센터) 검색 및 선택",
      "workflow": "부모화면 > 대리점검색",
      "searchFields": [
        {
          "name": "keyfield",
          "label": "검색구분",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "코드",
          "dbField": "center_code"
        },
        {
          "name": "대리점명",
          "dbField": "center_name"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "담당자명",
          "dbField": "manager"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "핸드폰",
          "dbField": "hp"
        },
        {
          "name": "형태",
          "dbField": "center_type"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_user_mode.php",
        "popup_center_aff.php"
      ],
      "flowTo": []
    },
    "popup_charge_select": {
      "phpFile": "popup_charge_select.php",
      "htmlFile": "screens/popup/popup_charge_select.html",
      "type": "popup-search",
      "title": "담당기사선택",
      "purpose": "지점별 담당기사 선택 (2단계 선택: 지점 → 사원)",
      "workflow": "서비스접수/처리 > 담당기사선택",
      "searchFields": [
        {
          "name": "keyword",
          "label": "지점/사원명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "지점코드",
          "dbField": "center_code"
        },
        {
          "name": "지점명",
          "dbField": "center_name"
        },
        {
          "name": "직원수",
          "dbField": "user_count"
        },
        {
          "name": "사번",
          "dbField": "user_id"
        },
        {
          "name": "사원명",
          "dbField": "user_name"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "지점선택",
          "action": "지점 → 사원 목록 조회"
        },
        {
          "label": "사원선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_svc.php",
        "popup_receipt_read.php"
      ],
      "flowTo": []
    },
    "popup_happycall": {
      "phpFile": "popup_happycall.php",
      "htmlFile": "screens/popup/popup_happycall.html",
      "type": "popup-form",
      "title": "해피콜 처리",
      "purpose": "AS 처리 완료 후 고객 만족도 확인 통화(해피콜) 등록",
      "workflow": "처리완료 접수 > 해피콜",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "확인일자",
          "dbField": "check_date"
        },
        {
          "name": "확인고객명",
          "dbField": "check_cust"
        },
        {
          "name": "만족도",
          "dbField": "satisfaction"
        },
        {
          "name": "상담내역 고객의견",
          "dbField": "opinion"
        },
        {
          "name": "처리사원",
          "dbField": "user"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "main 접수리스트"
      ],
      "flowTo": []
    },
    "popup_jaje": {
      "phpFile": "popup_jaje.php",
      "htmlFile": "screens/popup/popup_jaje.html",
      "type": "popup-search",
      "title": "자재 검색",
      "purpose": "자재(부품) 검색 및 선택 (기본)",
      "workflow": "부모화면 > 자재검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store_*"
      ],
      "flowTo": []
    },
    "popup_master_search": {
      "phpFile": "popup_master_search.php",
      "htmlFile": "screens/popup/popup_master_search.html",
      "type": "popup-search",
      "title": "대리점조회 (담당자 포함)",
      "purpose": "업무담당자 검색 및 선택",
      "workflow": "부모화면 > 업무담당자검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "업무부서",
          "dbField": "dept"
        },
        {
          "name": "담당자",
          "dbField": "manager"
        },
        {
          "name": "직급",
          "dbField": "grade"
        },
        {
          "name": "담당업무",
          "dbField": "duty"
        },
        {
          "name": "전화번호(내선)",
          "dbField": "tel_ext"
        },
        {
          "name": "핸드폰",
          "dbField": "hp"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_receipt_*"
      ],
      "flowTo": []
    },
    "popup_model_search": {
      "phpFile": "popup_model_search.php",
      "htmlFile": "screens/popup/popup_model_search.html",
      "type": "popup-search",
      "title": "자재 검색",
      "purpose": "모델(자재) 검색 - 기본형",
      "workflow": "부모화면 > 모델검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_receipt_*"
      ],
      "flowTo": []
    },
    "popup_model_search_scene": {
      "phpFile": "popup_model_search_scene.php",
      "htmlFile": "screens/popup/popup_model_search_scene.html",
      "type": "popup-search",
      "title": "자재 검색 (현장용)",
      "purpose": "현장 등록용 모델 검색",
      "workflow": "admin_scene_mode > 모델검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_scene_mode.php",
        "admin_scene_mode1.php"
      ],
      "flowTo": []
    },
    "popup_model_search_sub": {
      "phpFile": "popup_model_search_sub.php",
      "htmlFile": "screens/popup/popup_model_search_sub.html",
      "type": "popup-search",
      "title": "자재 검색 (부자재)",
      "purpose": "부자재/하위 모델 검색",
      "workflow": "부모화면 > 부자재검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "선택",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_svc_master.php"
      ],
      "flowTo": []
    },
    "popup_model_search_svc": {
      "phpFile": "popup_model_search_svc.php",
      "htmlFile": "screens/popup/popup_model_search_svc.html",
      "type": "popup-search",
      "title": "처리 자재계리 검색",
      "purpose": "서비스 처리 시 사용한 자재 검색",
      "workflow": "popup_svc > 자재검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_svc.php",
        "popup_svc1.php"
      ],
      "flowTo": []
    },
    "popup_receipt_excel_111": {
      "phpFile": "popup_receipt_excel_111.php",
      "htmlFile": "screens/popup/popup_receipt_excel_111.html",
      "type": "popup-form",
      "title": "연차 접수 (엑셀 업로드 v111)",
      "purpose": "연차 접수 엑셀 일괄 등록 (구버전)",
      "workflow": "접수 > 연차접수 > 엑셀업로드",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "파일 업로드",
          "dbField": "upfile"
        }
      ],
      "buttons": [
        {
          "label": "업로드",
          "action": "receipt_year_proc"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "receipt main"
      ],
      "flowTo": []
    },
    "popup_receipt_excel_upload": {
      "phpFile": "popup_receipt_excel_upload.php",
      "htmlFile": "screens/popup/popup_receipt_excel_upload.html",
      "type": "popup-form",
      "title": "연차 접수 (엑셀 업로드)",
      "purpose": "연차 접수 엑셀 일괄 등록",
      "workflow": "접수 > 연차접수 > 엑셀업로드",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "파일 업로드",
          "dbField": "upfile"
        }
      ],
      "buttons": [
        {
          "label": "업로드",
          "action": "receipt_year_proc"
        },
        {
          "label": "양식다운",
          "action": "excel template download"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "receipt main"
      ],
      "flowTo": []
    },
    "popup_receipt_read": {
      "phpFile": "popup_receipt_read.php",
      "htmlFile": "screens/popup/popup_receipt_read.html",
      "type": "popup-detail",
      "title": "서비스 접수",
      "purpose": "서비스 접수 상세 조회/수정",
      "workflow": "접수 목록 > 접수 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "접수일자",
          "dbField": "receipt_date"
        },
        {
          "name": "발신번호",
          "dbField": "caller"
        },
        {
          "name": "접수구분",
          "dbField": "receipt_type"
        },
        {
          "name": "고객명",
          "dbField": "cust_name"
        },
        {
          "name": "관계",
          "dbField": "relation"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대폰",
          "dbField": "hp"
        },
        {
          "name": "우편번호",
          "dbField": "zip"
        },
        {
          "name": "APT명칭",
          "dbField": "apt_name"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "모델",
          "dbField": "model"
        },
        {
          "name": "판매유형",
          "dbField": "sale_type"
        },
        {
          "name": "고장증상",
          "dbField": "error_code"
        },
        {
          "name": "세부증상",
          "dbField": "error_detail"
        },
        {
          "name": "유상통보",
          "dbField": "paid_notice"
        },
        {
          "name": "특이사항",
          "dbField": "special"
        },
        {
          "name": "기사메모",
          "dbField": "engineer_memo"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "출력",
          "action": "popup_svc_print.php"
        },
        {
          "label": "SMS",
          "action": "popup_sms.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "아파트검색",
          "popup": "popup_apt_search.php"
        },
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        },
        {
          "trigger": "모델검색",
          "popup": "popup_model_search.php"
        },
        {
          "trigger": "SMS",
          "popup": "popup_sms.php"
        }
      ],
      "flowFrom": [
        "receipt_list.php"
      ],
      "flowTo": []
    },
    "popup_receipt_tk_excel_upload": {
      "phpFile": "popup_receipt_tk_excel_upload.php",
      "htmlFile": "screens/popup/popup_receipt_tk_excel_upload.html",
      "type": "popup-form",
      "title": "TK접수 (엑셀 업로드)",
      "purpose": "TK 접수 엑셀 일괄 등록",
      "workflow": "접수 > TK접수 > 엑셀업로드",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "파일 업로드",
          "dbField": "upfile"
        }
      ],
      "buttons": [
        {
          "label": "업로드",
          "action": "receipt_tk_proc"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "receipt TK main"
      ],
      "flowTo": []
    },
    "popup_receipt_year_read": {
      "phpFile": "popup_receipt_year_read.php",
      "htmlFile": "screens/popup/popup_receipt_year_read.html",
      "type": "popup-detail",
      "title": "연차 접수",
      "purpose": "연차 접수 상세 조회/수정",
      "workflow": "연차접수 목록 > 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "연차",
          "dbField": "year_no"
        },
        {
          "name": "접수일자",
          "dbField": "receipt_date"
        },
        {
          "name": "기준일",
          "dbField": "base_date"
        },
        {
          "name": "공종명",
          "dbField": "work_type"
        },
        {
          "name": "타공종유무",
          "dbField": "other_work_yn"
        },
        {
          "name": "방문약속여부",
          "dbField": "visit_promise_yn"
        },
        {
          "name": "방문예약일",
          "dbField": "visit_date"
        },
        {
          "name": "고객명",
          "dbField": "cust_name"
        },
        {
          "name": "관계",
          "dbField": "relation"
        },
        {
          "name": "전화번호",
          "dbField": "tel"
        },
        {
          "name": "휴대폰",
          "dbField": "hp"
        },
        {
          "name": "우편번호",
          "dbField": "zip"
        },
        {
          "name": "APT명칭",
          "dbField": "apt_name"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "모델",
          "dbField": "model"
        },
        {
          "name": "유상통보",
          "dbField": "paid_notice"
        },
        {
          "name": "고장증상",
          "dbField": "error_code"
        },
        {
          "name": "세부증상",
          "dbField": "error_detail"
        },
        {
          "name": "기사메모",
          "dbField": "engineer_memo"
        },
        {
          "name": "상담내용",
          "dbField": "consult"
        },
        {
          "name": "처리지점",
          "dbField": "branch"
        },
        {
          "name": "담당기사",
          "dbField": "engineer"
        },
        {
          "name": "기사연락처",
          "dbField": "engineer_tel"
        },
        {
          "name": "구간구분",
          "dbField": "section"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_receipt_year_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        },
        {
          "trigger": "아파트검색",
          "popup": "popup_apt_search_1.php"
        }
      ],
      "flowFrom": [
        "연차접수 목록"
      ],
      "flowTo": []
    },
    "popup_return": {
      "phpFile": "popup_return.php",
      "htmlFile": "screens/popup/popup_return.html",
      "type": "popup-form",
      "title": "반납 의뢰",
      "purpose": "자재 반납 의뢰 등록 (시리얼 기반)",
      "workflow": "재고 > 반납 의뢰",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼",
          "dbField": "out_serial"
        },
        {
          "name": "출고일",
          "dbField": "out_date"
        },
        {
          "name": "반납시리얼",
          "dbField": "return_serial"
        },
        {
          "name": "반납일",
          "dbField": "return_date"
        },
        {
          "name": "반납등급",
          "dbField": "return_grade"
        },
        {
          "name": "비고",
          "dbField": "remark"
        },
        {
          "name": "반납연장",
          "dbField": "extension"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_return_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store list"
      ],
      "flowTo": []
    },
    "popup_satisfaction": {
      "phpFile": "popup_satisfaction.php",
      "htmlFile": "screens/popup/popup_satisfaction.html",
      "type": "popup-form",
      "title": "해피콜 처리 (만족도)",
      "purpose": "고객 만족도 조사 (해피콜 변형)",
      "workflow": "처리완료 > 만족도 조사",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "확인일자",
          "dbField": "check_date"
        },
        {
          "name": "확인고객명",
          "dbField": "check_cust"
        },
        {
          "name": "만족도",
          "dbField": "satisfaction"
        },
        {
          "name": "상담내역 고객의견",
          "dbField": "opinion"
        },
        {
          "name": "처리사원",
          "dbField": "user"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "처리완료 접수"
      ],
      "flowTo": []
    },
    "popup_scene_detail": {
      "phpFile": "popup_scene_detail.php",
      "htmlFile": "screens/popup/popup_scene_detail.html",
      "type": "popup-detail",
      "title": "현장 상세보기",
      "purpose": "현장 상세 정보 팝업 (읽기)",
      "workflow": "현장목록 > 상세 (팝업)",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "세대수",
          "dbField": "total_unit"
        },
        {
          "name": "보증기간",
          "dbField": "warranty"
        },
        {
          "name": "입주기간",
          "dbField": "move_in_period"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "담당지점",
          "dbField": "branch"
        },
        {
          "name": "비고",
          "dbField": "remark"
        },
        {
          "name": "뇌전유무",
          "dbField": "tdb_yn"
        },
        {
          "name": "설치담당 성명/직함/연락처",
          "dbField": "install_manager"
        },
        {
          "name": "현장담당 성명/직함/연락처",
          "dbField": "scene_manager"
        },
        {
          "name": "세대기기 모델/총수량/App/HW Ver",
          "dbField": "device"
        },
        {
          "name": "게이트웨이 모델/SW Ver",
          "dbField": "gateway"
        },
        {
          "name": "TK유무/TK점검자",
          "dbField": "tk_info"
        },
        {
          "name": "현장이슈",
          "dbField": "scene_issue"
        },
        {
          "name": "Category/코드번호/모델명/수량/제조사/연락처",
          "dbField": "scene_part"
        }
      ],
      "buttons": [
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_scene_list.php",
        "pop_admin_scene_list.php"
      ],
      "flowTo": []
    },
    "popup_scene_list": {
      "phpFile": "popup_scene_list.php",
      "htmlFile": "screens/popup/popup_scene_list.html",
      "type": "popup-list",
      "title": "현장 관리 (팝업)",
      "purpose": "현장 검색/선택 팝업 (목록형)",
      "workflow": "부모화면 > 현장검색",
      "searchFields": [
        {
          "name": "apt_category",
          "label": "아파트분류",
          "type": "select"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트번호",
          "dbField": "apt_no",
          "sortable": true
        },
        {
          "name": "아파트명",
          "dbField": "apt_name",
          "sortable": true
        },
        {
          "name": "현장명",
          "dbField": "scene_name",
          "sortable": true
        },
        {
          "name": "현장담당자",
          "dbField": "scene_manager",
          "sortable": true
        },
        {
          "name": "모델명",
          "dbField": "model_name",
          "sortable": true
        },
        {
          "name": "비고(선택)",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "상세",
          "popup": "popup_scene_detail.php"
        }
      ],
      "flowFrom": [
        "receipt_*"
      ],
      "flowTo": []
    },
    "popup_scene_mode": {
      "phpFile": "popup_scene_mode.php",
      "htmlFile": "screens/popup/popup_scene_mode.html",
      "type": "popup-form",
      "title": "현장 등록/수정 (팝업)",
      "purpose": "현장 신규등록/수정 팝업",
      "workflow": "현장목록 > 등록 (팝업)",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "세대수",
          "dbField": "total_unit"
        },
        {
          "name": "보증기간",
          "dbField": "warranty"
        },
        {
          "name": "입주기간",
          "dbField": "move_in_period"
        },
        {
          "name": "상세주소",
          "dbField": "address_detail"
        },
        {
          "name": "담당지점",
          "dbField": "branch"
        },
        {
          "name": "비고",
          "dbField": "remark"
        },
        {
          "name": "뇌전유무",
          "dbField": "tdb_yn"
        },
        {
          "name": "설치담당 성명/직함/연락처",
          "dbField": "install_manager"
        },
        {
          "name": "현장담당 성명/직함/연락처",
          "dbField": "scene_manager"
        },
        {
          "name": "세대기기 모델/총수량/App/HW Ver",
          "dbField": "device"
        },
        {
          "name": "게이트웨이 모델/SW Ver",
          "dbField": "gateway"
        },
        {
          "name": "TK유무/TK점검자",
          "dbField": "tk_info"
        },
        {
          "name": "현장이슈",
          "dbField": "scene_issue"
        },
        {
          "name": "Category/코드번호/모델명/수량/제조사/연락처/del",
          "dbField": "scene_part"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_scene_mode_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        },
        {
          "label": "주소검색",
          "action": "address_popup.php"
        },
        {
          "label": "모델검색",
          "action": "popup_model_search_scene.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "주소검색",
          "popup": "address_popup.php"
        },
        {
          "trigger": "모델검색",
          "popup": "popup_model_search_scene.php"
        }
      ],
      "flowFrom": [
        "popup_scene_list.php"
      ],
      "flowTo": []
    },
    "popup_secen_search": {
      "phpFile": "popup_secen_search.php",
      "htmlFile": "screens/popup/popup_secen_search.html",
      "type": "popup-search",
      "title": "현장 검색",
      "purpose": "현장 검색 (접수 등록용)",
      "workflow": "접수 등록 > 현장검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "아파트/현장명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "담당자",
          "dbField": "manager"
        },
        {
          "name": "모델명",
          "dbField": "model_name"
        },
        {
          "name": "뇌전일",
          "dbField": "tdb_date"
        },
        {
          "name": "비고",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "receipt_*"
      ],
      "flowTo": []
    },
    "popup_secen_search_release": {
      "phpFile": "popup_secen_search_release.php",
      "htmlFile": "screens/popup/popup_secen_search_release.html",
      "type": "popup-search",
      "title": "현장 검색 (출고용)",
      "purpose": "출고용 현장 검색",
      "workflow": "출고 > 현장검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "아파트/현장명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "비고",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "출고화면"
      ],
      "flowTo": []
    },
    "popup_serial": {
      "phpFile": "popup_serial.php",
      "htmlFile": "screens/popup/popup_serial.html",
      "type": "popup-form",
      "title": "시리얼 번호 등록",
      "purpose": "자재 출고 시리얼 등록",
      "workflow": "출고 > 시리얼등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼번호",
          "dbField": "out_serial"
        },
        {
          "name": "등급",
          "dbField": "grade"
        },
        {
          "name": "출고사원",
          "dbField": "out_user"
        },
        {
          "name": "출고일",
          "dbField": "out_date"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_serial_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "store list"
      ],
      "flowTo": []
    },
    "popup_serial_return": {
      "phpFile": "popup_serial_return.php",
      "htmlFile": "screens/popup/popup_serial_return.html",
      "type": "popup-form",
      "title": "반품 시리얼 번호 등록",
      "purpose": "반품용 시리얼 번호 등록",
      "workflow": "반품 > 시리얼등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼번호",
          "dbField": "out_serial"
        },
        {
          "name": "반납시리얼번호",
          "dbField": "return_serial"
        },
        {
          "name": "반납등급",
          "dbField": "return_grade"
        },
        {
          "name": "반납사원",
          "dbField": "return_user"
        },
        {
          "name": "반납일",
          "dbField": "return_date"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_serial_return_proc"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "반품화면"
      ],
      "flowTo": []
    },
    "popup_serial_return_release": {
      "phpFile": "popup_serial_return_release.php",
      "htmlFile": "screens/popup/popup_serial_return_release.html",
      "type": "popup-form",
      "title": "반품 확정",
      "purpose": "반품 확정 처리 (시리얼 기반)",
      "workflow": "반품 > 확정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼",
          "dbField": "out_serial"
        },
        {
          "name": "출고일",
          "dbField": "out_date"
        },
        {
          "name": "반납시리얼",
          "dbField": "return_serial"
        },
        {
          "name": "반납일",
          "dbField": "return_date"
        },
        {
          "name": "반납등급",
          "dbField": "return_grade"
        },
        {
          "name": "비고",
          "dbField": "remark"
        }
      ],
      "buttons": [
        {
          "label": "확정",
          "action": "popup_serial_return_release_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "반품목록"
      ],
      "flowTo": []
    },
    "popup_serial_return_release2": {
      "phpFile": "popup_serial_return_release2.php",
      "htmlFile": "screens/popup/popup_serial_return_release2.html",
      "type": "popup-form",
      "title": "반품 신청",
      "purpose": "반품 신청 (시리얼 기반 v2)",
      "workflow": "반품 > 신청",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼",
          "dbField": "out_serial"
        },
        {
          "name": "출고일",
          "dbField": "out_date"
        },
        {
          "name": "반납시리얼",
          "dbField": "return_serial"
        },
        {
          "name": "반납등급",
          "dbField": "return_grade"
        }
      ],
      "buttons": [
        {
          "label": "신청",
          "action": "popup_serial_return_release2_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "반품목록"
      ],
      "flowTo": []
    },
    "popup_serial_store": {
      "phpFile": "popup_serial_store.php",
      "htmlFile": "screens/popup/popup_serial_store.html",
      "type": "popup-form",
      "title": "반품 시리얼 번호 등록 (센터)",
      "purpose": "센터 반품 시리얼 등록",
      "workflow": "센터반품 > 시리얼등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "번호",
          "dbField": "rownum"
        },
        {
          "name": "출고시리얼번호",
          "dbField": "out_serial"
        },
        {
          "name": "반납시리얼번호",
          "dbField": "return_serial"
        },
        {
          "name": "반납등급",
          "dbField": "return_grade"
        },
        {
          "name": "반납사원",
          "dbField": "return_user"
        },
        {
          "name": "반납일",
          "dbField": "return_date"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_serial_store_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "센터반품"
      ],
      "flowTo": []
    },
    "popup_serial_tdb": {
      "phpFile": "popup_serial_tdb.php",
      "htmlFile": "screens/popup/popup_serial_tdb.html",
      "type": "popup-form",
      "title": "뇌전 출고 등록",
      "purpose": "뇌전자재(TDB) 출고 수량 등록",
      "workflow": "뇌전 > 출고등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "신청량",
          "dbField": "req_qty"
        },
        {
          "name": "출고량",
          "dbField": "out_qty"
        },
        {
          "name": "출고등급",
          "dbField": "out_grade"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_serial_tdb_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "뇌전출고 목록"
      ],
      "flowTo": []
    },
    "popup_serial_tdb_return": {
      "phpFile": "popup_serial_tdb_return.php",
      "htmlFile": "screens/popup/popup_serial_tdb_return.html",
      "type": "popup-form",
      "title": "뇌전 반납확정",
      "purpose": "뇌전자재(TDB) 반납 확정",
      "workflow": "뇌전 > 반납확정",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "신청량",
          "dbField": "req_qty"
        },
        {
          "name": "출고량",
          "dbField": "out_qty"
        },
        {
          "name": "반납량",
          "dbField": "return_qty"
        },
        {
          "name": "확정수량",
          "dbField": "confirm_qty"
        }
      ],
      "buttons": [
        {
          "label": "확정",
          "action": "popup_serial_tdb_return_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "뇌전반납 목록"
      ],
      "flowTo": []
    },
    "popup_serial_tdb_return_ins": {
      "phpFile": "popup_serial_tdb_return_ins.php",
      "htmlFile": "screens/popup/popup_serial_tdb_return_ins.html",
      "type": "popup-form",
      "title": "뇌전 반납신청",
      "purpose": "뇌전자재(TDB) 반납 신청(양품/불량 구분)",
      "workflow": "뇌전 > 반납신청",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "신청량",
          "dbField": "req_qty"
        },
        {
          "name": "출고량",
          "dbField": "out_qty"
        },
        {
          "name": "양품",
          "dbField": "good_qty"
        },
        {
          "name": "불량",
          "dbField": "bad_qty"
        }
      ],
      "buttons": [
        {
          "label": "신청",
          "action": "popup_serial_tdb_return_ins_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "뇌전목록"
      ],
      "flowTo": []
    },
    "popup_sms": {
      "phpFile": "popup_sms.php",
      "htmlFile": "screens/popup/popup_sms.html",
      "type": "popup-form",
      "title": "자주사용하는 문구",
      "purpose": "SMS 자주사용 문구 관리 및 전송",
      "workflow": "SMS 전송 > 문구선택",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "문자내용",
          "dbField": "content"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        },
        {
          "name": "비고",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "추가",
          "action": "문구 추가"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        },
        {
          "label": "저장",
          "action": "ajax 저장"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_sms_main.php"
      ],
      "flowTo": []
    },
    "popup_sms_list": {
      "phpFile": "popup_sms_list.php",
      "htmlFile": "screens/popup/popup_sms_list.html",
      "type": "popup-list",
      "title": "SMS 리스트",
      "purpose": "발송된 SMS 이력 조회 및 재전송",
      "workflow": "SMS > 리스트",
      "searchFields": [
        {
          "name": "sdate",
          "label": "시작일",
          "type": "date"
        },
        {
          "name": "edate",
          "label": "종료일",
          "type": "date"
        },
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "No",
          "dbField": "rownum"
        },
        {
          "name": "전송일시",
          "dbField": "send_date"
        },
        {
          "name": "수신번호",
          "dbField": "recv_tel"
        },
        {
          "name": "전송메시지",
          "dbField": "message"
        },
        {
          "name": "발신자",
          "dbField": "sender"
        },
        {
          "name": "전송결과",
          "dbField": "result"
        },
        {
          "name": "재전송",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "재전송",
          "action": "ajax 재전송"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_sms_main.php"
      ],
      "flowTo": []
    },
    "popup_sms_main": {
      "phpFile": "popup_sms_main.php",
      "htmlFile": "screens/popup/popup_sms_main.html",
      "type": "popup-form",
      "title": "SMS 전송",
      "purpose": "SMS 작성 및 전송 메인",
      "workflow": "SMS 전송 메인",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "수신번호",
          "dbField": "recv_tel"
        },
        {
          "name": "발신번호",
          "dbField": "send_tel"
        },
        {
          "name": "메시지내용",
          "dbField": "message"
        }
      ],
      "buttons": [
        {
          "label": "전송",
          "action": "ajax SMS 전송"
        },
        {
          "label": "자주문구",
          "action": "popup_sms.php"
        },
        {
          "label": "이력조회",
          "action": "popup_sms_list.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "자주문구",
          "popup": "popup_sms.php"
        },
        {
          "trigger": "이력조회",
          "popup": "popup_sms_list.php"
        }
      ],
      "flowFrom": [
        "receipt_*",
        "popup_receipt_read.php"
      ],
      "flowTo": []
    },
    "popup_store_grade": {
      "phpFile": "popup_store_grade.php",
      "htmlFile": "screens/popup/popup_store_grade.html",
      "type": "popup-list",
      "title": "자재출고등급",
      "purpose": "자재 출고 등급 관리",
      "workflow": "자재 > 출고등급 관리",
      "searchFields": [
        {
          "name": "bUse",
          "label": "사용여부",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "코드번호",
          "dbField": "grade_code"
        },
        {
          "name": "등급명",
          "dbField": "grade_name"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "추가",
          "action": "행 추가"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "코드관리"
      ],
      "flowTo": []
    },
    "popup_svc": {
      "phpFile": "popup_svc.php",
      "htmlFile": "screens/popup/popup_svc.html",
      "type": "popup-form",
      "title": "처리 (서비스)",
      "purpose": "서비스 처리 등록 (기본)",
      "workflow": "접수 > 처리등록",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "담당기사",
          "dbField": "engineer"
        },
        {
          "name": "처리분류",
          "dbField": "proc_code"
        },
        {
          "name": "처리상세",
          "dbField": "proc_detail"
        },
        {
          "name": "원인분류",
          "dbField": "reason_code"
        },
        {
          "name": "원인상세",
          "dbField": "reason_detail"
        },
        {
          "name": "처리내용",
          "dbField": "proc_content"
        },
        {
          "name": "청구금액",
          "dbField": "req_amt"
        },
        {
          "name": "징구금액",
          "dbField": "recv_amt"
        },
        {
          "name": "사용자재",
          "dbField": "used_parts"
        },
        {
          "name": "기사의견",
          "dbField": "engineer_opinion"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_svc_proc.php"
        },
        {
          "label": "자재검색",
          "action": "popup_svc_master.php"
        },
        {
          "label": "담당기사",
          "action": "popup_charge_select.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "자재검색",
          "popup": "popup_svc_master.php"
        },
        {
          "trigger": "담당기사",
          "popup": "popup_charge_select.php"
        },
        {
          "trigger": "원인코드",
          "popup": "popup_model_search_svc.php"
        }
      ],
      "flowFrom": [
        "receipt 목록"
      ],
      "flowTo": []
    },
    "popup_svc1": {
      "phpFile": "popup_svc1.php",
      "htmlFile": "screens/popup/popup_svc1.html",
      "type": "popup-form",
      "title": "처리 (변형1)",
      "purpose": "서비스 처리 등록 변형1",
      "workflow": "접수 > 처리등록(변형)",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "처리분류",
          "dbField": "proc_code"
        },
        {
          "name": "처리상세",
          "dbField": "proc_detail"
        },
        {
          "name": "원인분류",
          "dbField": "reason_code"
        },
        {
          "name": "처리내용",
          "dbField": "proc_content"
        },
        {
          "name": "청구금액",
          "dbField": "req_amt"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_svc_proc.php"
        },
        {
          "label": "자재검색",
          "action": "popup_svc_master.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "자재검색",
          "popup": "popup_svc_master.php"
        }
      ],
      "flowFrom": [
        "receipt 목록"
      ],
      "flowTo": []
    },
    "popup_svc_cancel": {
      "phpFile": "popup_svc_cancel.php",
      "htmlFile": "screens/popup/popup_svc_cancel.html",
      "type": "popup-form",
      "title": "처리 (취소)",
      "purpose": "서비스 처리 취소",
      "workflow": "처리완료 > 취소",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "취소사유",
          "dbField": "cancel_reason"
        }
      ],
      "buttons": [
        {
          "label": "취소처리",
          "action": "popup_svc_proc.php (cancel)"
        },
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "처리완료 목록"
      ],
      "flowTo": []
    },
    "popup_svc_master": {
      "phpFile": "popup_svc_master.php",
      "htmlFile": "screens/popup/popup_svc_master.html",
      "type": "popup-search",
      "title": "자재 검색 (처리용)",
      "purpose": "서비스 처리용 자재 선택 및 사용량 등록",
      "workflow": "popup_svc > 자재검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "품번/품명",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "CS품명",
          "dbField": "part_name"
        },
        {
          "name": "등급",
          "dbField": "grade"
        },
        {
          "name": "재고량",
          "dbField": "stock_qty"
        },
        {
          "name": "반납",
          "dbField": "return_qty"
        },
        {
          "name": "사용량",
          "dbField": "use_qty"
        },
        {
          "name": "금액",
          "dbField": "amt"
        },
        {
          "name": "삭제",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_svc.php",
        "popup_svc1.php"
      ],
      "flowTo": []
    },
    "popup_svc_print": {
      "phpFile": "popup_svc_print.php",
      "htmlFile": "screens/popup/popup_svc_print.html",
      "type": "popup-print",
      "title": "자재 출력 (서비스 전표)",
      "purpose": "서비스 접수/처리 전표 인쇄",
      "workflow": "접수/처리 > 출력",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "접수일",
          "dbField": "receipt_date"
        },
        {
          "name": "접수자명",
          "dbField": "receipt_user"
        },
        {
          "name": "고객명",
          "dbField": "cust_name"
        },
        {
          "name": "접수현장",
          "dbField": "scene"
        },
        {
          "name": "일반 전화번호",
          "dbField": "tel"
        },
        {
          "name": "긴급 전화번호",
          "dbField": "hp"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "제품명",
          "dbField": "model"
        },
        {
          "name": "고장증상",
          "dbField": "error_code"
        },
        {
          "name": "세부증상",
          "dbField": "error_detail"
        },
        {
          "name": "특이사항",
          "dbField": "special"
        },
        {
          "name": "구입일",
          "dbField": "buy_date"
        },
        {
          "name": "상담내용",
          "dbField": "consult"
        },
        {
          "name": "기사명",
          "dbField": "engineer"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "제품 일련번호",
          "dbField": "serial"
        },
        {
          "name": "확인 고객명",
          "dbField": "check_cust"
        },
        {
          "name": "방문일",
          "dbField": "visit_date"
        },
        {
          "name": "요금적용",
          "dbField": "fee_type"
        },
        {
          "name": "부가세",
          "dbField": "vat"
        },
        {
          "name": "처리내용",
          "dbField": "proc_content"
        },
        {
          "name": "처리분류",
          "dbField": "proc_code"
        },
        {
          "name": "처리상세",
          "dbField": "proc_detail"
        },
        {
          "name": "원인분류",
          "dbField": "reason_code"
        },
        {
          "name": "원인상세",
          "dbField": "reason_detail"
        },
        {
          "name": "청구금액",
          "dbField": "req_amt"
        },
        {
          "name": "징구금액",
          "dbField": "recv_amt"
        },
        {
          "name": "기사의견",
          "dbField": "engineer_opinion"
        },
        {
          "name": "고객확인",
          "dbField": "cust_confirm"
        },
        {
          "name": "부품코드/부품명/등급/수량/금액",
          "dbField": "parts"
        }
      ],
      "buttons": [
        {
          "label": "인쇄",
          "action": "window.print()"
        },
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_receipt_read.php",
        "popup_svc.php"
      ],
      "flowTo": []
    },
    "popup_svc_read": {
      "phpFile": "popup_svc_read.php",
      "htmlFile": "screens/popup/popup_svc_read.html",
      "type": "popup-detail",
      "title": "처리팝업 (조회)",
      "purpose": "서비스 처리 내역 상세 조회",
      "workflow": "처리완료 > 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "담당기사",
          "dbField": "engineer"
        },
        {
          "name": "처리분류/상세",
          "dbField": "proc_code_detail"
        },
        {
          "name": "원인분류/상세",
          "dbField": "reason_code_detail"
        },
        {
          "name": "처리내용",
          "dbField": "proc_content"
        },
        {
          "name": "청구/징구금액",
          "dbField": "amt"
        },
        {
          "name": "사용자재",
          "dbField": "used_parts"
        }
      ],
      "buttons": [
        {
          "label": "출력",
          "action": "popup_svc_print.php"
        },
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "출력",
          "popup": "popup_svc_print.php"
        }
      ],
      "flowFrom": [
        "처리완료 목록"
      ],
      "flowTo": []
    },
    "popup_svc_read_del": {
      "phpFile": "popup_svc_read_del.php",
      "htmlFile": "screens/popup/popup_svc_read_del.html",
      "type": "popup-detail",
      "title": "처리팝업 (삭제/취소 조회)",
      "purpose": "취소된 처리 내역 상세 조회",
      "workflow": "취소 목록 > 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "접수번호",
          "dbField": "receipt_no"
        },
        {
          "name": "처리일",
          "dbField": "proc_date"
        },
        {
          "name": "처리분류/상세",
          "dbField": "proc_code_detail"
        },
        {
          "name": "원인분류/상세",
          "dbField": "reason_code_detail"
        },
        {
          "name": "취소사유",
          "dbField": "cancel_reason"
        }
      ],
      "buttons": [
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "취소목록"
      ],
      "flowTo": []
    },
    "popup_tdb_price_modify": {
      "phpFile": "popup_tdb_price_modify.php",
      "htmlFile": "screens/popup/popup_tdb_price_modify.html",
      "type": "popup-form",
      "title": "뇌전자재 금액 수정",
      "purpose": "뇌전자재 센터 단가(반납/미반납/유지보수) 수정",
      "workflow": "뇌전자재 > 단가관리",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "품명",
          "dbField": "part_name"
        },
        {
          "name": "센터반납가A",
          "dbField": "return_price_a"
        },
        {
          "name": "센터미반납가A",
          "dbField": "noreturn_price_a"
        },
        {
          "name": "센터반납가R",
          "dbField": "return_price_r"
        },
        {
          "name": "센터미반납가R",
          "dbField": "noreturn_price_r"
        },
        {
          "name": "센터유지보수가",
          "dbField": "maintain_price"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "tdb 관리"
      ],
      "flowTo": []
    },
    "popup_tdb_store_list": {
      "phpFile": "popup_tdb_store_list.php",
      "htmlFile": "screens/popup/popup_tdb_store_list.html",
      "type": "popup-list",
      "title": "뇌전자재신청 상세",
      "purpose": "뇌전자재 신청 상세 목록 조회",
      "workflow": "뇌전자재신청 > 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "신청번호",
          "dbField": "req_no"
        },
        {
          "name": "신청일자",
          "dbField": "req_date"
        },
        {
          "name": "신청센터",
          "dbField": "req_center"
        },
        {
          "name": "신청사원",
          "dbField": "req_user"
        },
        {
          "name": "품번",
          "dbField": "part_code"
        },
        {
          "name": "모델명",
          "dbField": "model"
        },
        {
          "name": "출고일",
          "dbField": "out_date"
        },
        {
          "name": "CS품명",
          "dbField": "cs_part_name"
        },
        {
          "name": "유/무상",
          "dbField": "paid_yn"
        },
        {
          "name": "미출고량",
          "dbField": "unout_qty"
        },
        {
          "name": "진행상태",
          "dbField": "status"
        },
        {
          "name": "상태",
          "dbField": "state"
        },
        {
          "name": "반납상태",
          "dbField": "return_state"
        }
      ],
      "buttons": [
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "tdb 신청"
      ],
      "flowTo": []
    },
    "popup_tk_G": {
      "phpFile": "popup_tk_G.php",
      "htmlFile": "screens/popup/popup_tk_G.html",
      "type": "popup-form",
      "title": "TK 공용부 설정",
      "purpose": "TK 공용부(지하/공동) 설정",
      "workflow": "TK 관리 > 공용부",
      "searchFields": [
        {
          "name": "keyword",
          "label": "아파트/동",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "동",
          "dbField": "dong"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_tk_G_proc.php"
        },
        {
          "label": "취소",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "TK관리"
      ],
      "flowTo": []
    },
    "popup_tk_S": {
      "phpFile": "popup_tk_S.php",
      "htmlFile": "screens/popup/popup_tk_S.html",
      "type": "popup-form",
      "title": "TK 세대부 설정",
      "purpose": "TK 세대부 설정",
      "workflow": "TK 관리 > 세대부",
      "searchFields": [
        {
          "name": "keyword",
          "label": "아파트/동",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "동",
          "dbField": "dong"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_tk_S_proc.php"
        },
        {
          "label": "상세",
          "action": "popup_tk_S_detail.php"
        }
      ],
      "popupsCalled": [
        {
          "trigger": "상세",
          "popup": "popup_tk_S_detail.php"
        }
      ],
      "flowFrom": [
        "TK관리"
      ],
      "flowTo": []
    },
    "popup_tk_S_detail": {
      "phpFile": "popup_tk_S_detail.php",
      "htmlFile": "screens/popup/popup_tk_S_detail.html",
      "type": "popup-detail",
      "title": "TK 세대부 설정 (상세)",
      "purpose": "TK 세대부 상세 설정",
      "workflow": "TK 관리 > 세대부 > 상세",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "동",
          "dbField": "dong"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "popup_tk_S_proc.php"
        },
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "popup_tk_S.php"
      ],
      "flowTo": []
    },
    "popup_visit_cancel": {
      "phpFile": "popup_visit_cancel.php",
      "htmlFile": "screens/popup/popup_visit_cancel.html",
      "type": "popup-list",
      "title": "방문예약취소",
      "purpose": "방문예약 취소 사유 코드 관리",
      "workflow": "코드관리 > 방문예약취소",
      "searchFields": [
        {
          "name": "bUse",
          "label": "사용여부",
          "type": "select"
        }
      ],
      "tableColumns": [
        {
          "name": "코드번호",
          "dbField": "code"
        },
        {
          "name": "예약취소명",
          "dbField": "name"
        },
        {
          "name": "사용",
          "dbField": "use_yn"
        }
      ],
      "buttons": [
        {
          "label": "저장",
          "action": "ajax 저장"
        },
        {
          "label": "추가",
          "action": "행 추가"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "코드관리"
      ],
      "flowTo": []
    },
    "pop_admin_scene_list": {
      "phpFile": "pop_admin_scene_list.php",
      "htmlFile": "screens/popup/pop_admin_scene_list.html",
      "type": "popup-list",
      "title": "현장 관리 (관리자 팝업)",
      "purpose": "관리자용 현장 검색/선택 팝업",
      "workflow": "관리자 부모화면 > 현장검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "검색어",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "아파트번호",
          "dbField": "apt_no"
        },
        {
          "name": "아파트명",
          "dbField": "apt_name"
        },
        {
          "name": "현장명",
          "dbField": "scene_name"
        },
        {
          "name": "현장담당자",
          "dbField": "scene_manager"
        },
        {
          "name": "모델명",
          "dbField": "model_name"
        },
        {
          "name": "비고(선택)",
          "dbField": "action"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_*"
      ],
      "flowTo": []
    },
    "address_popup": {
      "phpFile": "address_popup.php",
      "htmlFile": "screens/popup/address_popup.html",
      "type": "popup-search",
      "title": "주소찾기",
      "purpose": "우편번호/주소 검색",
      "workflow": "부모화면 > 주소검색",
      "searchFields": [
        {
          "name": "keyword",
          "label": "동(읍/면/리)",
          "type": "text"
        }
      ],
      "tableColumns": [
        {
          "name": "우편번호",
          "dbField": "zip"
        },
        {
          "name": "주소",
          "dbField": "address"
        }
      ],
      "buttons": [
        {
          "label": "검색",
          "action": "search_next()"
        },
        {
          "label": "선택",
          "action": "selectitem(zip,address)"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "admin_member_mode.php",
        "admin_scene_mode.php",
        "popup_receipt_*"
      ],
      "flowTo": []
    },
    "call_popup": {
      "phpFile": "call_popup.php",
      "htmlFile": "screens/popup/call_popup.html",
      "type": "popup-notification",
      "title": "수신콜 팝업",
      "purpose": "CTI 수신 전화 알림 및 고객정보 표시",
      "workflow": "CTI 연동 > 전화수신",
      "searchFields": [],
      "tableColumns": [
        {
          "name": "발신번호",
          "dbField": "tel"
        },
        {
          "name": "고객명",
          "dbField": "cust_name"
        },
        {
          "name": "주소",
          "dbField": "address"
        },
        {
          "name": "이전 접수이력",
          "dbField": "history"
        }
      ],
      "buttons": [
        {
          "label": "접수등록",
          "action": "receipt_mode.php"
        },
        {
          "label": "닫기",
          "action": "window.close()"
        }
      ],
      "popupsCalled": [],
      "flowFrom": [
        "CTI 수신"
      ],
      "flowTo": [
        "receipt_mode.php"
      ]
    }
  }
};