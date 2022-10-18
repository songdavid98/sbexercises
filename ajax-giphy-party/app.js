console.log("Let's get this party started!");


async function addGIF( api_key, q ) {
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: {api_key, q}});
    console.log(res.data.data[0]);
    let GIFSRC = res.data.data[0].images.original.url;
    let newGIF = $("<img>", {
        src: GIFSRC
    });

    console.log(newGIF);
    $("#gifs").append( newGIF );
    return res;
}

$("form").on("submit", async function(e) {
    e.preventDefault();
    let query = $("#query").val();
    console.log(query);
    let res = await addGIF( "PnImHU5zqhNKkqv2dNwqULzgL1QDzvYX", query );
});

$("#remove").on("click", function() {
    $("#gifs").empty();
});