let base_number = 4;

//problem 1: 

function calculateGrade(score) {

    if(score >= 90 && score <= 100){
        console.log("A");
    }

    else if(score >= 80 && score <= 89){
        console.log("B");
    }

    else if(score >= 70 && score <= 79){
        console.log("B");
    }

    else if(score >= 60 && score <= 69){
        console.log("B");
    }

    else{
        console.log("F");

    }
}

let score = base_number*10+5;

calculateGrade(score);
console.log("\n\n");

function showStars(rows){
    for(let row = 1; row<=rows; row++){
        console.log('*'.repeat(row));
    }
   
}

let rows = base_number + 2;
showStars(rows);
console.log("\n\n");

function isPrime(n) {
  if (n <= 1 || (n % 2 === 0 && n !== 2)) {
    return 'is not prime';
  }
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return 'is not prime';
    }
  }
  return 'is prime';
}

n = base_number + 10;
console.log(isPrime(n)); 