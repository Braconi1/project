document.addEventListener("DOMContentLoaded", function() {
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('/login_endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.headers.get('content-type')?.includes('application/json')) {
                    return response.json();
                } else {
                    return response.text().then(text => { throw new Error(`Server did not return JSON: ${text}`); });
                }
            })
            .then(data => {
                if (data.success) {
                    document.getElementById("loginSuccess").style.display = 'block';
                } else {
                    alert("An error occurred: " + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Handle sign-up form submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('/signup_endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.headers.get('content-type')?.includes('application/json')) {
                    return response.json();
                } else {
                    return response.text().then(text => { throw new Error(`Server did not return JSON: ${text}`); });
                }
            })
            .then(data => {
                if (data.success) {
                    document.getElementById("signupSuccess").style.display = 'block';
                } else {
                    alert("An error occurred: " + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
