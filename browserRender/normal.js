console.time("normal-script");
logMessage("Normal script executing - Blocks parsing");

// Simulate some processing
for (let i = 0; i < 9e8; i++) {
  Math.random();
}

console.timeEnd("normal-script");

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
