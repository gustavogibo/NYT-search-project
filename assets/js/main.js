
$(document).ready(function () {
    $("button").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $('#search-term').val().trim();
        var searchStartYear = $('#search-start-year').val().trim();
        var searchEndYear = $('#search-end-year').val().trim();
        console.log(searchTerm);

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "?begin_date=" + searchStartYear + "?end_date=" + searchEndYear + "&api-key=3c352abb9a0749d19d9361ab767b9b2b";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.response.docs;
                console.log(response);
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    console.log(i);
                    var headline = results[i].headline.main;
                    console.log(headline);
                    var by = results[i].byline.original;
                    console.log(by);
                    var pubDate = results[i].pub_date;
                    console.log(pubDate);
                }

            });
    });
});