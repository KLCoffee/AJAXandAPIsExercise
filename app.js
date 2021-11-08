// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const stringJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
console.log(stringJSON);
const jokeJS1 = JSON.parse(stringJSON);
console.log(jokeJS1);
p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
axios.get (`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(friendsJS2 => {
   console.log(friendsJS2.data); 
   console.log(friendsJS2.data.quote);
   console.log(friendsJS2.data.character);
   p3.innerText = friendsJS2.data.character;
   p4.innerText = friendsJS2.data.quote;
}) 
    .catch (err => { 
    console.log(`Friends JS2 Failed`);
    console.log(err);

});

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

async function quoteFunc() {
    try {
const quoteJS3 = await axios.get (`https://friends-quotes-api.herokuapp.com/quotes/random`);
console.log(quoteJS3.data);
p5.innerText = quoteJS3.data.character;
p6.innerText = quoteJS3.data.quote;
}catch (err) {
    console.log(`Friends JS3 failed`);
    console.log(err);
}
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// Base URL for attaching endpoint
const baseURL2 = `https://api.tvmaze.com`;
// Endpoint for finding show by name (this works)
 const endpoint2 =`/search/shows?q=`;
 const queryString = `Mandalorian`;
 const fullEndPoint2 = baseURL2 + endpoint2 + queryString;
 const fullEndPoint2 = `https://api.tvmaze.com/*?*?search/shows?q=Mandalorian`

//  Trying to add endpoint to identify by id, season and episode.  Not finished Does not work
// const endpoint1 = ` /shows/:id`;
// const endpoint2 = `/episodebynumber?season=:season&number=:number`;
// const showId = `38963`
// const shwSea = 2
// const swhNum = 8
// const fullEndPoint2 = baseURL2 + endpoint1 + `${showId}` + episodeby

async function gettvMazeFunc(){
    try{
        const show = await axios.get(fullEndPoint2);
        console.log(`Mandalorian was successful`);
        p7.innertText = `Mandalorian`;
        console.log(show.data);
        const arrayOfResults = show.data;
        for (s of arrayOfResults) {
            console.log(s);
            console.log(s.show.name);
            p7.innerText = s.show.name;
        }
    }catch (err){
    console.log(`NOT successful`);
    console.log(err);
    }
}
tvMazeFunc();