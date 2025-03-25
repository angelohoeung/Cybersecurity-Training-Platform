onmessage = function (e) {
  const { pattern, testString } = e.data;
  try {
    const regex = new RegExp(pattern);
    const startTime = performance.now();
    const result = regex.test(testString);
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);
    postMessage({ result, duration });
  } catch (error) {
    postMessage({ error: error.message });
  }
};
