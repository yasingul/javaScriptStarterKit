// terminale "npm run dev" yazıp ekranı açarız.
console.log("Merhaba Kodlama.io")

//JS TypeSafe bir yazılım dili değildir.
let dolarDun = 9.20
let dolarBugun = 9.25
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 const veri tipini yazdıktan sonra böyle bir kod yazamayız. 

console.log(euroDun)
//const ile yazdığımız değer sabitlediğimiz için sonrasında yeni bir değer atarsak hata alırız.
//Değişken isimlendirme yapılırken "camelCasing" ile kullanırız.
//PascalCasing ise ilk harfi büyük kullanmadır.
//Dizileri [] ile kullanırız.
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredileri"]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li")
    
}
console.log("</ul>")
{/* <ul>
    <li>Konut Kredileri</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
    </ul> */
}