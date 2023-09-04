function handleCollapseBtnState(collapseElement, hidden) {
  const btn = $(`button[href="#${collapseElement.attr('id')}"]`);
  if (hidden) {
    btn.attr('aria-expanded', false)
  } else {
    btn.attr('aria-expanded', true);
  }
}

function addStateOptions(element) {
  for (let i = 0; i < STATES.length; i++) {
    element.append(`<option>${STATES[i]}</option>`);
  }
}

function addCountryOptions(element) {
  for (let i = 0; i < COUNTRIES.length; i++) {
    element.append(`<option>${COUNTRIES[i]}</option>`);
  }
}

function createGroupString(label, options) {
  let optionsString = `<optgroup label='${label}'>`;
  for (let i = 0; i < options.length; i++) {
    optionsString += `<option>${options[i]}</option>`;
  }
  optionsString += `</optgroup>`;
  return optionsString;
}

function setupPositionSelect(select) {
  select.html('');
  select.append('<option selected></option>');
  select.append(createGroupString('Bus Positions', busPositions));
  select.append(createGroupString('Campground Positions', campgroundPositions));
  select.append(createGroupString('Distribution Positions', distributionPositions));
  select.append(createGroupString('Driving Positions', drivingPositions));
  select.append(createGroupString('Entertainment Positions', entertainmentPositions));
  select.append(createGroupString('Guide Positions', guidePositions));
  select.append(createGroupString('Housing Positions', housingPositions));
  select.append(createGroupString('Maintenance Positions', maintenancePositions));
  select.append(createGroupString('Management Positions', managementPositions));
  select.append(createGroupString('Sales Positions', salesPositions));
  select.append(createGroupString('Serving Positions', servingPositions));
  select.append(createGroupString('Technician Positions', technicianPositions));
  select.append(createGroupString('Truck Positions', truckPositions));
}

function getPositionSelectsNumber(select) {
  const selectId = select.attr('id');
  return parseInt(selectId.charAt(selectId.length - 1)); 
}

function setDisabledOptions() {
  let disabled = [];
  $('.position-select').each(function() {
    let selectedTxt = $(this).find(':selected').text();
    if (selectedTxt !== '') {
      disabled.push(selectedTxt);
    }
  });

  $('.position-select').each(function() {
    const selectedOpt = $(this).find(':selected').text(); 
    $(this).find('option').each(function() {
      const disabledOpt = disabled.includes($(this).text()) && selectedOpt !== $(this).text(); 
      $(this).attr('disabled', disabledOpt); 
    });
  });
}

function updateEmployerInfo(element, newEmployerNumber) {
  element.find('.employer-header > div').text(`Employer #${newEmployerNumber}`);
  element.find('input, select, textarea').each(function() {
    $(this).attr('id', $(this).attr('id').slice(0, -1) + newEmployerNumber);
  });

  element.find('label').each(function() {
    $(this).attr('for', $(this).attr('for').slice(0, -1) + newEmployerNumber);
  });
}

$(function() {
  // not a fan of globals like this
  let ongoingCollapseShow = false; 
  $('main .collapse').on({'hide.bs.collapse': function(e) {
    const eventCollapse = $(this);
    if ($('button[aria-expanded="true"]').length == 1) {
      e.preventDefault(); 
      return; 
    }

  handleCollapseBtnState(eventCollapse, true);
  }, 'show.bs.collapse': function(e) {
    if (!ongoingCollapseShow) {
      ongoingCollapseShow = true;
      const eventCollapse = $(this);
      handleCollapseBtnState(eventCollapse, false);
      $('main .collapse').each(function() {
        if (eventCollapse.get(0) !== $(this).get(0)) {
          $(this).collapse('hide');
        }
      });
    } else {
      e.preventDefault(); 
    }
  }, 'shown.bs.collapse': function() {
    ongoingCollapseShow = false; 
  }});

  $('.state-select').each(function() {
    addStateOptions($(this));
  });

  $('.country-select').each(function() {
    addCountryOptions($(this));
  });

  $('.position-select').each(function() {
    setupPositionSelect($(this));
  });

  $('#position-selects').on('change', '.position-select', function() {
    const select = $(this);
    setDisabledOptions();
  });

  $('#position-selects').on('click', '.removePositionBtn', function() {
    const removedSelectNumber = getPositionSelectsNumber($(this).parent().find('.position-select'));
    $(this).parent().remove();
    $('.position-select').each(function() {
        let selectNumber = getPositionSelectsNumber($(this));
        if (selectNumber != 1 && selectNumber > removedSelectNumber) {
          selectNumber -= 1; 
          $(this).attr('aria-label', `Select position ${selectNumber}`);
          $(this).attr('id', `positionSelect${selectNumber}`)
          const label = $(this).parent().find('label');
          label.attr('for', `positionSelect${selectNumber}`);
          label.text(`Position ${selectNumber}`); 
        }
    });
    setDisabledOptions();
    if ($('position-select').length < MAX_NUMBER_OF_POSITIONS) {
      $('.addPositionBtn').css({'display': 'block'});
    }
  });

  $('#personalTab .addPositionBtn').click(function() {
    const nextPosition = $('.position-select').length + 1; 
    $('#position-selects').append(`
      <div class='input-group form-floating'>
        <select class='form-select position-select' aria-label='Select position ${nextPosition}' id='positionSelect${nextPosition}' required>
        </select>
        <label class='form-label' for='positionSelect${nextPosition}'>Position ${nextPosition}</label>
        <button class='btn btn-danger removePositionBtn' type='button'>
          <i class="fa-solid fa-minus"></i>
        </button>
        <div class='invalid-feedback'>
          Please select a position.
        </div>
      </div>
    `);
    setupPositionSelect($('#positionSelect' + nextPosition));
    setDisabledOptions();
    if (nextPosition >= MAX_NUMBER_OF_POSITIONS) {
      $(this).css({'display': 'none'});
    }
  });

  $('#workExperienceTab .btn-add').click(function() {
    if ($('#employerStack').children().length == 1 && $('.employer-info').css('display') == 'none') {
      $('.employer-info').css({'display': 'block'});
      return;
    }

    const nextEmployerNumber = $('#employerStack').children().length + 1; 
    let clone = $('#workExperienceTab .employer-info').first().clone();
    updateEmployerInfo(clone, nextEmployerNumber);
    clone.appendTo('#employerStack');
    if (nextEmployerNumber >= MAX_NUMBER_OF_EMPLOYERS) {
      $(this).css({'display': 'none'});
    }
  });

  $('#workExperienceTab').on('click', '.close-btn', function() {
    if ($('#employerStack').length <= 1) {
      $('.employer-info').css({'display': 'none'});
      return;
    }

    $(this).parent().parent().parent().remove();
    $('#employerStack .employer-info').each(function(index) {
      updateEmployerInfo($(this), index + 1);
    });

    if ($('#employerStack').children().length < MAX_NUMBER_OF_EMPLOYERS) {
      $('#workExperienceTab .btn-add').css({'display': 'block'});
    }
  });

  $('#optionalPositionInput').on('input', function() {
    if (!$(this).val()) {
      $('#positionType1').attr('disabled', true);
      $('#positionType2').attr('disabled', true);
    } else {
      $('#positionType1').attr('disabled', false);
      $('#positionType2').attr('disabled', false);
    }
  });

});