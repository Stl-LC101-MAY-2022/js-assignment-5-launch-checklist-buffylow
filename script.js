window.addEventListener("load", function() {
    let document = window.document;
    let pilotStatus = document.querySelector("li[id=pilotStatus]");
    let copilotStatus = document.querySelector("li[id=copilotStatus]");
    let list = document.querySelector("div[id=faultyItems]");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass))
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

            let missionTarget = document.getElementById("missionTarget");
            let planet = pickPlanet(listedPlanets);
            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let moons = planet.moons;
            let imageUrl = planet.image;

            addDestinationInfo(window.document, name, diameter, star, distance, moons, imageUrl)
   });


    form.addEventListener("submit", function
        (event){
            let document = window.document;

            list.style.visibility = "hidden";

            if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
                alert("All fields are required!");

                event.preventDefault();

           return;
            } else if (validateInput(pilotName.value) === "Is a Number") {
        
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(copilotName.value) === "Is a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(fuelLevel.value) !== "Is a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(cargoMass.value) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else {
            let pilotStatus = window.document.querySelector("li[id=pilotStatus]");
            let copilotStatus = window.document.querySelector("li[id=copilotStatus]");
            let pilotName = window.document.querySelector("input[name=pilotName]");
            let copilotName = window.document.querySelector("input[name=copilotName]");
            let cargoMass = window.document.querySelector("input[name=cargoMass]");

            formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);

            event.preventDefault();
        }

   });
   
});