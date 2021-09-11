function copy() {
  /* Get the text field */
  var copyText = document.getElementById("img-link");

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerHTML);

	var btn = document.getElementById("copybtn");

	btn.innerHTML = "Copied!";

	setTimeout(function (){

  btn.innerHTML = "Copy!";

	}, 1500);

}