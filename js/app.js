
let user_age = 21;
let is_subscribed = true;
let user_points = 110;

if(user_age <= 18 && is_subscribed === false){
    console.log('You cannot subscribed');
}else if(user_age >=18 && is_subscribed === false){
    console.log('Please try again, something is wrong');
}else if(user_age <= 18 && is_subscribed === true){
    console.log('How come you have access to this account');
}else if(user_age >=18 && is_subscribed === true){
    console.log('You can subscribed');
}else{
    console.log('Please make sure you are 18 and above before you subscribed');
}


if(is_subscribed === true && user_age >= 18 || user_points >=100){
    console.log('your are aligible to subscribed');
    
}else{

    console.log('Please come back when you are 18!')
    
}
