let request = require('request')

request("https://quotesondesign.com/wp-json/wp/v2/posts/?filter[orderby]=rand", function(err, response, body){
    let bodyJson = JSON.parse(body)
    let randomQuote = bodyJson[0]["content"]
    document.getElementById('quote').innerHTML = randomQuote
})