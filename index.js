const express = require("express")
const format = require("date-format");

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to my API</h1>");
})

app.get("/api/v1/instagram", (req, res) => {
    const instagram = {
        username: "beyond_singularity",
        followers: 239,
        follows: 91,
        date: format.asString("dd-MM-yy hh:mm:ss", new Date())
    }
    res.status(200).json(instagram);
})

app.get("/api/v1/facebook", (req, res) => {
    const facebook = {
        username: "Abhishek Sharma",
        followers: 501,
        follow: 1010,
        date: format.asString("dd-MM-yy hh:mm:ss", new Date())
    }
    res.status(200).json(facebook);
})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedin = {
        username: "Abhishek Sharma",
        followers: 2012,
        follow: 87,
        date: format.asString("dd-MM-yy hh:mm:ss", new Date())
    }
    res.status(200).json(linkedin);
})

app.get("/api/v1/:token", (req, res) => {
    const { token } = req.params;
    res.status(200).json(token);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})