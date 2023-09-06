$(function() {
  function getCollapseState($tab) {
    return $tab.hasClass('show') ||
    (!$tab.hasClass('show') && $tab.hasClass('collapsing'));
  }
  
  function getTabButton() {
    let btn = undefined;
    if (getCollapseState($('#personalTab'))) {
      btn = $(`.btn[href='#positionTab']`);
    }
    if (getCollapseState($('#positionTab'))) {
      btn = $(`.btn[href='#workExperienceTab']`);
    }
    if (getCollapseState($('#workExperienceTab'))) {
      btn = $(`.btn[href='#educationTab']`);
    }
    if (getCollapseState($('#educationTab'))) {
      btn = $(`.btn[href='#generalTab']`);
    }
    if (getCollapseState($('#generalTab'))) {
      btn = $('#btn-progress-final');
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

  function colorProgressBar() {
    const btn = getTabButton();
    if (btn !== undefined) {
      let found = false; 
      $('.progress-bar').each(function() { 
        if ($(this).find(btn).length) {
          found = true;
        }

        if (found) {
          $(this).addClass('bg-light');
          $(this).find('.progress-circle').addClass('bg-light');
        } else {
          $(this).removeClass('bg-light');
          $(this).find('.progress-circle').removeClass('bg-light');
        }
      });
    }
  }

  (() => {
    'use strict'
  
    // fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        changeTab(form.checkValidity());
        colorProgressBar();
        form.classList.add('was-validated')
      }, false)
    })
  })();

  $('.progress .btn:not([href="#personalTab"])').each(function() {
    //$(this).attr('disabled', true);
  })

  function onFormInput() {
    setTimeout(function() {
      colorProgressBar();
    }, 100);
  }

  $('form input, form select, form textarea').keydown(function() {
    onFormInput();
  });

  $('form input, form select, form textarea, form textarea').change(function() {
    onFormInput();
  });

  $('form input, form select, form textarea, form .btn').click(function() {
    onFormInput();
  });

  $('.tab').on('shown.bs.collapse', function() {
    onFormInput();
  });

  $('#housingCheckbox').change(function() {
    if (!$(this).is(':checked')) {
      $('#rvTrailerDiv').collapse('hide');
    } else if ($('#housingRadio2').is(':checked')) {
      $('#rvTrailerDiv').collapse('show');
    }
  });

  $(window).on('load resize', function() {
    $('.responsive-group')
      .toggleClass('btn-group', $(window).width() >= BS_BREAKPOINT_LG)
      .toggleClass('btn-group-vertical', $(window).width() < BS_BREAKPOINT_LG);
  })

  $('input[name="housingRadio"]:radio').change(function() {
    if ($(this).get(0) == $('#housingRadio2').get(0)) {
      $('#rvTrailerDiv').collapse('show');
    } else {
      $('#rvTrailerDiv').collapse('hide');
    }
  });

  $('#rvTrailerDiv').on('hide.bs.collapse', function(e) {
    if ($('#housingCheck').is(':checked') && $('#housingRadio2').is(':checked')) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
});