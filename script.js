// const batteryData = ["Battery 1", "Battery 2", "Battery 3", "Battery 4", "Battery 5", "Battery 6", "Battery 7", "Battery 8", "Battery 9", "Battery 10", "Battery 11", "Battery 12"];

// function showSuggestions() {
//   const input = document.getElementById("searchBar").value;
//   const suggestions = document.getElementById("suggestions");

//   suggestions.innerHTML = '';
//   if (input.length > 0) {
//     suggestions.style.display = 'block';
//     const filteredData = batteryData.filter(battery => battery.toLowerCase().includes(input.toLowerCase()));
//     filteredData.forEach(battery => {
//       const listItem = document.createElement("li");
//       listItem.classList.add("list-group-item");
//       listItem.textContent = battery;
//       listItem.onclick = () => {
//         window.location.href = `/battery_description/battery-description.html?battery=${battery}`;
//       };
//       suggestions.appendChild(listItem);
//     });
//   } else {
//     suggestions.style.display = 'none';
//   }
// }

// function searchBatteries(event) {
//   event.preventDefault();
//   // Implement a function to search and display relevant batteries
// }
////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const batteryNames = [
//     "Bosch Battery",
//     "Amaron Battery",
//     "Duracell Battery",
//     "Exide Battery",
//     "Luminous Battery",
//     "SF Sonic Battery",
//     "HBL Battery",
//     "Okaya Battery",
//     "Livguard Battery",
//     "Tata Green Battery",
//     "Microtek Battery",
//     "ACDelco Battery",
//   ];

//   const searchInput = document.querySelector("input[type='search']");
//   const suggestionBox = document.createElement("ul");
//   suggestionBox.classList.add("list-group", "position-absolute");
//   searchInput.parentElement.appendChild(suggestionBox);

//   searchInput.addEventListener("input", function () {
//     const query = searchInput.value.toLowerCase();
//     suggestionBox.innerHTML = "";

//     if (query) {
//       const suggestions = batteryNames.filter((battery) =>
//         battery.toLowerCase().includes(query)
//       );

//       suggestions.forEach((battery) => {
//         const suggestionItem = document.createElement("li");
//         suggestionItem.classList.add("list-group-item", "list-group-item-action");
//         suggestionItem.textContent = battery;
//         suggestionItem.addEventListener("click", function () {
//           window.location.href = `/battery_description/battery-description/${battery.toLowerCase().replace(/ /g, "-")}-description.html`;
//         });
//         suggestionBox.appendChild(suggestionItem);
//       });
//     }
//   });

//   document.addEventListener("click", function (e) {
//     if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
//       suggestionBox.innerHTML = "";
//     }
//   });
// });


// window location after adding page
// window.location.href = `/battery_description/battery-description/${battery.toLowerCase().replace(/ /g, "-")}-description.html`;
// window.location.href = `/battery_description/battery-description.html?battery=${battery}`;


///////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const batteryNames = [
    "Battery 1",
    "Battery 2",
    "Battery 3",
    "Battery 4",
    "Battery 5",
    "Battery 6",
    "Battery 7",
    "Battery 8",
    "Battery 9",
    "Battery 10",
    "Battery 11",
    "Battery 12",
  ];

  const searchInput = document.getElementById("searchBar");
  const suggestionBox = document.createElement("ul");
  suggestionBox.classList.add("list-group", "position-absolute", "mt-2");
  searchInput.parentElement.appendChild(suggestionBox);

  function showSuggestions() {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (query) {
      const suggestions = batteryNames.filter((battery) =>
        battery.toLowerCase().includes(query)
      );

      suggestions.forEach((battery) => {
        const suggestionItem = document.createElement("li");
        suggestionItem.classList.add("list-group-item", "list-group-item-action");
        suggestionItem.textContent = battery;
        suggestionItem.addEventListener("click", function () {
          window.location.href = "./battery_description/battery-description.html";
        });
        suggestionBox.appendChild(suggestionItem);
      });
    }
  }

  searchInput.addEventListener("input", showSuggestions);

  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
      suggestionBox.innerHTML = "";
    }
  });

  window.searchBatteries = function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    if (batteryNames.some((battery) => battery.toLowerCase().includes(query))) {
      window.location.href = "./battery_description/battery-description.html";
    } else {
      alert("Battery not found");
    }
  };
});
