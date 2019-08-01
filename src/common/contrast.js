export const getContrast50 = (hexcolor) => {
  if (hexcolor != undefined) {
    return (parseInt(hexcolor, 16) > 0xffffff / 10) ? 'black' : 'white';
  }
}