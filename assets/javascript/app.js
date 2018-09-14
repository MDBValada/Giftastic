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
        tempButton.addClass("btn btn-default");
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





//

//last item in the javascript, triggering the initial function.
buttonMaker();