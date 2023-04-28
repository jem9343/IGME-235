"use strict";
window.onload = init;

function init() {
    let contentSection = document.querySelector("#content").innerHTML

    let creatureName = "";
    let creatureImage = "";
    let creatureDescription = "";
    let bigLine1 = `<div class="card">
    <h2>Welcome!</h2><br><form id="form">
		<div class="form-control">
			<label for="name" id="label-name">
				Name
			</label>

			<!-- Input Type Text -->
			<input type="text"
				id="name"
				placeholder="Enter your name" />
		</div>

		<div class="form-control">
			<label class="question">
				Rate your level of comfort of safely interacting with the various species of Vita Carnis.<br>(1 - Not at all comfortable, 5 - Completely Comfortable)<br>
			</label>
<div class="nums">
			<!-- Input Type Radio Button -->
			<label for="recommed-1">
				<input type="radio"
					id="recommed-1"
					name="recommed">1</input>
			</label>
			<label for="recommed-2">
				<input type="radio"
					id="recommed-2"
					name="recommed">2</input>
			</label>
			<label for="recommed-3">
				<input type="radio"
					id="recommed-3"
					name="recommed">3</input>
			</label>
            <label for="recommed-4">
				<input type="radio"
					id="recommed-3"
					name="recommed">4</input>
			</label>
            <label for="recommed-5">
				<input type="radio"
					id="recommed-3"
					name="recommed">5</input>
			</label>
	</form></div></div>`
    cardList.push(bigLine1);

    for (let i = 0; i < 8; i++) {
        let newCard = `<div class="card">`
        cardList.push(newCard);
    }

    for (let i = 1; i < 7; i++) {

        if (i == 1) {
            creatureName = "The Crawl";
            creatureImage = "/thecrawl.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds"
        }
        else if (i == 2) {
            creatureName = "The Trimming";
            creatureImage = "/trimming.png";
            creatureDescription = "asdfasdf";
        }
        else if (i == 3) {
            creatureName = "The Meat Snake";
            creatureImage = "/thecrawl.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        else if (i == 4) {
            creatureName = "The Mimic";
            creatureImage = "/thecrawl.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        else if (i == 5) {
            creatureName = "The Harvester";
            creatureImage = "/thecrawl.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        else if (i == 6) {
            creatureName = "The Host of Influence";
            creatureImage = "/thecrawl.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        let bigLine = "<div class=wrapper>";
        let titleLine = `<div class="title"><h2>${creatureName}</h2></div>`;
        let description = `<div class="description"> ${creatureDescription}</div>`;
        let imageLine = `<img class="imageOfCreature" src="images${creatureImage}"/>`;
        bigLine += titleLine;
        bigLine += imageLine;
        bigLine += description;
        cardList[i] += bigLine;
    }

    let bigLine = "";
    let warningCard = `<div class="wrapper"><div id="warning"><h2>Warning: Once you proceed in this section, you cannot go back.</h2></div>`;
    bigLine += warningCard;
    cardList.push(bigLine);
}

let cardNumber = -1;
let cardList = [];

class Card {
    constructor(image, name, info1) {
        this.image = image;
        this.name = name;
        this.info1 = info1;
    }

    static BuildCard(image, name, info1) {
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



function myFunction() {
    cardNumber += 1;
    //let infoCard = `<p>${cardNumber}</p>`;
    //document.querySelector("#content").innerHTML = infoCard;
    document.querySelector("#content").innerHTML = cardList[cardNumber];
    //console.log(infoCard);
}



// have a loop that iterates through the cards
// update the display when user clicks button