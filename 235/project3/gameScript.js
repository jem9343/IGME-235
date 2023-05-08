"use strict";
window.onload = init;
//https://codepen.io/andreeamaco/pen/qBbLdjY
//https://codepen.io/Coding_Journey/pen/LYPNmpe

// This function sets up the main list of cards that are used throughout the experience.
// The cards are stored as items in an array called cardList[] (declared below)
function init() {

    // Starting with empty string variables to represent each creature's name, image, and description.
    let creatureName = "";
    let creatureImage = "";
    let creatureDescription = "";

    // This huge line creates the "survey" portion of the experience.
    let bigLine1 = `<div class="card"><div id="welcome1">
    <h2> Before we begin, please indicate how much you agree with the following statements.<br></h2><h3> (1 - Not at all like me, 5 - Definitely me)</h3><hr></div>
    </div>
    <form id="form" method="GET">
    <div class="form-control">
    <label class="question"> "I can correctly identify members of Vita Carnis based on appearance."</label>
    <div class="nums">
    <label for="b1"> <input type="radio" id="b1" name="recommend1">1  </input></label>
    <label for="b2"><input type="radio" id="b2" name="recommend2">2  </input></label>
    <label for="b3"><input type="radio" id="b3" name="recommend3">3  </input></label>
    <label for="b4"><input type="radio" id="b4" name="recommend4">4  </input></label>
    <label for="b5"><input type="radio" id="b5" name="recommend5">5  </input></label>
    </div>
    </div>
    <br>

    <div class="form-control">
	<label class="question"> "I can comfortably and safely interact with the various species of Vita Carnis."</label>
    <div class="nums">
    <label for="r21"><input type="radio" id="r21" name="r21">1  </input></label>
    <label for="r22"><input type="radio" id="r22" name="r22">2  </input></label>
    <label for="r23"><input type="radio" id="r23" name="r23">3  </input></label>
    <label for="r24"><input type="radio" id="r24" name="r24">4  </input></label>
    <label for="r25"><input type="radio" id="r25" name="r25">5  </input></label>
    </div>
	</div>
    <br>

    <div class="form-control">
    <label class="question">"I can determine the best reaction when coming in close contact with a member of Vita Carnis."</label>
    <div class="nums">
    <label for="r31"><input type="radio" id="r31" name="r31">1  </input></label>
    <label for="r32"><input type="radio" id="r32" name="r32">2  </input></label>
    <label for="r33"><input type="radio" id="r33" name="r33">3  </input></label>
    <label for="r34"><input type="radio" id="r34" name="r34">4  </input></label>
    <label for="r35"><input type="radio" id="r35" name="r35">5  </input></label>
    </div>
	</div>
    <br>

    <div class="form-control">
    <label class="question">"I have an action plan if I encounter a dangerous member of Vita Carnis."</label>
    <div class="nums">
    <label for="r41"><input type="radio" id="r41" name="r41">1  </input></label>
    <label for="r42"><input type="radio" id="r42" name="r42">2  </input></label>
    <label for="r43"><input type="radio" id="r43" name="r43">3  </input></label>
    <label for="r44"><input type="radio" id="r44" name="r44">4  </input></label>
    <label for="r45"><input type="radio" id="r45" name="r45">5  </input></label>
    </div>
	</div>
    <br>
    <hr><br>

    <div class="form-control">
	<label for="name" id="label-name">Please Enter Your Name:</label>
    <input type="text" id="name-box" placeholder="Your Name Here" required/></div></form></div></div>`

    //<input type="submit" value="Submit Answer">

    // Add this first card to the array of cards to iterate through.
    cardList.push(bigLine1);

    // The start of each card for the creature section must start 
    // with the css class declaration.
    for (let i = 0; i < 5; i++) {
        let newCard = `<div class="card">`
        // Append to the array
        cardList.push(newCard);
    }

    // For the number of cards that follow this pattern in the array
    for (let i = 1; i < 6; i++) {

        // Each card follows the same format: 
        // setting the name, image, and description values to the value for each creature.

        // FIRST CARD
        if (i == 1) {
            // Set up ambience
            let sound = new Howl({
                src: ["audio/ambience.mp3"]
            });
            creatureName = "The Crawl";
            creatureImage = "/thecrawl.png";
            creatureDescription = `<div class="appearance">Scandere Carnis (Climb the Meat)<ul>
            <li>Characterized by deep, rootlike structures that spread like veins.</li>
            <li>Most widespread form of Vita Carnis that seems to be a form of vegetation.</li>
            </ul> </div>
            <br>Exists globally, and is being currently cultivated by companies for food and fertilizer alike. Non-toxic and enjoyed by animals and humans alike, the Crawl has been welcomed into our society.`
            // Have the ambience start playing.
            sound.play();
        }
        // SECOND CARD
        else if (i == 2) {
            creatureName = "The Trimming";
            creatureImage = "/trimming.png";
            creatureDescription = `<div class="appearance"> Ignavus Carnis (Cowardly Meat)<ul>
            <li>Characterized by a plump appearance with a shell-like back, shy nature, and unique cry.</li>
            <li>DID YOU KNOW: The size of a full-grown Trimming can reach a size of a basketball! (~20cm)</li>
            </ul> </div>
            <br>Trimmings are abundant wherever Crawl is found, 
            since they are created as a small node of meat that grows on The Crawl until reaching a large enough size to fall off.`;
        }
        // THIRD CARD
        else if (i == 3) {
            creatureName = "The Meat Snake";
            creatureImage = "/meatsnake.png";
            creatureDescription = `<div class="appearance"> Mutuari Carnis (To Borrow Meat)<ul>
            <li>Up to 5 meters in length, this snake-like organism's head shape changes because it borrows the skull of it's last meal.</li>
            <li>Meat Snakes only eat dead and decomposing flesh.</li>
            </ul> </div>
            <br>Meat Snake populations rise during times of war, natural disasters, and plague. It is sometimes kept as a disposal at butcher shops or a disposal for roadkill.`;
        }
        // FOURTH CARD
        else if (i == 4) {
            creatureName = "The Mimic";
            creatureImage = "/mimic.png";
            creatureDescription = `<div class="appearance"> Trucidatum Carnis (Butchered Meat)<ul>
            <li>Found in heavily-populated areas, this bipedal organism features exaggerated human anatomy, like longer limbs and a wide smile with too many teeth.</li>
            <li>This smile does not mean they are happy, this is simply how their face is shaped.</li>
            </ul> </div>
            <br>Mimics are highly efficent hunters, finding a time to attack when the human is most vulnerable. <b>Always</b> check for mimic sightings in the area before you go out alone.`;
        }
        // FIFTH CARD
        else if (i == 5) {
            creatureName = "The Harvester";
            creatureImage = "/harvester.png";
            creatureDescription = `<div class="appearance"> Congregentur Carnis (Gather the Meat)<ul>
            <li>This organism consists of a plant-like bulb and shallow roots with two types of venom- a neurotoxin causing sudden paralysis and an anti-coagulant that prevents blood from clotting.</li>
            </ul> </div>
            <br>After immobilizing the prey, he roots slowly move the organism down into the ground to be digested. Typically, the Harvester only traps larger and heavier prey.`;
        }
        // SIXTH CARD

        // Create the line that contains the information in a wrapper
        let bigLine = "<div class=wrapper>";
        // Set up display of creature name
        let titleLine = `<div class="title"><h2>${creatureName}</h2></div>`;
        // Set up display of creature description
        let description = `<div class="description"> ${creatureDescription}</div>`;
        // Set up display of creature image
        let imageLine = `<img class="imageOfCreature" src="images${creatureImage}"/>`;

        // Add these lines in order to the wrapper line
        bigLine += titleLine;
        bigLine += imageLine;
        bigLine += description;

        // Add the wrapper line to the card list at position "i"
        cardList[i] += bigLine;
    }

    // Once we reach the warning card, 
    // Set up the warning text and append it to the card list
    let warningCard = `<div class="card"><div class="wrapper"><div id="warning"><h2>Warning: Once you proceed in this section,<br> you CANNOT go back.</h2><img id="alert" src="images/alert.gif"><h3>Click "NEXT" once you are ready to move on.</h3></div></div>`;
    cardList.push(warningCard);


    // Create the matching section instructions
    let matchingSection = `<div class="card">`;
    let instructions = `<div id="instructions">Drag the creature that best fits each description into each box below.<br></div>`;
    matchingSection += instructions;

    // Create new ES6 Card iterations
    let crawl = new Card("images/thecrawl.png", "Crawl", 0);
    // Creates the line of text for html
    let crawlCard = crawl.BuildCard();
    matchingSection += crawlCard;
    //matchingList.push(crawlCard);

    let trimming = new Card("images/trimming.png", "Trimming", 1);
    let trimmingCard = trimming.BuildCard();
    matchingSection += trimmingCard;
    // matchingList.push(trimmingCard);

    let meatSnake = new Card("images/meatsnake.png", "MeatSnake", 2);
    let meatSnakeCard = meatSnake.BuildCard();
    matchingSection += meatSnakeCard;

    let Harvester = new Card("images/harvester.png", "Harvester", 2);
    let HarvesterCard = Harvester.BuildCard();
    matchingSection += HarvesterCard;

    // Create the "drop zone" area for the text 

    let dropplace = `<div id="dropZone">
    <div class="dropBox" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>"It swallowed my body whole."</p> </div> 
    <div class="dropBox" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>"I found a dead deer strangled within it."</p> </div>
    <div class="dropBox" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>"It shrieked uncontrollably throughout the night."</p> </div>
    <div class="dropBox" ondrop="drop(event)" ondragover="allowDrop(event)"> <p>"It invited more predators to my home."</p> </div>
    </div>`;
    matchingSection += dropplace;
    cardList.push(matchingSection);
}

