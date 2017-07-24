// JavaScript Document

function navigation(){                                                             //导航栏突出显示（地址匹配方式）
    if(!document.getElementsByTagName) return false;
	var navs = document.getElementsByTagName("nav");
	if(navs.length == 0) return false;
	var lis = navs[0].getElementsByTagName("li");                                  //要表名第几个元素navs[0]表示第一个，取得li标签
	if(lis.length == 0) return false;
	var as = navs[0].getElementsByTagName("a");                                    //得到a标签
	for(var i = 0 ; i < as.length ; i ++){
	    var links = window.location.href;                                          //得到当前页面的完整url
		var hrefs = as[i].getAttribute("href");                                    //得到该主页的地址url
		if(links.indexOf(hrefs) != -1){          //利用字符串首次出现位置判断两个字符串是否相同,网页完整url.indexOf(该主页url)
			 lis[i].className = "here";
		}    
	}
}

addLoadEvent(navigation);