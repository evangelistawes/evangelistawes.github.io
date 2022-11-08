// Wesley Evangelista
// 02/11/2022
//v.1.0.



const dol = document.getElementById("dolar");
const eur  = document.getElementById("euro");
const highusd = document.getElementById("highUSD");
const lowusd = document.getElementById("lowUSD");
const timeusd = document.getElementById("querytimeUSD");
const higheur = document.getElementById("highEURO");
const loweur = document.getElementById("lowEURO");
const timeeur = document.getElementById("querytimeEURO");


const dolsearch = async()=>{
    const dolar = 'USD';
    const url = `https://economia.awesomeapi.com.br/last/${dolar}`;
    const res = await fetch(url)
    const data = await res.json()

    highusd.innerHTML = `High do Dólar: ${data.USDBRL.high}`;
    lowusd.innerHTML = `Low do Dólar: ${data.USDBRL.low}`;
    timeusd.innerHTML = `Data da consulta no servidor: ${data.USDBRL.create_date}`;
}

const eurosearch = async()=>{
    const euro = 'EUR-BRL';
    const url = `https://economia.awesomeapi.com.br/last/${euro}`;
    const res = await fetch(url);
    const data = await res.json();
 
    higheur.innerHTML = `High do Euro: ${data.EURBRL.high}`;
    loweur.innerHTML = `Low do Euro: ${data.EURBRL.low}`;
    timeeur.innerHTML = `Data da consulta no servidor: ${data.EURBRL.create_date}`;
    
}

dol.addEventListener("click",dolsearch)

eur.addEventListener("click",eurosearch)











