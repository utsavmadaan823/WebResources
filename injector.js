// CONFIG
const injectedFilesBaseDirectoryPath="https://cdn.jsdelivr.net/gh/utsavmadaan823/WebResources@2.0/";
const domainName=(function getDomainName(hostName){
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
})(window.location.hostname);

const INJECT_JAVASCRIPT = "js";
const INJECT_CSS = "css";

function injectInDocument(injectType,inputStringOrUrl) {
	var nodeToAppend;
	var appendTo=document.body;
	switch(injectType){
		case INJECT_JAVASCRIPT:
			nodeToAppend = document.createElement("script");
			nodeToAppend.type = "text/javascript";
			nodeToAppend.src = inputStringOrUrl;
			break;
		case INJECT_CSS:
			nodeToAppend = document.createElement("link");
			nodeToAppend.type = "text/css";
			nodeToAppend.rel = "stylesheet";
			nodeToAppend.href = inputStringOrUrl;
			break;
	}
    appendTo.appendChild(nodeToAppend);
}

function prepareFileUrl(injectType,fileName){
	return injectedFilesBaseDirectoryPath+(injectType == INJECT_JAVASCRIPT ? "js/" : "css/")+fileName+(injectType == INJECT_JAVASCRIPT ? ".min.js" : ".min.css");
}

// INJECTIONS-
// universal injections
injectInDocument(INJECT_CSS,prepareFileUrl(INJECT_CSS,"universal"));
injectInDocument(INJECT_JAVASCRIPT,prepareFileUrl(INJECT_JAVASCRIPT,"universal"));
// hostname (trimmed) based injections
injectInDocument(INJECT_CSS,prepareFileUrl(INJECT_CSS,domainName));
injectInDocument(INJECT_JAVASCRIPT,prepareFileUrl(INJECT_JAVASCRIPT,domainName));