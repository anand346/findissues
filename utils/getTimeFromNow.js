import moment from "moment/moment";

export function getTimeFromNow(created_at) {
  const timeDifferenceInMilliseconds = Math.abs(
    moment
      .utc(created_at, "YYYY-MM-DD HH:mm:ss")
      .diff(moment.now(), "milliseconds", true),
  );

  let finalTimePrefix = "a few";
  let finalTimeUnit = "seconds";

  const timeDifferenceInSeconds = Math.floor(
    timeDifferenceInMilliseconds / 1000,
  );
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
  const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);
  const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30);
  const timeDifferenceInYears = Math.floor(timeDifferenceInDays / 365);

  if (timeDifferenceInYears >= 1) {
    finalTimePrefix = timeDifferenceInYears;
    finalTimeUnit = timeDifferenceInYears === 1 ? "year" : "years";
  } else if (timeDifferenceInMonths >= 1) {
    finalTimePrefix = timeDifferenceInMonths;
    finalTimeUnit = timeDifferenceInMonths === 1 ? "month" : "months";
  } else if (timeDifferenceInWeeks >= 1) {
    finalTimePrefix = timeDifferenceInWeeks;
    finalTimeUnit = timeDifferenceInWeeks === 1 ? "week" : "weeks";
  } else if (timeDifferenceInDays >= 1) {
    finalTimePrefix = timeDifferenceInDays;
    finalTimeUnit = timeDifferenceInDays === 1 ? "day" : "days";
  } else if (timeDifferenceInHours >= 1) {
    finalTimePrefix = timeDifferenceInHours;
    finalTimeUnit = timeDifferenceInHours === 1 ? "hour" : "hours";
  } else if (timeDifferenceInMinutes >= 1) {
    finalTimePrefix = timeDifferenceInMinutes;
    finalTimeUnit = timeDifferenceInMinutes === 1 ? "minute" : "minutes";
  } else if (timeDifferenceInSeconds > 10) {
    finalTimePrefix = timeDifferenceInSeconds;
  }

  let finalTimeFromNow = `${finalTimePrefix} ${finalTimeUnit} ago`;

  return finalTimeFromNow;
}
