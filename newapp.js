//randomuser.me

// 1. Get some peeps.
//2. Display peeps.
//3. Set up a listener so we can filter peeps.

function Peep(raw) {
    this.name = `${raw.name.first} ${raw.name.last}`;
    this.location = `${raw.location.city}, ${raw.location.state}`;
    this.image = raw.picture.medium;

    return this;
}

window.addEventListener('load', () => {
    console.log('hello');
    getPeeps(showPeeps);
});

//Call 'success' once we get peeps

function getPeeps(success) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/?results=500');
    request.addEventListener('load', () => {
        //const response = JSON.parse(request.responseText);
        //const results = response.results;
        const { results } = JSON.parse(request.responseText); //new line, destructuring
        //const response = JSON.parse(request.responseText); //we don't care about whole response
        //destructuring, don't give a name to each property only one we care about
        //console.log(results.map(person => person.email)); //return person.email
        //Convert the complex person object into a simpler one.
        const peeps = results.map(person => new Peep(person));
        success(peeps); //render to the screen
        //console.log(peeps);
    });
    request.send();
}

const showPeeps = peeplist => {
    console.log(peeplist);
    //clear the list of peeps in the DOM
    const parent = document.querySelector('#peeps');
    parent.innerHTML = ''; //remove all child elements

    //re-render all peeps in peeplist
    peeplist.forEach(peep => {
        //create li 
        const li = document.createElement('li');
        //render mustache template
        li.innerHTML = Mustache.render(
            document.querySelector('#peep-template').innerHTML,
            peep //pulling from peep object that we constructed
        );
        //add li to parent
        parent.appendChild(li);
    });
};


