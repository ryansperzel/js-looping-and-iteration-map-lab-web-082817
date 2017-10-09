// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const arr = []
  drivers.map(function (driver) {
    arr.push(driver.toLowerCase())
  })
  return arr
}

function nameToAttributes(drivers) {
  const arr = []
  drivers.map(function (name) {
    const nameArr = name.split(" ")
    const nameObj = {firstName: nameArr[0], lastName:nameArr[1]}
    arr.push(nameObj)
  })
  return arr
}

function attributesToPhrase(drivers) {
  const arr = []
  for (const driver of drivers) {
    arr.push(`${driver.name} is from ${driver.hometown}`)
  }
  return arr
}



// function evenNumbers(nums) {
//   const evens = []
//   for (const num of nums) {
//
//   }
// }
//
// function bookTitles(books) {
//   const arr = []
//   books.map(function (book) {
//     arr.push(book.title)
//   })
//   return arr
// }
//
// let issuesWithUpdatedApiUrl
//
// function changeUrl(iss) {
//   iss.map(function )
// }
