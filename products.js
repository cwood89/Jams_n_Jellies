function Product(name, popularity, image) {
  this.name = name;
  this.price = 7.99;
  this.popularity = popularity; // 1-10 scale
  this.image = image;
}
let products = [
  new Product("Super Berry", 6, "images/superberry.png"),
  new Product("Strawberry", 8, "images/Strawberry.png"),
  new Product("Raspberry", 5, "images/raspberry.png"),
  new Product("Mixedberry", 6, "images/mixberry.png"),
  new Product("Lemon", 4, "images/lemon.png"),
  new Product("Grape Jelly", 9, "images/grapejelly.png"),
  new Product("Ginger Cardamom Pear Butter", 3, "images/Ginger-Cardamom-Pear-Butter.png"),
  new Product("Cinnamon Blueberry", 4, "images/cinnamonblueberry.png"),
  new Product("Cinnamon Spiced Triple Berry Jam", 6, "images/Cinnamon-Spiced-Triple-Berry-Jam.png"),
  new Product("Blueberry", 7, "images/blueberry.png"),
  new Product("Blackberry", 7, "images/Blackberry.png"),
  new Product("Apple Butter", 10, "images/applebutter.png")
];

$( document ).ready(function() {
  let row1 = $("#row-1")
  let row2 = $("#row-2")
  let row3 = $("#row-3")
  products.forEach(function (product, index) {
    let item = `<div class="col-md-3 col-sm-6">
    <div class="product-grid6">
      <div class="product-image6">
        <a href="#">
          <img class="pic-1" src="${product.image}">
        </a>
      </div>
      <div class="product-content">
        <h3 class="title"><a href="#">${product.name}</a></h3>
        <div class="price">
        ${product.price}
        </div>
      </div>
      <ul class="social">
        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
      </ul>
    </div>
  </div>`
  
    if (index + 1 <= 4) {
      row1.append(item)
    } else if (index  + 1 > 4 && index + 1 <= 8) {
      row2.append(item)
    } else if (index + 1 > 8 ) {
      row3.append(item)
    }
  })
});
/*
<div class="col-md-3 col-sm-6">
        <div class="product-grid6">
          <div class="product-image6">
            <a href="#">
              <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-1.jpg">
            </a>
          </div>
          <div class="product-content">
            <h3 class="title"><a href="#">Men's Shirt</a></h3>
            <div class="price">$11.00
              <span>$14.00</span>
            </div>
          </div>
          <ul class="social">
            <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
            <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>
      </div>
*/