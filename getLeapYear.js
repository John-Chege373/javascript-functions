// A JavaScript function that gets a leap year in a given range of years
function leap_year_range(startYear, endYear) {
    let year_range = [];
    for (let i = startYear; i <= endYear; i++) {
      year_range.push(i);
    }
    
    let newArray = [];
    year_range.forEach(function(year) {
      if (testLeapYear(year)) {
        newArray.push(year);
      }
    });
    
    return newArray;
  }
  
  function testLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(leap_year_range(2001, 2022));
  