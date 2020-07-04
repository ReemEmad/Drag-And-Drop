let div11 = document.getElementById("div11");
let div12 = document.getElementById("div12");

let div21 = document.getElementById("div21");
let div22 = document.getElementById("div22");
let div23 = document.getElementById("div23");

bannerImage = document.getElementById("p1");
bannerImage1 = document.getElementById("p2");
bannerImage2 = document.getElementById("p3");

let body = document.body;

initGrid();
function initGrid() {
  for (let i = 1; i <= 3; i++) {
    //   if (
    //     localStorage.imgData &&
    //     localStorage.imgData1 &&
    //     localStorage.imgData2
    //   ) {
    //     document.getElementById(`div1${i}`).innerHTML = "";
    // if (
    console.log(
      document.getElementById(`div1${i}`).childNodes[1].getAttribute("src")
    );
   == "";
    // ) {
    //   document.getElementById(`div1${i}`).removeChild(childNodes[1]);
    // }

    var dataImage = localStorage.getItem("imgData");
    document.getElementById("tableBanner").src =
      "data:image/png;base64," + dataImage;

    var dataImage1 = localStorage.getItem("imgData1");
    document.getElementById("tableBanner1").src =
      "data:image/png;base64," + dataImage1;

    var dataImage2 = localStorage.getItem("imgData2");
    document.getElementById("tableBanner2").src =
      "data:image/png;base64," + dataImage2;
    // }
    //  else {
    //   document.getElementById(`tableBanner${i}`).src = "";
    // }
  }
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
  ev.dataTransfer.clearData();
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var MAX_WIDTH = 400;
  var MAX_HEIGHT = 400;
  var width = img.width;
  var height = img.height;

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
  }
  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, 0, 0, width, height);

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

  imgData2 = getBase64Image(bannerImage2);
  localStorage.setItem("imgData2", imgData2);

  //   mydiv21.forEach((item) => localStorage.setItem("div21", item));
  //   mydiv22.forEach((item) => localStorage.setItem("div22", item.textContent));
  //   mydiv23.forEach((item) => localStorage.setItem("div23", item.textContent));

  //   mydiv11.forEach((item) => localStorage.setItem("div11", item.textContent));
  //   mydiv12.forEach((item) => localStorage.setItem("div12", item.textContent));
  //   mydiv13.forEach((item) => localStorage.setItem("div13", item.textContent));
}
