# always-shopping-backend
> Backend for [always-stream](https://github.com/SanketDhabarde/always-stream)

## 👩‍💻 Tech stack
- ExpressJs
- mongoDB
- mongoose
- NodeJs

## 🛣 Routes
### Public routes
- [Auth](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/auth.router.js)
  - [POST] `/api/auth/signup`
  - [POST] `/api/auth/login`

- [Videos](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/video.router.js)
  - [GET] `/api/videos`
  - [GET] `/api/videos/:id`

- [Categories](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/category.router.js)
  - [GET] `/api/categories`
  - [GET] `/api/categories/:id`

### Private routes
- [Likes](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/likes.router.js)
  - [GET]  `/api/user/likes`
  - [POST]  `/api/user/likes`
  - [DELETE]  `/api/user/likes/:videoId`
 
- [Watchlater](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/watchlater.router.js)
  - [GET]  `/api/user/watchlater`
  - [POST]  `/api/user/watchlater`
  - [DELETE]  `/api/user/watchlater/:videoId`

- [history](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/history.router.js)
  - [GET]  `/api/user/history`
  - [POST]  `/api/user/history`
  - [DELETE]  `/api/user/history/all`
  - [DELETE]  `/api/user/history/:videoId`

- [Playlists](https://github.com/SanketDhabarde/always-stream-backend/blob/master/routes/playlist.router.js)
  - [GET]  `/api/user/playlists`
  - [POST]  `/api/user/playlists`
  - [GET]  `/api/user/playlists/:playlistId`
  - [POST] `/api/user/playlists/:playlistId`
  - [DELETE] `/api/user/playlists/:playlistId`
  - [DELETE]  `/api/user/playlists/:playlistId/:videoId`

## 👩‍💻 Start locally
```bash
docker-compose up
```


## 👨‍💻 Connect with me 

<a href="https://twitter.com/SanketDhabarde1"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/sanket-dhabarde-91b028166/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
