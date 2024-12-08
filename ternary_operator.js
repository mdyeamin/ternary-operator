

const age = 20;

if (age >= 18){
console.log("you can marriage");
}
else{
    console.log("you can't marriage");
}

// same condition in ternary
// method 1 basic ternary 

age >= 18 ? console.log("you can marriage") : console.log("you can't marriage");



// multiple consition 
let islove = true;
let price = 12000;
let discountPrice
let newPrice
// islove === true ? price >= 5000 ? (discountPrice = price * 10 / 100)   /// It's wrong way doesn't work
// (newPrice = price - discountPrice) (console.log(newPrice)) (discountPrice = price * 10 / 100):
// (newPrice = price + discountPrice) (console.log(newPrice)) (discountPrice = price * 10 / 100) : price


 
// same condition in for loops 

 if (price >= 5000 && islove === true) {
    
        discountPrice = price * 10 / 100;
        newPrice = price - discountPrice;
        console.log(newPrice); 
 }
    else if(price <= 5000 || islove === false ){
        discountPrice = price * 10 / 100;
        newPrice = price + discountPrice;
        console.log(newPrice);  
    }
    else{
        console.log(price);
    }
    
//  method 2 semi advance multiple condition
newPrice = (price >= 5000 && islove === true) ?  price -  price * 10 / 100 : ( price + price * 10 /100)

console.log(newPrice);