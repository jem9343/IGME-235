"use strict";
window.onload = init;

function init() {
    // When the user clicks on either the search button or the filter button,
    // a new data request is sent.
    document.querySelector("#searchbutton").onclick = getData;
    document.querySelector("#filterbutton").onclick = getData;
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            getData();
        }
    });

    /* This stuff happens "onload" */
    // declare some constants
    const searchField = document.querySelector("#searchterm");
    const prefix = "jem9343-"; // change 'abc1234' to your banjo id
    const titleKey = prefix + "title";

    // grab the stored data, will return `null` if the user has never been to this page
    const storedTitle = localStorage.getItem(titleKey);

    // if we find a previously set name value, display it
    if (storedTitle) {
        searchField.value = storedTitle;
    } else {
        searchField.value = "Jojo"; // a default value if `nameField` is not found
    }

}

const prefix = "jem9343-"; // change 'abc1234' to your banjo id
const titleKey = prefix + "title";
const searchField = document.querySelector("#searchterm");
let nsfw = false;
let term = ""; // we declared `term` out here because we will need it later

// Execute a function when the user presses a key on the keyboard

function getData() {
    // 1 - main entry point to web service
    const SERVICE_URL = "https://api.jikan.moe/v4/manga?&q=";

    // No API Key required!

    // 2 - build up our URL string
    let url = SERVICE_URL;

    // 3 - parse the user entered term we wish to search
    term = document.querySelector("#searchterm").value;
    if (term == null) {
        document.querySelector("#debug").innerHTML = "<b>Enter a search term first!</b>";
        return;
    }

    // get rid of any leading and trailing spaces
    term = term.trim();
    // encode spaces and special characters
    term = encodeURIComponent(term);

    localStorage.setItem(titleKey, term);

    // if there's no term to search then bail out of the function (return does this)
    if (term.length <= 2) {
        document.querySelector("#debug").innerHTML = "<b>Please enter at least three letters!</b>";
        return;
    }
    url += term;

    // 4 - update the UI
    document.querySelector("#debug").innerHTML = `<b>Querying web service with:</b> <a href="${url}" target="_blank">${url}</a>`;

    // 5 - create a new XHR object
    let xhr = new XMLHttpRequest();

    // 6 - set the onload handler
    xhr.onload = dataLoaded;

    // 7 - set the onerror handler
    xhr.onerror = dataError;

    // 8 - open connection and send the request
    xhr.open("GET", url);
    xhr.send();
}

function dataError(e) {
    console.log("An error occurred");
}

