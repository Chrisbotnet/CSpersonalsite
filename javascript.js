console.log("Hello There!");
//Below is my attempt at trying to get the contact page to send emails... so far it is not working!
function sendmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


 const serviceID = "service_yjn3nd9";
 const templateID = "template_kiurs6c";

 emailjs.send(serviceID, templateID, params)
 .then(res=>{
        document.getElementById("fname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!")
})
.catch(err=>console.log(err));
}
//Will have to submit this even though the email form is not yet working. Will update it when I get it sorted out.
