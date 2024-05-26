// Load users from the users.js file
// This would work if users.js is included in the HTML file before scripts.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check for hardcoded admin credentials
    if (email === 'admin@admin' && password === '123') {
        
        window.location.href = 'admin_panel.html'; // Redirect to admin panel
        return;
    }

    // Check user credentials against the hardcoded user list
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'user_page.html'; // Redirect to user page
    } else {
        alert('Wrong email or password!');
    }
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Add new user to the hardcoded list (this would not persist in a real scenario)
    const newUser = {
        id: users.length + 1,
        email: email,
        password: password
    };
    users.push(newUser);

    alert('Sign up successful!');
    window.location.href = 'user_page.html'; // Redirect to user page after sign up
});
