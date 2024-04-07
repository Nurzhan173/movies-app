// Function to remove '#' symbols from keys
export function removeHashSymbols(obj: any): any {
  const result: any = {};
  for (const key in obj) {
    if (key.startsWith("#")) {
      const newKey = key.substring(1);
      result[newKey] = obj[key];
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

export function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
