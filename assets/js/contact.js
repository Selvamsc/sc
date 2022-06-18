// (function($) {
//     "use strict";
    $(window).on('load',
        function(){
      $('#submit-button').click(function (e) {
        e.preventDefault()
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        var msg = $("#message").val();
         console.log(name);
        if(!name){
          $.toaster('Please enter your name', 'Missing Data', 'warning');
          return false
        }
        if(!email){
          $.toaster('Please enter your email', 'Missing Data', 'warning');
          return false
        }
        if(!mobile){
            $.toaster('Please enter your Mobile Number', 'Missing Data', 'warning');
            return false
          }
        if(!msg){
          $.toaster('Please enter your message', 'Missing Data', 'warning');
          return false
        }
  
  
        var target = ["contact@askurdoctor.com"]
        $('button[type=submit], input[type=submit]').prop('disabled',true);
        var request = $.ajax({
          url: "https://cewti8xhnb.execute-api.us-east-1.amazonaws.com/Production/sendMail",
          method: "POST",
          data: JSON.stringify({ body:{name: name, email: email,mobile:mobile, message: msg}, "template": "Templates/audtemplate.html", subject: `Mail from ${name}`, target: target, fromAddress: "contact@askurdoctor.com" }),
          contentType: "application/json",
          dataType: "json"
        });
  
        request.done(function( msg ) {
          $("#name").val("")
          $("#email").val("")
          $("#mobile").val("")
          $("#message").val("")
          $.toaster('Your Message Has been Submitted', 'Request', 'success');
          $("#submit").prop('disabled', false)
        });
  
        request.fail(function( jqXHR, textStatus ) {
          $.toaster('Something Went ,Please Try after Sometime !!!', 'Error', 'danger');
          $("#submit").prop('disabled', false)
        });
  
  
      })
  
  
  
  
    });
  // })(jQuery);
  