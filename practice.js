class Calculator {
    constructor(params1, params2) {
        this.val1 = params1;
        this.val2 = params2;
    }

    areaOfParralelogram() {
        const base = this.val1;
        const height = this.val2
        let area = base * height
        area = area.toFixed(2)
        return area
    }

    volumeOfCylinder() {
        const radius = this.val1;
        const height = this.val2;
        const pie = 3.142;
        let volume = pie * radius**2 * height;
        volume = volume.toFixed(2)
        return volume
    }

    areaOfRectangle() {
        const width = this.val1;
        const length = this.val2;
        const area = width * length
        return area
    }

}

let base = 3
let height = 5;
let radius = 6;
let length = 3
let width = 5;

const newCa = new Calculator(base, height)
console.log(newCa.areaOfParralelogram());
const newCa2 = new Calculator(height, radius)
console.log(newCa2.volumeOfCylinder());
const newCa4 = new Calculator(length, width)
console.log(newCa4.areaOfRectangle());

