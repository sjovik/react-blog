export { 
  formatDate
};

// TODO: Make this more general. Possibility of other format inputs.
/**
 * Removes spaces and dashes from a date string.
 * 
 * @param  {String} date - in format YYYY-MM-DD
 * @return {String}      - in format YYMMDD
 */
function formatDate(date) {
  const newDate = date.split('-').join('').slice(2, date.length);

  return newDate;
}
