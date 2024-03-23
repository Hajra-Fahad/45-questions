
// Question 45: Cars: Create detailed car objects with flexible properties.

function carData(manufacturer: string, model: string, ...extras: [string, any][]): Object{
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    extras.forEach(([key,value]) => car[key] = value);
    return car;
}


console.log( carData("Ferrari 488", "Ferrari S.p.A",["color", "red"], ["year", 2020]));