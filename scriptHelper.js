// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div. used temporal literals to call on elements from JSON

    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
        <img src="${imageUrl}">`;
}
// Add an alert to notify the user that all fields are required. alert= return, isNaN is atuomatic value testing function
function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    }
    if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    if (!isNaN(Number(testInput))) {
        return "Is a Number";
    }
}
// form submission for DOM Elements and validation 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
            let copilotStatus = document.querySelector("li[id=copilotStatus]");
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let cargoMass = document.querySelector("input[name=cargoMass]");
            let pilotStatus = document.querySelector("li[id=pilotStatus]");
            let fuelStatus = document.querySelector("li[id=fuelStatus]")
            let cargoStatus = document.querySelector("li[id=cargoStatus]")
            let launchStatus = document.querySelector("h2[id=launchStatus]");

            list.style.visibility = "hidden";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

       if (Number(fuelLevel) >= 10000) {
            fuelStatus.innerHTML = `Fuel levels adequate for launch`;
 
       }

       if (Number(cargoLevel) <= 10000) {
            cargoStatus.innerHTML = `Cargo mass ideal; ready for launch`;
          
       }

        if (Number(cargoLevel) > 10000) {
           list.style.visibility = "visible";
           cargoStatus.innerHTML = `Cargo mass too excessive for launch`;
           launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
           launchStatus.style.color = "rgb(199, 37, 78)";
        
        }

        if (Number(fuelLevel) < 10000) {
            let faultyItems = document.querySelector("div[id=faultyItems]");

            list.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel levels inadequate for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";

                   
       }


       if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    
       }

    return list;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });

    return planetsReturned;
}
// choosing random planet from index in JSON
function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;