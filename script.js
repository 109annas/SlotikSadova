let you = prompt("Введіть ваше ім’я:") || "Євгене Олександровичу";
document.getElementById("groshi").innerText = `Знову збираєтесь програти гроші, ${you}?`;
const fruits = [
    "./css/media/symbol/1.png",
    "./css/media/symbol/2.png",
    "./css/media/symbol/3.png",
    "./css/media/symbol/4.png",
    "./css/media/symbol/5.png",
    "./css/media/symbol/6.png",
    "./css/media/symbol/7.png"
];
const colomn1 = document.getElementById("colomn1").querySelector(".vseredyni");
const colomn2 = document.getElementById("colomn2").querySelector(".vseredyni");
const colomn3 = document.getElementById("colomn3").querySelector(".vseredyni");
const result = document.getElementById("result");
const obman = document.getElementById("gooo");
const znovyB = document.getElementById("znovy");
let first = 0;
const max = 3;
let neverwin = false;

function go(colomn) {
    colomn.innerHTML = "";
    for (let i = 0; i < 120; i++) {
        const img = document.createElement("img");
        const i = Math.floor(Math.random() * fruits.length);
        img.src = fruits[i];
        colomn.appendChild(img);
    }
}

function check(rows) {
    return rows.every((row, _, arr) => row === arr[0]);
}

function yourRes() {
    if (first >= max) {
        if (neverwin) {
            result.innerText = "Ви перемогли!!!";
        } else {
            result.innerText = "Ви програли:( Спроби закінчилися.";
        }
        obman.classList.add("znovyC");
        znovyB.classList.remove("znovyC");
    } else {
        result.innerText = `Спроб залишилось: ${max - first}`;
    }
}

obman.addEventListener("click", () => {
    first++;
    go(colomn1);
    go(colomn2);
    go(colomn3);
    colomn1.style.animation = "spin 4s ease-in-out";
    colomn2.style.animation = "spin 4s ease-in-out";
    colomn3.style.animation = "spin 4s ease-in-out";
    setTimeout(() => {
        colomn1.style.animation = "none";
    }, 500); 
    setTimeout(() => {
        colomn2.style.animation = "none";
    }, 850); 
    setTimeout(() => {
        colomn3.style.animation = "none";
    }, 1200); 
    yourRes();
    setTimeout(() => {
        const rows1 = Array.from(colomn1.children).map(img => img.src);
        const rows2 = Array.from(colomn2.children).map(img => img.src);
        const rows3 = Array.from(colomn3.children).map(img => img.src);
        if (check(rows1) || check(rows2) || check(rows3)) {
            neverwin = true;
        }
    }, 1200);
});
znovyB.addEventListener("click", () => {
    first = 0;
    neverwin = false;
    result.innerText = "";
    obman.classList.remove("znovyC");
    znovyB.classList.add("znovyC");
    obman.disabled = false;
    yourRes();
});
