const COLORS = [
  '#00B894',
  '#0984E3',
  '#FDCB6E',
  '#00CEC9',
  '#D63031',
  '#E17055',
  '#6C5CE7',
  '#E84393',
];

const getColor = (index: number) => {
  const colorsLength = COLORS.length;
  const cycledIndex = (colorsLength + index % colorsLength) % colorsLength;
  return COLORS[cycledIndex];
};

export default getColor;