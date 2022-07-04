
async function listdata(){
    try{
let url =`https://grocery-masai.herokuapp.com/items`;
let res = await fetch(url);
let data = await res.json();
console.log(data);

append(data.data)
 }
 catch(err){
    console.log(err)
 }
}
listdata();

let cuntainor= document.querySelector("#groceries");
function append(data){

    data.forEach(el => {
        let maindiv = document.createElement("div");

        let imgdiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        imgdiv.append((img))

        let name = document.createElement("p");
        name.innerText=el.name;

        let price = document.createElement("p");
        price.innerText=el.price;
        price.style.color="red";

       let cart = document.createElement("button");
    //    cart.innerText="add to cart";
       cart.setAttribute("class",add_to_cart);
       cart.addEventListener("click",function(){
        cartfunc()
       })
       maindiv.append(img,name,price,cart);
       cuntainor.append(maindiv);
    })
}
