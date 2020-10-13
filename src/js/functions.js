import createElement from "./createELement";

const inputAddFile = document.querySelector(".add-file");
const contImages = document.querySelector(".contImg");

export function get() {
  (async () => {
    {
      const response = await fetch("https://back-7-3.herokuapp.com/?catalog", {
        method: "GET",
      });

			const data = await response.json();

      contImages.innerHTML = "";
      data.forEach((prop) => {
        if (prop !== ".gitkeep") {
					inputAddFile.value = null;
					
					let url = `https://ahj-http-downimg-backend.herokuapp.com/${prop}`;
					let id = prop;
					let image = createElement(url, id);
					contImages.appendChild(image);
					
					let close = image.querySelector(".close");
          close.addEventListener("click", async (e) => {
            (async () => {
              {
                const response = await fetch(
                  `https://ahj-http-downimg-backend.herokuapp.com/?${prop}`,
                  {
                    method: "DELETE",
                  }
                );
                if (response.ok) {
                  close
                    .closest(".image-elemtn")
                    .parentNode.removeChild(cross.closest(".image-elemtn"));
                }
              }
            })();
          });
        }
      });
    }
  })();
}

export function some(e) {
	if (!e) {
			return
	}
	e.preventDefault();
	const arr = Array.from(e.currentTarget.files);
	const formData = new FormData();
	formData.append('file', arr[0]);

	(async() => {

			{
					const response = await fetch('https://ahj-http-downimg-backend.herokuapp.com/', {
							method: 'POST',
							body: formData,
					});
			}
			get();

	})();
}