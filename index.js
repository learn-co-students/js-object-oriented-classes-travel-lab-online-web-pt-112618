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
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueIndex(avenue) {
    return eastWest.indexOf(avenue)
  }
  blocksTravelled() {
    let verticalDistance =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)//calculates the number of blocksTravelled
    let horizonalDistance = Math.abs(this.avenueIndex(this.beginningLocation.horizontal) - this.avenueIndex(this.endingLocation.horizontal))//calculates the number of horizontal blocks travelled
    return verticalDistance + horizonalDistance
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }

}
