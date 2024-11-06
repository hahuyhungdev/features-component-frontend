console.time("async2");
logMessage("Async script 2 executing - Order not guaranteed");

for (let i = 0; i < 9e8; i++) {
  Math.random();
}

// Simulate different loading times
setTimeout(() => {
  logMessage("Async script 2 completed");
  console.timeEnd("async2");
}, 300);

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
