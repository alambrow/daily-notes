const notes = [
    {
        id: 1,
        subject: "Working with GitHub Repos",
        date: "14 April 2021",
        feeling: "a little fuzzy still, but getting there",
        jotting: "learned the basic workflow of GitHub; still unsure about how merging should work outside of the cloud",
        timeSpent: "roughly three hours"
    },
    {
        id: 2,
        subject: "Data Structures",
        date: "15 April 2021",
        feeling: "fairly comfortable. have seen this before",
        jotting: "Introduction to Arrays---const Array = [], including implementing objects with key-vale properties {} and how to embed objects inside of an array [{},{},{}]",
        timeSpent: "26 minutes"
    }
]

const Add3 = {
    id: 3,
    subject: "Learning For Loops and Dot Notation in JS",
    date: "16 April 2021",
    feeling: "comfortable for now, expecting much harder things to come",
    jotting: "Learned how to use dot notation and for loop to access key-value properties in JS objects",
    timeSpent: "20 minutes"
}

notes.push(Add3)

console.log(" ")
console.log("**Daily Notes from NSS**")
console.log(" ")

for (const note of notes) {
    console.log(`Note ${note.id}`)
    console.log(`${note.date}`)
    console.log(`Subject: ${note.subject}`)
    console.log(`${note.jotting}`)
    console.log(`Feeling: ${note.feeling}`)
    console.log(" ")
}