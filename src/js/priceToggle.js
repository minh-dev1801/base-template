const priceToggleInit = () => {
  const btnPricingToggle = document.getElementById("pricingToggle");
  const cards = document.querySelectorAll("[data-card]");

  if (!btnPricingToggle || !cards) return;

  const pricing = {
    starter: { monthly: "$29", yearly: "$149" },
    growth: { monthly: "$59", yearly: "$608" },
    business: { monthly: "$139", yearly: "$1568" },
  };

  btnPricingToggle.onchange = () => {
    cards.forEach((card) => {
      const cardName = card.getAttribute("data-card");
      const price = card.querySelector(".pricing__price");
      const unit = card.querySelector(".pricing__unit");

      if (btnPricingToggle.checked) {
        price.textContent = pricing[cardName].yearly;
        unit.textContent = "/per year";
      } else {
        price.textContent = pricing[cardName].monthly;
        unit.textContent = "/per month";
      }
    });
  };
};

export default priceToggleInit;
