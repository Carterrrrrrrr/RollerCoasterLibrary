function getColumn(url, columnNumber) {
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col) {
  var column = [];
  for (var i = 1; i < matrix.length - 1; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Rollercoasters.csv"

var names = getColumn(url, 1);
var parkNames = getColumn(url, 2);
var cities = getColumn(url, 3);
var countries = getColumn(url, 4);
var regions = getColumn(url, 5);
var constructionMaterials = getColumn(url, 6);
var heights = getColumn(url, 7);
var speeds = getColumn(url, 8);
var lengths = getColumn(url, 9);
var inversions = getColumn(url, 10);
var inversionQuantities = getColumn(url, 11);
var yearsOpened = getColumn(url, 12);

/*
finds the oldest roller coaster in a country.
country {string} - inputted name of a country 
output {string} - name of oldest roller coaster in country
*/
function findOldestByCountry(country) {

  var oldDate = Math.min.apply(null, yearsOpened);

  if(country == "sebastian") {
   for(var i = 0; i < 69; i++) {
     country = "what happened to peru???"
     console.log(country)
    }
   return(country)
  }
  
  if (country == null || country == "") {
    return "please insert a country"
  }
  if (typeof country != "string") {
    return "Please write a country's name--not a number!"
  }

  for (i in names) {
    if (oldDate == yearsOpened[i] && countries[i].toLowerCase().includes(country.toLowerCase())) {
      return names[i]
    }
  }

  return "There are no Roller Coaster in the Country " + country;
}

/*
Lists theme parks in the country inputed by the user.
country {string} - name of any country with coasters 
parksInCountry {array} - list of parks in that country
*/
function locateParkByCountry(country) {
  var output = []
  var temp = country
  
   if(country == "sebastian") {
   for(var i = 0; i < 69; i++) {
     country = "what happened to peru???"
     console.log(country)
    }
   return(country)
  }
  
  country = parseFloat(country)
  if (isNaN(country)) {
    material = temp
  }
  if (typeof country != "string") {
    return "Please write a country's name--not a number!"
  }
  if (country == null || country == "") {
    return "BRO! you are stupid. to get an answer you need to put in an input!!!"
  }
  for (var i in countries) {
    if (countries[i].toLowerCase().includes(country.toLowerCase())) {
      output.push(parkNames[i])
    }
  }
  if (output == null || output == "") {
    return "There are no parks in that country You should not go there they are probably evil."
  } else {
    return (output)
  }
}


/*
gets the speed of a coaster based on the coasters name as an input. 
coaster {string} - name of any roller coaster
output {string} - speed of requested roller coaster
*/
function getSpeedByCoaster(coaster) {
  
  
   if(coaster == "sebastian") {
   for(var i = 0; i < 69; i++) {
     coaster = "what happened to peru???"
     console.log(coaster)
    }
   return(coaster)
  }
  
  if (coaster == null || coaster == "") {
    return "please insert a coaster"
  }
  if (typeof coaster != "string") {
    return "Please write a coaster's name--not a number!"
  }
  for (i in names) {
    if (names[i].toLowerCase().includes(coaster.toLowerCase())) {
      return speeds[i];
    }
  }
  return "There are no Roller Coaster " + coaster;
}

/*
takes the name of a coaster and returns the number of inverstions 
coaster {string} - name of any coaster
output {string} - number of inversions
*/
function getInversions(coaster) {
  
  if(coaster == "sebastian") {
   for(var i = 0; i < 69; i++) {
     coaster = "what happened to peru???"
     console.log(coaster)
    }
   return(coaster)
  }
  
  if (coaster == null || coaster == "") {
    return "please insert a coaster's name";
  }
  if (typeof coaster != "string") {
    return "Please write a coaster's name--not a number!";
  }
  for (i in names) {
    if (names[i].toLowerCase().includes(coaster.toLowerCase())) {
      if (inversionQuantities[i] == "0.0") {
        return "there are no inversions";
      }
      return inversionQuantities[i];
    }
  }
  return "There are no Roller Coaster " + coaster;
}



/*
finds a list of coasters based on their material
material {string} - any material coasters are built from
output {array} - list of coasters built with that material
*/
function getCoasterByMaterial(material) {
  var materialOutput = []
  var temp = material
  
  if(material == "sebastian") {
   for(var i = 0; i < 69; i++) {
     material = "what happened to peru???"
     console.log(material)
    }
   return(material)
  }
  
  material = parseFloat(material)
  if (isNaN(material)) {
    material = temp
  }

  if (typeof material != "string") {
    return "Please write a material's name--not a number!"
  }
  if (material == null || material == "") {
    return "Please write a material instead of nothing idiot!"

  }
  for (var i in constructionMaterials) {
    if (constructionMaterials[i].toLowerCase().includes(material.toLowerCase())) {
      materialOutput.push(names[i])
    }
  }
  if (materialOutput == null) {
    return ("there are no roller coasters made out of" + material)
  } else {
    return (materialOutput)
  }
}
