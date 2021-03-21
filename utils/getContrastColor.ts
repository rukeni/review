export const hexToRgb = (hex:string) => {

  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex)
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

export const removeHash = (hex:string) => {
  const arr = hex.split('')
  arr.shift()
  return arr.join('')
}

export const contrast = (hex:string) => {
  const rgb = hexToRgb(hex);
  const o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) /1000);

  return (o <= 180) ? 'dark' : 'light';
};