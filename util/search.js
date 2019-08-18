export default (key, data) => {
  if (key) {
    return data.filter(e => {
      return e.title.toLowerCase().includes(key.toLowerCase()) ? true : false;
    });
  }
  return data;
};
