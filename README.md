# Our Weather Bot for HK

## Todos

- [ ] Pull current weather report RSS
- [ ] Pull weather warning info RSS
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
