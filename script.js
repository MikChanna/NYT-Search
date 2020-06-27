var apiKey = "F39mLqLDATs5QCfawYwnnYYuNHJwOLhu";
var searchInputText = $(".searchInput"); ///maybe
var startYear = "&begin_date=" + $(".startYear");
var endYear = "&end_date=" + $(".endYear");
var searchFilter = searchInputText + startYear + endYear;
var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInputText + "&api-key=" + apiKey;

$.ajax({
    url: URL,
    method: "GET"
}).then(function(response) {

    console.log(response);
    var responseArr = response.data;
    responseArr.length = $(".numberToRetrieve");

    for (let index = 0; i < responseArr.length; i++) {

        var articlesHeadlines = response[i].headline;


    }



});