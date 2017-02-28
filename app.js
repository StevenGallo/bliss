var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
    username: '9444bf37-deda-4406-ae96-523c49859412',
    password: 'gP4yf2WgDhZw',
    version: 'v3',
    version_date: '2016-05-19'
});

var elements = document.body.querySelectorAll('p,li,td');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var nodeCheck = element.childNodes[j];

        if (nodeCheck.nodeType === 3) {
            var nodeText = nodeCheck.nodeValue
            checkText = nodeText.replace(/\s\s+/g, ' ');
            if (checkText.length > 20) {
                var text = checkText;
                //console.log(checkText)
                var replacedText = ':::::BLISS:::::'
                tone_analyzer.tone({ text: text, tones: 'emotion', sentences: false },
                    function(err, tone) {
                        if (err)
                            console.log(err);
                        else
                        //console.log(JSON.stringify(tone, null, 2));
                            console.log(tone.document_tone.tone_categories[0].tones[0].score)
                        console.log(nodeCheck)
                        return tone
                    });
                if (tone.document_tone.tone_categories[0].tones[0].score > .1 || tone.document_tone.tone_categories[0].tones[1].score > .1) {
                    element.replaceChild(document.createTextNode(replacedText), nodeCheck);
                }
            }
        }
    }
}