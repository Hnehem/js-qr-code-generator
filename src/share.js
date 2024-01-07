import { urlInfo } from "../main.js";

export function share() {
  let quote = urlInfo.value;

  navigator.clipboard
    .writeText(quote)
    .then(() => {
      alert("QR Code URL copied to clipboard!");
    })
    .catch((error) => {
      alert("QR Code could not be copied: ", error);
    });
}
