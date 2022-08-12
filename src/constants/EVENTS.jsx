export const today = new Date();
export const registerDay = new Date("2022-10-15");
export const announceDay = new Date("2022-10-25");
export const firstMeetDay = new Date("2022-10-29");
export const fennecDay = new Date("2022-11-02");
export function isPassed(date1, date2) {
  return date1 >= date2;
}
