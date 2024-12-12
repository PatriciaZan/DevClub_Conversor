const btn = document.querySelector(".btn");
const currencySelect1 = document.querySelector(".currency-select-1");

const currencyName1 = document.getElementById("currency-name-1")
const currencyImage1 = document.querySelector(".currency-image-1")

const currencySelect = document.querySelector('.currency-select')


const convertValues = async () => {
    //console.log('converte');
    const inputCurencyValue = document.querySelector(".input-currency").value;
    const valueToConvert = document.querySelector('.to-convert') // valor a ser convertido
    const finalValue = document.querySelector('.converted-value')// valor já convertido

    console.log(currencySelect.value);
    //const dolarToday   = 5.8;
    //const euroToday    = 6.1;
    //const realToday    = 0.17;
    //const libraToday   = 7.3;
    //const bitcoinToday = 566807.3;

    // FETCH
    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const bitcoinToday = data.BTCBRL.high;

    console.log(data);

    //let convertedValue = inputCurencyValue / dolarToday;

    // Formata da moeda que está sendo convertida
    if(currencySelect.value == "dolar"){
        finalValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue / dolarToday);
    }

    if(currencySelect.value == "euro"){
       finalValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
       }).format(inputCurencyValue / euroToday);
    }

    if(currencySelect.value == "libra"){
        finalValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue / libraToday);
    }

    if(currencySelect.value == "real"){
        finalValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputCurencyValue / realToday);
    }

    // NEED FIX
    if(currencySelect.value == "bitcoin"){
        finalValue.innerHTML = new Intl.NumberFormat("en-US", {
            //style: "currency",
            currency: "USD"
    }).format(inputCurencyValue / bitcoinToday);
}


    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency", 
         currency: "BRL"
     }).format(inputCurencyValue);
   

    //console.log(convertedValue);    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector('.currency-image');

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = './assets/dolar.png';
    }
    
    if(currencySelect.value  == 'euro'){
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png';    
    }

    if(currencySelect.value == 'real'){
        currencyName.innerHTML = "Real"
        currencyImage.src = './assets/real.png';    
    }

    if(currencySelect.value == 'libra'){
        currencyName.innerHTML = "Libra"
        currencyImage.src = './assets/libra.png';    
    }

    if(currencySelect.value == 'bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = './assets/bitcoin.png';    
    }

    convertValues();
}


currencySelect.addEventListener("change", changeCurrency)
btn.addEventListener("click", convertValues);


