$(document).ready(function(){
	debugger;
	var dateObj = (function(){
		var _date =new Date();
		return {
			getDate:function(){
				return _date;
			},
			setDate:function(date){
				_date = date;
			},
			getYear:function(){
				return _date.getFullYear();		
			},
			getMonth:function(){
				return _date.getMonth();
			}
		};
	})();
	renderHtml();
	bindEvent();
	function renderHtml(){
	debugger;
	var tds =$("td");
	var _year = dateObj.getYear();
	var _month = dateObj.getMonth();
	$("#dateTitle").text(getDateStr(dateObj.getDate()).substr(0,6));
	var firstDay = new Date(_year,_month,1);
	var nowDay;
	var dateStr;
	for(var i = 0;i< tds.length;i++){
		nowDay = new Date (_year,_month,i-firstDay.getDay()+1);
		tds[i].innerText=nowDay.getDate();
		}
	}

	function getDateStr(date) {
    var _year = date.getFullYear();
    var _month = date.getMonth() + 1;    // 月从0开始计数
    var _d = date.getDate();
     
    _month = (_month > 9) ? ("" + _month) : ("0" + _month);
    _d = (_d > 9) ? ("" + _d) : ("0" + _d);
    return _year + _month + _d;
  	}

  	function bindEvent(){
  		$("#preMonth").click(function(){
  			debugger;
  			dateObj.setDate(new Date(dateObj.getYear(),dateObj.getMonth()-1,1));
  			renderHtml();
  		});
  		$("#nextMonth").click(function(){
  			debugger
  			dateObj.setDate(new Date(dateObj.getYear(),dateObj.getMonth()+1,1));
  			renderHtml();
  		});

  	}

});