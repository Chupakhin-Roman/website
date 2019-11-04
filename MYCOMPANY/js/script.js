menu.onclick = function myFunction(){
	var x = document.getElementById('myTopnav');
	var h = document.getElementById('section1__h1');
	if (x.className ==="topnav"){
		x.className += " responsive";
		h.className += " h1-margin";
	}else{
		x.className = "topnav";
		h.className = "h1";
}
}
function myFunction(){
	var input, filter, ul, li , a, i;
	input = document.getElementById('myInput');
	filter=input.value.toUpperCase();
	ul=document.getElementById('myUL');
	li=ul.getElementsByTagName('li');

	for(i = 0; i<li.length;i++){
		a=li[i].getElementsByTagName("a")[0];
		if(a.innerText.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
		}else{
			li[i].style.display="none";
		}
	}
}
