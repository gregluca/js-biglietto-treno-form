const numberKmElem = document.getElementById ("km");
console.log (numberKmElem);

const numberAgeElem = document.getElementById ("age");
console.log (numberAgeElem);


const sendBtn = document.getElementById ("send");

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
    //const resultSection = (price - discount).toFixed(2);

    price = (price - discount).toFixed(2);
    console.log("prezzofinale", price);

    
})
