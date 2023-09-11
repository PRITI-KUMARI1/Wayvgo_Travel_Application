
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginform').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let username = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Basic validation
        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        let data = {
            email: email, 
            password: password
        };

        fetch('https://m2gcn60ii7.execute-api.eu-north-1.amazonaws.com/Prod/getUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
             if(data.statusCode === 200) {
                    // Successfully logged in
                    alert(data.body.message);
                    window.location.href = 'html/home.html';  // Redirect to home.html
                } else {
                    // Error logging in
                    alert(data.body.message);
                }
                })
        .catch((error) => {
            console.error('Error:', error);
            // Display an error message to the user
        });
    });
});

