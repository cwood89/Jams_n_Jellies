function Product(name, popularity, image, description) {
  this.id = name.replace(/\s/g, '');
  this.name = name;
  this.price = 7.99;
  this.popularity = popularity; // 1-10 scale
  this.image = image;
  this.description = description
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

  let row1 = $("#row-1")
  products.forEach(function (product, index) {
    let item = `<div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src="${product.image}"class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <div class="portfolio-links">
          <a href="#" title="Add to Cart"><i class="bx bx-plus"></i></a>
          <a  data-toggle="modal" data-target="#${product.id}"title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="${product.id}" tabindex="-1" role="dialog" aria-labelledby="${product.id}modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${product.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
       
        <!-- ======= Portfolio Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="row">
              <div class="col-lg-8">
                <img src="${product.image}"class="img-fluid" alt="">
              </div>
    
              <div class="col-lg-4 portfolio-info">
                <h3>Product Information</h3>
                <ul>
                  <li><strong>Category</strong>: Web design</li>
                  <li><strong>Client</strong>: ASU Company</li>
                  <li><strong>Project date</strong>: 01 March, 2020</li>
                  <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                </ul>
                </div>
                <div class="row">
                  <div class="container">
                    <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                    </div>
                </div>
    
            </div>
    
          </div>
        </section><!-- End Portfolio Details Section -->
        </div>
        <div class="modal-footer">
          <button type="button"  id="modal-button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `
  row1.append(item)
   
  })

  // <!-- Button trigger modal -->
  // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  //   Launch demo modal
  // </button>
  
  // <!-- Modal -->
  