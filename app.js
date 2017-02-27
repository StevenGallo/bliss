var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
    username: '9444bf37-deda-4406-ae96-523c49859412',
    password: 'gP4yf2WgDhZw',
    version: 'v3',
    version_date: '2016-05-19 '
});

var elements = document.body.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            let nodeText = node.nodeValue
            checkText = nodeText.replace(/\s\s+/g, ' ');
            if (checkText.length > 40) {
                console.log(checkText.length)
                var text = checkText;
                console.log(checkText)
                var replacedText = 'what???'
                if (text === 'Dialog') {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

// tone_analyzer.tone({ text: '<p>I need help getting each page to communicate and I think the way I am hiding the parent divs in popup.js won\'t work. I am confused on how to perform the action on the dom from the front.</p>' },
//     function(err, tone) {
//         if (err)
//             console.log(err);
//         else
//             console.log(JSON.stringify(tone, null, 2));
//     });