function myFunction() {
  	document.getElementById("demo").innerHTML = "Updated!";
}
function myFunction1() {
  		document.getElementById("demo1").innerHTML = "Updated!";
}
function myFunction2() {
  	document.getElementById("demo2").innerHTML = "Updated!";
}
function modPrice(){
	var price = 30;
	var quantity = document.getElementById("quantity").value;
	var total = parseInt(price)*quantity;
	document.getElementById("price").innerHTML = total;
}
/* each dropdown function requires a new javascript for being able to display drop down content*/
function sizeFuntion(){
	document.getElementById("sizeDrop").classList.toggle("show");
}
function roastFuntion(){
	document.getElementById("roastDrop").classList.toggle("show");
}
function typeFuntion(){
	document.getElementById("typeDrop").classList.toggle("show");
}

/* each dropdown function requires a new javascript for being able to cancel drop down when clicking outside the drop down*/
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("size_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("roast_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("type_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
