function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display = "block";

    //Set default location if one isn't provided
    let location = document.querySelector("#location").value || "Ann Arbor";

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let unitInput = document.getElementsByName("temp");
    let format = unitInput[1].checked ? unitInput[1].value : unitInput[0].value;

    // let format = document.querySelectorAll("input[name=temp]:checked").value || "imperial";

    // Your code here.
    console.log("Format is : " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?";
    // Your code here.  
    if (/\d/.test(parseInt(Array.from(location)[0]), 10)) {
        if (/\s/.test(location)) {
            query += "zip=" + location.split(" ")[0] + location.split(" ")[1];
        }
        else {
            query += "zip=" + location;
        }
    }

    else {
        query += "q=" + location;
    }

    query += "&units=" + format + "&appid=" + "970aa03a90f28399253607178b53951c";
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp"); 
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = json.name;
        temp.innerHTML = json.main.temp + " with " + json.weather[0].description;
        tempImg.src = " http://openweathermap.org/img/wn/" + json.weather[0].icon + ".png";
        tempImg.alt = json.weather[0].description;
    });
}
