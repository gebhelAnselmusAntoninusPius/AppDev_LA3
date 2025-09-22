let base_number = 4;

//problem 1: 
function calculateGrade(score) {

    if(score >= 90 && score <= 100) console.log("A");
    
    else if(score >= 80 && score <= 89) console.log("B");

    else if(score >= 70 && score <= 79) console.log("C");

    else if(score >= 60 && score <= 69)console.log("D");
    
    else console.log("F");
}

//problem 2:
function showStars(rows){
    for(let row = 1; row<=rows; row++){
        console.log('*'.repeat(row));
    }
   
}

//problem 3:
function isPrime(n){
  if(n<2)return `${n} is not prime`;
  
  for(let i = 2; i<=Math.sqrt(n); i++){
    if(n % i === 0) return `${n} is not prime`;
  }
  return `${n} is prime`;
}

//problem 4:
function multiplicationTable(n){
  for(let i = 1; i<=10; i++){
    console.log(n+'*'+i+' = '+n*i)
  }
}

//outputs
let score = base_number*10+5;
calculateGrade(score);
console.log("\n\n");

let rows = base_number + 2;
showStars(rows);
console.log("\n\n");

n = base_number + 10
console.log(isPrime(n));

console.log("\n\n");
multiplicationTable(base_number);