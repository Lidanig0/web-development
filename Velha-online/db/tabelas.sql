
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  id bigint NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
