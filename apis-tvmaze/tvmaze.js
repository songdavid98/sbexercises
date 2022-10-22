"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const $episodesList = $("#episodes-list");

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm( q ) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${q}`);
  let output = [];

  for ( let s of res.data ) {
    let obj = {};
    if (s.show.image == null) {
      obj = {
        id: s.show.id,
        name: s.show.name,
        summary: s.show.summary,
        image: "https://tinyurl.com/tv-missing"
      };
    }
    else {
      obj = {
        id: s.show.id,
        name: s.show.name,
        summary: s.show.summary,
        image: s.show.image.original
      };
    }
    
    output.push( obj );
  }
  console.log(output);
  return output;
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    let image = "";
    if (show.image == "") {
      image = "https://tinyurl.com/tv-missing";
    }
    else {
      image = show.image;
    }
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
         <img class="card-img-top" src="${image}">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) { 
  let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  let output = [];
  for (let epi of res.data) {
    let obj = {
      id: epi.id,
      name: epi.name, 
      season: epi.season,
      number: epi.number
    };
    output.push(obj);
  }
  console.log(output);
  return output;
}

/** Given an array of episode information, populate the #episodes-list part of the DOM*/

function populateEpisodes(episodes) { 
  $episodesArea.css("display","inline");
  $episodesList.empty();
  for ( let ep of episodes ) {
    const $ep = `<li>${ep.name} (season ${ep.season}, number ${ep.number})</li>`;
    $episodesList.append( $ep );
  }
  console.log( $episodesList );
}

$showsList.on("click", async function(evt) {
  if ( evt.target.tagName == "BUTTON" ) {
    let showId = $(evt.target).closest(".Show").data("show-id");

    let eps = await getEpisodesOfShow( showId );

    populateEpisodes( eps );
  }

});