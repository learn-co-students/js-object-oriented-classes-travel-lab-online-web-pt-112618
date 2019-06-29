class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  };

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1).getFullYear();
    let startDate = this.startDate.getFullYear();

    return endDate - startDate;
  };
};

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  avenueInteger(avenue) {
    return eastWest.indexOf(avenue);
  };

  blocksTravelled() {
    let horizontalDistance = this.avenueInteger(this.endingLocation.horizontal) - this.avenueInteger(this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return Math.abs(horizontalDistance + verticalDistance);
  };

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
