let index = 0;

function executeEvent(sequence, timeGaps, tabs) {
  chrome.debugger.attach({ tabId: tabs[0].id }, "1.0");
  chrome.debugger.sendCommand(
    { tabId: tabs[0].id },
    "Input.dispatchKeyEvent",
    {
      type: "keyDown",
      windowsVirtualKeyCode: sequence[index],
      nativeVirtualKeyCode: sequence[index],
      macCharCode: sequence[index],
    }
  );
  chrome.debugger.detach({ tabId: tabs[0].id });
  index++;
  setTimeout(() => {
    executeEvent(sequence, timeGaps, tabs);
  }, timeGaps[index - 1])
}

chrome.runtime.onMessage.addListener(({sequence, timeGaps}) => {
  chrome.tabs.query({ active: true }, function (tabs) {
    executeEvent(sequence, timeGaps, tabs)
  });
});
