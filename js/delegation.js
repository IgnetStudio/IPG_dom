var delegationArticle = document.querySelector(".delegationArticle");
var delegationParagraphs = delegationArticle.querySelectorAll("p");

function changeColor(e) {

    if(e.target.nodeName === "P") {
        e.target.style.color = "#DC143C";
    }

}

delegationArticle.onclick = changeColor; // change only paragraph color

function addParagraph() {

  var newParagraph = document.createElement("p");
  newParagraph.textContent = "Nowy paragraf [KLIK].";
  delegationArticle.appendChild(newParagraph);

}

// addParagraph(); // add new paragraph in console