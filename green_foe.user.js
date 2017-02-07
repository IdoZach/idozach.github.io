// ==UserScript==
// @name           Green foe
// @namespace      http://t2.technion.ac.il/~sez/
// @description    Allows user to hide green fellows
// @include        */viewtopic.php* 
// @include        */viewforum.php*
// @author         Ido Z
// ==/UserScript==
/*
    Updates:

*/


DOM = function() {

var users = document.evaluate ('//p[@class="author"]/strong', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

var rem_cookies = document.createElement('input');
rem_cookies.setAttribute('type','button');
rem_cookies.setAttribute('value','Clear all foes');
rem_cookies.setAttribute('onclick','javascript:document.cookie = "green_foe=";');

users.snapshotItem(0).parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(rem_cookies);
// alert(document.cookie);
// document.cookie = "green_foe=";
sap = '@!~~@#'; // please don't get wise

c1 = document.cookie.split('; ');
rem_names = new Array();
rem_msgs = new Array();
var ind = 0;
for (var i in c1)
  if (c1[i].search('green_foe')!=-1) {
    d = c1[i].split('='); d = d[1];
    raw = d.split(','+sap);
      for (var j in raw) {
        raw_sap = raw[j].split(sap);
        if (raw_sap[0].length!=0) {
          rem_names[ind] = raw_sap[0];
          rem_msgs[ind++] = raw_sap[1];
        }
      }
  }


for (i=0;i<users.snapshotLength;i++) {
  var name = users.snapshotItem(i).childNodes[0].innerHTML;
  var item = users.snapshotItem(i).childNodes[0];
  var x = document.createElement('input');
  var userid = item.parentNode.innerHTML.replace(/^.*;u=([0-9]+).*$/,'$1');
  x.setAttribute('type','button');
  x.setAttribute('value','x');
  x.setAttribute('id','rem' + userid);
  x.setAttribute('onclick','javascript:x=prompt("Enter foe message:"); c = document.cookie.split("; "); var d = ""; for(var i in c) {if (c[i].search("green_foe")>-1) {d=c[i].split("="); d=d[1]; }} ; d = "green_foe = " + d + ",@!~~@#"+this.name+"@!~~@#"+x ; var date = new Date();   date.setMonth(date.getMonth()+6);   d += ("; expires=\" + date.toUTCString()); document.cookie = d; ');
  x.setAttribute('name',userid);
  item.parentNode.appendChild(x);

  for (var j in rem_names) {
    if (userid == rem_names[j]) {
      y = item.parentNode.parentNode.parentNode.parentNode;
      var newy = document.createElement('div');
      var newy1 = document.createElement('center');
      var undox = document.createElement('input');
      undox.setAttribute('type','button');
      undox.setAttribute('value','v');
      undox.setAttribute('id','undo' + userid);
      undox.setAttribute('onclick','javascript: c=document.cookie.split("; "); for(var i in c) {if (c[i].search("green_foe")>-1) {d=c[i].split("="); d=d[1];}} d=d.split(",@!~~@#"); ramd=new Array(); var j=0; for (var i in d){if (d[i].search(this.name+"@!~~@#")<0) ramd[j++]=d[i];} ramd=ramd.join(",@!~~@#"); document.cookie = "green_foe=" + ramd; ');
      undox.setAttribute('name',userid);

      var disp = document.createElement('input');
      disp.setAttribute('type','button');
      disp.setAttribute('value','let\'s get angry');
      disp.setAttribute('onclick','javascript: this.parentNode.parentNode.parentNode.childNodes[1].style.display="block"; ');

      newy1.appendChild(undox);
      newy1.appendChild(disp);
      newy1.innerHTML = '<b>' + name + '</b>: ' + rem_msgs[j] + newy1.innerHTML; 
      newy.setAttribute('class',y.class);
      newy.appendChild(newy1);
      y.parentNode.appendChild(newy);
      y.style.display='none';
    }

  }  
}

}();

