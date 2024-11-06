console.time("defer1");
logMessage("Defer script 1 executing - After parsing, order guaranteed");

// Simulate some processing
setTimeout(() => {
  logMessage("Defer script 1 completed");
  console.timeEnd("defer1");
}, 200);
