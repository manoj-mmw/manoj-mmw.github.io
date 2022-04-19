jQuery(document).ready(function ($) {
  //open popup
  $(".cd-popup-trigger").on("click", function (event) {
    event.preventDefault();
	console.log(dataLayer)
	dataLayer.push({
		event: "Submit_Button_Non-Mobile"
	})

	console.log("herere")

    $(".cd-popup").addClass("is-visible");

	const userInputField = document.getElementById('phone_number');
	const mobileNumber = userInputField.value;

	if(mobileNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && ! (mobileNumber.match(/0{5,}/)) ) {

		const apiUrl = 'https://2929-3-111-140-16.ngrok.io/auth/v1/auth/optInForInvitation/';
		const body = {
			mobileNumber
		}

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				userInputField.value = '';
			}
		};
		xhttp.open("POST", apiUrl, true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(JSON.stringify(body));
	}
  });
  $(".cd-popup-trigger").on("click", function (event) {
    event.preventDefault();
    $(".cd-popup").addClass("is-visible");
  });

  //close popup
  $(".cd-popup").on("click", function (event) {
    if (
      $(event.target).is(".cd-popup-close") ||
      $(event.target).is(".cd-popup")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".cd-popup").removeClass("is-visible");
    }
  });
});
