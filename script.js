let currentTimeframe = "weekly";

const main = document.getElementById("main");

const timeframeBtns = document.querySelectorAll(".timeframe-btn");
const btnDaily = document.getElementById("timeframe-btn--daily");
const btnWeekly = document.getElementById("timeframe-btn--weekly");
const btnMonthly = document.getElementById("timeframe-btn--monthly");

let dataRows, dataRowsDaily, dataRowsWeekly, dataRowsMonthly;

const handleBtnClick = (e) => {
  const currentTarget = e.currentTarget.getAttribute("id");

  //console.log("clicked -- " + currentTarget);

  timeframeBtns.forEach((b) => {
    b.classList.remove("current");
  });

  switch (currentTarget) {
    case "timeframe-btn--daily":
      btnDaily.classList.add("current");
      currentTimeframe = "daily";
      break;
    case "timeframe-btn--weekly":
      btnWeekly.classList.add("current");
      currentTimeframe = "weekly";
      break;
    case "timeframe-btn--monthly":
      btnMonthly.classList.add("current");
      currentTimeframe = "monthly";
      break;
    default:
      console.log("click error -- " + currentTarget);
  }
  updateDashboard(currentTimeframe);
};

timeframeBtns.forEach((b) => {
  b.addEventListener("click", handleBtnClick);
});

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initializeDashboard(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

// need two functions
// 1. initializeDashboard -- sets up all the elements
// 2. updateDashboard -- shows all elements with the currentTimeframe; hides all others

function initializeDashboard(data) {
  data.forEach((sec) => {
    createDataSection(sec);
  });

  dataRows = document.querySelectorAll(".data-row");
  dataRowsDaily = document.querySelectorAll(".daily");
  dataRowsWeekly = document.querySelectorAll(".weekly");
  dataRowsMonthly = document.querySelectorAll(".monthly");

  updateDashboard(currentTimeframe);
}

// Display a data section inside the <main> element
function createDataSection(sec) {
  const section = document.createElement("section");
  const contentDiv = document.createElement("div");
  const rowDiv = document.createElement("div");
  const heading = document.createElement("h2");

  contentDiv.classList.add("data-content");

  heading.textContent = sec.title;

  section.appendChild(contentDiv);
  section.classList.add("data-section");
  section.classList.add(
    "data-section--" + sec.title.toLowerCase().replace(/ /g, "-")
  );
  main.appendChild(section);

  rowDiv.classList.add("data-row-header");
  rowDiv.appendChild(heading);
  rowDiv.innerHTML +=
    '<svg class="ellipsis" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill-rule="evenodd"/></svg>';
  contentDiv.appendChild(rowDiv);

  Object.keys(sec.timeframes).forEach((key) => {
    createDataRow(key, sec.timeframes[key], contentDiv);
  });
}

function createDataRow(label, row, section) {
  const timeFrame = document.createElement("div");
  const currHrs = document.createElement("p");
  const prevHrs = document.createElement("p");

  timeFrame.classList.add("data-row");
  timeFrame.classList.add(label);
  timeFrame.classList.add("hidden");

  currHrs.textContent = `${row.current}hr`;
  if (row.current != "1") currHrs.textContent += "s";
  currHrs.classList.add("data-curr");

  prevHrs.textContent = `Last Week - ${row.previous}hr`;
  if (row.previous != "1") prevHrs.textContent += "s";
  prevHrs.classList.add("data-prev");

  timeFrame.appendChild(currHrs);
  timeFrame.appendChild(prevHrs);
  section.appendChild(timeFrame);
}

function updateDashboard(timeframe) {
  dataRows.forEach((row) => {
    row.classList.add("hidden");
  });

  switch (timeframe) {
    case "daily":
      dataRowsDaily.forEach((row) => {
        row.classList.remove("hidden");
      });
      btnDaily.classList.add("current");
      break;
    case "weekly":
      dataRowsWeekly.forEach((row) => {
        row.classList.remove("hidden");
      });
      btnWeekly.classList.add("current");
      break;
    case "monthly":
      dataRowsMonthly.forEach((row) => {
        row.classList.remove("hidden");
      });
      btnMonthly.classList.add("current");
      break;
    default:
      console.log("filter error -- " + timeframe);
  }
}
