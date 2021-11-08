let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4500},
    {id:2, productName:"Bardak", quantity:2, unitPrice:5},
    {id:3, productName:"Kalem", quantity:1, unitPrice:45},
    {id:4, productName:"Şarj Aleti", quantity:2, unitPrice:50},
    {id:5, productName:"Kitap", quantity:3, unitPrice:35},
    {id:6, productName:"Pot", quantity:5, unitPrice:135},
]

//cart.map(product=>console.log(product.productName))  //elemanları tek tek dolaşır.
//Çoklu tanımlamalar için.
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"<li>")
})
console.log("<ul>")
//bunun sonucunda ürünleri listelememize yarar.
let total = cart.reduce((acc, product))
console.log(total)

//filtreleme
let quantityOver2 = cart.filter(product=>product.quantity>2) //sepette 2'den fazla bulunan ürünleri filtreler 

console.log(quantityOver2)


function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)