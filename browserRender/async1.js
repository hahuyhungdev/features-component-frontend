console.time("async1");
logMessage("Async script 1 executing - Order not guaranteed");

// Simulate different loading times
setTimeout(() => {
  logMessage("Async script 1 completed");
  console.timeEnd("async1");
}, 500);

function logMessage(message) {
  console.log(`[${new Date().toLocaleTimeString()}] ${message}`);

  // Add to visual log if DOM is ready
  const logElement = document.getElementById("log");
  if (logElement) {
    const entry = document.createElement("div");
    entry.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    logElement.appendChild(entry);
  }
}
