export function getTime(date: string): string {
  const dateArr = date.split(" ");
  const time = dateArr[1];
  const timeArr = time.split(":");
  return `${timeArr[0]}:${timeArr[1]}`;
}
