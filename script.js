// Render listings
const listingsContainer = document.getElementById("listings");
listingsData.forEach(listing => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${listing.img}" alt="${listing.team} logo"/>
    <h3>${listing.team}</h3>
    <p>${listing.stadium}</p>
    <p class="asset">${listing.asset}</p>
    <p>Reserve: ${listing.reserve}</p>
    <button>View & Bid</button>
  `;
  listingsContainer.appendChild(card);
});

// Animate ticker
const tickerContent = document.getElementById("ticker-content");
tickerContent.textContent = tickerBids.join("  •  ");

// Optionally refresh bids dynamically
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * tickerBids.length);
  const newBid = tickerBids[randomIndex] + " (updated)";
  tickerBids.push(newBid);
  tickerBids.shift();
  tickerContent.textContent = tickerBids.join("  •  ");
}, 8000);
