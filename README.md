# Our Weather Bot for HK

## Todos

- [ ] Beautify weather content
  - [x] Strip leading and trailing whitespaces
  - [x] Trim internal whitespaces between english words
  - [x] Trim internal whitespaces between english word and number
  - [x] Trim internal whitespaces between chinese characters
  - [x] Preserve one space after chinese character which is followed by english
  - [x] Preserve one space after chinese character which is followed by number
  - [x] Preserve one space after english word which is followed by chinese
  - [x] Preserve one space after number which is followed by chinese
  - [x] Strip whitespaces before and after fullwith symbols like `：`
  - [x] Strip whitespaces before halfwidth symbols like `:` and `.`
  - [x] Trim whitespaces after halfwidth symbols like `:` and `.`
  - [x] Strip whitespaces before line breaks
  - [x] Strip whitespaces before the line
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
