AS a user
I WANT a website
WHERE I can post photos to my gallery, as well as search for, view, comment on, upvote and downvote public photos in other users galleries

# Client

Landing Page. Consists of home, login, register, about links.
Authentication via Authcontext.
User page - User can filter by all photos (lazy loaded), Upvoted photos, downvoted photos. Can sort photos by post date; can view photos of users followed, displayed by date

# Server

Models:

- User
- Post
- Images - Will essentially be a post model, or should I have seperate images and posts?
- Upvote
- Downvote
- Tag

Users can only upvote/downvote a post once.

# What to learn

Referencing image files stored in the Database using a SQL model
React Lazy loading of images, so that images only load on scroll. Loading will also feature a simple animation.
Searching the database with user queries. User can optionally search by title, content or tag of post.
Deploy the front end and backend seperately to improve scalability. Can maybe deploy both on Heroku.
Ability to follow other users.
Ability to follow tags.
