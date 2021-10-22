function createDestroyButton() {
  let button = document.createElement('button')
  button.onclick = () => button.parentElement.remove();
  button.innerText = 'X';

  return button;
}

function createEventDiv() {
  let div = document.createElement('div');
  div.className = 'event';
  div.append(createDestroyButton());

  return div;
}

window.addEventListener('DOMContentLoaded', () => {
  eventTrain = document.querySelector('.event-train');
  eventTrain.append(createEventDiv());
});