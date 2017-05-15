var http = require('http');
const yelp = require('yelp-fusion');
var url = require('url');
//Add you client id and secret key in below vairables
const clientId = "";
const clientSecret = "";

var server = http.createServer(function(req, res) {
    var parameters = url.parse(req.url, true);
    var query = parameters.query;
    var reqTerm = query["term"];
    var reqLoc = query["location"];
    console.log(parameters);
    if (parameters.pathname.includes('search')) {
        console.log("In Search if");
        yelp.accessToken(clientId, clientSecret).then(response => {
            const token = response.jsonBody.access_token;
            const client = yelp.client(token);
            client.search({
                term: reqTerm,
                location: reqLoc
            }).then(response => {

                res.setHeader('Content-Type', 'application.json');
                res.end(JSON.stringify(response.jsonBody.businesses));
            });
        });
    } else if (parameters.pathname.includes('businesses')) {
        console.log('businesses loop');
        yelp.accessToken(clientId, clientSecret).then(response => {
            const token = response.jsonBody.access_token;
            const client = yelp.client(token);
            client.search({
                term: reqTerm,
                location: reqLoc
            }).then(response => {
                res.setHeader('Content-Type', 'application.json');
                res.end(JSON.stringify(response.jsonBody));
            });
        });
    }
});
server.listen(3000);
