
document.getElementById('navigateBtn')?.addEventListener('click', function() {
    const selectedTime = document.getElementById('time').value;
    if (selectedTime) {
        sessionStorage.setItem('selectedTime', selectedTime);
        window.location.href = "PersonalDetails.html"; 
    } else {
        alert("Please select a time.");
    }
});

document.getElementById('submitBtn')?.addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstName && lastName && email && phone) {
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return; 
        }

        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('phone', phone);

        window.location.href = "SubmittedDetails.html";
    } else {
        alert("Please fill in all the fields.");
    }
});

window.onload = function() {
    const selectedTime = sessionStorage.getItem('selectedTime');
    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');

    if (selectedTime) document.getElementById('timeDisplay').textContent = selectedTime;
    if (firstName) document.getElementById('firstNameDisplay').textContent = firstName;
    if (lastName) document.getElementById('lastNameDisplay').textContent = lastName;
    if (email) document.getElementById('emailDisplay').textContent = email;
    if (phone) document.getElementById('phoneDisplay').textContent = phone;

};
