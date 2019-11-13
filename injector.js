// CONFIG
const injectedFilesBaseDirectoryPath='https://cdn.jsdelivr.net/gh/utsavmadaan823/WebResources@1.4/';

const INJECT_JAVASCRIPT = 'js';
const INJECT_CSS = 'css';

function injectInDocument(injectType,isString,inputStringOrUrl) {
	var nodeToAppend;
	var appendTo=document.body;
	if(isString){
		switch(injectType){
			case INJECT_JAVASCRIPT:
				nodeToAppend = document.createElement("script");
				nodeToAppend.type = "text/javascript";
				nodeToAppend.innerHTML = inputStringOrUrl;
				break;
			case INJECT_CSS:
				nodeToAppend = document.createElement('style');
				nodeToAppend.innerHTML = inputStringOrUrl;
				break;
		}	
	}else{
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
	}
    appendTo.appendChild(nodeToAppend);
}

function getDomainName(hostName){
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}

function prepareFileUrl(injectType,fileName){
	switch(injectType){
		case INJECT_JAVASCRIPT:
			return injectedFilesBaseDirectoryPath+getDomainName(fileName)+'.js';
			break;
		case INJECT_CSS:
			return injectedFilesBaseDirectoryPath+getDomainName(fileName)+'.css';
			break;
	}
}

// INJECTIONS-
// universal injections
injectInDocument(INJECT_CSS,false,prepareFileUrl(INJECT_CSS,'universal'));
injectInDocument(INJECT_JAVASCRIPT,false,prepareFileUrl(INJECT_JAVASCRIPT,'universal'));
// hostname (trimmed) based injections
injectInDocument(INJECT_CSS,false,prepareFileUrl(INJECT_CSS,window.location.hostname));
injectInDocument(INJECT_JAVASCRIPT,false,prepareFileUrl(INJECT_JAVASCRIPT,window.location.hostname));