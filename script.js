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

base("paints").select({}).eachPage(gotPageOfShades, gotAllShades);

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
        shadeTitle.classList.add("shade-images");
        shadeImage.src = shade.fields.shade_image[0].url;
        shadeContainer.append(shadeImage);

    });
}