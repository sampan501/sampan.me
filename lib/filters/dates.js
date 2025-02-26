/*
A date formatter filter for Nunjucks
*/
const date = (date, part) => {
  var d = new Date(date);
  if(part == 'year') {
    return d.getUTCFullYear();
  }
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return  month[d.getMonth()] + " " + d.getDate() + ", " + d.getUTCFullYear();
};
export default date;