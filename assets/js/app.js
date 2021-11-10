import CSelect from './cselect.js';
import addSelectOptions from './addSelectOptions.js';
const disabledSettings = {
  animated: false,
  search: false,
}
const select = Array.from(document.querySelectorAll('.custom-select'));
const cSelect = select.map(item => {
  return new CSelect(item, disabledSettings);
});
const thunderstruckCSelect = new CSelect('#thunderstruck');
const asyncBtn = document.querySelector('#updateSelect');
asyncBtn.addEventListener('click', async () => {
    await addSelectOptions();
    thunderstruckCSelect.update();
});
