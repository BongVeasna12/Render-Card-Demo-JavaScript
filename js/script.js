"use strict";

import { cardComponent } from "../components/cardcomponetn.js";

import { products } from "../Data/Products.js";

const renderArea = document.querySelector("#render-area");
products.slice(0, 20).map((product) => {
  renderArea.innerHTML += cardComponent(product);
});
