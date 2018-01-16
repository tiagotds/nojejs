CREATE DATABASE `portal_noticias` /*!40100 DEFAULT CHARACTER SET utf8 */;

use portal_noticias;

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

