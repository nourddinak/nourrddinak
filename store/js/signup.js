// Create stars
const starsContainer = document.querySelector('.stars');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
}

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var data = {
        action: 'signup',
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    
    fetch('https://script.google.com/macros/s/AKfycbzmFbZJbiSaKqa7fKntxcwmyfvulHu_MQG7sdbbLt8WvoxrqpYmEJskcRAl18895JG_1A/exec', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    }).then(response => response.json()).then(result => {
        if (result.status === 'success') {
            window.location.href = 'store.html'; // Redirect to store page
        } else {
            alert(result.message);
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});