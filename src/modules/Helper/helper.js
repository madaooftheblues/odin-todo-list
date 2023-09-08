export const date = {
  formatDate(dateObj) {
    return dateObj.toISOString().slice(0, 10);
  },
  currentDate() {
    const current = new Date();
    return date.formatDate(current);
  },
  nextWeek() {
    const current = new Date();
    current.setDate(current.getDate() + 7);
    return date.formatDate(current);
  },
  isToday(givenDate) {
    return date.currentDate() === givenDate;
  },
  isUpcoming(givenDate) {
    const current = new Date();
    const given = new Date(givenDate);
    return given > current;
  }
};
