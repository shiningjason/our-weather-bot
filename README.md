# Our Weather Bot for HK

## Todos

- [x] 1. Beautify weather content
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
- [ ] 2. RSS Utils
  - [ ] 1. Parse first item publish date and return unix timestamp (ms)
  - [ ] 2. Parse first item description
- [ ] Schedule to pull current weather report RSS
  - [ ] Query weather data model last pulled from DB
  - [ ] Fetch EN report
  - [ ] Check EN report is up to date, then jump out of lambda
  - [ ] Fetch TC report
  - [ ] Fetch SC report
  - [ ] Parse XML and return weather data model (content, date)
    - [ ] Parse XML description and beautify weather content
    - [ ] Parse XML publish date and return unix timestamp (ms)
  - [ ] Save weather data model to DB
  - [ ] Schedule to run lambda funciton
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
