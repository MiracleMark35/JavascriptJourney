const Subsb = document.getElementById("Subsb");
const Visa = document.getElementById("Visa");
const Master = document.getElementById("Master");
const Paid = document.getElementById("Paid");
const AreUSub = document.getElementById("AreUSub");
const Payment = document.getElementById("Payment");

Paid.addEventListener('click', () => {
  if(Subsb.checked){
    console.log("Subscribed")
    AreUSub.textContent = "Subscribed"
  }else{
     console.log("Not Subscribed")
    AreUSub.textContent = "Not Subscribed"
  }

  if(Visa.checked){
    Payment.textContent = "Visa"
  }else if(Master.checked){
    Payment.textContent = "Master"
  }else if(Palawan.checked){
    Payment.textContent = "Palawan"

  }

})
