// problem-1
function cashOut(money) {
    if (money < 0) {
        return "Invalid";
    } else if (isNaN(money)) {
        return "Invalid";
    }
    const cashOutCharge = money * (1.75 / 100);
    return cashOutCharge.toFixed(2);
}
console.log(cashOut(112));

// problem-2

function validEmail(email) {
    if (typeof email === "string") {
        const pattern = /^[a-zA-Z0-9.-_+%@]+@[a-zA-Z0-9.-]+\.com$/;
        return pattern.test(email);
    } else {
        return false;
    }
}

console.log(validEmail("diptapalmv@gmail.com"));

// problem-3
function electionResult(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid";
    } else {
        let mangoCount = 0;
        let bananaCount = 0;
        for (const party of arr) {
            if (party.toLowerCase() === "mango") {
                mangoCount++;
            } else if (party.toLowerCase() === "banana") {
                bananaCount++;
            }
        }
        if (mangoCount > bananaCount) {
            return "Mango";
        } else if (mangoCount < bananaCount) {
            return "Banana";
        } else {
            return "Draw";
        }
    }
}

const election = ["mango", "banana", "Na-Vote", "mango"];
console.log(electionResult(election));

// problem-4

function isBestFriend(obj1, obj2) {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        if (obj1.bestFriend === obj2.roll && obj2.bestFriend === obj1.roll) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid";
    }
}

const person1 = {
    name: "Arnob",
    roll: 1,
    bestFriend: 2,
};
const person2 = {
    name: "Dip",
    roll: 2,
    bestFriend: 1,
};

console.log(isBestFriend(person1, person2));

// problem-5

function calculateWatchTime(watchTime) {
    for (const item of watchTime) {
        if (typeof item !== "number") {
            return "Invalid";
        }
    }
    let totalSeconds = 0;
    for (const second of watchTime) {
        totalSeconds += second;
    }

    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

    return {
        hour: hour,
        minute: minute,
        second: second,
    };
}

const watchingTime = [23, 35, 46, 57, 68, 34, 436, 56];
console.log(calculateWatchTime(watchingTime));
