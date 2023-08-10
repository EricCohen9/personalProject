// localStorage.setItem('data',JSON.stringify(data));
let newData = JSON.parse(localStorage.getItem("data"));
let newId1 = JSON.parse(localStorage.getItem("data"));
let newid = JSON.parse(localStorage.getItem("id"));
console.log(newId1);
console.log(newid);
for (let i of newId1) {
  creatPage(i);
}
console.log(newId1);
function creatPage(obj) {
  if (newid === obj.id) {
    let obj1 = obj;
    // let localData=JSON.parse(localStorage.getItem("data"))
    let imgProuduct = document.createElement("div");
    let description = document.createElement("div");
    let prouductWindow = document.getElementById("prouductWindow");
    imgProuduct.id = "imgProuduct";
    description.id = "description";
    let titleP = document.createElement("h3");
    titleP.innerText = "title";
    description.appendChild(titleP);
    let titleDaynemic = document.createElement("p");
    titleDaynemic.innerText = obj1.title;
    description.appendChild(titleDaynemic);
    let secondDescripition = document.createElement("h3");
    secondDescripition.innerText = "description";
    let secondDescripitionDynemic = document.createElement("p");
    secondDescripitionDynemic.innerText = obj1.description;
    description.appendChild(secondDescripition);
    description.appendChild(secondDescripitionDynemic);
    let category = document.createElement("h3");
    category.innerText = "category";
    let categoryDaynemic = document.createElement("p");
    categoryDaynemic.innerText = obj1.category;
    description.appendChild(category);
    description.appendChild(categoryDaynemic);
    let price = document.createElement("h3");
    price.innerText = "price";
    description.appendChild(price);
    let priceDaynemic = document.createElement("P");
    priceDaynemic.innerText = obj1.price;
    description.appendChild(priceDaynemic);
    let quntitye = document.createElement("h3");
    quntitye.innerText = "quntity";
    let quntityeDaynemic = document.createElement("p");
    // quntityeDaynemic.innerText=obj1.
    description.appendChild(quntitye);
    let img = document.createElement("img");
    img.id = "img";
    img.src = obj1.image;
    imgProuduct.appendChild(img);

    prouductWindow.appendChild(imgProuduct);
    prouductWindow.appendChild(description);
  }
}