function dataLoaded(e) {
    // 1 - e.target is the xhr object
    let xhr = e.target;

    // 2 - xhr.responseText is the JSON file we just downloaded
    console.log(xhr.responseText);

    // 3 - turn the text into a parsable JavaScript object
    let obj = JSON.parse(xhr.responseText);

    // 4 - if there are no results, print a message and return
    if (obj.error) {
        let msg = obj.error;
        document.querySelector("#content").innerHTML = `<p><i>Problem! <b>${msg}</b></i></p>`;
        return; // Bail out
    }

    // 5 - if there is an array of results, loop through them
    // this is a weird API, the name of the key is the day of the week you asked for
    let results = obj.data;
    if (!results) {
        document.querySelector("#content").innerHTML = `<p><i>Problem! <b>No results for "${term}"</b></i></p>`;
        return;
    }

    // 6 - put together HTML
    let bigString = ""; // ES6 String Templating

    // Check the options

    let resultLengthToShow = 0;


    let checkBoxes = document.querySelectorAll("input");

    let currentlySelectedGenres = [];
    //for (let checkbox in checkBoxes) {
    //    if (checkbox.type == "checkbox") {
    //        currentlySelectedGenres.push(checkbox.innerHTML);
    //        console.log("True");
    //    }
    //if (checkbox.checked == true) {
    //     currentlySelectedGenres.push(checkbox.innerHTML);
    // https://stackoverflow.com/questions/2834350/get-checkbox-value-in-jquery

    // }
    // }

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].tagName == "INPUT" && checkBoxes[i].type == "checkbox" && checkBoxes[i].checked == true && checkBoxes[i].value != "nsfw") {
            currentlySelectedGenres.push(checkBoxes[i].value);
            console.log("True");
        }
    }

    let status = document.getElementById("status");
    let statusText = status.options[status.selectedIndex].innerHTML;
    let showAll = false;
    if (statusText == "Status")
    {
        showAll = true;
    }

    for (let i = 0; i < results.length; i++) {
        let result = results[i];
        let url = result.url;
        let title = result.title;
        let image = result.images.jpg.image_url;
        let ratingOfResult = result.genres;
        let isInappropriate = false;
        let isCorrectGenre = false;

        for (let i = 0; i < ratingOfResult.length; i++) {
            if (currentlySelectedGenres.length == 0 && showAll == true) {
                isCorrectGenre = true;
            }
            else {
                for (let j = 0; j < currentlySelectedGenres.length; j++) {
                    if (result.type == currentlySelectedGenres[i]) {
                        isCorrectGenre = true;
                    }
                }
            }

            if ((ratingOfResult[i].name == "Hentai" ||
            ratingOfResult[i].name == "Erotica" ||
            ratingOfResult[i].name == "Ecchi")
            && document.querySelector("#nsfw").checked == false) {
            isInappropriate = true;
        }
        }
        if ((isInappropriate != true && isCorrectGenre == true)) {

            resultLengthToShow += 1;
            //  isInappropriate = false;
            let score;
            let author = result.authors;
            let imageLine = `<a href=${url} target='_blank'><img src='${image}' title= '${title}'/></a>`;

            if (author.length >= 1 && author.length < 4) {
                let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                line += imageLine;
                let writtenBy = `<hr><h3>Created by:</h3>`;
                line += writtenBy;
                for (let i = 0; i < author.length; i++) {
                    let anotherAuthor = author[i].name;
                    let newAuthorLine = `<p>- ${anotherAuthor}</p>`
                    line += newAuthorLine;
                }
                bigString += line;
            }
            else if (author.length >= 4) {
                let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                line += imageLine;
                let writtenBy = `<hr><h3>Created by:</h3>`;
                line += writtenBy;
                for (let i = 0; i < 4; i++) {
                    let anotherAuthor = author[i].name;
                    let newAuthorLine = `<p>- ${anotherAuthor}</p>`
                    line += newAuthorLine;
                }
                let plusMore = `<p>Et. Al</p>`
                line += plusMore;
                bigString += line;
            }
            else {
                let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                line += imageLine;
                let writtenBy = `<h3>Author Not Listed</h3>`;
                line += writtenBy;
                bigString += line;
            }

            if (result.score == null) {
                score = `<h3>Score: No Rating Yet</h3>`;
            }
            else {
                score = `<h3>Score: ${result.score}</h3>`;
            }

            bigString += score;
            let endcap = `</div>`;
            bigString += endcap;
        }
        // 7 - display final results to user
        document.querySelector("#content").innerHTML = bigString;
        document.querySelector("#resultStatus").innerHTML = `<p><i>Here are <b>${resultLengthToShow}</b> results!</i></p>`;
    }

    //else {
    /*         for (let i = 0; i < results.length; i++) {
                let result = results[i];
                let url = result.url;
                let title = result.title;
                let image = result.images.jpg.image_url;
                let ratingOfResult = result.genres;
                let isInappropriate = false;
                let statusResult = result.status;
    
                for (let i = 0; i < ratingOfResult.length; i++) {
                    if ((ratingOfResult[i].name == "Hentai" ||
                        ratingOfResult[i].name == "Erotica" ||
                        ratingOfResult[i].name == "Ecchi")
                        && document.querySelector("#nsfw").checked == false) {
                        isInappropriate = true;
                    }
                }
                if (statusResult != status) {
                    isInappropriate = true;
                }
    
                if (isInappropriate != true) {
                    resultLengthToShow += 1;
                    //  isInappropriate = false;
                    let score;
                    let author = result.authors;
                    let imageLine = `<a href=${url} target='_blank'><img src='${image}' title= '${title}'/></a>`;
    
                    if (author.length >= 1 && author.length < 4) {
                        let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                        line += imageLine;
                        let writtenBy = `<hr><h3>Created by:</h3>`;
                        line += writtenBy;
                        for (let i = 0; i < author.length; i++) {
                            let anotherAuthor = author[i].name;
                            let newAuthorLine = `<p>- ${anotherAuthor}</p>`
                            line += newAuthorLine;
                        }
                        bigString += line;
                    }
                    else if (author.length >= 4) {
                        let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                        line += imageLine;
                        let writtenBy = `<hr><h3>Created by:</h3>`;
                        line += writtenBy;
                        for (let i = 0; i < 4; i++) {
                            let anotherAuthor = author[i].name;
                            let newAuthorLine = `<p>- ${anotherAuthor}</p>`
                            line += newAuthorLine;
                        }
                        let plusMore = `<p>Et. Al</p>`
                        line += plusMore;
                        bigString += line;
                    }
                    else {
                        let line = `<div class='result'><a href='${url}' target='_blank' class='titleOfManga'>${title}</a>`;
                        line += imageLine;
                        let writtenBy = `<h3>Author Not Listed</h3>`;
                        line += writtenBy;
                        bigString += line;
                    }
    
                    if (result.score == null) {
                        score = `<h3>Score: No Rating Yet</h3>`;
                    }
                    else {
                        score = `<h3>Score: ${result.score}</h3>`;
                    }
    
                    bigString += score;
                    let endcap = `</div>`;
                    bigString += endcap;
                }
                // 7 - display final results to user
                document.querySelector("#content").innerHTML = bigString;
                document.querySelector("#status").innerHTML = `<p><i>Here are <b>${resultLengthToShow}</b> results!</i></p>`;
            } */
    //}

}
