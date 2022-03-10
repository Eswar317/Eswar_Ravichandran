var imgIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  imgIndex++;
  if (imgIndex > x.length) {imgIndex = 1}    
  x[imgIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);
}

/* nav */
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

if ($('.smart-scroll').length > 0) {
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

/* top */
var upbutton = document.getElementById("upBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*loading*/
$(window).on('load',function() {
  setTimeout(function() {
      $("#loader").fadeOut(1000);
      $("#cnt").fadeIn(1000);
  },3000);
});

/* animate */
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

/*sendmail*/
const btn = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.disabled = true;
   btn.value = 'Sending...';
   const serviceID = 'eswarravi317';
   const templateID = 'template_yn2lo0m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Another Message';
      btn.disabled = false;
      name.value = '';
      email.value = '';
      message.value = '';
      var data1 = 'Message sent successfully...!';
			$('#success_message').fadeIn().html(data1);
      setTimeout(function() {
        $('#success_message').fadeOut("slow");
      }, 5000 );

    }, (err) => {
      document.getElementById('contact-form').reset();
      btn.value = 'Send';
      var data2 = 'There was an problem in sending message... Please try again...!';
			$('#error_message').fadeIn().html(data2);
      setTimeout(function() {
        $('#error_message').fadeOut("slow");
      }, 5000 );
    });
});