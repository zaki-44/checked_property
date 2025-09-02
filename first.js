const subcheck=document.getElementById("subcheck");
const visabtn=document.getElementById("visabtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const paypalbtn=document.getElementById("paypalbtn");
const button=document.getElementById("button");
const subid=document.getElementById("subid");
const payid=document.getElementById("payid");


button.onclick=function(){
    if(subcheck.checked){
        subid.textContent=`u are subscribed u should choose a payment method`;
    }
    else{
        subid.textContent=`u are not subscribed for the moment `;
    }
    if(visabtn.checked){
        payid.textContent=`u will pay with visa`;
    }
    else if(mastercardbtn.checked){
        payid.textContent=`u will pay with mastercard`;


    }
    else if (paypalbtn.checked){
         payid.textContent=`u will pay with paypal`   
    }
}