// Setting up script-scope variables
// Current Card number
let cardNumber = -1;
// Array of cards
let cardList = [];

// Default name if the user doesn't input their name on the question section
let userName = "You";

// Functions that handle the moving of the cards
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    // Get the text data from the id of the target
    let data = event.dataTransfer.getData("text");
    // "Move" the element into the box
    event.target.appendChild(document.getElementById(data));
    //event.target.appendChild(document.getElementById(data));

    // Attempts at having it check for it being correct
    //if (data == matchingList[currentMatchingNum].id + currentMatchingNum) {
    //    isCorrect = true;
    //    console.log("yes");
    //    currentMatchingNum++;
    //}

}

// ES6 Class "Card" used for the matching section
class Card {
    constructor(image, name, numCorrect) {
        this.image = image;
        this.name = name;
        this.numCorrect = numCorrect;
    }

    // Creates line of html for each image card
    BuildCard() {
        let imageLine = this.image;
        let name1 = this.name;
        let bigLine = `<img id=${name1 + this.numCorrect} src=${imageLine} class="dragCard" draggable="true" ondragstart="drag(event)">`;
        return bigLine;
    }
}


// This function runs when the "next" button is clicked
function nextFunction() {

    // Update the current card number
    cardNumber += 1;

    // Access both the buttons
    let backButton = document.getElementById("backButton");
    let next = document.getElementById("nextButton");

    // If the card is for the survey, get the username from the name box
    if (cardNumber == 1) {
        userName = document.querySelector("#name-box").value;
        //    console.log(userName);
    }

    // If the cards are the cards of the creatures,
    // Allow a back button
    if (cardNumber < 7 && cardNumber > 1) {
        backButton.style.display = "block";
    }
    // Otherwise, no back (No going back during matching)
    else {
        backButton.style.display = "none";
    }

    // If it's the final certificate card
    if (cardNumber == 8) {
        // Make sure that the certificate fits
        document.querySelector("#MainWindow").style.width = "fit-content";
        //console.log(userName);

        // Just in case it hasn't been entered, set to default "You"
        if (userName.length == 0) {
            userName = "You";
        }

        // Get the current date and time for the certificate
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let todayTime = new Date();
        let time = todayTime.getHours() + ":" + todayTime.getMinutes();

        // Set up the final certificate page
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
            <span style="font-size:30px">${today} ${time} </span><br>
            <img src="images/meat-celebration.png" id="certificationMeat">
        </div>
    </div>`

        // Add button that allows the user to print screen
        let printButton = `<button onclick="window.print()" id="printButton">PRINT CERTIFICATE</button>`
        finalPage += printButton;
        cardList.push(finalPage);
        // Get rid of next, since there isn't anything else
        next.style.display = "none";
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

    // Set the content to the next card
    document.querySelector("#content").innerHTML = cardList[cardNumber];

    // if (cardNumber == 1 || cardNumber == 2) {
    // let newButton = document.createElement("button");
    // let buttonPosition = document.getElementById("AdditionalButton");
    // buttonPosition.appendChild(newButton);
    // }

    //console.log(infoCard);
}

// Essentially the same as the previous, but reducing the cardNumber.
function backFunction() {

    cardNumber -= 1;
    let x = document.getElementById("backButton");
    if (cardNumber < 7 && cardNumber > 1) {
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

//
//let i = 0;
//function typeWriter(txt, elementiD) {
//    if (i < txt.length) {
//        document.getElementById(elementiD).innerHTML += txt.charAt(i);
//        i++;
//        setTimeout(typeWriter, speed);
//    }
//}