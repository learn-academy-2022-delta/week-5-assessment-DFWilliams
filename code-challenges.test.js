// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("gibberishMaker", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
            // Expected output: [-8, 90]
        const secretCodeWord2 = "Gobbledygook"
            // Expected output: [5, 109]
        const secretCodeWord3 = "Eccentric"
      expect(gibberishMaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(gibberishMaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(gibberishMaker(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })


//   ReferenceError: gibberishMaker is not defined



// b) Create the function that makes the test pass.

    //----Psuedo code----//
        //declare a function called gibberishMaker
        // set a param string
        // declare a variable called newArray 
        // used .split to convert the string into an array
        //declare a variable called newNewArray
        //use .map to iterate through each value in the array
        // use conditional statements to determine the values that need replacement
            // if value === "a", return value = 4
            // else if value === "e", return value = 3
            // else if value === "i", return value = 1
            // else if value === "o", return value = 0
            // else return value 
        // use .join to convert the mapped array into a string



    const gibberishMaker = (string) => {
    //    let stringTurnedArray = string.split('')
               let newArray = string.split('')
               console.log((newArray))
               let newNewArray= newArray.map ((value) => {
            if (value.toUpperCase() === "A"){
                return value = 4 
            }else if (value.toUpperCase() === "E"){
                return value = 3
            }else if (value.toUpperCase() === "I"){
                return value = 1
            }else if (value.toUpperCase() === "O"){
                return value = 0
            }else{
                return value 
            }
           })
           return newNewArray.join('')
        }

 // Test Suites: 1 passed, 1 total
//  This problem basically took me the entire length of The Curious Case of Benjamin Button to figure out (i took breaks), I'm going to refactor later


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsIncluding", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(wordsIncluding(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(wordsIncluding(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   ReferenceError: wordsIncluding is not defined


// b) Create the function that makes the test pass.
   //----Psuedo code----//
    // declare a function called wordsIncluding
    // set a params array and letter 
    // use .filter to iterate through each value 
    // use .include to return the values that contain the letter 
        
const wordsIncluding = (array, letter) => {
    return array.filter (word => {
        return word.toLowerCase().includes(letter)
     })
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("bobSagetsHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]        
      expect(bobSagetsHouse(hand1)).toEqual(true)
      expect(bobSagetsHouse(hand2)).toEqual(false)
      expect(bobSagetsHouse(hand3)).toEqual(false)
  })
})


// ReferenceError: bobSagetsHouse is not defined

// b) Create the function that makes the test pass.
   //----Psuedo code----//
    // declare a function called bobSagetHouse
    // set param array
    // make a for loop to interate through each value in the array
    // use conditionals to determine if the array is a full house
        // if [0] === [1] ===[2] && [3] === [4], return true
        // else return false 


    const bobSagetsHouse = (array) => {
        for (let i=0; i < array.length; i++)
        if ((array[0] === array[1]) && (array[1] === array[2]) && (array[3] === array[4])) {
            return true
        } else {
            return false 
        }
    }
    
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
