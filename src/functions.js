function addToCart(quantitys, productName="Ürün Adı Yaz") //Burada productName girilmezse default değer olarak "Ürün Adı Yaz" yaz demektir.
{                     //burda ki mantık değişkenleri önce yaz sonrasında default değer taşıyanları yazmaktır.
    console.log("Sepete Eklendi! : Ürün: " + productName + " Adet : " + quantitys) 
}
//addToCard() //Default değer olarak "Ürün Adı Yaz" yazar.
//addToCard("Ekmek")
addToCart (10)

let sayHello = ()=>
{
    console.log("Merhaba Yasin!")
}

sayHello()

let sayHello2 = function ()
{
    console.log("Hello Yasin Gul!")
}

sayHello2()
//iki fonksiyon arasında (9-16) bir fark yok.

let product1 = {productName: "Elma", quantity:10, unitPrice:5}

function addToCart2(product) 
{
    console.log("Ürün : " + product1.productName)
    console.log("Adet : " + product1.quantity)
    console.log("Fiyat : " + product1.unitPrice)
}

addToCart2(product1)

let product2 = {productName: "Armut", quantity:10, unitPrice:5}
let product3 = {productName: "Jülyen", quantity:1, unitPrice:4}
product2 = product3     //product2'nin referans numarasını product3'ün referans numarasına eşitleniyor.
product2.productName="Karpuz"       //product2'nin adı yerine product2'nin tuttuğu referans numarasının adı olarak okuruz.
console.log(product3.productName)

let sayi1=10
let sayi2=20
sayi1 = sayi2   //burada sayi1 in değerini 20 yapıp sayi2 ile arasında ki bağı keser. Bu yüzden cevap 20.
sayi2 = 100
console.log(sayi1)

//sayılar değer tiplidir hafızada stack kısmında tutulur, objeler ve arrayler referans tiplerdir hafızada HEAP kısmında tutulur.

function addToCart3(x) 
{
    console.log(x)
}

let products = 
[
    {productName: "Armut", quantity:10, unitPrice:5}, 
    {productName: "Karpuz", quantity:1, unitPrice:4},
    {productName: "Elma", quantity:10, unitPrice:5}
]

addToCart3(products)

function add(number1, number2){
    console.log(number1 + number2)
}

add(20, 30)
//rest, rest operatörüyle birlikte bir şey kullanacaksak rest'i en sona yaz.
function add2(...numbers){ 
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add2(50, 60, 70, 150)

let numbers = [30,40,15,2548,124,231,45648,1231]
console.log(Math.max(...numbers)) //Math.max verilen sayılardan en büyüğünü verir. "..." ayır anlamına gelir.

let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population:"20M"}, 
    {name: "Marmara", population:"30M"},
    {name:"Karadeniz", pupolation:"15M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Balıkesir"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(icAnadolu.population)
console.log(marmara.name)
console.log(icAnadoluSehirleri)
//let keyword'ünü kullanırken fonksiyon olarak algılayacağı için obje olarak algılaması için yazdığımız kodu () içine alırız. 
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = 
{productName:"Armut", unitPrice:5, quantity:10})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)