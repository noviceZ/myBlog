// JavaScript Document

//搜索框检索指定信息
function searchs(){                                   
    if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("mytext")) return false;
	var mytext = document.getElementById("mytext");
	if(!document.getElementById("myul"))  return false;
	var ul = document.getElementById("myul");
	var li = ul.getElementsByTagName("li");
	mytext.onkeyup = function(){
	var text = mytext.value.toUpperCase();
	for(var i = 0 ; i < li.length ; i ++){
		  var a = li[i].getElementsByTagName("a")[0];
		  if(a){
		  	  if(a.innerHTML.toUpperCase().indexOf(text) != -1){
				  li[i].style.display = "";
			  }else{
				  li[i].style.display = "none";
			  }
		  }
	   }
	}
}

addLoadEvent(searchs);