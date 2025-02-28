(() => { 
    let apiURL = "https://mhw-db.com/monsters/";
        let id = Math.floor(Math.random() * (61 - 1) + 1);
        apiURL += id;
        fetch(apiURL)
            .then(function(response) {return response.json();})
            .then(function(monster){
                console.log(monster);
                let htmlOutput = `<h2>${monster.name}!</h2>`;
                htmlOutput += `<p>The ${monster.name} is a ${monster.type}, ${monster.species} class monster.</p>`
                htmlOutput += "<p>Elemental Affinities:</p><ol><li>Resistant *</li><li>Neutral **</li><li>Vulnerable ***</li>"
                htmlOutput += "<ul>"
                monster.weaknesses.forEach(function(weakness){
                    htmlOutput += `<li>${weakness.stars} Star: ${weakness.element}</li>`
                })
                htmlOutput += "</ol>"
                htmlOutput += "</ul><p>It can be found in the following locales: </p> <ol>";
                monster.locations.forEach(function(habitats){
                    htmlOutput += `<li>${habitats.name}</li>`
                })
                    htmlOutput += "</ol>"
                document.querySelector("#monster").innerHTML = htmlOutput;
            })
})();