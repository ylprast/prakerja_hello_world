
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

//Konversi suhu fahrenheit ke celcius
  function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    if (fahrenheitInput === "") {
        alert("Masukkan suhu dalam Fahrenheit!");
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5 / 9;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
}

//Validasi Form Email dan Nomor Telepon
function validateForm() {
  const emailInput = document.getElementById('formemail').value;
  const phoneInput = document.getElementById('formphone').value;

  let emailValid = validateEmail(emailInput);
  let phoneValid = validatePhone(phoneInput);

  if (emailValid && phoneValid) {
      alert("Yeay! Your feedback is already sent! Thank you^^");
  }
}

function validateEmail(email) {
  const emailErrorElement = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
      emailErrorElement.textContent = "Uh oh, Email cant be empty.";
      return false;
  } else if (!emailPattern.test(email)) {
      emailErrorElement.textContent = "Invalid email format. Let's try again.";
      return false;
  } else {
      emailErrorElement.textContent = "";
      return true;
  }
}

function validatePhone(phone) {
  const phoneErrorElement = document.getElementById('phoneError');

  if (!phone) {
      phoneErrorElement.textContent = "Oops, Phone number cant be empty.";
      return false;
  } else if (!/^\d{12,}$/.test(phone)) {
      phoneErrorElement.textContent = "Phone number must be at least 12 digits. Let's do some recheck.";
      return false;
  } else {
      phoneErrorElement.textContent = "";
      return true;
  }
}


