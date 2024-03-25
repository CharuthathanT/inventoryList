let products = JSON.parse(localStorage.getItem("products")) || [];

let meg = document.getElementById("meg")
const addorremoveList = () => {
    
}

document.getElementById("btn").addEventListener("click", ()=>{
    let list = document.getElementById("list").value;
    if (list == "") {
        meg.innerHTML = "Enter add products"
        meg.style.color = "red"
    }
    else {
        let inpString = list.split(" ");
        let check = inpString[0].toLowerCase();
        if (check == 'add') {
            addItem(inpString[1]);
        } else if (check == 'remove') {
            removeItem(inpString[1]);
        } else if (check == 'getitems') {
            getItem();
        }
        document.getElementById("list").value = ""
    }
});

const addItem = (name) => {
    if (!products.includes(name)) {
        products.push(name);
        meg.innerHTML = "Product added successfully...."
        meg.style.color = "green"
    } else {
        alert('Product already exists');
    }
    localStorage.setItem("products", JSON.stringify(products));
}

const removeItem = (name) => {
    const index = products.indexOf(name);
    if (index !== -1) {
        products.splice(index, 1);
        meg.innerHTML = "Product removed successfully...."
        meg.style.color = "red"
    } else {
        alert("Product does not exist");
    }
    localStorage.setItem("products", JSON.stringify(products));
}

const getItem = () => {
    const ul = document.getElementById("listid");
    ul.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        ul.appendChild(li);
    });
}