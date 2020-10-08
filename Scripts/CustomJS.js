function Sunset(...buildings) {
    // First building can always see sunset   
    let results = ['See'];
    // For each building (excluding the first one)
    for (let i = 1; i < buildings.length; i++) {
        // assume no building is bigger
        let bigger = false;
        // Check if any building before it is larger
        for (let j = 0; j < i; j++) { 
            // previous greater than current?
            if (buildings[j] >= buildings[i]) { 
                // If previous building is bigger
                bigger = true; 
                // stop checking if bigger is found
                break; 
            } else {
                // If previous building is smaller, check next
                continue;
            }
        }
        // If there's a bigger building we're blind, otherwise we can see
        bigger ? results.push("Blind") : results.push("See");
    }
    // How many can see?
    let see = results.filter(x => x == 'See').length;
    results.push(see);
    // How many are blind?
    let blind = results.filter(x => x == 'Blind').length;
    results.push(blind);
    document.getElementById("result").innerText = results;
}

function BuildIt(stories, building) {
    stories = parseInt(stories.value);
    if (stories == 0 || isNaN(stories)) {
        document.getElementById(building.id).setAttribute("class", "");
    } else {
        document.getElementById(building.id).setAttribute("class", "skyscraper gray");
    }
    let height = stories * 50;

    building.animate([
        // keyframes
        { height: building.style.height },
        { height: height.toString() + "px" }
    ], {
        // timing options
            duration: 1000,
            fill: 'forwards',
            easing: "ease-in-out"
    });
}

function Demolish() {
    console.log("Rubbles...")
    document.getElementById("sky1").removeAttribute("class");
    document.getElementById("sky2").removeAttribute("class");
    document.getElementById("sky3").removeAttribute("class");
    document.getElementById("sky4").removeAttribute("class");
    document.getElementById("sky5").removeAttribute("class");
    document.getElementById("skyscrapers").style.height = 0;
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById("result").innerText = '';
    document.getElementById('b1').focus();
}