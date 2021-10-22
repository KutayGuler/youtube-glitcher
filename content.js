var codes = [32, 67, 70, 73, 74, 75, 76, 77, 84, 191]

let sequence = [74, 76, 76, 74, 76, 74, 74, 76]
let timeGaps = [100, 150, 200, 100, 150, 100, 100, 100]

let eventIndex = 0;

setTimeout(() => {
  chrome.runtime.sendMessage({ sequence: sequence, timeGaps: timeGaps });
}, 5000)