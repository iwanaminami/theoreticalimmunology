function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}


function showclock() {
var tm = new Date();
var timezoneoffset = -9     // UTC-表示したいタイムゾーン(単位:hour)。JSTなら-9
var tm = new Date(Date.now() - (timezoneoffset * 60 - new Date().getTimezoneOffset()) * 60000);
var nowYear  = set2fig( tm.getFullYear() );
var nowMonth  = set2fig( tm.getMonth()+1 );
var nowDate  = set2fig( tm.getDate() );
var nowHour = set2fig( tm.getHours() );
var nowMin  = set2fig( tm.getMinutes() );
var nowSec  = set2fig( tm.getSeconds() );
//var nowtimezone = tm.getTimeZone();
var msg = nowMonth + "/" + nowDate + "/" + nowYear + " " + nowHour + ":" + nowMin + ":" + nowSec + " " + "Tokyo";

document.getElementById("clock").innerHTML = msg;
}

setInterval('showclock()',1000);
