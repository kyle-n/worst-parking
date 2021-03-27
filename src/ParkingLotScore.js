const calculateScore = (reviewCount, rating) => {
  return (reviewCount * rating) / (reviewCount + 1);
}

export default {
  calculateScore
};
