//Pre-fabricated animal topic variables from the assignment. Replace with personalized list at end
let subjects = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

// create the intial function to grab the variables from the topic array and put them on screen as buttons.
function buttonMaker(){
    //clear the id to make room for the buttons!
    $("#buttons-container").empty();
    //for loop to go through the topics array and make a button for eack item.
    for (let i = 0; i < subjects.length; i++) {
        //create a temporary variable and put the button html into it
        let tempButton = $("<button>");
        //add bootstrap class elements to the button variable
        tempButton.addClass("btn btn-default");
        //set the data-name attribute to the current array item
        tempButton.attr("data-name", subjects[i]);
        //set the visible text on the button to the current array item
        tempButton.text(subjects[i]);
        //finally, APPEND the new button to the buttons-container div.
        $("#buttons-container").append(tempButton);
    }
};

//last item in the javascript, triggering the initial function.
buttonMaker();