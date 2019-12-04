const { DateTime } = require("luxon");

const dateFromTimestamp = timestamp => {
  return DateTime.fromISO(timestamp, { zone: "utc" }).toJSDate();
};

module.exports = dateFromTimestamp;
