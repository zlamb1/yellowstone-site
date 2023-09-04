$(function() {
  function getTabButton() {
    let btn = undefined;
    if ($('#personalTab').hasClass('show')) {
      btn = $(`.btn[href='#positionTab']`);
    }
    if ($('#positionTab').hasClass('show')) {
      btn = $(`.btn[href='#workExperienceTab']`);
    }
    if ($('#workExperienceTab').hasClass('show')) {
      btn = $(`.btn[href='#educationTab']`);
    }
    if ($('#educationTab').hasClass('show')) {
      btn = $(`.btn[href='#generalTab']`);
    }

    return btn;
  }

  function changeTab(formValidated) {
    const btn = getTabButton();
    if (btn !== undefined) {
      if (formValidated) {
        btn.attr('disabled', false);
        btn.click();
        btn.parent().parent().removeClass('bg-light');

        let found = false;
        $('.progress-bar').each(function() {
          $(this).find('.btn').attr('disabled', found);
          if ($(this).find(btn).length) {
            found = true;
          }
        });
      }
    }
  }

  function colorProgressBar(formValidated) {
    const btn = getTabButton();
    if (btn !== undefined) {
      if (!formValidated) {
        let found = false; 
        $('.progress-bar').each(function() { 
          if (found) {
            $(this).find('.progress-circle').addClass('bg-light');
          } else {
            $(this).find('.progress-circle').removeClass('bg-light');
          }

          if ($(this).find(btn).length) {
            found = true;
          }

          if (found) {
            $(this).addClass('bg-light');
          } else {
            $(this).removeClass('bg-light');
          }
        });
      }
    }
  }

  (() => {
    'use strict'
  
    // fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        changeTab(form.checkValidity());
        colorProgressBar(form.checkValidity());
        form.classList.add('was-validated')
      }, false)
    })
  })();

  $('.progress .btn:not([href="#personalTab"])').each(function() {
    //$(this).attr('disabled', true);
  })

  function onFormInput($this) {
    setTimeout(function() {
      colorProgressBar($this.closest('form').get(0).checkValidity());
    }, 100);
  }

  $('form input, form select, form textarea').keydown(function() {
    onFormInput($(this));
  });

  $('form input, form select, form textarea').change(function() {
    onFormInput($(this));
  });
});