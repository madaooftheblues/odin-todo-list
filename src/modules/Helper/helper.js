export function formatDate(dateObj) {
  const day = dateObj.getDate().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${year}-${month}-${day}`;
}
