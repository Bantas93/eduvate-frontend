// export default function TimerDisplay({ timerRun }) {
//   const minutes = Math.floor(timerRun / 60);
//   const seconds = timerRun % 60;

//   const formatted =
//     String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

//   return formatted;
// }

// import dayjs from "dayjs";
// import duration from "dayjs/plugin/duration";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

export async function TimeDisplay(data) {
  // Hours, minutes and seconds
  const hrs = ~~(data / 3600);
  const mins = ~~((data % 3600) / 60);
  const secs = ~~data % 60;
  console.log(data);
  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
