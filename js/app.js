function handleCollapseBtnState(collapseElement, hidden) {
  const btn = $(`button[href="#${collapseElement.attr('id')}"]`);
  if (hidden) {
    btn.attr('aria-expanded', false)
  } else {
    btn.attr('aria-expanded', true);
  }
}

function addStateOptions(element) {
  element.append('<option selected></option>');
  for (let i = 0; i < STATES.length; i++) {
    element.append(`<option>${STATES[i]}</option>`);
  }
}

function addCountryOptions(element) {
  element.append('<option selected></option>');
  for (let i = 0; i < COUNTRIES.length; i++) {
    element.append(`<option>${COUNTRIES[i]}</option>`);
  }
}

function addYellowstoneLocations(element) {
  element.append('<option selected></option>');
  for (let i = 0; i < YELLOWSTONE_LOCATIONS.length; i++) {
    element.append(`<option>${YELLOWSTONE_LOCATIONS[i]}</option>`);
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

function updateInfo(element, newNumber) {
  element.find('.header > div').text(
    element.find('.header > div').text().slice(0, -1) + newNumber
  );
  element.find('input, select, textarea').each(function() {
    $(this).attr('id', $(this).attr('id').slice(0, -1) + newNumber);
  });

  element.find('label').each(function() {
    $(this).attr('for', $(this).attr('for').slice(0, -1) + newNumber);
  });
}

$(function() {
  $('.collapse.disabled-inputs').on({
    'shown.bs.collapse': function() {
      $(this).find('input, select, textarea').attr('disabled', false);
    },
    'hidden.bs.collapse': function() {
      $(this).find('input, select, textarea').attr('disabled', true);
    }
  });

  let ongoingCollapseShow = false; 
  $('.tab').on({'hide.bs.collapse': function(e) {
    if ($(this).get(0) !== e.target) {
      return;
    }

    const eventCollapse = $(this);
    if ($('button[aria-expanded="true"]').length == 1) {
      e.preventDefault(); 
      return; 
    }

    handleCollapseBtnState(eventCollapse, true);
  }});

  $('.tab').on({'show.bs.collapse': function(e) {
    if ($(this).get(0) !== e.target) {
      return;
    }
    if (!ongoingCollapseShow) {
      ongoingCollapseShow = true;
      const eventCollapse = $(this);
      handleCollapseBtnState(eventCollapse, false);
      $('.tab').each(function() {
        if (eventCollapse.get(0) !== $(this).get(0)) {
          $(this).collapse('hide');
        }
      });
    } else {
      e.preventDefault(); 
    }
  }});
  
  $('.tab').on({'shown.bs.collapse': function(e) {
    if ($(this).get(0) !== e.target) {
      return;
    }
    ongoingCollapseShow = false; 
  }});

  $('.state-select').each(function() {
    addStateOptions($(this));
  });

  $('.country-select').each(function() {
    addCountryOptions($(this));
  });

  $('.yellowstone-locations-select').each(function() {
    addYellowstoneLocations($(this));
  });

  $('.position-select').each(function() {
    setupPositionSelect($(this));
  });

  $('#position-selects').on('change', '.position-select', function() {
    const select = $(this);
    setDisabledOptions();
  });

  $('#position-selects').on('click', '.close-btn', function() {
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
      $('.btn-add').css({'display': 'block'});
    }
  });

  $('#positionTab .btn-add').click(function() {
    const nextPosition = $('.position-select').length + 1; 
    $('#position-selects').append(`
      <div class='input-group form-floating'>
        <select class='form-select position-select' aria-label='Select position ${nextPosition}' id='positionSelect${nextPosition}' required>
        </select>
        <label class='form-label' for='positionSelect${nextPosition}'>Position ${nextPosition}</label>
        <button class='btn btn-danger close-btn' type='button'>
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

  $('#optionalPositionInput').on('input', function() {
    if (!$(this).val()) {
      $('#positionType1').attr('disabled', true);
      $('#positionType2').attr('disabled', true);
    } else {
      $('#positionType1').attr('disabled', false);
      $('#positionType2').attr('disabled', false);
    }
  });

  const clonedEmployerInfo = $('.employer-info').first().clone();
  $('#workExperienceTab .btn-add').click(function() {
    const nextEmployerNumber = $('#employerStack').children('.employer-info').length + 1; 
    if (nextEmployerNumber == 1) {
      $('#employerStack').html('');
    }

    const clone = clonedEmployerInfo.clone();
    updateInfo(clone, nextEmployerNumber);
    clone.appendTo('#employerStack');
    if (nextEmployerNumber >= MAX_NUMBER_OF_EMPLOYERS) {
      $(this).css({'display': 'none'});
    }
  });

  $('#workExperienceTab').on('click', '.close-btn', function() {
    $(this).parent().parent().parent().remove();
    $('#employerStack .employer-info').each(function(index) {
      updateInfo($(this), index + 1);
    });

    if ($('#employerStack').children().length < MAX_NUMBER_OF_EMPLOYERS) {
      $('#workExperienceTab .btn-add').css({'display': 'block'});
    }

    if ($('#employerStack').children().length == 0) {
      $('#employerStack').append(`
        <div class="form-check text-center">
          <input class="form-check-input check-input-lg float-none" type="checkbox" id="noEmployerCheckbox" required>
          <label class="form-check-label ms-3 user-select-none" for="noEmployerCheckbox">
            Please confirm that you want to submit no previous employers.
          </label>
          <div class="invalid-feedback">
            You must agree before continuing.
          </div>
        </div>
      `);
    }
  });

  const educationInfoClone = $('#schoolStack .school-info').first().clone(); 
  $('#educationTab .btn-add').click(function() {
    const nextSchoolNumber = $('#schoolStack').children('.school-info').length + 1;
    if (nextSchoolNumber == 1) {
      $('#schoolStack').html('');
    }

    const clone = educationInfoClone.clone();
    updateInfo(clone, nextSchoolNumber);
    $('#schoolStack').append(clone);

    if (nextSchoolNumber >= MAX_NUMBER_OF_SCHOOLS) {
      $(this).css({'display': 'none'});
    }
  });

  $('#educationTab').on('click', '.close-btn', function() {
    $(this).parent().parent().parent().remove();

    $('#schoolStack .school-info').each(function(index) {
      updateInfo($(this), index + 1);
    });

    if ($('#schoolStack').children().length < MAX_NUMBER_OF_SCHOOLS) {
      $('#educationTab .btn-add').css({'display': 'block'});
    }

    if ($('#schoolStack').children().length == 0) {
      $('#schoolStack').append(`
        <div class="form-check text-center">
          <input class="form-check-input check-input-lg float-none" type="checkbox" id="noSchoolsCheckbox" required>
          <label class="form-check-label ms-3 user-select-none" for="noSchoolsCheckbox">
            Please confirm that you want to submit no prior education.
          </label>
          <div class="invalid-feedback">
            You must agree before continuing.
          </div>
        </div>
      `);
    }
  });

});