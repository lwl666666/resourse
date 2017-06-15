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
	$(monthSelect).change(function(){
		debugger;
		dateObj.setDate(new Date($(monthSelect).val(),dateObj.getMonth(),1));
		renderHtml();
		$(monthSelect).val(dateObj.getYear());
	});
	function renderHtml(){
		debugger;
		var _year = dateObj.getYear();
		var _month = dateObj.getMonth();
		$("#dateTitle").text(getDateStr(dateObj.getDate()).substr(0,6));
		var firstDay = new Date(_year,_month,1);
		var nowDay;
		var dateStr;
		$("td").each(function(index){
			nowDay = new Date (_year,_month,index-firstDay.getDay()+1);
			$(this).text(nowDay.getDate())
		});
		$("option").each(function(index){
			$(this).text(_year+index-2);
			$(this).val(_year+index-2);
		});
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