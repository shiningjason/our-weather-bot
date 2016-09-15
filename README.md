# Our Weather Bot for HK

## Todos

- [x] 1. Beautify article
  - [x] 1. Strip leading and trailing whitespaces
  - [x] 2. Trim internal whitespaces between english words
  - [x] 3. Trim internal whitespaces between english word and number
  - [x] 4. Trim internal whitespaces between chinese characters
  - [x] 5. Preserve one space after chinese character which is followed by english
  - [x] 6. Preserve one space after chinese character which is followed by number
  - [x] 7. Preserve one space after english word which is followed by chinese
  - [x] 8. Preserve one space after number which is followed by chinese
  - [x] 9. Strip whitespaces before and after fullwith symbols like `：`
  - [x] 10. Strip whitespaces before halfwidth symbols like `:` and `.`
  - [x] 11. Trim whitespaces after halfwidth symbols like `:` and `.`
  - [x] 12. Strip whitespaces before line breaks
  - [x] 13. Strip whitespaces before the line
- [x] 2. RSS Utils
  - [x] 1. Parse first item publish date and return unix timestamp (ms)
  - [x] 2. Parse first item description
- [x] 3. Format HTML to text
  - [x] 3.1 Replace `\n` to ` `
  - [x] 3.2 Replace `<br/>` to `\n`
  - [x] 3.3 Replace all `<tag>` to ` `
  - [x] 3.4 Call beautifyArticle to format text
- [ ] 4. Schedule to pull current weather report RSS
  - [ ] 4.1 Query last pulled timestamp from DB
  - [ ] 4.2 Fetch EN report
  - [ ] 4.3 Check current weather data is up-to-date, then jump out function
  - [ ] 4.4 Fetch TC report
  - [ ] 4.5 Fetch SC report
  - [ ] 4.6 Parse XML and return weather model (content, timestamp)
    - [ ] 4.6.1 Parse, format and assign weather info to content property
    - [ ] 4.6.2 Parse and assign publish date to timestamp property
  - [ ] 4.7 Save weather model to DB
  - [ ] 4.8 Schedule to run lambda funciton
- [ ] Schedule to pull weather warning info RSS
- [ ] Notify new current weather report to subscribers
- [ ] Notify new weather warning info to subscribers
- [ ] Add telegram webhook to listen user's commands
- [ ] List out the supported weather topics
- [ ] Echo back current weather report
- [ ] Echo back weather warning info
- [ ] Subscribe current weather report
- [ ] Subscribe weather warning info
- [ ] Unsubscribe current weather report
- [ ] Unsubscribe weather warning info
- [ ] Change language to Traditional Chinese
- [ ] Change language to Simplified Chinese
- [ ] Change language to English

## Technology stack

Server: AWS Lambda  
DB: DynamoDB  
Framework: Serverless framework  
Libraries: node-fetch  
Test: Mocha, Chai

## Notes

### Telegram

1. Add Webhook:
  `curl https://api.telegram.org/bot{botToken}/setWebhook?url={webhookUrl}`

### RSS

1. Current Weather Report
  - https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report
  - English: http://rss.weather.gov.hk/rss/CurrentWeather.xml
  - Traditional Chinese: http://rss.weather.gov.hk/rss/CurrentWeather_uc.xml
  - Simplified Chinese: http://gbrss.weather.gov.hk/rss/CurrentWeather_uc.xml
2. Weather Warning Infomation
  - https://data.gov.hk/en-data/dataset/hk-hko-rss-weather-warning-information
  - English: http://rss.weather.gov.hk/rss/WeatherWarningBulletin.xml
  - Traditional Chinese: http://rss.weather.gov.hk/rss/WeatherWarningBulletin_uc.xml
  - Simplified Chinese: http://gbrss.weather.gov.hk/rss/WeatherWarningBulletin_uc.xml
