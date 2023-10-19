const numberKmElem = document.getElementById ("km");
console.log (numberKmElem);

const numberAgeElem = document.getElementById ("age");
console.log (numberAgeElem);

const sendBtn = document.getElementById ("send");

const resultSection = document.querySelector(".result-section");

sendBtn.addEventListener("click", function () {

    const userKm = numberKmElem.value;
    // const userKm = 300
    const userAge = numberAgeElem.value;
    console.log(userKm,userAge);

    let price = (userKm * 0.21).toFixed(2);
    console.log ("prezzo",price);

    let discount = 0;

    if (userAge < 18) {
        discount = (price * 0.20).toFixed(2);
        console.log ("under", discount);
    }
    else if (userAge > 65) {
        discount = (price * 0.40).toFixed(2);
        console.log ("over", discount);
    }
    price = (price - discount).toFixed(2);
    console.log ("prezzofinale", price);

    // messaggio 
    const userGreeting = `Ciao il tuo biglietto costa ${price}€`;
    console.log(userGreeting);

    // output 
    document.getElementById("greeting").innerHTML = userGreeting;
    resultSection.classList.remove("hidden");

})
document.getElementById("return").addEventListener("click", function (){
    numberAgeElem.value ="";
    numberKmElem.value ="";
    document.getElementById("greeting").innerHTML ="";
    resultSection.classList.add("hidden");
})



