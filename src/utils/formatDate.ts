/**
 * Formats a date from dd-mm-yy to [12, May, 2022]
 * @param date The date
 * @returns Month Dayth, Year
 */
export function formatDate(date: string): string {
  const d = new Date(date.split("T")[0]);
  const dateStr = d.toString();
  const splits = dateStr.split(" ");
  const month = splits[1];
  const day = parseInt(splits[2]);
  const year = splits[3];
  const nth = function (d: number) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return `${month} ${day}${nth(day)}, ${year}`;
}
