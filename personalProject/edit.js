let mainWindow = document.getElementById("prouductWindow");
let title = document.createElement("h4");
let inputTitle = document.createElement("input");
inputTitle.className = "input";
inputTitle.id = "inputId";
let category = document.createElement("h4");
let categoryInput = document.createElement("input");
categoryInput.className = "input";
categoryInput.id = "categoryId";
let price = document.createElement("h4");
let priceInput = document.createElement("input");
priceInput.className = "input";
priceInput.id = "priceId";
let imgUrl = document.createElement("h4");
let imgInput = document.createElement("input");
imgInput.className = "input";
imgInput.id = "imgId";
let quntity = document.createElement("h4");
let quntityInput = document.createElement("input");
quntityInput.className = "input";
quntityInput.id = "quntityId";
let description = document.createElement("h4");
let descriptionInput = document.createElement("input");
let buttonEdit = document.createElement("button");
buttonEdit.innerText = "edit";
descriptionInput.id = "description";
title.innerText = "title";
mainWindow.appendChild(title);
mainWindow.appendChild(inputTitle);
category.innerText = "category";
mainWindow.appendChild(category);
mainWindow.appendChild(categoryInput);
price.innerText = "price";
mainWindow.appendChild(price);
mainWindow.appendChild(priceInput);
imgUrl.innerText = "img url";
mainWindow.appendChild(imgUrl);
mainWindow.appendChild(imgInput);
quntity.innerText = "quntity";
mainWindow.appendChild(quntity);
mainWindow.appendChild(quntityInput);
description.innerText = "description";
mainWindow.appendChild(description);
mainWindow.appendChild(descriptionInput);
mainWindow.appendChild(buttonEdit);
let obj = {
  title: " ",
  price: 0,
  category: " ",
  img: " ",
  quntity: " ",
  description: " ",
};
let newJson = JSON.parse(localStorage.getItem("data"));
buttonEdit.addEventListener("click", () => {
  let inputid = document.getElementById("inputId");
  obj.title = inputid.value;
  inputid.innerText = " ";
  console.log(obj.title);
  let categoryId = document.getElementById("categoryId");
  obj.category = categoryId.value;
  let priceId = document.getElementById("priceId");
  obj.price = priceId.value;
  let imgId = document.getElementById("imgId");
  obj.img = imgId.value;
  let quntityId = document.getElementById("quntityId");
  obj.quntity = quntityId.value;
  let description = document.getElementById("description");
  obj.description = description.value;
  // location.reload();
  newJson.push(obj);
  console.log(newJson);
  localStorage.setItem("data", JSON.stringify(newJson));
  // console.log(JSON.parse(localStorage.getItem("data")))
});

// let productName = '';
// const data = JSON.parse(localStorage.getItem('data'));
// const params = window.location.search; //?productId=12
// const searchParams = new URLSearchParams(params);
// const productId = Number(searchParams.get('productId'));// 12
// productName = data[productId-1].title;
// const input = document.getElementById('nameInput');
// input.value = productName;
