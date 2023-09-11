
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('registerform').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        // let phoneCode = document.getElementById('code').value;
        // let phoneNumber = document.getElementById('phone').value;
        // let gender = document.querySelector('input[name="gender"]:checked').value;

        // Basic validation (you might want to expand this)
        if (!name || !email || !password ) {
            alert("Please fill out all fields.");
            return;
        }

        let data = {
            name: name,
            email: email,  // This will be used as the partition key in DynamoDB
            password: password,
            // phone: {
            //     code: phoneCode,
            //     number: phoneNumber
            // },
            // gender: gender
        };

        fetch('https://m2gcn60ii7.execute-api.eu-north-1.amazonaws.com/Prod/insertUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You might want to navigate to a different page or display a success message here
        })
        .catch((error) => {
            console.error('Error:', error);
            // Display an error message to the user
        });
    });
});
