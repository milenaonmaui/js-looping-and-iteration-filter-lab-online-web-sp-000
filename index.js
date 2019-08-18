// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, name) {
  return list.filter(function (driverName) {
    return driverName.slice(0, name.length).toLowerCase() === name.toLowerCase();
  })
}
  
function matchName(drivers, name) {
  return drivers.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
  });
}

