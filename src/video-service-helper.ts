export const ReturnRndString = () => {
  return Buffer.from(Math.random().toString()).toString('base64').substr(5, 10);
};

export const ReturnRndNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};
