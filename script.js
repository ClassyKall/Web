var cart = [];
function addToCart(name, count, price) {
    // ngebaca cart sudah ada atau belum
    var exsitingItem = cart.find(element => element.name === name);
    // memeriksa cart sudah ada atau belum
    if (!exsitingItem) {
        cart.push({name: name, count: count, price: price});
    } else {
        exsitingItem.count ++;
    }
    showCartList();
}
// update dalam cart
function showCartList() {
    $("#cartlist").empty();
    cart.forEach(
        function (item, index) {
            var quantity = item.price * item.count;
            $("#cartlist").append(`
            <div class="card-cart">
                <div class="card-cart-text">
                    <div class="card-cart-row">
                    <div class="left-text">`+item.name+`</div>
                    <div>Rp.`+quantity+`</div>    
                    </div>
                    <div class="card-cart-row">
                    <div class="left-text">Unit Price:</div>
                    <div>Rp.`+item.price+`</div>
                    <div>Quantity</div>
                    <div>`+item.count+`</div>
                    </div>
                </div>
                <div class="card-cart-icon" onclick="removeFromCart(`+index+`)">
                    <i class='bx bx-trash bx-lg'></i>
                </div>
            </div>`
            )
        }
    )
    // menghitung total harga
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].count * cart[i].price);
    }
    var tax = total * 0.1;
    var aftertax = total + tax;
    // mencetak total
    $("#tax-text").text("Tax : Rp."+tax);
    $("#total-text").text(" Total Amount : Rp."+aftertax);
    console.log(cart)
}

// fungsi menghapus
function removeFromCart(index) {
    cart.splice(index, 1);
    showCartList();
}
