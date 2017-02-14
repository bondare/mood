console.log("form_validation.js - IT WORKS!");

function $(selector) {
    return document.querySelector(selector);
}

(function() {
    // get form
    var contactForm = $('#contact-form');

    // validate form
    contactForm.onsubmit = function(e) {
        // get error container
        // e.preventDefault();
        var errorContainer = $('#errorContainer');
        errorContainer.innerHTML = '';

        var formData = new FormData(this);
        var name = formData.get('name');
        var email = formData.get('email');
        var msg = formData.get('message');
        var errorMessage = [];

        // validate e-mail
        function isEmailValid(inputText) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (inputText.match(mailformat)) {
                document.querySelector("#email")
                document.contactForm.email.focus();
                return true;
            } else {
                errorMessage.push("Nederīga e-pasta adrese!");
                document.contactForm.email.focus();
                return false;
            }
        }

        // check if name is not empty
        if (!name) {
            errorMessage.push('Lūdzu ievadiet vārdu!');
        }

        // check if e-mail is not empty
        if (!email) {
            errorMessage.push('Lūdzu ievadiet e-pasta adresi!');

        } else {
            isEmailValid(email);
        }



        // check if message is not empty
        if (!msg) {
            errorMessage.push('Lūdzu ievadiet savu ziņojumu!');
        }

        // check for errors and submit form if no errors
        if (errorMessage.length) {

            // clear old messges
            errorContainer.innerHTML = '';
            // create messages
            var messagesList = document.createElement('div');
            errorContainer.appendChild(messagesList);
            messagesList.classList.add('errors')
            // for each message add li
            for (var i = 0; i < errorMessage.length; i++) {
                var message = document.createElement('p');

                message.classList.add('errorMsg');
                message.innerHTML = errorMessage[i];
                // insert message to messages
                messagesList.appendChild(message);
            }

            return false;
        }
    }
})()
