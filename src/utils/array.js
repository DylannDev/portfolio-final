export const findProjectById = (array, id) => {
  return array.find((arrayItem) => arrayItem.id === id);
};

export const getShortenedLabel = (label) => {
  if (label.length > 8) return label.slice(0, 6).concat("...");
  return label;
};
