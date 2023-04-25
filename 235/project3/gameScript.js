"use strict";
window.onload = init;

function init() {
    let contentSection = document.querySelector("#content").innerHTML

    for (let i = 0; i < 5; i++) {
        let newCard = BuildCard("asdf", "asfdadsfadsf", "alkdsfadslkjfsadfkl")
        cardList.push(newCard);
    }
    for (let i = 0; i < cardList.length; i++) {
        let bigLine = "";
        let imageLine = "adsf";
        let description = `SASDF ${i} </div>`;
        bigLine += imageLine;
        bigLine += description;
        cardList[i]+= bigLine;
    }

    class Card {
        constructor (image, name, info1)
        {
            this.image = image;
            this.name = name;
            this.info1 = info1;
        }
    
        static BuildCard(image, name, info1)
        {
            let bigLine = `<div class="card">`;
            let imageLine = image;
            let name1 = name;
            let description = info1;
            let endcap = `SASDF ${i} </div>`;
            bigLine += imageLine;
            bigLine += name1;
            bigLine += description;
            bigLine += endcap;
            return bigLine;
        }
    }
}

class Card {
    constructor (image, name, info1)
    {
        this.image = image;
        this.name = name;
        this.info1 = info1;
    }

    static BuildCard(image, name, info1)
    {
        let bigLine = `<div class="card">`;
        let imageLine = image;
        let name1 = name;
        let description = info1;
        let endcap = `SASDF ${i} </div>`;
        bigLine += imageLine;
        bigLine += name1;
        bigLine += description;
        bigLine += endcap;
        return bigLine;
    }
}

let cardNumber = 0;
let cardList = [];

function myFunction() {
    cardNumber += 1;
    //let infoCard = `<p>${cardNumber}</p>`;
    //document.querySelector("#content").innerHTML = infoCard;
    document.querySelector("#content").innerHTML = cardList[cardNumber];
    //console.log(infoCard);
}



// have a loop that iterates through the cards
// update the display when user clicks button