const lastChecked = document.querySelector("#last-checked");

if (lastChecked) {
  const now = new Date();
  lastChecked.dateTime = now.toISOString();
  lastChecked.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
