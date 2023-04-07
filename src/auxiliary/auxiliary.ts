export function thousSeparator(num: number) {
  let str: string = num.toString();
  const separations = Math.floor((str.length - 1) / 3); // calculating amount of separations needed
  if (str && separations > 0 ) {
    for (let i = 1; i <= separations; i++) { // running a cycle required amount of time
      const pos = -(i*4 - 1); // position to slice on each iteration
      str = str.slice(0, pos) + ' ' + str.slice(pos); // inserting space at desired position
    }
    return str;
  }
  return num.toString();
}

export function prepareValue (value: string) {
  if (value) return parseInt(value.replace(/[^0-9]/, ''));
  return 0;
}