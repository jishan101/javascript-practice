//if else
const age = 10;

if (age < 10) {
    console.log("Stay home under your moms supervision");
} else if (age >= 10 && age <15) {
    console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age <18) {
    console.log("Prepare to your cast vote");
} else {
    console.log("Cast your vote");
}

//switch
switch(age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Stay home under your moms supervision");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        console.log("Try to gain knowledge from outside of home");
        break;
    case 15:
    case 16:
    case 17:
        console.log("Prepare to your cast vote");
        break;
    default:
        console.log("Cast your vote");
}
