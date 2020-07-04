let div11 = document.getElementById("div11");
let div12 = document.getElementById("div12");

initGrid();
function initGrid() {
  let divs = document.querySelectorAll(".grid div");
  if (localStorage.key("imgs")) {
    let imgs = localStorage.getItem("imgs");
    imgs = JSON.parse(imgs).imgs
    divs.forEach((div, i) => {
      if (imgs[i].src !== "") {
        let img = document.createElement("img")
        img.setAttribute("draggable","true")
        img.setAttribute("src", "data:image/png;base64," + imgs[i].src)
        img.setAttribute("id",`${i}`)
        img.setAttribute("width",`${imgs[i].width}`)
        img.setAttribute("height",`${imgs[i].height}`)
        img.addEventListener("dragstart",drag)
        div.appendChild(img)
      }
    })
  }
  

}

function drag(ev) {
  console.log(ev)
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
  canvas.width = img.width;
  canvas.height = img.height;
  console.log(canvas.width,canvas.height)
  ctx.drawImage(img, 0, 0, width, height);
  var dataURL = canvas.toDataURL("image/png");
  return {src: dataURL.substr(dataURL.indexOf(",") + 1),width:img.width,height:img.height}
}

function saveLayout() {
  let imgs = [];
  let divs = document.querySelectorAll(".grid div");

  divs.forEach((div) => {
    //Check if Image Exists
    if (div.childNodes.length == 2) {
      let img = div.childNodes[1]
      imgs.push(getBase64Image(img))
    }
    else {
      imgs.push({src:"",width:0,height:0});
    }
  })
  let obj = {
    imgs: imgs
  }
  console.log(imgs)
  localStorage.setItem("imgs", JSON.stringify(obj));
}
