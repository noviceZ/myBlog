// JavaScript Document

function myblog(){
	if(!document.getElementById) return false;
	if(!document.getElementById("move")) return false;
	var ids = document.getElementById("move");
	var i = 0;
		ids.onclick = function(){
			if( i == 0 || i == 1 || i == 2 || i == 3 ){           //前四次点击，移动div模块位置
			    ids.parameter = i;                                     //设置一个属性进行传递，因为i是局部变量不能用于其他函数
				mobile(this.parameter);
				i++;
				return false;
			}
			else if(i == 4){                                      //点击第5次时，跳转到首页面
				enter();
				return false;
		}
	}
}

function mobile(parameter){                                    //移动元素;
/*                                     
	var divs = document.getElementById("home_absolute");       //缓慢移动方式
	var final_x = 500;                                       
	var final_y = 150;            
	var xpos = divs.getBoundingClientRect().left;              //获取div的坐标（左上）
	var ypos = divs.getBoundingClientRect().top;
	var dist;
	if(xpos < final_x){
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if(xpos > final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;                                    
	}
	if(ypos < final_y){
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if(ypos > final_y){
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	divs.style.left = xpos + "px";
	divs.style.top = ypos + "px";
*/
    var divs = document.getElementById("home_absolute");          //快速移动，直接到达指定位置
	if(parameter == 0){ 
	    divs.style.left = 90 + "px";
	    divs.style.top = 230 + "px";
	}
	if(parameter == 1){
	divs.style.left = 123 + "px";
	divs.style.top = 110 + "px";
	}
	if(parameter == 2){ 
	divs.style.left = 890 + "px";
	divs.style.top = 251 + "px";
	}
	if(parameter == 3){ 
	divs.style.left = 480 + "px";
	divs.style.top = 198 + "px";
	}
}

function enter(){                                             //进入主页
	window.location.href = "Home.html";                       //在原窗口打开新窗口。window.open是在新窗口打开。
}
addLoadEvent(myblog);