let div11 = document.getElementById("div11");
let div12 = document.getElementById("div12");
let div13 = document.getElementById("div13");

let div21 = document.getElementById("div21");
let div22 = document.getElementById("div22");
let div23 = document.getElementById("div23");

bannerImage = document.getElementById("p1");
bannerImage1 = document.getElementById("p2");

let body = document.body;

initGrid();
function initGrid() {
  //   for (let i = 1; i <= 3; i++) {
  //     // if (localStorage.div21) console.log(localStorage.getItem(`div2${i}`));
  //     // // x += `${localStorage.getItem("div21")}`;

  //     document.getElementById(`div2${i}`).innerHTML = "";
  //   }
  var dataImage = localStorage.getItem("imgData");
  document.getElementById("tableBanner").src =
    "data:image/png;base64," + dataImage;

  var dataImage1 = localStorage.getItem("imgData1");
  document.getElementById("tableBanner1").src = document.getElementById(
    "tableBanner1"
  ).src
    ? "data:image/png;base64," + dataImage1
    : "";
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  //   ev.dataTransfer.clearData();
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function saveLayout() {
  //   let mydiv11 = div11.childNodes;
  //   let mydiv12 = div12.childNodes;
  //   let mydiv13 = div13.childNodes;

  //   let mydiv21 = div21.childNodes;
  //   let mydiv22 = div22.childNodes;
  //   let mydiv23 = div23.childNodes;

  imgData = getBase64Image(bannerImage);
  localStorage.setItem("imgData", imgData);
  imgData1 = getBase64Image(bannerImage1);
  localStorage.setItem("imgData1", imgData1);

  //   mydiv21.forEach((item) => localStorage.setItem("div21", item));
  //   mydiv22.forEach((item) => localStorage.setItem("div22", item.textContent));
  //   mydiv23.forEach((item) => localStorage.setItem("div23", item.textContent));

  //   mydiv11.forEach((item) => localStorage.setItem("div11", item.textContent));
  //   mydiv12.forEach((item) => localStorage.setItem("div12", item.textContent));
  //   mydiv13.forEach((item) => localStorage.setItem("div13", item.textContent));
}
