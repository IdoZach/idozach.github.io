// ==UserScript==
// @name           Facebook right align
// @namespace      http://tx.technion.ac.il/~ido
// @description    Align paragraph to right.
// @include        http://www.facebook.com/* https://www.facebook.com/*
// @author         Ido Z
// @grant 		   none
// ==/UserScript==
function getHeb(x) {
	a = x.match(/[אבגדהוזחטיכלמנסעפצקרשת]/);
	return null!=a;
}

function myfunc() {
	var divs = document.evaluate('//div[@role="article"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	if ( divs.snapshotLength == 0 )
		return;
	// var username = logout.snapshotItem( 0 ).innerHTML.replace( /&nbsp;/gi, '' ).replace( /.*\[\s+(.+)\s+\].*/i, '$1' );

	for (i=0;i<divs.snapshotLength;i++) {
		cur = divs.snapshotItem(i);
		if (getHeb(cur.innerHTML))
			cur.style.textAlign = 'right';
			
	}
}

DOM = function() {
myfunc();
self.setInterval(function(){myfunc()},500);
}();

