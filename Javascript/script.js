const body = document.querySelector("main");
const arrow = document.querySelector(".fa-arrow-down");
const legend = document.querySelector(".legend");
const container = document.getElementsByClassName("question-answer__container");
const egzempleTermo = document.querySelector("#Egzemple-termo").children;
const infoButton = document.querySelector(".info-button");
const infoText = document.querySelector(".info-text");
const eventButtons = document.querySelectorAll(".event-button");
const zacuscaBtn = document.querySelector(".zacusca");
const lastUpgradeBtn = document.querySelector(".last-upgrade");
const buniciBtn = document.querySelector(".bunici");
const upgradeBtn = document.querySelector(".upgrade");
const resetBtn = document.querySelector(".reset-button");
const continueBtn = document.querySelector(".continue-button");
const finishCard = document.querySelector(".finish-card");

let currency = document.querySelector(".currency-number");
let lastCurrency = document.querySelector(".pret-last");
let buniciCurrency = document.querySelector(".pret-bunica");
let upgradeCurrency = document.querySelector(".pret-upgrade");
let zacPC = document.querySelector(".zacPC");

let buniciCounter = document.querySelector(".bunici-counter");
let upgradeCounter = document.querySelector(".upgrade-counter");

let currencyN = 0;
let buniciCurrencyN = 20;
let upgradeCurrencyN = 10;

let buniciCounterN = 0;
let upgradeCounterN = 0;

let isActive = false;
let multiplier = 1;

currency.textContent = currencyN;
buniciCurrency.textContent = buniciCurrencyN;
buniciCounter.textContent = buniciCounterN;
upgradeCurrency.textContent = upgradeCurrencyN;
upgradeCounter.textContent = upgradeCounterN;
zacPC.textContent = multiplier;


function randomNumber () {
    const rn1 = Math.floor(Math.random()*359);
    const rn2 = Math.floor(Math.random()*100) + 20;
    const rn3 = Math.floor(Math.random()*10) + 25;
    return `${rn1},${rn2}%,${rn3}%`
}

function toggleEverything () {
    arrow.classList.toggle("rotate");
    legend.classList.toggle("right");
}

function removeIfActive () {
    if (isActive) {
        toggleEverything();
        isActive = false;
    } else {
    }
}

arrow.addEventListener('click', () => {
    toggleEverything();
    if(legend.classList.contains("right")) {
        isActive = true;
    } else {
        isActive = false;
    }
});

body.addEventListener('click', () => {
    removeIfActive();
});

legend.addEventListener('click', () => {
    removeIfActive();
});



for(const element of container) {
    element.addEventListener('click', () => {
        element.lastElementChild.classList.toggle("active");
    });
}

for(const egzemple of egzempleTermo) {
    egzemple.style.color = `hsl(${randomNumber()})`;
}

infoButton.addEventListener("click", () => {
    infoText.classList.toggle("display-block");
});

infoText.addEventListener("click", () => {
    infoText.classList.toggle("display-block");
});

for (const btn of eventButtons) {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(.95)"
    })
    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)"
    })
}


zacuscaBtn.addEventListener("click", () => {
    currencyN = currencyN + 1 * multiplier;
    currency.textContent = Math.trunc(currencyN);
    // console.log(`Ai facut ${multiplier} zacuste per click`)
})

upgradeBtn.addEventListener("click", () => {
    if(currencyN >= upgradeCurrencyN) {
        currencyN = currencyN - upgradeCurrencyN;
        currency.textContent = Math.trunc(currencyN);
        upgradeCurrencyN = Math.trunc(upgradeCurrencyN * 1.1);
        upgradeCurrency.textContent = upgradeCurrencyN;
        multiplier = multiplier * 1.1;
        upgradeCounterN++;
        upgradeCounter.textContent = upgradeCounterN;
        zacPC.textContent = Math.trunc(multiplier);
    }
});

buniciBtn.addEventListener("click", () => {
    if(currencyN >= buniciCurrencyN) {
        currencyN = currencyN - buniciCurrencyN;
        currency.textContent = Math.trunc(currencyN);
        buniciCurrencyN = Math.trunc(buniciCurrencyN * 1.15);
        buniciCurrency.textContent = buniciCurrencyN;
        buniciCounterN++;
        buniciCounter.textContent = buniciCounterN;
    }
})

setInterval(() => {
    currencyN = currencyN + 25 * buniciCounterN;
    currency.textContent = Math.trunc(currencyN);
}, 1000);

lastUpgradeBtn.addEventListener("click", () => {
    if(buniciCounterN >= 100) {
        finishCard.classList.add("display-grid")
    }
});

resetBtn.addEventListener("click", () => {
    currencyN = 0;
    currency.textContent = Math.trunc(currencyN);
    upgradeCurrencyN = 10;
    upgradeCurrency.textContent = upgradeCurrencyN;
    upgradeCounterN = 0;
    upgradeCounter.textContent = upgradeCounterN;
    buniciCurrencyN = 20;
    buniciCurrency.textContent = buniciCurrencyN;
    buniciCounterN = 0;
    buniciCounter.textContent = buniciCounterN;
    multiplier = 1;
    zacPC.textContent = Math.trunc(multiplier);
    finishCard.classList.remove("display-grid")
});

continueBtn.addEventListener("click", () => {
    finishCard.classList.remove("display-grid")
});
