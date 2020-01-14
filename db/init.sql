create table users (
  id serial primary key,
  username text unique,
  password text
)

create table posts (
  id serial primary key,
  title text,
  content text,
  user_id int references users(id)
)