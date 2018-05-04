
$(document).ready(function () {
    // console.log("Hello");
    $("button").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $('#search-term').val().trim();
        // var searchRecords = $('#search-records').val().trim();
        var searchStartYear = $('#search-start-year').val().trim();
        var searchEndYear = $('#search-end-year').val().trim();
        console.log(searchTerm);

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"?begin_date="+searchStartYear+"?end_date="+searchEndYear+"&api-key=3c352abb9a0749d19d9361ab767b9b2b";
        // console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (chicken) {
                var results = chicken.response.docs;
                console.log(chicken);
                console.log(results);

                for(var i = 0; i < results.length; i++ ){
                    // var headline = results.
                }
              
            });
    });
});