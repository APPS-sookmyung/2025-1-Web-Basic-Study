drop table if exists member CASCADE;
create table member (
    id bigint auto_increment primary key,
    username varchar(255)
);
