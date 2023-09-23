document.addEventListener("DOMContentLoaded", () => {
  const renderMinecraftItems = async () => {
    const response = await fetch("/minecraftItems");
    const data = await response.json();

    const mainContent = document.getElementById("main-content");
    console.log(data);
    if (data) {
      data.map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const topContainer = document.createElement("div");
        topContainer.classList.add("top-container");

        const bottomContainer = document.createElement("div");
        bottomContainer.classList.add("bottom-container");

        topContainer.style.backgroundImage = `url(${item.image})`;

        const name = document.createElement("h3");
        name.textContent = item.name;
        bottomContainer.appendChild(name);

        const audience = document.createElement("p");
        audience.textContent = "Description: " + item.description;
        bottomContainer.appendChild(audience);

        const link = document.createElement("a");
        link.textContent = "Read More >";
        link.setAttribute("role", "button");
        link.href = `/minecraftItems/${item.id}`;
        bottomContainer.appendChild(link);

        card.appendChild(topContainer);
        card.appendChild(bottomContainer);

        mainContent.appendChild(card);
      });
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Minecraft Items Available 😞";
      mainContent.appendChild(message);
    }
  };

  const requestedUrl = window.location.href.split("/").pop();

  if (requestedUrl) {
    window.location.href = "../404.html";
  } else {
    renderMinecraftItems();
  }
});
