update posts
set title = $1, content = $2
where id = $3;

select * from posts
where user_id = $4;