const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let result = [];
  for (let x in stations) { // iterate through the entire array, start to end
    let _name = stations[x][0];
    let _capacity = stations[x][1];
    let _type = stations[x][2];    
    if (_capacity >= 20 && (_type == "school" || _type == "community centre")) { // check if capacity and type meet criteria.
      result.push(_name); // push into array.
    }
  }
  return result;
}

console.log(chooseStations(stations));