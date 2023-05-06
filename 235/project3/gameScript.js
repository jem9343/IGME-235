"use strict";
window.onload = init;
//https://codepen.io/andreeamaco/pen/qBbLdjY
//https://codepen.io/Coding_Journey/pen/LYPNmpe
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
            creatureImage = "/harvester.png";
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
    let warningCard = `<div class="wrapper"><div id="warning"><h2>Warning: Once you proceed in this section,<br> you cannot go back.</h2></div>`;
    bigLine += warningCard;
    cardList.push(bigLine);


    let matchingSection = `<div class="card">`;

    let crawl = new Card("images/thecrawl.png", "Crawl");
    matchingSection += crawl.BuildCard();

    let trimming = new Card("images/trimming.png", "Trimming");
    matchingSection += trimming.BuildCard();

    let dropplace = '<div id="dropZone"> <div id="dropBox1" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>"It swallowed me whole."</p> </div> <div id="dropBox2" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>Fish</p> </div> <div id="dropBox3" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>Fish</p> </div></div>';
    matchingSection += dropplace;
    cardList.push(matchingSection);
}

let cardNumber = -1;
let cardList = [];
let newButton = document.createAttribute("button");
// print(thisPage);
let userName = "You";

// JS
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let isCorrect = false;
    //event.target.appendChild(document.getElementById(data));
    if (id = data) {
        isCorrect = true;
    }

    if (isCorrect == true) {
        console.log("yes");
    }

}

class Card {
    constructor(image, name) {
        this.image = image;
        this.name = name;
    }

    BuildCard() {
        let imageLine = this.image;
        let name1 = this.name;
        let bigLine = `<img id=${name1} src=${imageLine} draggable="true" ondragstart="drag(event)" width="300">`;
        return bigLine;
    }
}

function myFunction() {

    cardNumber += 1;

    let x = document.getElementById("AdditionalButton");

    if (cardNumber == 1) {
        userName = document.querySelector("#name-box").value;
        console.log(userName);
    }
    if (cardNumber < 8 && cardNumber > 1) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (cardNumber == 9) {
        document.querySelector("#MainWindow").style.width = "fit-content"
        console.log(userName);
        if (userName.length == 0) {
            userName = "You";
        }
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let todayTime = new Date();
        let time = todayTime.getHours() + ":" + todayTime.getMinutes();
        //document.write(today);
        let finalPage = `<div id="certificate">
        <div id="innerCertificate">
            <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
            <br><br>
            <span style="font-size:25px"><i>This is to certify that</i></span>
            <br><br>
            <span style="font-size:30px"><b>${userName}</b></span><br /><br />
            <span style="font-size:25px"><i>has completed the course</i></span> <br /><br />
            <span style="font-size:30px"> Vita Carnis Interactive Certification</span> <br /><br />
            <span style="font-size:25px"><i>dated</i></span><br>
            <span style="font-size:30px">${today} ${time}</span>
        </div>
    </div>`
        let printButton = `<button onclick="window.print()" id="printButton">PRINT CERTIFICATE</button>`
        finalPage += printButton;
        cardList.push(finalPage);
     //   typeWriter(finalPage, document.querySelector("#content"));
    }
    //<span style="font-size:20px">with score of <b>$grade.getPoints()%</b></span> <br /><br /><br /><br />

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

function backFunction() {

    cardNumber -= 1;
    let x = document.getElementById("AdditionalButton");
    if (cardNumber < 8 && cardNumber > 1) {
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

function CheckAnswer() {
    console.log("Yippee");
}

//
//let i = 0;
//function typeWriter(txt, elementiD) {
//    if (i < txt.length) {
//        document.getElementById(elementiD).innerHTML += txt.charAt(i);
//        i++;
//        setTimeout(typeWriter, speed);
//    }
//}