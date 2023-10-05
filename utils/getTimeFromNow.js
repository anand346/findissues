import moment from "moment/moment";

export function getTimeFromNow(created_at) {
  var timestamp = created_at.split("T");
  var date = timestamp[0];
  var time = timestamp[1].split("Z")[0];
  var finalTime = date + " " + time;

  var finalTimeFromNow = moment.utc(finalTime, "YYYY-MM-DD HH:mm:ss").fromNow();
  return finalTimeFromNow;
}
