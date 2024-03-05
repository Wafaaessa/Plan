function changeCardBackground(clickedCard) {
  // Reset background colors for all cards
  document.getElementById("proCard1").classList.remove("active-card");
  document.getElementById("proCard2").classList.remove("active-card");
  document.getElementById("proCard3").classList.remove("active-card");

  // Change background color for the clicked card
  document.getElementById(`proCard${clickedCard}`).classList.add("active-card");

  // Reset background colors for all titles

  document.querySelectorAll(".pro-title").forEach((title) => {
    title.classList.remove("active-title");
  });

  // Change background color for the clicked title
  document
    .getElementById(`proTitle${clickedCard}`)
    .classList.add("active-title");

  // Reset background colors for all buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.classList.remove("active-button");
  });

  // Change background color for the clicked button
  document
    .getElementById(`proButton${clickedCard}`)
    .classList.add("active-button");
}
// ////////switch/////////////
function toggleCards(element) {
  const proName = document.getElementById("proName");
  const progPer = document.getElementById("progPer");

  if (element.id === "proName") {
    document.getElementById("proCard1").style.display = "block";
    document.getElementById("proCard2").style.display = "block";
    document.getElementById("proCard3").style.display = "none";
  } else if (element.id === "progPer") {
    document.getElementById("proCard1").style.display = "none";
    document.getElementById("proCard2").style.display = "none";
    document.getElementById("proCard3").style.display = "block";
  }
  // Toggle background color
  proName.style.backgroundColor = "";
  progPer.style.backgroundColor = "";
  proName.style.color = "gray";
  progPer.style.color = "gray";

  element.style.backgroundColor = "rgb(129,80,248)";
  element.style.color = "#ffffff";
  element.style.fontSize = "13px";
  element.style.fontWeight = "500";
  element.style.height = "33px";
  element.style.marginLeft = "15px";
  element.style.paddingTop = "5px";
}
