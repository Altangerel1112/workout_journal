function showRegistrationForm() {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('registrationForm').style.display = "";
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = "";
    document.getElementById('registrationForm').style.display = "none";
}

function redirectToReadJournal() {
    window.location.href = 'read-journal.php';
}

function redirectToWriteJournal() {
    window.location.href = 'write-journal.php';
}

function addActivity() {

    var template = document.querySelector('.additional-activity');
    var clone = template.cloneNode(true);
    var inputs = clone.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = '';
    });

    document.querySelector('#additionalActivities tbody').appendChild(clone);
}

function removeInputs() {
    var tableBody = document.querySelector('#additionalActivities tbody');
    var rows = tableBody.querySelectorAll('.additional-activity');
    if (rows.length > 1) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
}