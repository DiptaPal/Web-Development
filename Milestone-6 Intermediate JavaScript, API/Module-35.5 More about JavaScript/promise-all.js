const getData1 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log("Generated Number1: ", num);
    if (num > 2) {
        resolve({ num1: num });
    } else {
        reject({ err: "Data is not available1" });
    }
});
const getData2 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log("Generated Number2: ", num);
    if (num > 2) {
        resolve({ num2: num });
    } else {
        reject({ err: "Data is not available3" });
    }
});

const getData3 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log("Generated Number3: ", num);
    if (num > 2) {
        resolve({ num3: num });
    } else {
        reject({ err: "Data is not available3" });
    }
});

Promise.all([getData1, getData2, getData3])
    .then((data) => console.log("Promise resolve: ", data))
    .catch((err) => console.log(err));
