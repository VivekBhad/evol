
let getdata = JSON.parse(localStorage.getItem("product"));
displaydata(getdata);
function displaydata(getdata){
getdata.forEach(function(elem,index){

    let brands = document.createElement('div');

    let namels= document.createElement('h2');
    namels.innerText=elem.name;
    let brandls=document.createElement('h2');
    brandls.innerText=elem.brand;
    let img=document.createElement('img');
    img.src=elem.Image;
    let price = document.createElement('p');
    price.innerText=elem.price;
    
    let remove = document.createElement("button")
    remove.innerText="Remove Product";
    remove.addEventListener("click",removefun(){
        removefun(elem,index);
    })
    brands.append(namels,brandls,img,price);
    document.querySelector("#products_data").append(brands);
});
}
