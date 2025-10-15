function addProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    price = parseFloat(price);

    if (name == "" || isNaN(price) || price < 0.01 || price > 10000) {
        alert("Incorrect inputs: " + name + ", " + price);
        return;
    }

    const li = document.createElement('li');
    li.innerText = name + ": " + price;
    document.getElementById('list').appendChild(li);

    total = document.getElementById('total');
    //alert(typeof price);
    total.textContent = parseInt(total.textContent) + price;
}