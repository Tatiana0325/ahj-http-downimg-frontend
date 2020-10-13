import { get, some } from "./functions";

const winAddFile = document.querySelector(".drop-area");
const inputAddFile = document.querySelector(".add-file");

winAddFile.addEventListener("dragover", (event) => {
  event.preventDefault();

  winAddFile.classList.add("carryover");
});

window.addEventListener("load", () => {
  get();
});

winAddFile.addEventListener("drop", (event) => {
  event.preventDefault();

  winAddFile.classList.remove("carryover");

  const images = Array.from(event.dataTransfer.files);

  const formData = new FormData();
  formData.append("file", images[0]);

  (async () => {
    {
      const response = await fetch("https://back-7-3.herokuapp.com/", {
        method: "POST",
        body: formData,
      });
    }
    get();
  })();
});

winAddFile.addEventListener("click", () => {
  inputAddFile.dispatchEvent(new MouseEvent("click"));
});

inputAddFile.addEventListener("click", () => {
  some();
});

inputAddFile.addEventListener("change", (e) => {
  some(e);
});
