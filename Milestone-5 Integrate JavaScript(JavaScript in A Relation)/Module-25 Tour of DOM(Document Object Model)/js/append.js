const placesList = document.getElementById("places-list");
const li3 = document.createElement("li");
li3.innerText = "Liverpool";
placesList.appendChild(li3);
console.log(placesList);

// step-1 where to add
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

// step-2 what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul2 = document.createElement("ul");

const li4 = document.createElement("li");
li4.innerText = "Vegetable";
ul2.appendChild(li4);

const li5 = document.createElement("li");
li5.innerText = "Tomato";
ul2.appendChild(li5);

const li6 = document.createElement("li");
li6.innerText = "Potato";
ul2.appendChild(li6);

section.appendChild(ul2);

// step-3 parent append child
mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
    <h1>My Dress Section </h1>
    <ul>
        <li>T-shirt</li>
        <li>Shirt</li>
        <li>Pant</li>
        <li>Belt</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
