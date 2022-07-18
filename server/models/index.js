const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Upvote = require('./Upvote');
const Downvote = require('./Downvote');
const Tag = require('./Tag');
const Image = require('./Image');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Downvote, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Downvote.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Upvote, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Upvote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.hasMany(Upvote, {
  foreignKey: 'comment_id',
});

Upvote.belongsTo(Comment, {
  foreignKey: 'comment_id',
});

Comment.hasMany(Downvote, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Downvote.belongsTo(Comment, {
  foreignKey: 'comment_id',
});

Post.hasMany(Tag, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Tag.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.hasOne(Image, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Image.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Comment, Upvote, Downvote, Post, Tag, Image };
