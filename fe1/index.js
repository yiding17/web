var mydiv = document.getElementById('test');
mydiv.onclick=function(){
	debugger;
	var result =getm(1);
	alert(result);
	localStorage.aa="liuyingan";
}

function getm(a){
	return ++a;
}