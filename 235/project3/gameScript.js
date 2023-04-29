"use strict";
window.onload = init;

function init() {
    let contentSection = document.querySelector("#content").innerHTML

    let creatureName = "";
    let creatureImage = "";
    let creatureDescription = "";
    let bigLine1 = `<div class="card"><div id="welcome1">
    <h2> Before we begin, please indicate how much you agree with the following statements.<br></h2><h3> (1 - Not at all like me, 5 - Definitely me)</h3><hr></div>
    </div><form id="form" method="GET">

<div class="form-control">
    <label class="question">
        "I can correctly identify members of Vita Carnis based on appearance."</label>
<div class="nums">
    <!-- Input Type Radio Button -->
    <label for="b1">
        <input type="radio"
            id="b1"
            name="recommed1">1 </input>
    </label>
    <label for="b2">
        <input type="radio"
            id="b2"
            name="recommed2">2  </input>
    </label>
    <label for="b3">
        <input type="radio"
            id="b3"
            name="recommed3">3  </input>
    </label>
    <label for="b4">
        <input type="radio"
            id="b4"
            name="recommed4">4  </input>
    </label>
    <label for="b5">
        <input type="radio"
            id="b5"
            name="recommed5">5  </input>
    </label>
</div>
</div>
<br>

<div class="form-control">
			<label class="question">
				"I can comfortably and safely interact with the various species of Vita Carnis."
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
</div>
	</div>
    <br>
<div class="form-control">
    <label class="question">
        "I can determine the best reaction when coming in close contact with a member of Vita Carnis."
    </label>
<div class="nums">
    <!-- Input Type Radio Button -->
    <label for="b1">
        <input type="radio"
            id="b1"
            name="recommed1">1</input>
    </label>
    <label for="b2">
        <input type="radio"
            id="b2"
            name="recommed2">2</input>
    </label>
    <label for="b3">
        <input type="radio"
            id="b3"
            name="recommed3">3</input>
    </label>
    <label for="b4">
        <input type="radio"
            id="b4"
            name="recommed4">4</input>
    </label>
    <label for="b5">
        <input type="radio"
            id="b5"
            name="recommed5">5</input>
    </label>
</div>
</div><br>

<div class="form-control">
    <label class="question">
        "I have an action plan if I encounter a dangerous member of Vita Carnis."
    </label>
<div class="nums">
    <!-- Input Type Radio Button -->
    <label for="b1">
        <input type="radio"
            id="b1"
            name="recommed1">1</input>
    </label>
    <label for="b2">
        <input type="radio"
            id="b2"
            name="recommed2">2</input>
    </label>
    <label for="b3">
        <input type="radio"
            id="b3"
            name="recommed3">3</input>
    </label>
    <label for="b4">
        <input type="radio"
            id="b4"
            name="recommed4">4</input>
    </label>
    <label for="b5">
        <input type="radio"
            id="b5"
            name="recommed5">5</input>
    </label>
</div>
</div>
<br>
<hr><br>
    <div class="form-control">
			<label for="name" id="label-name">
				Please Enter Your Name:
			</label>

			<!-- Input Type Text -->
			<input type="text"
				id="name-box"
				placeholder="Your Name Here" required/>
		</div>
    
        </form></div></div>`
        //<input type="submit" value="Submit Answer">
    cardList.push(bigLine1);

    for (let i = 0; i < 6; i++) {
        let newCard = `<div class="card">`
        cardList.push(newCard);
    }

    for (let i = 1; i < 7; i++) {

        if (i == 1) {
            var sound = new Howl({
                src: ["audio/ambience.mp3"]
            });
            creatureName = "The Crawl";
            creatureImage = "/thecrawl.png";
            creatureDescription = `<div class="appearance">
            <ul>
            <li>Characterized by deep, rootlike structures that spread like veins.</li><br>
            <li>Only member of Vita Carnis that seems to be a form of vegetation.</li>
            </ul> 
            </div><br>Exists globally, and is being currently cultivated by companies for food and fertilizer alike. Non-toxic, and`
            sound.play();
        }
        else if (i == 2) {
            creatureName = "The Trimming";
            creatureImage = "/trimming.png";
            creatureDescription = "asdfasdf";
        }
        else if (i == 3) {
            creatureName = "The Meat Snake";
            creatureImage = "/meatsnake.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        else if (i == 4) {
            creatureName = "The Mimic";
            creatureImage = "/mimic.png";
            creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
        }
        else if (i == 5) {
            creatureName = "The Harvester";
            creatureImage = "/thecrawl.png";
            //creatureDescription = "jlkakjladlk asdfasdf asdfadsf adsf asdfasdfafds";
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
        // cardList[i].push(BuildCard(creatureName))
    }

    let bigLine = "";
    let warningCard = `<div class="wrapper"><div id="warning"><h2>Warning: Once you proceed in this section, you cannot go back.</h2></div>`;
    bigLine += warningCard;
    cardList.push(bigLine);
}

let cardNumber = -1;
let cardList = [];
let newButton = document.createAttribute("button");

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

    let x = document.getElementById("AdditionalButton");
    if (cardNumber == 2 || cardNumber == 3 || cardNumber == 4 || cardNumber == 5 || cardNumber == 6 || cardNumber == 7) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // if (document.querySelector("#content").innerHTML == cardList[7].innerHTML);
    // {
    //document.querySelector("#content").innerHTML = document.getElementById('name-box').value;
    //console.log("run");
    // }
    //let infoCard = `<p>${cardNumber}</p>`;
    //document.querySelector("#content").innerHTML = infoCard;
    document.querySelector("#content").innerHTML = cardList[cardNumber];

    // if (cardNumber == 1 || cardNumber == 2) {
    // let newButton = document.createElement("button");
    // let buttonPosition = document.getElementById("AdditionalButton");
    // buttonPosition.appendChild(newButton);
    // }

    //console.log(infoCard);
}

function backFunction()
{
    cardNumber -= 1;

    let x = document.getElementById("AdditionalButton");
    if (cardNumber == 2 || cardNumber == 3) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // if (document.querySelector("#content").innerHTML == cardList[7].innerHTML);
    // {
    //document.querySelector("#content").innerHTML = document.getElementById('name-box').value;
    //console.log("run");
    // }
    //let infoCard = `<p>${cardNumber}</p>`;
    //document.querySelector("#content").innerHTML = infoCard;
    document.querySelector("#content").innerHTML = cardList[cardNumber];

}


// have a loop that iterates through the cards
// update the display when user clicks button

//function CheckAnswer()
//{
 //   let d = document.forms["Form"]["label-name"].value;
  //  if (d == null || d == "") {
 //     alert("Please Fill In All Required Fields");
 //     return false;
 //   }
 //   else
 //   {
 //       return true;
 //   }
//}

function CheckAnswer()
{
    console.log("Yippee");
}