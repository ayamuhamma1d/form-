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

    if (package.value === 'DayTourPackage') {
      const dayTourOptions = ['Solo (1-1)', '2-3', '4-6', '7-10', '11-20'];

      dayTourOptions.forEach(option => {
        const radioContainer = document.createElement('div');

        const radioOption = document.createElement('label');
        radioOption.textContent = option;

        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.placeholder = 'Enter price';
        priceInput.name = 'priceInput';
        priceInput.className = 'input_price';

        radioOption.appendChild(priceInput);
        radioContainer.appendChild(radioOption);
        optionContainer.appendChild(radioContainer);
      });
    } else {

      const radioContainer = document.createElement('div');
      const radioDbl = document.createElement('label');
      radioDbl.textContent = 'Double trip all year';
    
      const priceInput = document.createElement('input');
      priceInput.type = 'number';
      priceInput.placeholder = 'Enter price';
      priceInput.name = 'priceInput';
      priceInput.className = 'input_price';
      radioDbl.appendChild(priceInput);
      radioContainer.appendChild(radioDbl);
      const radioSolo = document.createElement('label');
      radioSolo.textContent = 'Solo trip all year';
      const priceInput1 = document.createElement('input');
      priceInput1.type = 'number';
      priceInput1.placeholder = 'Enter price';
      priceInput1.name = 'priceInput';
      priceInput1.className = 'input_price';
      radioSolo.appendChild(priceInput1);
      radioContainer.appendChild(radioSolo);
      const radioAll = document.createElement('label');
      radioAll.textContent = 'Double trip christmas and Easter';
      const priceInput2 = document.createElement('input');
      priceInput2.type = 'number';
      priceInput2.placeholder = 'Enter price';
      priceInput2.name = 'priceInput';
      priceInput2.className = 'input_price';

      radioAll.appendChild(priceInput2);
      radioContainer.appendChild(radioAll);

      const radioEaster = document.createElement('label');
      radioEaster.textContent = 'Solo trip christmas and Easter';
      
      const priceInput3 = document.createElement('input');
      priceInput3.type = 'number';
      priceInput3.placeholder = 'Enter price';
      priceInput3.name = 'priceInput';
      priceInput3.className = 'input_price';

      radioEaster.appendChild(priceInput3);
      radioContainer.appendChild(radioEaster);

      optionContainer.appendChild(radioContainer);
    }

    priceOptionsContainer.appendChild(optionContainer);
  });
}
