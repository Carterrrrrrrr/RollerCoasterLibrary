# RollerCoasterLibrary
A JS Library that allows you to get certain information about Roller Coasters in a certain dataset. 
#

###### Takes the name of a country as a parameter and returns the oldest coaster in the specified country
###### @param country {string} - inputted name of a country 
###### @return output {string} - name of oldest roller coaster in country
`findOldestByCountry(country)`

#

###### Takes the name of a country as a parameter and returns all theme parks in that country
###### @param country {string} - name of any country with coasters 
###### @return output {array} - list of parks in that country
`locateParkByCountry(country)`

#

###### Takes the name of a roller coaster as a parameter and outputs the speed of that coaster
###### @param coaster {string} - name of any roller coaster
###### @return output {string} - speed of requested roller coaster
`getSpeedByCoaster(coaster)`

#

###### Takes the name of a roller coaster as a parameter and returns the number of inversions in that roller coaster
###### @param coaster {string} - name of any coaster
###### @return output {string} - number of inversions
`getInversions(coaster)`

#

###### Takes a material as a parameter and outputs the name of the roller coasters built out of that material
###### @param material {string} - any material coasters are built from
###### @return output {array} - list of coasters built with that material
`getCoasterByMaterial(material)`

#
