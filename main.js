import { share } from "./src/share.js";
import { download } from "./src/download.js";

const downloadBtn = document.getElementById("download");
const shareBtn = document.getElementById("share");

const logo = document.querySelector(".logo");
const search = document.querySelector(".search--bar");
const qrCodeContainer = document.querySelector(".qr--container");
const qrContent = document.querySelector(".qr--code");
const generateQr = document.querySelector(".generate");
export const urlInfo = document.querySelector(".url");
export let canvas;

generateQr.addEventListener("click", getQrCode);

async function generateQrCode() {
  return new Promise((resolve, reject) => {
    const qrContainer = document.querySelector(".qr");
    const qr = new QRCode(qrContainer, urlInfo.value);

    qr.makeCode(urlInfo.value);

    canvas = qrContainer.querySelector("canvas");
    if (canvas) {
      resolve(canvas);
    } else {
      reject(canvas);
    }
  });
}

async function getQrCode() {
  if (!urlInfo.value) return;

  try {
    toggleHide();
    await generateQrCode();
    downloadBtn.addEventListener("click", download);
    shareBtn.addEventListener("click", share);
  } catch (error) {
    alert("it's been an error: " + error);
  }
}

function toggleHide() {
  [search, qrCodeContainer, logo, qrContent].map((elem) => {
    if (elem.classList.contains("logo")) {
      elem.classList.toggle("fixed");
    } else if (elem.classList.contains("qr--code")) {
      elem.classList.toggle("show");

      setTimeout(() => {
        elem.classList.toggle("show");
      }, 350);
    } else {
      elem.classList.toggle("fade");
    }
  });
}






