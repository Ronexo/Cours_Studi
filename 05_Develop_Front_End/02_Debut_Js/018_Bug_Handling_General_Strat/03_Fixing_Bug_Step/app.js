const listTemperature = {
    month: 'January',
    tempPerDay : [
      {day: 1, temp: 15},
      {day: 2, temp: 10},
      {day: 3, temp: 14},
      {day: 4, temp: 20},
      {day: 5, temp: 18},
      {day: 6, temp: 17},
      {day: 7, temp: 15},
      {day: 8, temp: 16},
      {day: 9, temp: 15},
      {day: 10, temp: 9},
      {day: 11, temp: 10},
      {day: 12, temp: 13},
      {day: 13, temp: 14},
      {day: 14, temp: 11},
      {day: 15, temp: 12},
      {day: 16, temp: 16},
      {day: 17, temp: 17},
      {day: 18, temp: 14},
      {day: 19, temp: 15},
      {day: 20, temp: 11},
      {day: 21, temp: 11},
      {day: 22, temp: 10},
      {day: 23, temp: 19},
      {day: 24, temp: 22},
      {day: 25, temp: 18},
      {day: 26, temp: 17},
      {day: 27, temp: 16},
      {day: 28, temp: 13},
      {day: 29, temp: 15},
      {day: 30, temp: 20},
      {day: 31, temp: 22}
    ]
  }

  let tableTemp = [];

for (let counter = 0; counter < listTemperature.tempPerDay.length; counter++) {
  if (listTemperature.tempPerDay[counter].temp > 20) {
    tableTemp.push(listTemperature.tempPerDay[counter].temp);
  }
}

console.log(tableTemp)