export const getData = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

export const addData = (cards, matches, time) => {
  let obj = { id: getData().length + 1, cards, matches, time };
  const newData = [...getData(), obj];
  localStorage.setItem("data", JSON.stringify(newData));
};
