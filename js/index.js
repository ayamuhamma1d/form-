
function generateItineraryFields() {
  const duration = document.getElementById('tripDuration').value;
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
    const durationUnitSpan = document.getElementById('durationUnit');

    if (tripTypeSelect.value.includes('DayTours')) {
      tripDurationInput.value = ''; 
      tripDurationInput.setAttribute('placeholder', 'Enter duration in hours');
      durationUnitSpan.textContent = 'hours';
      tripDurationInput.setAttribute('disabled', true);
    } else {
      durationUnitSpan.textContent = 'days';
      tripDurationInput.removeAttribute('disabled');
      tripDurationInput.setAttribute('placeholder', '');
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

document.getElementById('tripDuration').addEventListener('input', function() {
  const unit = this.value === '1' ? 'day' : 'days';
  document.getElementById('durationUnit').textContent = unit;
});
