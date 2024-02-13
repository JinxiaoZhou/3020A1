// variable buttons
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
	// console.log(total);
	document.getElementById("price").innerHTML = total;
}