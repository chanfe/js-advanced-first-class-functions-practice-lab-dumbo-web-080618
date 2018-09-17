// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function (name){
    console.log(name.name)
  })
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function (name){
    if(hometown == name.hometown){
      console.log(name.name)
    }
  })
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function (a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = function(drivers){
  return drivers.slice().sort(function (a, b){
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers){
  return drivers.reduce(function (total, a){
    return total + a.revenue
  }, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}
