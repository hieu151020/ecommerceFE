export const getImageName = (pathImage) => {
  const array = pathImage.split("\\");
  const imageName = array[array.length - 1];
  return imageName;
};
