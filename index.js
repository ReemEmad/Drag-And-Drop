let div11 = document.getElementById("div11");
let div12 = document.getElementById("div12");

initGrid();
function initGrid() {
  let divs = document.querySelectorAll(".grid div");
  if (localStorage.key("srcs")) {
    let srcs = localStorage.getItem("srcs");
    srcs = JSON.parse(srcs).srcs;
    divs.forEach((div, i) => {
      if (srcs[i] !== "") {
        let img = document.createElement("img");
        img.setAttribute("draggable", "true");
        img.setAttribute("src", "data:image/png;base64," + srcs[i]);
        img.setAttribute("id", `${i}`);
        img.addEventListener("dragstart", drag);
        div.appendChild(img);
      }
    });
  }
}

function drag(ev) {
  console.log(ev);
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
  var width = img.width;
  var height = img.height;
  console.log(width, height);
  // if (width > height) {
  //   if (width > MAX_WIDTH) {
  //     height *= MAX_WIDTH / width;
  //     width = MAX_WIDTH;
  //   }
  // } else {
  //   if (height > MAX_HEIGHT) {
  //     width *= MAX_HEIGHT / height;
  //     height = MAX_HEIGHT;
  //   }
  // }
  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, 0, 0, width, height);

  var dataURL = canvas.toDataURL("image/png");
  return dataURL.substr(dataURL.indexOf(",") + 1);
}

function saveLayout() {
  let srcs = [];
  let divs = document.querySelectorAll(".grid div");

  divs.forEach((div) => {
    //Check if Image Exists
    if (div.childNodes.length == 2) {
      let img = div.childNodes[1];
      srcs.push(getBase64Image(img));
    } else {
      srcs.push("");
    }
  });
  let obj = {
    srcs: srcs,
  };

  localStorage.setItem("srcs", JSON.stringify(obj));
}
