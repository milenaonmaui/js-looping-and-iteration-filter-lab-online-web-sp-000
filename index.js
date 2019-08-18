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

function fuzzyMatch(drivers, str) {
  let matching = [];
  let n = str.length;
  for (const driver of drivers) {
    if (driver.slice(0,n).toLowerCase() === str.toLowerCase()) {
      matching.push(driver);
    }
  }
  return matching;
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

