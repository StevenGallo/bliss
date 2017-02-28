var watson = require('watson-developer-cloud');
var $ = require('jquery')

var tone_analyzer = watson.tone_analyzer({
    username: '9444bf37-deda-4406-ae96-523c49859412',
    password: 'gP4yf2WgDhZw',
    version: 'v3',
    version_date: '2016-05-19'
});
$(document).ready(bliss)

function bliss() {
    // setInterval(bliss, 30000)
    let elements = document.body.querySelectorAll('p,li,td,a');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            let nodeCheck = element.childNodes[j];

            if (nodeCheck.nodeType === 3) {
                let nodeText = nodeCheck.nodeValue
                checkText = nodeText.replace(/\s\s+/g, ' ');
                if (checkText.length > 20) {
                    let text = checkText;
                    //console.log(checkText)
                    let replacedText = ':::::BLISS:::::'
                    tone_analyzer.tone({ text: text, tones: 'emotion', sentences: false },
                        function(err, tone) {
                            if (err)
                                console.log(err);
                            else
                            //console.log(JSON.stringify(tone, null, 2));
                                console.log(tone.document_tone.tone_categories[0].tones[0].score)
                            console.log(nodeCheck)
                            if (tone.document_tone.tone_categories[0].tones[0].score > .2 || tone.document_tone.tone_categories[0].tones[1].score > .2) {
                                element.replaceChild(document.createTextNode(replacedText), nodeCheck);
                            }
                        });
                }
            }
        }
    }
}