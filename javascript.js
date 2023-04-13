console.log("Hello There!");
//Below is my attempt at trying to get the contact page to send emails... so far it is not working!

   const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

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

