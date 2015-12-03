
var newTemp = document.getElementById('new-temp');
var tmpl = '<p>the value is : <%= val %></p>';

setInterval(function(){
	var val = document.getElementById('new-temp-val').value;
	newTemp.innerHTML = ejs.render(tmpl,{val:val});
},2000);
