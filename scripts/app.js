// Elements
const itemList = document.getElementById("item-list");
const cuponBtn = document.getElementById("cupon-btn");
const purchaseBtn = document.getElementById("purchase-btn");
const totalPriceEl = document.getElementById("totalPrice");
const cuponInput = document.getElementById("cupon-input");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const modalBtn = document.getElementById("modal-btn");

// Global Variables
let totalPrice = 0;

// Box Click
function handleClick(element) {
  const mainNode = element.childNodes;
  let productTitle = mainNode[3].childNodes[3].textContent;
  let productPrice = mainNode[3].childNodes[5].textContent.split(" ")[0];

  //   Get the list count
  const listIndex = itemList.childElementCount;

  //   Create html and add to html
  const ol = document.createElement("ol");
  const li = document.createElement("li");

  // Adding Tailwind CSS class for bold text
  li.classList.add("font-bold", "mb-2");

  //   adding to the html
  li.textContent = `${listIndex + 1}. ${productTitle}`;
  ol.appendChild(li);
  itemList.appendChild(ol);

  // work with price
  productPrice = parseFloat(productPrice);
  totalPrice += productPrice;
  let totalPriceElNum = parseFloat(totalPriceEl.textContent.split(" ")[3]);
  totalPriceElNum += totalPrice;

  totalPriceEl.textContent = totalPrice;

  //   Add grand total
  total.innerText = totalPrice;

  //   Disable buttons based on conditions
  if (totalPrice > 200) {
    cuponBtn.disabled = false;
  }

  if (totalPrice > 1) {
    purchaseBtn.disabled = false;
  }
}

// Cupon Section
cuponBtn.addEventListener("click", () => {
  let inputText = cuponInput.value.toLowerCase();
  if (inputText === "sell200") {
    // Calculate the discounted price
    let discountAmount = totalPrice * 0.2;
    totalPrice -= discountAmount;

    // Update the displayed discount amount
    discount.innerText = discountAmount.toFixed(2);

    // Update the total after applying the discount
    total.innerText = totalPrice.toFixed(2);

    // Clear the coupon input field
    cuponInput.value = "";
  }
});

// Clear side bar on clicking modal button

modalBtn.addEventListener("click", () => {
  totalPriceEl.textContent = "00";
  discount.textContent = "00";
  total.textContent = "00";
  itemList.textContent = "";
  purchaseBtn.disabled = true;
  cuponBtn.disabled = true;
});
