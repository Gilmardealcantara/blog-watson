var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1');

var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2019-02-03',
    iam_apikey: process.env.SECRET_NLU,
    url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

const dataAnalyze = (text, callback) => {
    var parameters = {
        'text': text,
        'features': {
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 5
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 5
            }
        }
    }
    console.log(callback);
    naturalLanguageUnderstanding.analyze(parameters, (err, response) => {
        console.log(callback);
        callback(err, response);
        // if (err){
        //   console.log('error:', err);
        //   // res.json({err: err});
        // }else{
        //   console.log(JSON.stringify(response, null, 2));
        //   // res.json({data: response});
        // }
    });
}

module.exports = dataAnalyze;