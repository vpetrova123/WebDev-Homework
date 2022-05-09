// Given two dates, calculate and return the amount of time elapsed in years and months
const calculateTime = (date1, date2) => {
  const startDate = new Date(date1);
  const endDate = new Date(date2);
  let dif = startDate.getTime() - endDate.getTime();
  let years = dif / 31556952000;
  let months = (years - Math.floor(years)) * 12;
  months = Math.floor(months);
  years = Math.floor(years);

  if (isNaN(years) || isNaN(months)) {
    return "Error: Invalid input provided";
  }
  if (years == 0) {
    return "Time elapsed: " + months + " months";
  }
  return "Time elapsed: " + years + " years, " + months + " months";
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.
