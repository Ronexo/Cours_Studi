const date = new Date(2020, 11, 25, 20, 30)

const date2 = new Date(
  date.getFullYear() + 5,
  date.getMonth() + 6,
  date.getDate(),
  date.getHours() + 12,
  date.getMinutes()
)

// Display : Fri Jun 26 2026 08:30:00 GMT+0200 (heure d'été d'Europe centrale)
console.log(date2)                               