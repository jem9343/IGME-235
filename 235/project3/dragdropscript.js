// JS
function allowDrop(event) {
    event.preventDefault();
  }
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  
class Card 
{
    constructor(image, name, info1) {
        this.image = image;
        this.name = name;
        this.info1 = info1;
    }

    BuildCard() {
        <img
          id="fish"
          src="https://cdn.mos.cms.futurecdn.net/uhLVL2jTdtQ7ScXCeoeAU6-650-80.jpg.webp"
          draggable="true"
          ondragstart="drag(event)"
          width="300"
        />

        let imageLine = this.image;
        let name1 = this.name;
        let link = this.info1;
        let bigLine = `<div class="card"><img id=${imageLine} src=${link} draggable="true" ondragstart="drag(event) width="300"</div>`;
        return bigLine;
    }
}

let one = new Card("lkasdfljaslkd", "yippee", "ndnaamnmdfsmmdsfmdfsmndmfnms");
