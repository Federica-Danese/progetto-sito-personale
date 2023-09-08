
/*Menu*/
let item=document.querySelector('.icon-hamburger');
item.addEventListener("click", function(){
  document.body.classList.toggle('menu-open');
})

/*Form*/
function SendMail() {
  
  var serviceID = "service_2jj3vsv";
  var templateID = "template_28ws92y";


  let params = {
      name : document.querySelector("#name").value,
      email : document.querySelector("#email").value,
      message : document.querySelector("#message").value,
  };

  emailjs.send(serviceID, templateID, params)
  .then(
    res => {
      alert("Grazie, " + params["name"] + "! Il tuo messaggio è stato inviato correttamente.");
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
    }
  )
  .catch();
}


  
