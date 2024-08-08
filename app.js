const express = require("express");
const mongoose = require("mongoose");
const Artwork = require("./models/artwork");
const ejs = require("ejs");

const app = express();
const dbURI = "mongodb+srv://aneta:password123!@web-dev-artsy.bpdnxol.mongodb.net/artsy?retryWrites=true&w=majority&appName=web-dev-artsy";

mongoose.connect(dbURI)
    .then((result) => app.listen(8080))
    .catch((error) => console.log(error));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

var artworks = [
{
    title: "Old Man",
    author: "Aneta Kotas",
    medium: "Charcoal and Graphite",
    description: "Quick drawing of an old Man."
},
{
    title: "Sunflowers",
    author: "Aneta Kotas",
    medium: "Charcoal and Graphite",
    description: "Quick drawing of sunflowers."
},
{
    title: "Young Woman",
    author: "Aneta Kotas",
    medium: "Charcoal and Graphite",
    description: "Practice work of a young woman."
},
{
    title: "Young Boy",
    author: "Aneta Kotas",
    medium: "Charcoal and Graphite",
    description: "Face practice."
},
{
    title: "Head",
    author: "Aneta Kotas",
    medium: "Dry Pastels",
    description: "First try with dry pastels."
},
{
    title: "Outside of the Window",
    author: "Aneta Kotas",
    medium: "Watercolors and back pen",
    description: "Painting of outside of my window."
},
{
    title: "Fields",
    author: "Aneta Kotas",
    medium: "Watercolors, pens and crayons",
    description: "View from a summer walk."
},
];

Artwork.insertMany(artworks)
    .then(() => mongoose.connection.close())
    .catch((error) => console.log(error));



app.get("/artworks", (request, response) => {
    Artwork.find()
        .then((result) => response.send(result))
        .then((error) => console.log(error));
});

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/myArt", (request, response) => {
    Artwork.find()
        .then(artworks => response.render("myArt", {artworks: artworks}))
});

app.get("/test", (req, res) => {
    res.render("test", { message: "EJS is working!" });
});



