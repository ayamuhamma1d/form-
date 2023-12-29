function generateItineraryFields() {
  const tripTypeSelect = document.getElementById('tripType');
  const duration = tripTypeSelect.value.includes('DayTours') ? 1 : document.getElementById('tripDuration').value;
  const itineraryContainer = document.getElementById('itineraryContainer');
  itineraryContainer.innerHTML = '';
  for (let day = 1; day <= duration; day++) {
    const dayLabel = document.createElement('label');
    dayLabel.textContent = `Day ${day} : Title:`;
    const input1 = document.createElement('input');
    input1.type = 'text';

    const dayLabel2 = document.createElement('label');
    dayLabel2.textContent = `Day ${day} : Description`;
    const input2 = document.createElement('input');
    input2.type = 'text';

    itineraryContainer.appendChild(dayLabel);
    itineraryContainer.appendChild(input1);
    itineraryContainer.appendChild(dayLabel2);
    itineraryContainer.appendChild(input2);
  }
}

function handleTripTypeChange() {
  const tripTypeSelect = document.getElementById('tripType');
  const tripDurationInput = document.getElementById('tripDuration');
  const tripDurationHour = document.getElementById('tripDurationHour');
  const durationUnitSpan = document.getElementById('durationUnit');

  if (tripTypeSelect.value.includes('DayTours')) {
    tripDurationInput.value = '';
    tripDurationHour.value = ''; 
    durationUnitSpan.textContent = 'hours';
    tripDurationInput.style.display = 'none';
    tripDurationHour.style.display = 'block';
  } else {
    durationUnitSpan.textContent = 'days';
    tripDurationInput.removeAttribute('disabled');
    tripDurationInput.style.display = 'block';
    tripDurationHour.style.display = 'none';
  }
}

function validateForm() {
  const tripDuration = document.getElementById('tripDuration').value;
  const tripType = document.getElementById('tripType');
  if (isNaN(tripDuration) || tripDuration < 1) {
    alert('Please enter a valid trip duration.');
    return false;
  }
  if (tripType.selectedOptions.length === 0) {
    alert('Please select at least one trip type.');
    return false;
  }
  alert('Form submitted successfully!');
  return true;
}
function addInput(containerId) {
    const container = document.getElementById(containerId);
    const input = document.createElement('input');
    input.type = 'text';
    container.prepend(input);
}


const pricePackageOptions = document.getElementById('pricePackageOptions');
pricePackageOptions.addEventListener('change', handlePricePackageChange);

function addOption() {
  const optionsContainer = document.getElementById('optionsContainer');
    const optionContainer = document.createElement('div');
  optionContainer.classList.add('option-container');

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'Trip';

  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.placeholder = 'Trip Price';

  optionContainer.appendChild(textInput);
  optionContainer.appendChild(priceInput);
  optionsContainer.appendChild(optionContainer);
}

document.getElementById('tripDuration').addEventListener('input', function() {
  const unit = this.value === '1' ? 'day' : 'days';
  document.getElementById('durationUnit').textContent = unit;
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#tripForm').addEventListener('submit', validateForm);

  document.querySelectorAll('input[name="pricePackage"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', handlePricePackageChange);
  });
});


function handlePricePackageChange() {
  const priceOptionsContainer = document.getElementById('priceOptionsContainer');
  const selectedPackages = document.querySelectorAll('input[name="pricePackage"]:checked');
  
  priceOptionsContainer.innerHTML = '';

  selectedPackages.forEach(package => {
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');

    const radioContainer = document.createElement('div');

    const radioDbl = document.createElement('input');
    radioDbl.type = 'checkbox';
    radioDbl.name = 'radioOption';
    radioDbl.value = 'dbl';
     const radioSolo = document.createElement('input');
    radioSolo.type = 'checkbox';
    radioSolo.name = 'radioOption';
    radioSolo.value = 'solo';
    const radioAll = document.createElement('input');
    radioAll.type = 'checkbox';
    radioAll.name = 'radioOption';
    radioAll.value = 'all';
    const priceInput1 = document.createElement('input');
    priceInput1.type = 'number';
    priceInput1.placeholder = 'Enter price';
    priceInput1.name = 'priceInput';
    const priceInput2 = document.createElement('input');
    priceInput2.type = 'number';
    priceInput2.placeholder = 'Enter price';
    priceInput2.name = 'priceInput';
    const priceInput3 = document.createElement('input');
    priceInput3.type = 'number';
    priceInput3.placeholder = 'Enter price';
    priceInput3.name = 'priceInput';
    const radioEaster = document.createElement('input');
    radioEaster.type = 'checkbox';
    radioEaster.name = 'radioOption';
    radioEaster.value = 'easter';

    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.placeholder = 'Enter price';
    priceInput.name = 'priceInput';
    priceInput.className = 'input_price';

    radioContainer.appendChild(radioDbl);
    radioContainer.appendChild(document.createTextNode('Double trip all year'));
    radioContainer.appendChild(priceInput);

    radioContainer.appendChild(radioSolo);
   
    radioContainer.appendChild(document.createTextNode('Solo trip all year'));
    radioContainer.appendChild(priceInput1);
    radioContainer.appendChild(radioAll);
    radioContainer.appendChild(document.createTextNode('Double trip christmas and Easter'));
    radioContainer.appendChild(priceInput2);
    radioContainer.appendChild(radioEaster);
    radioContainer.appendChild(document.createTextNode('Solo trip christmas and Easter'));

    optionContainer.appendChild(radioContainer);
    optionContainer.appendChild(priceInput3);
   
    
    priceOptionsContainer.appendChild(optionContainer);
  });
}




