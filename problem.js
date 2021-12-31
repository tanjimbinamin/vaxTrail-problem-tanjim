const vaxTrail = (array) => {
    let outputArray = {};


    let A = [];
    let B = [];
    let C = [];
    let D = [];

    array.map(element => {
        if (element.temperature > 100) {
            D.push(element);
        }
        else {
            if (element.age < 30) {
                A.push(element);
            }
            else if (element.age < 40) {
                B.push(element);
            }
            else if (element.age < 50) {
                C.push(element);
            }
        }
    })

    outputArray['A'] = A;
    outputArray['B'] = B;
    outputArray['C'] = C;
    outputArray['D'] = D;

    return outputArray;
}


const result = vaxTrail(
    [
        { name: 'Biplap', age: 22, temperature: 98 },
        { name: 'sunil', age: 21, temperature: 98 },
        { name: 'Kabir', age: 36, temperature: 99 },
        { name: 'Rahul', age: 37, temperature: 99 },
        { name: 'Paul', age: 42, temperature: 98 },
        { name: 'Kat', age: 41, temperature: 98 },
        { name: 'Nayem', age: 50, temperature: 100 },
        { name: 'Sabnaj', age: 51, temperature: 101 }
    ]
);

console.log(result);