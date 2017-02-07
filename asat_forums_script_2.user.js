// ==UserScript==
// @name           Asat forums script 2
// @namespace      http://t2.technion.ac.il/~seedoz/
// @description    Allows user to hide unwanted topics
// @include        */viewforum.php*
// @author         Ido Z, modified Glenn Carr's script.
// $LastChangedRevision: 2 $
// $LastChangedDate: 27.9.09 $
// ==/UserScript==
/*
    Updates:
	green notes only appear on mouse hover.
*/


DOM = function() {
var logout = document.evaluate( '//li[@class="icon-logout"]/a', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
if ( logout.snapshotLength == 0 )
    return;
var username = logout.snapshotItem( 0 ).innerHTML.replace( /&nbsp;/gi, '' ).replace( /.*\[\s+(.+)\s+\].*/i, '$1' );

GM_addStyle( '.gncMyName { background: #ffa !important; color: maroon !important; font-weight: bold; }' );

var links=["viewtopic.php"];
var myTopics = new Array();
var i,k;
for (i in links)
{
   myTopics[i] = document.evaluate( '//a[contains(@href,"' + links[i] + '")]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
   k = i;
}
/* 
k++;

for (i in users)
{
   myTopics[parseInt(i)+ k] = document.evaluate( '//dl[@class="icon"]/dt/a[.="' + users[i] + '"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}
*/

// hide what should be hidden

c1 = document.cookie.split('; ');
exists=0;
for (var i in c1)
{
   if (c1[i].search('removeThread')!=-1)
   {
      c1=c1[i];
      c1=c1.substring('removeThread='.length);
      exists=1;
      break;
   }
}
if (exists)
{
   c2=c1.split(',');
}
else
   c2 = '';
// paint green buttons



for (j in myTopics)
{
   for (i = 0; i < myTopics[j].snapshotLength; i++ )
    {
          var nameLink = myTopics[j].snapshotItem( i );

      address = nameLink.href;
      if (c2 != '')
         for (var k in c2)
         {
            if ((c2[k]!='') && (address.search(c2[k].substring(3))!=-1))      {
               nameLink.parentNode.parentNode.style.display='none';
		nameLink.parentNode.parentNode.parentNode.title=nameLink.text+' | Double-click to show';
               id='b'+nameLink.href.substring(nameLink.href.length-6); 

//nameLink.parentNode.parentNode.parentNode.parentNode.
//childNodes[1]. style.display='full';
			nameLink.parentNode.parentNode.parentNode.setAttribute("ondblclick",' c1 = document.cookie.split(\'; \'); var exists=0; for (var i in c1){    if (c1[i].search(\'removeThread\')!=-1){ c1=c1[i];exists=1; break;   } } if (exists) {    c2=\'removeThread=\';   c1=c1=c1.substring(\'removeThread=\'.length).split(\',\');    for (var i in c1) {      if (!(c1[i]==\''+id+'\')) {         c2 = c2+\',\'+c1[i];        } }    var date = new Date();   date.setMonth(date.getMonth()+6);   c2 += (\'; expires=\' + date.toUTCString());     document.cookie = c2; for (j=1; j!=2; j=2){ this.childNodes[j].style.display=\'block\'; }  X = document.evaluate( \'//a[contains(@href,"='+id.substring(1)+'")]\', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);X.snapshotItem(0).parentNode.parentNode.childNodes[7].style.display=\'block\'; X.snapshotItem(0).parentNode.childNodes[4].childNodes[3].style.display=\'block\'; } ');

// childNodes[1].style.display=\'block\'; // this.childNodes[2].style.display=\'block\';}
            }
         }
      
      if (
         (address.search('start')==-1) && 
         (address.search('#')==-1) && 
         (address.search('viewprofile')==-1) &&
         (nameLink.parentNode.parentNode.style.display!='none')
      )
      {     
         var field_=nameLink.parentNode.parentNode.parentNode;
         id='b'+nameLink.href.substring(nameLink.href.length-6);
	if (id.search('=')!=-1)
		id=id[0]+id.substring(2);
		nameLink.parentNode.setAttribute("onmouseover",id+'.style.display=\'inline\';');
	nameLink.parentNode.setAttribute("onmouseout",id+'.style.display=\'none\';');
		var newC = document.createElement('img');
		newC.src= ' http://tx.technion.ac.il/~ido/x.png ';
		newC.style.display='none';
		newC.setAttribute("name",id);
		newC.setAttribute("ondblclick",' c1 = document.cookie.split(\'; \'); var exists=0; for (var i in c1) {if (c1[i].search(\'removeThread\')!=-1) { c1=c1[i];exists=1; break;} } if (!exists) c1=\'removeThread=\'+this.name; else { if (c1.search(this.name)==-1) c1 = c1+\',\'+this.name; } var date = new Date(); date.setMonth(date.getMonth()+6);c1 += (\'; expires=\' + date.toUTCString());  document.cookie = c1; this.parentNode.parentNode.style.display=\'none\'; ');
		newC.setAttribute("title",'Double-click to hide'); 		
		newC.setAttribute("style",'cursor: pointer; display: none');
		nameLink.parentNode.insertBefore(newC,nameLink);
  /*       nameLink.parentNode.innerHTML = '<img src="http://t2.technion.ac.il/~sez/x2.png" name='+id+' ondblclick=" c1 = document.cookie.split(\'; \');var exists=0;for (var i in c1){if (c1[i].search(\'removeThread\')!=-1){ c1=c1[i];exists=1; break;} } if (!exists) c1=\'removeThread=\'+this.name; else { if (c1.search(this.name)==-1) c1 = c1+\',\'+this.name; } var date = new Date(); date.setMonth(date.getMonth()+6);c1 += (\'; expires=\' + date.toUTCString());  document.cookie = c1; this.parentNode.parentNode.style.display=\'none\'; " title="Double-click to hide" style="cursor: pointer; display: none">' + nameLink.parentNode.innerHTML; */
      }
    }
}

var wind=logout.snapshotItem(0).parentNode.parentNode.parentNode.parentNode.parentNode;
wind.innerHTML += ' <input type=button value="Show all threads" onclick="document.cookie=\'removeThread=\'; location.reload();">';

/* var myNames = document.evaluate( '//a[contains(@href,"viewprofile")][.="' + username + '"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for ( var i = 0; i < myNames.snapshotLength; i++ )
{
    // Change attributes of your name
    var nameLink = myNames.snapshotItem( i );
    nameLink.setAttribute( "class", "gncMyName" );
}
*/ 
}();

