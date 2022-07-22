
const { on } = require('events');
const { link } = require('fs');
const port = 8000;
const https = require('https');
const { url } = require('inspector');
const { title } = require('process');
var headlineArr = [];
https.get('https://api.spokenlayer.net/web-player/playlist?channel=time-com&_v=alpha&n=6', res => {
    let data = "";
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    res.on('data', chunk => {
        data = data + (chunk);
    });

    res.on('end', () => {
        var res = JSON.parse(data);
        var slots = res.result.slots;
        
        for (news of slots) {
            var headlineObj = {"title": news.story.content.title, "link" : "https:"+news.story.content.url}
            headlineArr.push(headlineObj);
        }
        console.log(headlineArr);
    })
}).on('error', err => {
    console.log('Error: ', err.message);
});
