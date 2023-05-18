let c = 0;
setInterval(() => {
  document.getElementById("clients").innerHTML = c;
  if (c < 274) {
    c++;
  }
}, 70);

let p = 0;
setInterval(() => {
  document.getElementById("projects").innerHTML = p;
  if (p < 421) {
    p++;
  }
}, 40);

let h = 0;
setInterval(() => {
  document.getElementById("hours").innerHTML = h;
  if (h < 1364) {
    h++;
  }
}, 1);

let w = 0;
setInterval(() => {
  document.getElementById("workers").innerHTML = w;
  if (w < 18) {
    w++;
  }
}, 1100);

const htmlElement = document.getElementById("htmlBar");
let htmlBarWidth = 0;
const hid = setInterval(() => {
  if (htmlBarWidth == 100) {
    clearInterval(hid);
  } else {
    htmlBarWidth++;
    htmlElement.style.width = htmlBarWidth + "%";
  }
}, 1);

const cssElement = document.getElementById("cssBar");
let cssBarWidth = 0;
const cid = setInterval(() => {
  if (cssBarWidth == 90) {
    clearInterval(cid);
  } else {
    cssBarWidth++;
    cssElement.style.width = cssBarWidth + "%";
  }
}, 4);

const javaElement = document.getElementById("javaBar");
let javaBarWidth = 0;
const jid = setInterval(() => {
  if (javaBarWidth == 75) {
    clearInterval(jid);
  } else {
    javaBarWidth++;
    javaElement.style.width = javaBarWidth + "%";
  }
}, 7);

const photoElement = document.getElementById("photoBar");
let photoBarWidth = 0;
const pid = setInterval(() => {
  if (photoBarWidth == 55) {
    clearInterval(pid);
  } else {
    photoBarWidth++;
    photoElement.style.width = photoBarWidth + "%";
  }
}, 10);

window.onscroll = function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navColor").style.backgroundColor = "rgb(14, 16, 15)";
    document.getElementById("mobileNavColor").style.backgroundColor =
      "rgb(14, 16, 15)";
  } else {
    document.getElementById("navColor").style.backgroundColor = "transparent";
    document.getElementById("mobileNavColor").style.backgroundColor =
      "transparent";
  }
};


 