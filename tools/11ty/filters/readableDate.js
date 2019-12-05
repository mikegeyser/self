const { DateTime } = require("luxon");

const readableDate = dateObj => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
};

module.exports = readableDate;
