document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		new QRCode(document.getElementById("qrcode"), tabs[0].url);
	});	
});


