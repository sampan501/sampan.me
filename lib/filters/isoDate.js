/*
A ISO format date formatter filter for Nunjucks
*/
const isoDate = (date) => {
  var d = new Date(date);
  return d.toISOString().slice(0, 10);
};
export default isoDate;