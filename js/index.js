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
function handlePricePackageChange() {
  const priceOptionsContainer = document.getElementById('priceOptionsContainer');
  const pricePackage = document.querySelector('input[name="pricePackage"]:checked').value;
  if (pricePackage === 'standard') {

    priceOptionsContainer.style.display = 'flex';
  } else if (pricePackage === 'luxury') {

    priceOptionsContainer.style.display = 'flex';
  } else if (pricePackage === 'demand') {
    priceOptionsContainer.style.display = 'flex';
  }
}

const pricePackageOptions = document.getElementById('pricePackageOptions');
pricePackageOptions.addEventListener('change', handlePricePackageChange);
function addOption() {
  const optionsContainer = document.getElementById('tripOptionsContainer');
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
