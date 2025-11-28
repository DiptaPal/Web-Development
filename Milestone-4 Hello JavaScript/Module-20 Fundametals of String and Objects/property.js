const subject = {
    name: "Biology",
    teacher: "Sahan",
    examdate: "30 Feb, 2025",
    chapers: ["First", "Second", "Third"],
    exams: {
        name: "Final Exam",
        marks: 100,
    },
    "fav topic": ["topic-1", "topic-2", "topic-3"]
};
console.log(subject.chapers);
console.log(subject["exams"]);
console.log(subject["fav topic"]);
subject.exams.marks = 75;
console.log(subject.exams.marks);
subject["teacher"] = "Sahan perar";
console.log(subject.teacher);

subject.university = "Wrexham University";
console.log(subject);
