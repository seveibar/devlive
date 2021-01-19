# Devlive

Devlive is a widget that shows you when a developer of a site is doing livestream development on Twitch.

![livestream widget](https://media2.giphy.com/media/paTu5Y7AINLpMG5LKD/giphy.gif)

Follow [@seveibar](https://twitter.com/seveibar) on twitter for updates

# Usage

Construct a URL like so...

`https://devlive.vercel.app/api/widget?channel=seveibar&live_message=seveibar is live!`

Here are the parameters to use:

| Name               | Example                  |
| ------------------ | ------------------------ |
| `channel`\*        | seveibar                 |
| `live_message`     | seveibar is coding live! |
| `not_live_message` | seveibar codes this live |

Add the URL as a script tag on your web page.

```html
<script src="https://devlive.vercel.app/api/widget?channel=seveibar&live_message=seveibar is live!"></script>
```

### Development

- Getting a Twitch token: [Twitch Token Generator](https://twitchtokengenerator.com/?code=psosuokpq9q6imd6bc5mt5cg0b7v00&scope=chat_login&state=frontend%7CbG9lLzBjTE5lZzhzS3ZJKzRhSnJVUT09)
