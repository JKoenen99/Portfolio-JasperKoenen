// Set the Access Token
var accessToken = "aaaf79c846818aed133882b98352efaa9321da52d7cb8507bcb04de9bddba006"

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('#dribbbleShots').prepend(
            '<li class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></li>'
            )
        })
      }
      else {
        $('#dribbbleShots').append('<p>Sorry, No shots yet</p>');
      }
    }