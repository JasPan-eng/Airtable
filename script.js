// console.log("Is our script file working?"); 

// Load the airtable Library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyHh0ithtM3ZXOjR" }).base(
    "appit8iOkFSyDYCO5"
);

// get our collection, get all the paints
// specify types

base("paints").select({ view: "Grid view" }).eachPage(gotPageOfShades, gotAllShades);

//
var shades = [];

//
// callback function that receives our data
function gotPageOfShades(records, fetchNextPage) {
    console.log("gotPageOfShades()");
    // add the records from this page to our shades array
    shades.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllShades(err) {
    console.log("gotAllShades()");

    // report an error, you'd want to do something better than this in production
    if (err) {
        console.log("error loading data");
        console.error(err);
        return;
    }

    // call functions to log and show the shades
    consoleLogShades();
    showShades();
}

// just loop through the books and console.log them
function consoleLogShades() {
    console.log("consoleLogShades()");
    shades.forEach((shade) => {
        console.log("Shade:", shade);
    });
}

// loop through Airtable data, and it onto the page
function showShades() {
    console.log("showShades()");
    shades.forEach((shade) => {

        var shadeContainer = document.createElement("div")
        shadeContainer.classList.add("shade-container");
        shadeContainer.style.backgroundColor = shade.fields.hex;
        document.querySelector(".container").append(shadeContainer);

        //

        var shadeTitle = document.createElement("h1");
        shadeTitle.classList.add("shade-title");
        shadeTitle.innerText = shade.fields.shade_title;
        shadeContainer.append(shadeTitle);

        //
        var shadeDescription = document.createElement("h2");
        shadeDescription.classList.add("shade-description");
        shadeDescription.innerText = shade.fields.shade_description;
        shadeContainer.append(shadeDescription);

        //
        var shadeImage = document.createElement("img");
        shadeImage.classList.add("shade-image");
        shadeImage.src = shade.fields.shade_image[0].url;
        shadeContainer.append(shadeImage);

        shadeContainer.addEventListener("click", function() {
            shadeTitle.classList.toggle("active");
            shadeDescription.classList.toggle("active");
            shadeImage.classList.toggle("active");

            // add event listener to add active class to song container
            shadeContainer.addEventListener("click", function(event) {
                shadeDescription.classList.toggle("active");
                shadeImage.classList.toggle("active");
            });

            // get genre field from airtable
            // loop through the array and add each genre as
            // a class to the shade container
            var shadeColor = shade.fields.color;
            shadeColor.forEach(function(color) {
                shadeContainer.classList.add(color);
            });

            // clicking on filter by pop
            // change background of pop genres to red
            // else change to white
            var filterBlack = document.querySelector(".js-black");
            filterBlack.addEventListener("click", function() {
                if (shadeContainer.classList.contains("black")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            // filter by indie music
            var filterBlue = document.querySelector(".js-blue");
            filterBlue.addEventListener("click", function() {
                if (shadeContainer.classList.contains("blue")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }

            });
            var filterBrown = document.querySelector(".js-brown");
            filterBrown.addEventListener("click", function() {
                if (shadeContainer.classList.contains("brown")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterGreen = document.querySelector(".js-green");
            filterGreen.addEventListener("click", function() {
                if (shadeContainer.classList.contains("green")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterGrey = document.querySelector(".js-grey");
            filterGrey.addEventListener("click", function() {
                if (shadeContainer.classList.contains("grey")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterOrange = document.querySelector(".js-orange");
            filterOrange.addEventListener("click", function() {
                if (shadeContainer.classList.contains("orange")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterGreen = document.querySelector(".js-green");
            filterGreen.addEventListener("click", function() {
                if (shadeContainer.classList.contains("green")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterGreen = document.querySelector(".js-green");
            filterGreen.addEventListener("click", function() {
                if (shadeContainer.classList.contains("green")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });

            var filterGreen = document.querySelector(".js-green");
            filterGreen.addEventListener("click", function() {
                if (shadeContainer.classList.contains("green")) {
                    shadeContainer.style.background = "red";
                } else {
                    shadeContainer.style.background = "white";
                }
            });



            // filter reset
            var filterReset = document.querySelector(".js-reset");
            filterReset.addEventListener("click", function() {
                songContainer.style.background = "white";
            });
        });
    })
}