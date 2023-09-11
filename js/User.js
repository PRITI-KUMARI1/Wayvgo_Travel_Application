
// // Other JS files
// import { apiGatewayEndpoint } from './config.js';
// export class User{
//     //members
//     id;
//     email;
//     password;
//     gender;
//     phone
//     //constructor
//     constructor(id, eml, pwd, gndr, ph){
//         this.id = id;
//         this.email = eml;
//         this.password = pwd;
//         this.gender = gndr;
//         this.phone =ph;
//     }
//     //methods
//     getUserEmail(){
//       return this.email;
//     }
// }

// User.js
import { apiGatewayEndpoint } from './config.js';

export class User {
    // ... (Your existing constructor and methods)

    // Method to get user's email
    getUserEmail() {
        return this.email;
    }

    // Method to add the user to the DB using the API
    addUserToDB() {
        return fetch(`${apiGatewayEndpoint}/add-user`, {
            method: "POST",
            body: JSON.stringify(this),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            return response.json();
        });
    }
}
