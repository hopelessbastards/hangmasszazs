$(document).ready(function(){
    // jQuery code here
    $(".newsletter-submit").click(function(){
    	const name = $(".newsletter-name").val();
    	const email = $(".newsletter-email").val();
    	if (typeof name !== 'undefined' && name.trim() !== '' && typeof email !== 'undefined' && email.trim() !== '') {
	    	$.post({
		  url: 'newsletter',
		  data: {
		    name: name,
		    email: email,
		    // Add more key-value pairs as needed
		  },
		  success: function(response) {
		    alert("Sikeresen feliratkoztál a hírlevélre!");
		  },
		  error: function(xhr, status, error) {
		    alert("A hírlevélre történő feliratkozás sikertelen!");
		  }
		});
    	} else {
    		alert("A név és az emailcím kitöltése kötelező!");
    	}
    });
});
