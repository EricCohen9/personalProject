let newJson = JSON.parse(localStorage.getItem("data"));
let newid = JSON.parse(localStorage.getItem("id"));
for (let i of newJson) {
  creatPage(i);
}
function creatPage(obj) {
  let obj1 = obj;
  if (newid === obj1.id) {
    console.log("yyy");
    let mainWindow = document.getElementById("prouductWindow");
    let title = document.createElement("h4");
    let inputTitle = document.createElement("input");
    inputTitle.className = "input";
    inputTitle.value = obj1.title;
    inputTitle.id = "inputId";
    let category = document.createElement("h4");
    let categoryInput = document.createElement("input");
    categoryInput.className = "input";
    categoryInput.id = "categoryId";
    categoryInput.value = obj1.category;
    let price = document.createElement("h4");
    let priceInput = document.createElement("input");
    priceInput.className = "input";
    priceInput.id = "priceId";
    priceInput.value = obj1.price;
    let imgUrl = document.createElement("h4");
    let imgInput = document.createElement("input");
    imgInput.value = obj1.image;
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
    descriptionInput.value = obj1.description;
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
    buttonEdit.addEventListener("click", () => {
      let inputid = document.getElementById("inputId");
      obj1.title = inputid.value;
      inputid.innerText = " ";
      console.log(obj1.title);
      console.log("ll")
      let categoryId = document.getElementById("categoryId");
      obj1.category = categoryId.value;
      let priceId = document.getElementById("priceId");
      obj1.price = priceId.value;
      let imgId = document.getElementById("imgId");
      obj1.img = imgId.value;
      let quntityId = document.getElementById("quntityId");
      obj1.quntity = quntityId.value;
      let description = document.getElementById("description");
      obj1.description = description.value;
      localStorage.setItem("data", JSON.stringify(newJson));
      console.log(obj1)
      // console.log(JSON.parse(localStorage.getItem("data")))
    });
  }
}
