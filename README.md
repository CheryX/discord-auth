# Discord auth template
This is a simple express template that allows you to log in via discord, it can be useful for making a dashboard for your discord bot, or just a logging system.

This template supports:

* Logging in via discord
* Rendering pages with .ejs
* Public folder `/public`

## Note about cloning
File `config.json` is private, use the following schema for config.json.
```json
{
    "id": "",
    "clientSecret": "",
    "callbackURL": "",
}
```
