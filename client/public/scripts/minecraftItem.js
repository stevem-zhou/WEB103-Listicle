document.addEventListener("DOMContentLoaded", () => {
  const renderMinecraftItem = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop());

    const response = await fetch("/minecraftItems");
    const data = await response.json();

    const minecraftContent = document.getElementById("minecraft-content");

    let minecraftItem;

    minecraftItem = data.find((item) => item.id === requestedID);

    if (minecraftItem) {
      document.getElementById("image").src = minecraftItem.image;
      document.getElementById("itemName").textContent = minecraftItem.itemName;
      document.getElementById("rarity").textContent =
        "Item Rarity: " + minecraftItem.rarity;
      document.getElementById("description").textContent = minecraftItem.description;
      document.title = `Listicle - ${minecraftItem.name}`;
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Minecraft Items Available 😞";
      minecraftContent.appendChild(message);
    }
  };

  renderMinecraftItem();
});
