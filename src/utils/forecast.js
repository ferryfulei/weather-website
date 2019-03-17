const request = require('request')
const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/70785abadaf6a129904870f5bc60fda5/' + latitude + ',' + longtitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a '
            + body.currently.precipProbability + '% chance of rain' + '. The high today is ' + body.daily.data[0].temperatureHigh 
            + ' with a low of ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast