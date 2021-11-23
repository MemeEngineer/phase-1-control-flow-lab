function scuberGreetingForFeet(X){
if (X <= 400){
  return 'This one is on me!';
} else if (X > 2000 && X < 2500){
return "I will gladly take your thirty bucks.";
} else if (X > 2500){
  return "No can do.";
}
}



function ternaryCheckCity(City){
 // Write your code here!
return City === 'NYC'? 'Ok, sounds good.': 'No go.'
 }


function switchOnCharmFromTip(Tip){
   // Write your code here!
   switch (Tip){
     case 'generous':
      return 'Thank you so much.'
     case 'not as generous':
      return 'Thank you.'
    default:
      return "Bye."
   }
   }