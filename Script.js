

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    emailjs.send("service_q3u8186", "template_ylwf0dh", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
        }, function(error) {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again later.");
        });
}