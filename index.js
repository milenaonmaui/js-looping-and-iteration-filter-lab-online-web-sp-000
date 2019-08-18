// Code your solution in this file
function findMatching(drivers, str) {
  let matching = [];
  for (const driver of drivers) {
    if (driver.toLowerCase().includes(str.toLowerCase())) {
      matching.push(driver);
    }
  }
  return matching;
}

function fuzzyMatch(list, name) {
  return list.filter(function (driverName) {
    return driverName.slice(0, name.length).toLowerCase() === name.toLowerCase();
  })
}
  
function matchName(drivers, name) {
  let matching = [];
  for (const driver of drivers) {
    if (driver.name === name) {
      matching.push(driver);
    } 
  }
  return matching;
}

