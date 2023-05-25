const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "templates"), err=>{
//     if(err) throw new Error()

//     console.log("Folder was created successfully");
// })

// fs.mkdir(path.join("notes"), err=>{
//     if(err) throw new Error()

//     console.log("Folder was created successfully");
// })

fs.writeFile(path.join(__dirname, "notes", "note.txt"), "Hello this is written in 15.05.2023", err=>{
    if(err) throw new Error()

    console.log("File was created successfully");

    fs.appendFile(path.join(__dirname, "notes", "note.txt"), " and changed with appendFile method", err=>{
        if (err) throw new Error()

        console.log("File was changed successfully");

        fs.readFile(path.join(__dirname, "notes", "note.txt"), "utf-8", (err, data)=>{
            if(err) throw new Error()

            console.log(data);
        })
    })
})

