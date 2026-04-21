	//우편번호 검색
	function open_zipcodebook(formName) {
		new daum.Postcode({   
            oncomplete: function(data) {
				if(data.userSelectedType == 'R') {
					address = data.roadAddress;
				} else {
					address = data.jibunAddress;
				}
                jQuery('#zip').val(data.zonecode);
				if(data.userSelectedType == 'R') {
					jQuery('#addr1').val(address+" ("+data.buildingName+")");
				} else {
					jQuery('#addr1').val(address);
				}
                //jQuery('#addr1').val(address+"("+data.buildingName+")");
                jQuery('#addr2').focus();
                //console.log(data);
                if(formName == 'receipt_form') {
                	var param = "mode=ZIP_SELECT&form="+formName+"&zip="+data.zonecode ;
                	ajaxLoader("ajax_proc.php?"+param);
                }
				if(formName == 'i_form') {
                	var param = "mode=ZIP_SELECT_i&form="+formName+"&zip="+data.zonecode ;
                	ajaxLoader("ajax_proc.php?"+param);
                }
				if(formName == 'year_form') {
                	var param = "mode=ZIP_SELECT1&form="+formName+"&zip="+data.zonecode ;
                	ajaxLoader("ajax_proc.php?"+param);
                }
            }
        }).open();
	}
	/*
	function keyDown(){
		if(event.KeyCode == 13){
			search_next();
		}
	}
	*/

    // SMS 발송
    function sms_open(user_id,user_lv) {
    	//window.open('popup_sms_main.php','sms','width=1010,height=495,resizable=yes,scrollbars=yes');
		window.open('http://cs.kocom.com/receipt/sms_list.php?user_id='+user_id+'&user_lv='+user_lv,'sms','width=1110,height=510,resizable=yes,scrollbars=yes');
    }

	function sms_open1() {
    	window.open('popup_sms_main.php','sms','width=1010,height=495,resizable=yes,scrollbars=yes');
    }
    
    //ajax 공통처리
	function ajaxLoader(url){ 
		if (document.getElementById) { 
			var xmlHttp = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest(); 
		}
		if (xmlHttp){ 
			xmlHttp.onreadystatechange = function(){ 
				if (xmlHttp.readyState == 4){// 객체의 상태(0:비초기화, 1:로딩, 3:상호작용, 4: 완료)
					if(xmlHttp.status == 200){ 
						ajaxResponse(xmlHttp.responseText); 
					}else{
						alert('시스템 오류. CODE :'+ xmlHttp.status);
					}
				} 
			} 
			xmlHttp.open("GET", url, true); 
			xmlHttp.send(null); 
		}else{
			alert("지원되지 않는 브라우저입니다.");
		}
	} 
	
	// 장애코드 선택
	function errorselect(sel) { 
		var param = "mode=ERRORSEL&form="+sel.form.name+"&val="+sel.value ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 접수 > 장애코드 선택 값이 있을때 처리
	function errorselect1(val,fname,err2) { 
		var param = "mode=ERRORSEL&form="+fname+"&val="+val+'&err2='+err2 ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	
	//모델명 검색
	function modelsel(formName){
		var no = eval(formName+".model_no.value");
		var fname = eval(formName+".model_name.value");
		if(!no)
			window.open('popup_model_search.php?form='+formName+'&modelNAME='+fname,'model','width=600,height=560,status=yes');
		else if (formName == "svc_form")
		{
			window.open('popup_model_search.php?form='+formName+'&modelNAME=&modelNO=','model','width=610,height=560,status=yes');
		}
		else {
			window.open('popup_model_search.php?form='+formName+'&modelNAME='+fname+'&modelNO='+no,'model','width=610,height=560,status=yes');
		}
	}
	
	//아파트 검색
	function aptsel(formName,p_mode){
		var no = eval(formName+".apt_no.value");
		var fname = eval(formName+".apt_name.value");
		var zip = eval(formName+".zip.value");
		if(!no)
			window.open('popup_apt_search.php?form='+formName+'&zip='+zip+'&p_mode='+p_mode,'apt','width=620,height=500,scrollbars=yes');
		else
			window.open('popup_apt_search.php?form='+formName+'&name='+fname+'&zip='+zip+'&p_mode='+p_mode,'apt','width=615,height=500,scrollbars=yes');
	}
	
	// 수리코드 선택
	function REPAIRSELselect(sel) { 
		var param = "mode=REPAIRSEL&form="+sel.form.name+"&val="+sel.value ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 서비스처리 고객 취소
	function REPAIRSELcancel() { 
		var param = "mode=REPAIRSEL&form="+"svc_form"+"&val="+"013";
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 처리 > 수리코드 선택 값이 있을때 처리
	function REPAIRSELselect1(val,fname,rc_2) { 
		var param = "mode=REPAIRSEL&form="+fname+"&val="+val+'&rc_2='+rc_2 ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 원인코드 선택
	function CAUSESELselect(sel) { 
		var param = "mode=CAUSESEL&form="+sel.form.name+"&val="+sel.value ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 서비스처리 고객 취소
	function CAUSESELcancel() { 
		var param = "mode=CAUSESEL&form="+"svc_form"+"&val="+"005";
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 처리 > 원인코드 선택 값이 있을때 처리
	function CAUSESELselect1(val,fname,cs_2) { 
		var param = "mode=CAUSESEL&form="+fname+"&val="+val+'&cs_2='+cs_2 ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	// 처리기사 선택
	function SEL_AGENCYselect(sel) { 
		var param = "mode=SEL_AGENCY&form="+sel.form.name+"&val="+sel.value ;
		ajaxLoader("ajax_proc.php?"+param);
	}
	
	// 접수 고객검색
	function search_user(str) {
		var keyword='';
		var codeword = encodeURIComponent(receipt_form.keyword.value);
		switch(str) {
			case "all":
				if(receipt_form.keyword.value == "") {
					alert("고객명을 입력해 주세요. 전체검색시 오래걸리게 됩니다.");
					receipt_form.keyword.focus();
					return;
				}
				keyword = codeword ;
			break;
			case "phone" :
				if(receipt_form.tel1.value == "") {
					alert("연락처를 입력해 주세요. 전체검색시 오래걸리게 됩니다.");
					receipt_form.tel1.focus();
					return;
				}else if(receipt_form.tel2.value == "") {
					alert("연락처를 입력해 주세요. 전체검색시 오래걸리게 됩니다.");
					receipt_form.tel2.focus();
					return;
				}else if(receipt_form.tel3.value == "") {
					alert("연락처를 입력해 주세요. 전체검색시 오래걸리게 됩니다.");
					receipt_form.tel3.focus();
					return;
				}
				keyword = receipt_form.tel1.value+receipt_form.tel2.value+receipt_form.tel3.value ;
			break
		}
		window.open('member_find.php?find='+str+'&keyword='+keyword,'memberfind','width=800,height=400,resizable=yes,scrollbars=yes');
	}
	// 접수 고객 수정
	function user_update() {
		var frm = document.receipt_form;
		//alert(frm.custNUM.value);
		if (frm.custNUM.value) {	//고객정보의 고객번호가 입력되었을때 : 수정
			if (confirm('고객정보를 수정하시겠습니까?')) {
				var param ='mode=custMOD&custNUM='+frm.custNUM.value+'&custNAME='+frm.mb_name.value;
				param +='&custTEL='+frm.phone1.value+'-'+frm.phone2.value+'-'+frm.phone3.value;
				param +='&custCELL='+frm.mobile1.value+'-'+frm.mobile2.value+'-'+frm.mobile3.value;
				param +='&zip='+frm.zip.value+'&apt_no='+frm.apt_no.value+'&addr1='+frm.addr1.value+'&addr2='+frm.addr2.value;	
				
				ajaxLoader("ajax_proc.php?"+param);
			}
			else {
				alert('취소되었습니다.');
			}
		}
		else {	//고객정보의 고객번호가 입력되지 않았을때 : 등록
			//이름, 전화번호, 주소, 아파트
			if (!frm.mb_name.value) {
				alert('고객명을 입력해 주십시오');
				frm.mb_name.focus();
			} else if (!frm.phone1.value || !frm.phone2.value || !frm.phone3.value) {
				alert('연락처를 입력해 주십시오');
				frm.phone1.focus();
			} else if (!frm.addr2.value) {
				alert('주소를 입력해 주십시오');
				frm.addr2.focus();
			} else if (!frm.apt_no.value) {
				alert('아파트가 선택되지 않았습니다.');
				frm.apt_name.focus();
			} else {
				if (confirm('등록되지 않은 신규 고객입니다. 등록하시겠습니까?')) {
					var param ='mode=custINS&custNAME='+frm.mb_name.value;
					param +='&custTEL='+frm.phone1.value+'-'+frm.phone2.value+'-'+frm.phone3.value;
					param +='&custCELL='+frm.mobile1.value+'-'+frm.mobile2.value+'-'+frm.mobile3.value;
					param +='&zip='+frm.zip.value+'&apt_no='+frm.apt_no.value+'&addr1='+frm.addr1.value+'&addr2='+frm.addr2.value;	
					ajaxLoader("ajax_proc.php?"+param);
				}
				else {
					alert('취소되었습니다.');
				}
			}
		}
	}
	
	// 담당기사선택
	function charge_sel(fname) {
		window.open('popup_charge_select.php?form='+fname,'agent_sel','width=670px,height=570px');
	}
	
	
function setCookie(cookieName, cookieValue, cookieExpire, cookiePath, cookieDomain, cookieSecure){
		var cookieText=escape(cookieName)+'='+escape(cookieValue);
		cookieText+=(cookieExpire ? '; EXPIRES='+cookieExpire.toGMTString() : '');
		cookieText+=(cookiePath ? '; PATH='+cookiePath : '');
		cookieText+=(cookieDomain ? '; DOMAIN='+cookieDomain : '');
		cookieText+=(cookieSecure ? '; SECURE' : '');
		document.cookie=cookieText; 
} 


function getCookie(cookieName)
{     
		var cookieValue=null;
		if(document.cookie){
				var array=document.cookie.split((escape(cookieName)+'='));          
				if(array.length >= 2){
						var arraySub=array[1].split(';');
						cookieValue=unescape(arraySub[0]);
				}
		}
		return cookieValue; 
}  
function deleteCookie(cookieName)
{     
		var temp=getCookie(cookieName);     
		if(temp){         
			setCookie(cookieName,temp,(new Date(1)));     
		} 
} 