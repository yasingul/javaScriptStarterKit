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