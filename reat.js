function send(){
    let pursom = {
        name: document.getElementById('name').value,
        email: document.getElementById('name2').value,
        message: document.getElementById('name3').value,
    }
    console.log(pursom)
    const serviceID = 'service_60lkorh'
    const templateID = 'template_pgvoaz9'
emailjs.send(serviceID,templateID,pursom).then(
    (response) =>{
document.getElementById('name').value="";
document.getElementById('name2').value="";
document.getElementById('name3').value="";

console.log('right', response );
alert("your messege is success")
    },
    (error) => {
        console.log("feilde..." , error)
        alert("your message is feilde")
    },
);

}



