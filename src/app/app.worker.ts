/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const { heroes, flag } = data;
  console.log('sort by:', flag);
  const response = heroes.sort((a: any, b: any) => {
    if (a[flag] < b[flag]) return -1;
    if (a[flag] > b[flag]) return 1;
    return 0;
  });
  postMessage(response);
});
