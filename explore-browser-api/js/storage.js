const getInputFieldValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const nameValue = inputField.value;
    return nameValue;
}

document.getElementById('btn-add-name').addEventListener('click', function() {
    const nameValue = getInputFieldValueById('name-field');

    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-add-age').addEventListener('click', function() {
    const ageValue = getInputFieldValueById('age-field');

    localStorage.setItem('age', ageValue);
});

document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name');
})

document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})

document.getElementById('btn-clear-LS').addEventListener('click', function () {
    localStorage.clear();
})