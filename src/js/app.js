const area = document.querySelector(".drop-area");
const previewEl = document.querySelector(".previewEl");
const overlapped = document.querySelector(".overlapped");

area.addEventListener("dragover", (e) => {
  e.preventDefault();
  area.classList.add("ddd");
});

function get() {
  (async () => {
    {
      const response = await fetch("https://back-7-3.herokuapp.com/?catalog", {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);

      previewEl.innerHTML = "";
      data.forEach((prop) => {
        if (prop !== ".gitkeep") {
          overlapped.value = null;
          const imageContainer = document.createElement("div");
          imageContainer.className = "element";
          const img = document.createElement("img");
          img.className = "image";
          img.dataset.id = prop;
          const cross = document.createElement("div");
          cross.innerHTML = `<div class="cross"><img class="cross-png" src="./cross.png"></div>`;

          img.src = `https://back-7-3.herokuapp.com/${prop}`;
          imageContainer.appendChild(img);
          imageContainer.appendChild(cross);
          previewEl.appendChild(imageContainer);
          cross.addEventListener("click", async (e) => {
            (async () => {
              {
                const response = await fetch(
                  `https://back-7-3.herokuapp.com/?${prop}`,
                  {
                    method: "DELETE",
                  }
                );
                if (response.ok) {
                  cross
                    .closest(".element")
                    .parentNode.removeChild(cross.closest(".element"));
                }
              }
            })();
          });
        }
      });
    }
  })();
}

window.addEventListener("load", () => {
  console.log("hello world");

  get();
});

area.addEventListener("drop", async (e) => {
  e.preventDefault();
  area.classList.remove("ddd");

  const files = Array.from(event.dataTransfer.files);
  const formData = new FormData();
  formData.append("file", files[0]);

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

function some(e) {
  if (!e) {
    return;
  }
  e.preventDefault();
  const arr = Array.from(e.currentTarget.files);
  const formData = new FormData();
  formData.append("file", arr[0]);

  (async () => {
    {
      const response = await fetch("https://back-7-3.herokuapp.com/", {
        method: "POST",
        body: formData,
      });
    }
    get();
  })();
}

area.addEventListener("click", () => {
  overlapped.dispatchEvent(new MouseEvent("click"));
});

overlapped.addEventListener("click", () => {
  some();
});

overlapped.addEventListener("change", (e) => {
  some(e);
});
