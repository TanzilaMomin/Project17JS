const mainDiv = document.getElementById("main");
const navDiv = document.getElementById("nav");
const subDiv = document.getElementById("sub");
const arrNav = ["Fashion", "Jwellery", "Electronics", "Mens", "Womens"]

const generateComponent = (title, liltems, type) => {
     subDiv.innerText = '';
     const h1 = document.createElement("h1");
     h1.innerText = title;

     const ol = document.createElement("ol");
     ol.setAttribute("type", type);
     liltems.forEach((item) => {
          const li = document.createElement("li");
          li.innerText = item;
          ol.appendChild(li);
     })
     subDiv.appendChild(ol);
}
const handleClick = (curr) => {
     const Fashion = ["western", "Eastern", "Sourth Indian", "North Indian"];
     const Jwellery = ["Ring", "Necklace", "Coin", "Dimond Ring"];
     const Electronics = ["TV", "Washing machine", "Laptop", "Monitor", "Refrigator", "Mixer"];
     const Mens = ["T-Shirt", "Shirt", "Jeans", "Formal", "Trowser"];
     const Womens = ["Punjabi", "Sarees", "Western", "Jacket"];

     if (curr == "Fashion") {
          generateComponent(curr, Fashion, "1");
     } else if (curr == "Jwellary") {
          generateComponent(curr, Jwellery, "a");
     } else if (curr == "Electronics") {
          generateComponent(curr, Electronics, "i");
     } else if (curr == "Mens") {
          generateComponent(curr, Mens, "I");
     } else {
          generateComponent(curr, Womens, "1");
     }
}
const generateNav = (arrNav) => {

     arrNav.forEach((item) => {
          const btn = document.createElement("button");
          btn.innerText = item;
          const func = `handleClick('${item}')`;
          btn.setAttribute("onclick", func);
          navDiv.appendChild(btn);
     })
}
generateNav(arrNav);
