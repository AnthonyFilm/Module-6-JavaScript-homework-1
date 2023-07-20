/*
Using JavaScript -- Complete the following 2 questions

Also, revisit 4 of the code wars problems you've done so far and solve them using JavaScript instead. (Recommended to do easier problems starting out, if you would like to do harder challenges that is fine but not required.)

CodeWars Probllem 1:
Convert km/hr to cm/s

*/

function cockroachSpeed(s) {
  return Math.floor(s*1000/36);
}

console.log(`The first CodeWars solution: ${cockroachSpeed(20)}`)

/* 

CodeWars Problem 2:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/


function solution(number){
    if (number < 3) {
        return 0;
      }
    else 
      {
        let number_sum = 0;
       for (let test = 3; test < number; test++) {
        if (test % 3 == 0 || test % 5 == 0) {
            number_sum = number_sum + test;
          } 
        }
        return number_sum
}}
console.log(`The second CodeWars solution: ${solution(15)}`)


/*
CodeWars Problem 3
Given a non-empty array of integers, 
return the result of multiplying the values together in order. */
function grow(x){
    let product = 1
    for (i = 0; i < x.length ; i++) {
          if (x[i] == 0) { return 0}
          else { product *= x[i]} 
    }
    return product
  }

  test_array = [2, 4, 5, 3, 25, 2]
  console.log(`The third CodeWars solution: ${grow(test_array)}`)
/*

/* 
CodeWars Problem 4
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.
*/
var summation = function (num) {
  let sum = 0
  for (i = 1; i <= num; i++) sum += i;
  return sum;
}

console.log(`The fourth CodeWars solution: ${summation(20)}`)

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names_list, dog_string_input){
    let j = 0
    for (let i=0; i < dog_names_list.length; i++){
        if (dog_string_input.includes(dog_names_list[i])) {
                console.log(`Matched ${dog_names_list[i]}`);
                 j = 1;
        }
    }
    if (j == 0) { console.log("No matches")}
}

//Call method here with parameters
findWords(dog_names, dog_string)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index")
    }
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
