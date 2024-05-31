function handleSubmit() {
    const name = document.getElementById('name').value;
    const allergiesYes = document.getElementById('allergiesYes').checked;
    const allergiesNo = document.getElementById('allergiesNo').checked;

    if (!name) {
        alert('Please enter your name');
        return;
    }

    if (!allergiesYes && !allergiesNo) {
        alert('Please select whether you have allergies or not');
        return;
    }

    if (allergiesYes) {
        document.getElementById('popup').classList.remove('hidden');
    } else {
        alert('Form submitted successfully!');
    }
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

document.getElementById('allergyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Allergy details submitted successfully!');
    closePopup();
});
