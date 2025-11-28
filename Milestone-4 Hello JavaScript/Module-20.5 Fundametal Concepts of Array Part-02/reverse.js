const friends = ["Arnob", "Sihab", "Dipto", "Jomir"];

// const revfriend = friends.reverse();
// console.log(revfriend);


const reverseFriend = [];

for(const friend of friends){
    reverseFriend.unshift(friend);
}
console.log(reverseFriend);