require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


const githubData = {
  "login": "rahulsp19",
  "id": 231302991,
  "node_id": "U_kgDODclnTw",
  "avatar_url": "https://avatars.githubusercontent.com/u/231302991?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rahulsp19",
  "html_url": "https://github.com/rahulsp19",
  "followers_url": "https://api.github.com/users/rahulsp19/followers",
  "following_url": "https://api.github.com/users/rahulsp19/following{/other_user}",
  "gists_url": "https://api.github.com/users/rahulsp19/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rahulsp19/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rahulsp19/subscriptions",
  "organizations_url": "https://api.github.com/users/rahulsp19/orgs",
  "repos_url": "https://api.github.com/users/rahulsp19/repos",
  "events_url": "https://api.github.com/users/rahulsp19/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rahulsp19/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 39,
  "public_gists": 0,
  "followers": 2,
  "following": 0,
  "created_at": "2025-09-09T17:47:30Z",
  "updated_at": "2026-11-09T16:30:26Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/rahul', (req, res) => {
    res.send('<h2>Hello Guys</h2>')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})