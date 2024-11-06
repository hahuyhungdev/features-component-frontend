console.time("defer2");
logMessage("Defer script 2 executing - After parsing, order guaranteed");

// Simulate some processing
setTimeout(() => {
  logMessage("Defer script 2 completed");
  console.timeEnd("defer2");
}, 200);
