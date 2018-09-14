// storage location for the giphy api Key:RROn2ey6tvd2oO0W6g4wVCv00FBhnN49

//Pre-fabricated animal topic variables from the assignment. Replace with personalized list at end
let subjects = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

// create the intial function to grab the variables from the topic array and put them on screen as buttons.
function buttonMaker(){
    //Make room for the buttons!
    $("#buttons-container").empty();
    //Loop to go through the topics array and dynamically make a button for each item.
    for (let i = 0; i < subjects.length; i++) {
        //create a temporary variable and put the button html into it
        let tempButton = $("<button>");
        //add bootstrap class elements to the button variable
        tempButton.addClass("btn btn-default tracking");
        //set the data-name attribute to the current array item
        tempButton.attr("data-name", subjects[i]);
        //set the visible text on the button to the current array item
        tempButton.text(subjects[i]);
        //finally, APPEND the new button to the buttons-container div.
        $("#buttons-container").append(tempButton);
    }
};
//adding an additional button with the source the text input(and ultimately redrawing the buttons panel with the additions)
$("#add-topic").on("click", function(event){
    //I need someone to explain why this is needed!!!
    event.preventDefault();
    //grab the entered text from the form and enter it into a variable
    let formInput = $("#topic-input").val().trim();
    //now add this variable to the end of the subjects array
    subjects.push(formInput);
    //now clear the form!...or a least replace the value with nothing...why is THIS the solution?
    $("#topic-input").val("");
    //finally, call the buttonmaker function again
    buttonMaker()
});

//creating the function to retrieve information from the giphy API via the data-name attribute
function retrieveGifs(){
    //retrieve the value of the data-name and return it to a variable from anything selected with a data-name attribute
    let gifName = $(this).attr("data-name")
    //create a variable to put the Giphy call into with the api KEY
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RROn2ey6tvd2oO0W6g4wVCv00FBhnN49&q=" + gifName + "&limit=20&offset=0&lang=en";

    //ajax statement
    $.ajax({url: queryURL, method:"GET"}).done(function(result) {
        let resultArray = result;
        console.log(resultArray);
        //i'm emptying the image container for now so it'll clear whenever a button is clicked
        $("#gif-view").empty();
        
        //Now for the real fun! grabbing the correct image information and putting it on screen!
        //using a for loop to grab only what is needed from the grabbed array
        for (let i = 0; i < resultArray.data.length; i++) {
            //make a variable and start filling it with the necessary html!
            let newDiv = $("<div>");
  //          console.log(newDiv);
            //add an identifying class for futureproofing css
            newDiv.addClass("imageDiv");
//            console.log(newDiv);
            //make a short-term variable for the Rating text
            let ratingText = $("<h3>");
            ratingText.html("Rating: " + resultArray.data[i].rating.toUpperCase());
//            console.log(ratingText);
            //then add it to the div!
            newDiv.append(ratingText);
 //           console.log(newDiv);
            //make another short-term variable for the image url
            let imageUrl = $("<img>");
            imageUrl.attr("src", resultArray.data[i].images.fixed_height_still.url)
            console.log(imageUrl);
            imageUrl.addClass("player")
            imageUrl.attr("animation-state", "still");
            imageUrl.attr("data-still", resultArray.data[i].images.fixed_height_still.url);
            imageUrl.attr("data-animate", resultArray.data[i].images.fixed_height.url);
            newDiv.append(imageUrl);
            //finally, let's append the new div to the actual gif-view container!
            $("#gif-view").append(newDiv);
            //now why the heck doesn't this work?!?!...apparently it WAS working, but i hadn't saved an HTML fix from ages ao, so it wasn't ABLE to show. now i feel like an idiot!
            
        }
    });

};

//need to add a boolean check tied to the state of the image once i can actually get the thing to load on page!
//except it really doesn't work. damnit. what the heck did i do wrong THIS time?
function gifPlayer () {

    if ($(this).attr("animation-state") == "still") {
        $(this).html("<img src='" + $(this).attr("data-animate") + "'>");
        $(this).attr("animation-state", "animate");
    }
    else {
        $(this).html("<img src='" + $(this).attr("data-still") + "'>");
        $(this).attr("animation-state", "still");
    }

};



//

//last items in the javascript, triggering the initial function.
buttonMaker();
//creating a document on-click for the created buttons to trigger the proper function? this feels wrong. created a "tracking" class just for the data buttons
$(document).on("click", ".tracking", retrieveGifs);
//need to create an on-click to swap the states of the images from still to animate and back (same on-click?)
$(document).on("click", ".player", gifPlayer);