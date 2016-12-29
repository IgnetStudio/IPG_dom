// catch

var QB_h1 = document.getElementById("QB_h1");
var QB_hr = document.getElementsByTagName("hr");
var QB_li = document.getElementsByClassName("QB_li");
var QB_bt = document.querySelector("button[type='submit']");
var QB_ah = document.querySelectorAll("a");
var QB_li_01 = QB_li[0];

// create

var QB_h3 = document.createElement("h3");
var QB_thx = document.createTextNode("Dziękujemy");
QB_h3.appendChild(QB_thx);

var QB_ftr = document.querySelector("footer");
QB_ftr.appendChild(QB_h3);

// document fragment + loop

var QB_ul_02 = document.getElementById("QB_ul_02");
var QB_cdf = document.createDocumentFragment();

var QB_AR_02 = ["adherent", "hreczkosiej", "mandant", "weredyk"];

for(var i = 1; i <= 4; i++) {

    var QB_li_02 = document.createElement("li");

    QB_li_02.appendChild(document.createTextNode("Odpowiedź nr " + i + ": " + QB_AR_02[i-1]));

    QB_cdf.appendChild(QB_li_02);

};

QB_ul_02.appendChild(QB_cdf);

// children, siblings, parent

var QB_ul_03 = document.querySelector("#QB_ul_03");

var QB_ul_children = QB_ul_03.childNodes;
var QB_element = QB_ul_03.children;

var QB_first = QB_ul_03.firstElementChild;
var QB_last = QB_ul_03.lastElementChild;
var QB_second = QB_first.nextElementSibling;
var QB_third = QB_last.previousElementSibling;

var QB_remove = QB_second.nextElementSibling;
QB_remove.parentNode.removeChild(QB_remove);

var QB_parent = QB_second.parentNode;

// attributes

var QB_button = document.querySelector("button");
var QB_button_attr = QB_button.getAttribute("type");

var QB_link = document.querySelector(".link-finish");
QB_link.setAttribute("href", "index.html");

QB_button.setAttribute("disabled", true);
QB_button.removeAttribute("disabled");

var QB_attributes = QB_link.attributes;

// classes

var QB_restart = document.querySelector(".QB_restart");

QB_restart.classList.add("red", "blue");
QB_restart.classList.remove("red");
QB_restart.classList.toggle("blue");

console.log(QB_restart.classList.contains("red"));

// node type: 1 element / 3 text / 8 comment / 9 document / 11 fragment

var QB_node_check = document.querySelector(".QB_node_check");
console.log (QB_node_check.nodeType);

// inner & outer html

var QB_box = document.querySelector(".QB_box");

QB_box.outerHTML = '<div class="QB_html_insert"></div>';

var QB_html_insert = document.querySelector(".QB_html_insert");

QB_html_insert.innerHTML = '<h2 class="QB_h2">osoba dążąca do władzy, pieniędzy, stanowisk za wszelką cenę</h2><ul><li>arywista</li><li>nepot</li><li>reketier</li><li>sensat</li></ul>';

// style

var QB_small = document.querySelector("small");
QB_small.style.textDecoration = "underline";

var QB_h2 = document.querySelectorAll(".QB_h2");

for (var i = 0; i < QB_h2.length; i++ ) {    
QB_h2[i].style.fontSize = "20px";    
}