/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

function showProducts() {
  document.getElementById("container").innerHTML = "";
  fetch("https://fakestoreapi.com/products")
    .then((api_data) => {
      return api_data.json();
    })
    .then((json_data) => {
    //   console.log(json_data[0]);
      for (let i = 0; i < json_data.length; i++) {
        add_item(json_data[i]);
      }
    });
}

function showElectronics() {
  document.getElementById("container").innerHTML = "";
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((api_data) => {
      return api_data.json();
    })
    .then((json_data) => {
      console.log(json_data[0]);
      for (let i = 0; i < json_data.length; i++) {
        add_item(json_data[i]);
      }
    });
}

function showJewelery() {
  document.getElementById("container").innerHTML = "";
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((api_data) => {
      return api_data.json();
    })
    .then((json_data) => {
      console.log(json_data[0]);
      for (let i = 0; i < json_data.length; i++) {
        add_item(json_data[i]);
      }
    });
}

function showMen() {
  document.getElementById("container").innerHTML = "";
  fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((api_data) => {
      return api_data.json();
    })
    .then((json_data) => {
      console.log(json_data[0]);
      for (let i = 0; i < json_data.length; i++) {
        add_item(json_data[i]);
      }
    });
}

function showWomen() {
  document.getElementById("container").innerHTML = "";
  fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((api_data) => {
      return api_data.json();
    })
    .then((json_data) => {
      console.log(json_data[0]);
      for (let i = 0; i < json_data.length; i++) {
        add_item(json_data[i]);
      }
    });
}

let card_count = 0;
function updateCard() {
  card_count++;
  document.getElementById("cart_count").innerHTML = card_count;
}

function add_item(item) {
  const container = document.getElementById("container");
  container.innerHTML += card(
    item.title,
    item.price,
    item.description,
    item.image,
    item.rating.rate
  );
}

const card = (title, price, desc, image, stars) => {
  desc = desc.slice(0, 150) + '...';
  return `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top border" src=${image} alt=${title}/>
        <div class="card-body p-4">
            <div class="text-center">
                <h6 class="fw-bolder">${title}</h5>
                <div class="d-flex justify-content-center small text-warning mb-2">
                    ${get_stars(stars)}
                </div>
                <h6 class="fw-bolder">$${Number.parseFloat(price).toFixed(2)}</h6>
                ${desc}
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark" onclick="updateCard()">Add to cart</a>
            </div>
        </div>
    </div>
</div>`;
};

const get_stars = (num) => {
  let snippet = "";
  for (let i = 0; i < num; i++) {
    snippet += '<div class="bi-star-fill"></div>';
  }
  return snippet;
};

window.onload = (event) => {
    showProducts();
  };


/* <div class="col mb-5">
<div class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale
    </div>
    <!-- Product image-->
    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">Special Item</h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            <!-- Product price-->
            <span class="text-muted text-decoration-line-through">$20.00</span>
            $18.00
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
        </div>
    </div>
</div>
</div> */
