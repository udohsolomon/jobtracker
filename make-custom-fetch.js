const fetch = require('node-fetch');

const makeCustomFetch = async url => {
    let data;
    switch (url) {
        case 'https://apply.workable.com/podia/?lng=en':
            data = await fetch("https://careers-page.workable.com/api/v2/accounts/podia/jobs", {
              "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "content-type": "application/json;charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "_workable_visitor=BAhJIilhM2Q3YWQ5ZC1hMDI1LTQ0ODQtYmRkZS01MTQ4ZjEyMDRhY2YGOgZFRg%3D%3D--43b995dff2ad0d8416b368c16c4ebfd22d4f030a; wmc=%7B%22cookie_id%22%3A%22ceeb9004-87ab-4bf1-9790-4bf839830521%22%7D; _hjid=3f2abf12-c16a-4384-9e44-47f176d61438; _ga=GA1.2.2123503578.1576615274; __cfduid=d420b4bc19e12d2a3f7b5ccb58e83e0ba1582048905; _gid=GA1.2.277078619.1582048907; _gat_UA-135782126-1=1"
              },
              "referrer": "https://apply.workable.com/podia/?lng=en",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": "{\"query\":\"\",\"location\":[],\"department\":[],\"worktype\":[],\"remote\":[]}",
              "method": "POST",
              "mode": "cors"
            }).then(resp => {
                return resp.json()
            }).then(json => {
                return { data: json };
            });
            return data;
            break;
        case 'https://apply.workable.com/convertkit/?lng=en':
            data = await fetch("https://careers-page.workable.com/api/v2/accounts/convertkit/jobs", {
              "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "content-type": "application/json;charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "_workable_visitor=BAhJIilhM2Q3YWQ5ZC1hMDI1LTQ0ODQtYmRkZS01MTQ4ZjEyMDRhY2YGOgZFRg%3D%3D--43b995dff2ad0d8416b368c16c4ebfd22d4f030a; wmc=%7B%22cookie_id%22%3A%22ceeb9004-87ab-4bf1-9790-4bf839830521%22%7D; _hjid=3f2abf12-c16a-4384-9e44-47f176d61438; _ga=GA1.2.2123503578.1576615274; __cfduid=d561e05cdcca622c760f421432ab1b5ef1585107772; _gid=GA1.2.830171834.1585107775; _gat_UA-135782126-1=1"
              },
              "referrer": "https://apply.workable.com/convertkit/?lng=en",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": "{\"query\":\"\",\"location\":[],\"department\":[],\"worktype\":[],\"remote\":[]}",
              "method": "POST",
              "mode": "cors"
            }).then(resp => {
                return resp.json()
            }).then(json => {
                return { data: json };
            });
            return data;
            break;
        case 'https://apply.workable.com/wildbit/':
            data = await fetch("https://careers-page.workable.com/api/v2/accounts/wildbit/jobs", {
              "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "content-type": "application/json;charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "_workable_visitor=BAhJIilhM2Q3YWQ5ZC1hMDI1LTQ0ODQtYmRkZS01MTQ4ZjEyMDRhY2YGOgZFRg%3D%3D--43b995dff2ad0d8416b368c16c4ebfd22d4f030a; wmc=%7B%22cookie_id%22%3A%22ceeb9004-87ab-4bf1-9790-4bf839830521%22%7D; _hjid=3f2abf12-c16a-4384-9e44-47f176d61438; _ga=GA1.2.2123503578.1576615274; __cfduid=d561e05cdcca622c760f421432ab1b5ef1585107772; _gid=GA1.2.1362439547.1585258613; _gat_UA-135782126-1=1"
              },
              "referrer": "https://apply.workable.com/wildbit/",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": "{\"query\":\"\",\"location\":[],\"department\":[],\"worktype\":[],\"remote\":[]}",
              "method": "POST",
              "mode": "cors"
            }).then(resp => {
                return resp.json()
            }).then(json => {
                return { data: json };
            });
            return data;
            break;
        default:
            return null;
    }
}

module.exports = makeCustomFetch;
