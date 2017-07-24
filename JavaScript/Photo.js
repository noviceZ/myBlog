// JavaScript Document

function clickPhotos(){                                                 //点击不同的图片传递不同的编号
	var lookPhotos_1 = document.getElementById("lookPhotos_1");
	lookPhotos_1.onclick = function(){
		showPhotos(1,0)
	}
	
	var lookPhotos_2 = document.getElementById("lookPhotos_2");
	lookPhotos_2.onclick = function(){
		showPhotos(2,0)
	}
	
	var lookPhotos_3 = document.getElementById("lookPhotos_3");
	lookPhotos_3.onclick = function(){
		showPhotos(3,0)
	}
	
	var lookPhotos_4 = document.getElementById("lookPhotos_4");
	lookPhotos_4.onclick = function(){
		showPhotos(4,0)
	}
	
	var lookPhotos_5 = document.getElementById("lookPhotos_5");
	lookPhotos_5.onclick = function(){
		showPhotos(5,0)
	}
	
	var lookPhotos_6 = document.getElementById("lookPhotos_6");
	lookPhotos_6.onclick = function(){
		showPhotos(6,0)
	}
	
	var lookPhotos_7 = document.getElementById("lookPhotos_7");
	lookPhotos_7.onclick = function(){
		showPhotos(7,0)
	}
	
	var lookPhotos_8 = document.getElementById("lookPhotos_8");
	lookPhotos_8.onclick = function(){
		showPhotos(8,0)
	}
	
	var lookPhotos_9 = document.getElementById("lookPhotos_9");
	lookPhotos_9.onclick = function(){
		showPhotos(9,0)
	}
	
	var lookPhotos_10 = document.getElementById("lookPhotos_10");
	lookPhotos_10.onclick = function(){
		showPhotos(10,0)
	}
}

function arrow(s){                                                                   //箭头切换
	var arrow_left = document.getElementById("photo_left_arrows");
	var s = s;
	arrow_left.onclick = function(){
		showPhotos(s,-1);
	}
	
	var arrow_right = document.getElementById("photo_right_arrows");
	arrow_right.onclick = function(){
		showPhotos(s,1);
	}
}

function showPhotos(n,m){                                                          //放大选中图片
    var s = n + m;
	var photo_imgs = document.getElementById("photo_imgs");
	var imgs = photo_imgs.getElementsByTagName("img");                  //这里将取得的img数量减1是因为我将打开后的占位img也写
	if(s < 1){                                                         //到这个div里了，所以要给他去掉，取得需要其意义的img数量。
		s = imgs.length - 1;
	}
	if(s > imgs.length - 1){                                           //判断，图片到头后的操作。
		s = 1;      
	}
	var photo_tag = document.getElementById("photo_tag");                                //获取弹窗
	var lookPhotos_s = "lookPhotos_" + s;                                                //得到当前点击的图片的id
	arrow(s);                                                                            //将s传递出去，用于下一次的切换计算
	var photo_s = document.getElementById(lookPhotos_s);                                 //从程序得到当前图片id
	var srcs = photo_s.getAttribute("src");                                              //得到图片地址
	var myimgs = document.getElementById("myimgs");                                      //获取弹窗内容
	photo_tag.style.display = "block";                                                   //显示弹窗
	myimgs.setAttribute("src" , srcs);                                                   //为弹窗内容设置src属性，取得图片
}

function closePhotos(){                                                             //关闭图片
	var closes = document.getElementsByClassName("closes")[0];
	var photo_tag = document.getElementById("photo_tag");
	closes.onclick = function(){
		photo_tag.style.display = "none";
	}
}

addLoadEvent(clickPhotos);
addLoadEvent(arrow);
addLoadEvent(closePhotos);