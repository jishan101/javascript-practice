const age = 14;

const isVoter = age >= 18 ? "Voter!" : "Not a Voter.";
console.log(isVoter)
age >= 18 ? console.log("Voter!") : console.log("Not a Voter.");

//alternative
console.log(age >= 18 && "Voter!");
if (!(age >= 18)) {
    console.log("Not a Voter.");
}
