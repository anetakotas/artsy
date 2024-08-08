const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    response.setHeader("Content-Type", "text/html");

    let path = "./views/";
    switch (request.url) {
        case "/":
            path += "index.html";
            response.statusCode = 200;
            break;
        case "/myArt":
            path += "myArt.html";
            response.statusCode = 200;
            break;
        case "/randomArt":
            path += "randomArt.html";
            response.statusCode = 200;
            break;
        case "/yourArt":
            path += "yourArt.html";
            response.statusCode = 200;
            break;
        default:
            path += "404.html";
            response.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        } else {
            response.end(data);
        }
    });

});

