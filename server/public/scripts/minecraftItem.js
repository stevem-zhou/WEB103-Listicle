document.addEventListener("DOMContentLoaded", () => {
    const renderMinecraftItems = async () => {
      const requestedID = parseInt(window.location.href.split("/").pop());
  
      const response = await fetch("/minecraftItems");
      const data = await response.json();
  
      const minecraftContent = document.getElementById("minecraft-content");
  
      let mcItem;
  
      mcItem = data.find((item) => item.id === requestedID);
  
      if (mcItem) {
        document.getElementById("image").src = mcItem.image;
        document.getElementById("itemName").textContent = mcItem.itemName;
        document.getElementById("rarity").textContent =
          "Item Rarity: " + mcItem.rarity;
        document.getElementById("description").textContent = mcItem.description;
        document.title = `UnEarthed - ${mcItem.itemName}`;
      } else {
        const message = document.createElement("h2");
        message.textContent = "No Minecraft Items Available 😞";
        minecraftContent.appendChild(message);
      }
    };
  
    renderMinecraftItems();
  });
  