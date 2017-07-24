// JavaScript Document

function ageId(){                                                                  //自动写入年龄函数                 
    if(!document.getElementById) return false;             
	if(!document.getElementById("birthdayid")) return false; 
	var tds = document.getElementById("birthdayid");          
	var birthday = tds.firstChild.nodeValue;                                       //得到id为birthday的td元素里的文本
	var year = birthday.split(".")[0];                                             //分割字符串取第一个1995
	var dates = new Date();                                                        //定义日期
	var yearnow = dates.getFullYear();                                             //获取现在的年份
	var age = yearnow - year;                                                      //取得差值，即年龄(number类型)
	if(age < 0){
		alert("生日输入有误")
		return false;
	}else{
	  if(!document.getElementById("ageid")) return false; 
	  var ages = document.getElementById("ageid");
	  var agetext = document.createTextNode(age);                                  //创建一个文本节点值为age用于插入td下一个节点中
	  ages.appendChild(agetext);    
	}
}

function starId(){
	if(!document.getElementById) return false;
	if(!document.getElementById("birthdayid")) return false;
	var tds = document.getElementById("birthdayid");
	if(!document.getElementById("starid")) return false;
	var stars = document.getElementById("starid");
	var birthday = tds.firstChild.nodeValue;
	var month = birthday.split(".")[1];                                            //获取月份和日期
	var day = birthday.split(".")[2];
	var monthday = month+day;                                                      //将月份和日期拼接起来用于之后的判断
	var monthdaynum =parseInt(monthday);                                           //string类型转换成number类型
	if(monthdaynum >= "0321" && monthdaynum <= "0419"){                            //白羊座判断
		var star_1 = document.createTextNode("白羊座");
		stars.appendChild(star_1);
	}
	else if(monthdaynum >= "0420" && monthdaynum <= "0520"){                       //金牛座判断
		var star_2 = document.createTextNode("金牛座");
		stars.appendChild(star_2);
	}
	else if(monthdaynum >= "0521" && monthdaynum <= "0621"){                       //双子座判断
		var star_3 = document.createTextNode("双子座");
		stars.appendChild(star_3);
	}
	else if(monthdaynum >= "0622" && monthdaynum <= "0722"){                       //巨蟹座判断
		var star_4 = document.createTextNode("巨蟹座");
		stars.appendChild(star_4);
	}
	else if(monthdaynum >= "0723" && monthdaynum <= "0822"){                       //狮子座判断
		var star_5 = document.createTextNode("狮子座");
		stars.appendChild(star_5);
	}
	else if(monthdaynum >= "0823" && monthdaynum <= "0922"){                       //处女座判断
		var star_6 = document.createTextNode("处女座");
		stars.appendChild(star_6);
	}
	else if(monthdaynum >= "0923" && monthdaynum <= "1023"){                       //天秤座判断
		var star_7 = document.createTextNode("天秤座");
		stars.appendChild(star_7);
	}
	else if(monthdaynum >= "1024" && monthdaynum <= "1122"){                       //天蝎座判断
		var star_8 = document.createTextNode("天蝎座");
		stars.appendChild(star_8);
	}
	else if(monthdaynum >= "1123" && monthdaynum <= "1221"){                       //射手座判断
		var star_9 = document.createTextNode("射手座");
		stars.appendChild(star_9);
	}
	else if((monthdaynum >= "1222" && monthdaynum <= "1231") || (monthdaynum >= "0101" && monthdaynum <= "0119")){       //摩羯座判断
		var star_10 = document.createTextNode("摩羯座");
		stars.appendChild(star_10);
	}
	else if(monthdaynum >= "0120" && monthdaynum <= "0218"){                       //水瓶座判断
		var star_11 = document.createTextNode("水瓶座");
		stars.appendChild(star_11);
	}
	else if(monthdaynum >= "0219" && monthdaynum <= "0320"){                       //双鱼座判断
		var star_12 = document.createTextNode("双鱼座");
		stars.appendChild(star_12);
	}
}

addLoadEvent(ageId);
addLoadEvent(starId);