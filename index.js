
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  }
  startDate() {
    return new Date(this.date)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate().getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let verticalTravel = (this.endingLocation.vertical - this.beginningLocation.vertical);
    let horizontalTravel = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return verticalTravel + horizontalTravel;
  }
  estimatedTime(arg) {
    if (arg === undefined) {
      return Math.ceil(this.blocksTravelled() / 3);
    } else {
      return Math.ceil(this.blocksTravelled() / 2);
    }
  }
}
