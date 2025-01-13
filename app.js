function send(){
    let parameters = {
        name : document.getElementById("name").value,
        email : document.getElementById("name2").value,
        message : document.getElementById("name3").value,
    };
    console.log(parameters," ==>>> parameters")
    const serviceID = "service_4nh7qxg";
    const templateID = "template_pgvoaz9";

emailjs.send(serviceID, templateID, parameters).then(
    (response) => {
        document.getElementById("name").value = "";
                    document.getElementById("name2").value = "";
                    document.getElementById("name3").value = "";
        
                    console.log("Success:", response);
                    alert("Your message has been sent successfully!");
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

}

