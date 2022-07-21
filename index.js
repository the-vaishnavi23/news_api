
const { on } = require('events');
const { link } = require('fs');
const port = 8000;
const https = require('https');
const { url } = require('inspector');
const { title } = require('process');
var headlineArr = [];
https.get('https://time.com', res => {
    let data = "";
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    res.on('data', chunk => {
        data = data + (chunk);
    });

    
    res.on('end', () => {
        console.log('Response ended: ');
        
        // const res = (Buffer.concat(data).toString());
        console.log(data);
        
        // var slots = res.result.slots;
        // var i = 0;
        
        // for (news of slots) {
        //     if (i < 6) {
        //         var headlineObj = {"title": news.story.content.title, "link" : "https:"+news.story.content.url}
        //         headlineArr.push(headlineObj);
        //         i++;
        //     }
        // }
        //console.log(headlineArr);
    })
}).on('error', err => {
    console.log('Error: ', err.message);
});
