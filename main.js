
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

// /*
//     Below are some functions, in which you will write ALL of your
//     code. Do not modify the code that defines the functions, and
//     do not write any code outside of the functions.
// */

// 

// /*
//     This function should return inexpensive flowers - ones that cost
//     less than 2.00 per flower.

// define function named inexpensiveFlowers
const inexpensiveFlowers = () => {
    //[] create empty array named filteredFlowers  
    const filteredFlowers = []
    // loop flowers object
    for (const flower of flowers) {
        if (flower.price < 2) {
            // push into empty array
            filteredFlowers.push(flower)
        }
    }
    //} 
    return filteredFlowers  // Do not modify
}

// }

// /*
//     This function should return flowers that grow in
//     USDA zones of 3 and 8.
// */
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    //loop flowers object
    for (const flower of flowers) {
        //loop the usdaZones array
        //for (const usdaZone of flower.usdaZones)
        //if usdaZone.includes(3) && usdaZone.includes(8)
            //make an if statement with || or use the includes() method for zone 3 and 8
            if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
                //if true push those flowers into filteredflowers array
                filteredFlowers.push(flower)
        }
    }
    //     // Write your algorithm first, and then your code. Feel free to remove this comment
    return filteredFlowers  // Do not modify
}

// //use includes method

// /*
//     This function should return flowers that come in the color Orange
// */
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    //     // iterate through the flowers object
    for (const flower of flowers) {
        //use includes() method for orange
            if (flower.colors.includes('Orange')) {
                //filteredFlowers.push('flower')
                filteredFlowers.push(flower)
            }
        }
        return filteredFlowers  // Do not modify
    }
    //     for (const flower of flowers) {
    //         //create an if statement for flower.colors with .include method
    //         if (flower.colors.includes("Orange")) {
    //             //filteredFlowers.push(flower)
    //             filteredFlowers.push(flower)


//     //nested loop to go through array in usdaZones
//     for (const flower of flowers) {
//         // input conditional statement that if 3 && 8 met then add that object in 
//         if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
//             // assuming i push flowers in the filteredFlowers array 4
//             filteredFlowers.push(flower)
//         }
//     }
//     }



// /*
//     This function should return an HTML representation of each flower.

//     Expected string format:
//         <article>
//             <h1>Bird of Paradise</h1>

//             <h2>Colors</h2>
//             <section>White</section>
//             <section>Orange</section>

//             <h2>USDA Zones</h2>
//             <div>9</div>
//             <div>10</div>
//             <div>11</div>
//         </article>
// */

//loop flowers array

// empty string let result = `` 
// result += `<article>\n
//<h1>flower.type</h1>\n`
//<h2></h2>




const flowersAsHTML = () => {
    // create empty string to input final string form in
    let flowersHTMLString = "";
    for (const flower of flowers) {
        flowersHTMLString += `<article>\n`
        flowersHTMLString += `<h1>${flower.type}</h1>\n`
        for (const color of flower.colors) {
       flowersHTMLString +=  `<h2>Colors</h2>
        <section>${color}section>\n`
    }
    for (const usdaZone of flower.usdaZones) {
    flowersHTMLString += `<h2>USDA Zones</h2>\n
    <div>${usdaZone}</div>\n
    `
}
flowersHTMLString += `</article>`
    }
    //         Algorithmic thinking is most important on this one.
    //         We would rather see the correct algorithm than the
    //         correct code. If you have code that works, but no
    //         algorithm, then you failed the exercise.
    //     */
    
    
    return flowersHTMLString  // Do not modify
    }
    //     let flowersHTMLString = ""  // Do not modify
    //     // itereate through the flowers array
    //     for (const flower of flowers) {
    //         // flowersHTMLString += `<article>`
    //         flowersHTMLString += '<article>'
    //         // flowersHTMLString +=interpolate `<h1>${flower.type}</h1>`
    //         flowersHTMLString += `<h1>${flower.type}</h1>`
    //         //flowersHTMLString +=`<h2>Colors</h2>`
    //         flowersHTMLString += `<h2>Colors</h2>`
    //         //nested loop for colors
    //         for (const color of flower.colors){
    //             //flowersHTMLString += interpolate `<section>${flower.colors}</section>`
    //             flowersHTMLString += `<section>${color}</section>`
    //         }
    //         //flowersHTMLString += `<h2>USDA ZONES</h2>`
    //         flowersHTMLString += `<h2>USDA ZONE</h2>`
    //         //need another nested loop for usdaZones
    //         for (const usdaZone of flower.usdaZones){
    //             flowersHTMLString += `<div>${usdaZone}</div>`
    //         }
    //         //flowersHTMLString += `<div>${flower.usdaZones}</div>`
    //         //flowersHTMLString += </article>`
    //         flowersHTMLString += `</article>`
    //     }
    //     //may need to add n/ at some points
    //     /*




    // */
    // const inexpensiveFlowers = () => {
    //     const filteredFlowers = []  // Do not modify
    //     //iterate the array
    //     //pull out id#.price that are price < 2.00
    //     //put objects in filteredFlowers array
    //     for (const flower of flowers) {
    //         if (flower.price < 2) {
    //             filteredFlowers.push(flower)
    //         }
    //     }











































































    /*  DO NOT TOUCH THIS CODE  */
    const getFlowers = () => flowers
                    module.exports = {
                        inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
                    }
/*  DO NOT TOUCH THIS CODE  */
