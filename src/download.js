import { canvas } from "../main.js";

export function download() {
    let imgURL = canvas.toDataURL("image/png");
  
    let link = document.createElement("a");
    link.download = "QRCode.png";
    link.href = imgURL;
  
    link.click();
  }