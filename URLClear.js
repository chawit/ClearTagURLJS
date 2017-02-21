/*
by chawit wiriyakun
*/
function URLClear(inurl){
	var urlout = inurl.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/gi, "").replace(/window.location=/gi, "").replace(/"/gi, "").replace(/;/gi, "").replace(/ /gi, "");
	return urlout;
}
