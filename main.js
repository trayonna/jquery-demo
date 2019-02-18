$(document).ready(function () { //checks if html is fully loaded
	$('#btn-img-1').prop('disabled', true); //on first page view, the button for the visible img has to be disabled
	$('.my-button').on("click", function (e) { //when a button with class .my-button is clicked
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		$('.my-button').prop('disabled', false); //enable ALL buttons so NONE are disabled
		$(this).prop('disabled', true); //disable ONLY the button that was clicked - "this" button that was clicked
		var myInfo = $(this), // gather the info related to "this" button that was clicked and store in a variable call myInfo
			myUrl = myInfo.data('image'); //from myInfo, grab the URL stored in data-image attribut and store in myUrl
		$('#aids-img').attr('src', myUrl); //Replace URL attribute for #aids-img by replacing what is in the src field
	}); //end of  function
}); //closes all the functions




// Disabling this part because it's what we did in class, I think it was called folding I'm not sure how
// to do it fast so I'm manually disabling each line with these //

// $(document).ready(function () { //checks if html is fully loaded

// $('#btn-img-1').prop('disabled', true); //existing img button disabled

//when button with an id is clicked
//$('#btn-img-2').on("click", function (e) {
//	e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
//	$('#aids-img').attr('src', 'img/baby.jpg'); //Replace URL attribute for #aids-img
//	$('#btn-img-2').prop('disabled', true); //disable Image 2 button
//	$('#btn-img-1').prop('disabled', false); // enable Image 1 button
//	}); //end of attributes function


//when button with an id is clicked
//	$('#btn-img-1').on("click", function (e) {
//		e.preventDefault(); //disable the button's default behavior
//		$('#aids-img').attr('src', 'img/man.jpg'); //show image with #bath-img id slowly
//		$('#btn-img-2').prop('disabled', false); // enable Image 2 button
//		$('#btn-img-1').prop('disabled', true); //disable Image 1 button
//	}); //end of attributes function


// }); //closes all the functions