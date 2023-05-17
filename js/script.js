var allproduct = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var div_pri = document.querySelector("#Prices")
var totalprice = 0
var pic = document.querySelector("pic")

allproduct.forEach(function (item){
 item.onclick = function (){
    totalprice += +(item.getAttribute("price"))
    content.innerHTML += item.textContent + " , "
    
    if(content.innerHTML != ""){
        btn1.style.display = "block"
        content.style.color = "gray" 
    }
 }
})

btn1.onclick = function (){
    Prices.innerHTML = (totalprice +" " + "$")
}