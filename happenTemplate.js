var date = new Date(); // This is the basic time stamp
var monthNum  = date.getMonth() + 1; // This is the time stamp, of the month, converted to proper number, not an array item index
var monthDblNum = ('0' + (date.getMonth() + 1)).slice(-2);
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthName =  monthArray[String(monthNum) - 1];
var monthAbbrArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',]
var monthAbbrName = monthAbbrArray[String(monthNum) - 1];
var dayOfWkNum = date.getDay();  //string value of the day, ie monday is 1, sunday is 7
var dayWkDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dayWkDayName =  dayWkDayArray[String(dayOfWkNum)];
var dayOfWeekThreeLtrArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
var dayOfWeekThreeLtr =  dayOfWeekThreeLtrArray[String(dayOfWkNum)];
var dayOfWeekTwoLtrArray = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
var dayOfWeekTwoLtr =  dayOfWeekTwoLtrArray[String(dayOfWkNum)];
var dayOfMonNum = date.getDate(); //day value of the month, needs to be a string.
var dayOfMonDblNum = ('0' + (date.getDate())).slice(-2)
var dayOfMonOrdinal
var year = date.getFullYear(); //four digits
var yearAbbr = ('0' + (date.getFullYear())).slice(-2);
var dayOfYearNum; //this will be a function of some kind
//var dayOfYearOrd
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var dayOfYearNum = Math.floor(diff / oneDay);
var seconds = date.getSeconds();
var secondsDbl = ('0' + (date.getSeconds())).slice(-2);
var minute = date.getMinutes();
var minuteDbl = ('0' + (date.getMinutes())).slice(-2);;
var hoursTwentyFour = date.getHours();
var hoursTwelve = (date.getHours() + 24) % 12 || 12; 
var localWithSec = date.toLocaleTimeString();
var localWithOutSec = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
var mdyNum = String(monthNum + "/" + dayOfMonNum + "/" + year);
var mdyNameNum = String(monthName + " " + dayOfMonNum + ", " + year);
var defaultTime = String(year + "-" + monthDblNum + "-" + dayOfMonDblNum + "T16:" + minuteDbl + ":" + secondsDbl);

// week of year, use math do floor or mod
var weekOfYear = Math.ceil(dayOfYearNum / 7);
//console.log(weekOfYear);


var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var timeInMs = Date.now();
            var timeInSec = Math.floor(timeInMs / 1000);
            return String(timeInSec);
        },
		UnixMillisecond: function(){
            var timeInMs = Date.now();
            return timeInMs;
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  return String(localWithSec);
              },
	   	    WithOutSeconds: function() {
                   return String(localWithOutSec);
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                return mdyNum;
            },
			Name: function(){
                return String(mdyNameNum);
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                return String(seconds);
            },
			DblDigit: function(){
                return String(secondsDbl);
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                return String(minute);
            },
			DblDigit: function(){
                return String(minuteDbl);
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                return String(hoursTwentyFour);
            },
			TwelveHour: function() {
                return String(hoursTwelve);
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        if (hoursTwentyFour < 11) {
                                return 'AM';
                            } else {
                                return 'PM';
                            }
                    },
					LowerCase: function(){
                            if (hoursTwentyFour < 11) {
                                return 'am';
                            } else {
                                return 'pm';
                            }
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                return dayWkDayName;
            },
			AbrDayOfWeek: function(){
                return dayOfWeekThreeLtr;
            },
			FirstTwoOfWeek: function(){
                return dayOfWeekTwoLtr;
            },
			WeekOfYear: function(){
                return String(weekOfYear);
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
                return {
					Numeral: function(){
                        return String(dayOfMonNum);
                    },
					Ordinal: function(){},
					DateDblDigit: function(){
                        return String(dayOfMonDblNum);
                    }
				}
			})(),
			
            // Code below is fixing problem 1 monthNumber
            MonthNumber: function () {
                return  String(monthNum); //Code Up Top.
            },
            // Code below is fixing problem 2, double digit month
            MonthNumberDblDigit: function(){
                return String(monthDblNum); // Code Up top.
            },
            // Code below is fixing problem 3 current month abbreviated
			AbrOfCurrentMonth: function(){
                return monthAbbrName;
            },
            // Code below is fixing problem 4 current month
			CurrentMonth: function(){
                return monthName;
            }
		} 
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        return String(dayOfYearNum);
                    },
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
                return String(year);
            },
			YearAbr: function(){
                return String(yearAbbr);
            }
		}
	})(),
	Defaults: function(){
        return String(defaultTime);
    }
  }
})();