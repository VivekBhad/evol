//store the products array in localstorage as "data"
let form=document.querySelector("form");
let inputdata = [];
form.addEventListener("submit",addfun);

function addfun(){
    event.preventDefault();
    
    let brand = form.product_brand.value;
    let Name = form.product_name.value;
    let Price = form.product_price.value;
    let Image = form.product_image.value;

  let item = fun(brand,Name,Price,Image);
  inputdata.push(item);
  localStorage.setItem("product",JSON.stringify(inputdata));

}
function fun(name,Image,Price,brand){
    this.Name=name;
    this.brand=brand;
    this.Price=Price;
    this.Image=Image;
}