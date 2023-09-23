document.addEventListener("DOMContentLoaded", () => {
  const renderMinecraftItems = async () => {
    const response = await fetch("/minecraftItems");
    const data = await response.json();

    const mainContent = document.getElementById("main-content");
    console.log(data);
    if (data) {
      data.map((minecraftItem) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const topContainer = document.createElement("div");
        topContainer.classList.add("top-container");

        const bottomContainer = document.createElement("div");
        bottomContainer.classList.add("bottom-container");

        topContainer.style.backgroundImage = `url(${minecraftItem.image})`;

        const name = document.createElement("h3");
        name.textContent = minecraftItem.name;
        bottomContainer.appendChild(name);

        const audience = document.createElement("p");
        audience.textContent = "Item Description: " + minecraftItem.description;
        bottomContainer.appendChild(audience);

        const link = document.createElement("a");
        link.textContent = "LEARN MORE";
        link.setAttribute("role", "button");
        link.href = `/minecraftItems/${minecraftItem.id}`;
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
