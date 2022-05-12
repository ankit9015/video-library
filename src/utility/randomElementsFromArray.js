const randomElementsFromArray = (arr, num = 1) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export default randomElementsFromArray;
