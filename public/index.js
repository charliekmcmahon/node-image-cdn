console.log('index.js running.');

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

var MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
 
$(document).ready(function() {
    $('#formFile').change(function() {
        fileSize = this.files[0].size;
				fileExt = this.files[0].name.split('.').pop();
        if (fileSize > MAX_FILE_SIZE) {
            this.setCustomValidity("File must not exceed 10 MB!");
            this.reportValidity();
        } else {
            this.setCustomValidity("");
						if (fileExt == "jpg"){
							this.setCustomValidity("");
						}
						else if (fileExt == "png"){
							this.setCustomValidity("");
						}
						else if (fileExt == "jpeg"){
							this.setCustomValidity("");
						}
						else{
							this.setCustomValidity("You must upload an image!");
            	this.reportValidity();
						}
        }
    });
});