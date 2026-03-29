abstract class Instrument {
  constructor(
    protected family: string,
    protected range: string
  ) {
    this.family = family;
    this.range = range;
  }

  public getFamily() {
    return this.family;
  }

  public getRange() {
    return this.range;
  }
}

class Guitar extends Instrument {
  constructor(
    family: string,
    range: string,
    private name: string,
    private numStrings: number
  ) {
    super(family, range);
    this.numStrings = numStrings;
    this.name = name;
  }

  public getInfo() {
    return `The ${this.name} instrument is in the ${this.family} family. It has ${this.numStrings} strings, and has a range of ${this.range}`;
  }
}

class Tuba extends Instrument {}

let tele = new Guitar('strings', 'EE to weedly dee', 'Telecaster', 6);
let pbass = new Guitar('strings', 'EEE to dum dum', 'Precision Bass', 4);

console.log(pbass.getInfo());

// let instrument = new Instrument('music', 'low to high')
