const debounce = (callback: (args: any) => void, wait: number) => {
  let timeoutId: any;
  return (args: any) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

export default debounce;