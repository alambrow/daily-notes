const notes = [
    {
        subject: "Working with GitHub Repos",
        date: "14 April 2021",
        feeling: "a little fuzzy still, but getting there",
        jotting: "learned the basic workflow of GitHub; still unsure about how merging should work outside of the cloud",
        timeSpent: "roughly three hours",
        id: 1,
    },
    {
        subject: "Data Structures",
        date: "15 April 2021",
        feeling: "fairly comfortable. have seen this before",
        jotting: "Introduction to Arrays---const Array = [], including implementing objects with key-vale properties {} and how to embed objects inside of an array [{},{},{}]",
        timeSpent: "26 minutes",
        id: 2
    }
]

const Add3 = {
    subject: "Learning For Loops and Dot Notation in JS",
    date: "16 April 2021",
    feeling: "comfortable for now, expecting much harder things to come",
    jotting: "Learned how to use dot notation and for loop to access key-value properties in JS objects",
    timeSpent: "20 minutes",
    id: 3
}

notes.push(Add3)

console.log(" ")
console.log("**Daily Notes from NSS**")
console.log(" ")

// const searchTerm = "Data Structures"

// for (const note of notes) {
//     if (searchTerm === note.subject) {
//         console.log(`Note ${note.id}`)
//         console.log(`${note.date}`)
//         console.log(`Subject: ${note.subject}`)
//         console.log(`${note.jotting}`)
//         console.log(`Feeling: ${note.feeling}`)
//         console.log(" ")
//     }
// }

const createNote = (newNote) => {
        // get max current id
        const lastIndex = notes.length - 1
        const currentLastNote = notes[lastIndex]
        const maxID = currentLastNote.id
    
        // increase current max id by 1
    
        const idForNewNote = maxID + 1
    
        // Add the id property to new toy object
    
        newNote.id = idForNewNote
    
        // Add toy object to the array
    
        notes.push(newNote)
}

const logUpdate = {
    subject: "Functions in JavaScript",
    date: "16 April 2021",
    feeling: "comfortable for now, expecting much harder things to come",
    jotting: "Learned how to set up basic functions in JS and modify arrays",
    timeSpent: "50 minutes",
}

createNote(logUpdate)

for (const note of notes) {
    console.log(`*Note ${note.id}*`)
    console.log(`${note.date}`)
    console.log(`Subject: ${note.subject}`)
    console.log(`${note.jotting}`)
    console.log(`Feeling: ${note.feeling}`)
    console.log(`ID: ${note.id}`)
    console.log(" ")

// Note sure about millisecond conversion from Jan 1, 1970 with Date.now()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now