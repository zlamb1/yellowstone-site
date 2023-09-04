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

  $('#internationalCheckbox').click(function() {
    const $select = $('#sponsoringAgencySelect');
    if ($(this).is(':checked')) {
      $select.attr('disabled', false);
    } else {
      $select.attr('disabled', true);
    }
  });
});