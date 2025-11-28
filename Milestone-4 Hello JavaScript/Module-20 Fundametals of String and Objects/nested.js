const college = {
    name : "Wrexham College",
    class : ["10", "11", "12"],
    events: ["science fair", "well fair", "31st december"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: "top"
        }
    }
}

console.log(college);
console.log(college.unique.result.merit);

delete college.class;
console.log(college);