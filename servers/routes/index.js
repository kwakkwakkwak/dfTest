const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res)=>{
    const apiKey = 'egyBbmIqbHtFyQTMm4pjlZbLhRJ4gzmh';
    const baseUrl = 'https://api.neople.co.kr';
    // console.log(req.query.url);
    const url = req.query.url;

    console.log(baseUrl+url);
    let data = null;

    axios({
        method: 'GET',
        url: baseUrl+url,
        params: {'apikey': apiKey},
        responseType: 'json'
    })
        .then(function (response) {
            data = response.data
            return res.json(data.rows)
        })
        .catch(function(reason) {
            console.log(reason);
        });
});

module.exports = router;