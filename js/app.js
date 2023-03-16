let userage = 25;
let is_subcribed = true

console.log(userage);
console.log(is_subscribed);

if(userage <18 || ! ){
 console.log("The user should not subecribed");
}else if(userage ===19 || userage>=19){
    console.log("the user should subscribed");
}else{
    console.log("the user is not eligible to subsrcribed");
}


if(userage <18 && is_subscribed ===true){
  console.log("The user is youger than 18 and not subscribed");
}

if (userage >=18 && is_subscribed ===false ){
    console.log("The user is greater than 18 and not subcribed");
}

if(userage <18 && is_subscribed ===false){
    conaloe.log("The user is younger than 18 and is subscribed");
}

if(userage >=18 && is_subscribed ===true){
    console.log("is older and is subscribed");
}