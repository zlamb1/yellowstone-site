$(function() {
  (() => {
    'use strict'
  
      // fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
  
      // loop over them and prevent submission
      Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
  
      form.classList.add('was-validated')
    }, false)})})();

  $('#submittedModal').modal('show');

  function getSelectedStars($current) {
    let stars = [];
    $('#starDiv .btn').each(function() {
      stars.push($(this));
      if ($(this).get(0) == $current.get(0)) {
        return false; 
      }
    });

    return stars; 
  }

  $('#starDiv .btn').hover(function() {
    for ($star of getSelectedStars($(this))) {
      $star.find('i').addClass('fa-solid').removeClass('fa-regular');
    }
  }, function() {
    for ($star of getSelectedStars($(this))) {
      if (!$star.hasClass('s-active')) {
        $star.find('i').addClass('fa-regular').removeClass('fa-solid');
      }
    }
  });

  function activateStar($star) {
    $star.addClass('s-active')
    $star.find('i').addClass('fa-solid').removeClass('fa-regular');
  }

  activateStar($('#starDiv .btn').first())

  $('#starDiv .btn').click(function() {
    const $stars = getSelectedStars($(this));
    $('#starDiv .btn').each(function(index) {
      if (index < $stars.length) {
        activateStar($(this));
      } else {
        $(this).removeClass('s-active');
        $(this).find('i').addClass('fa-regular').removeClass('fa-solid');
      }
    });
    for ($star of getSelectedStars($(this))) {

    }
  });
});