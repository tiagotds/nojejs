var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end('<html><title>Curso NodeJS</title><body>Notícias de tecnologia</body></html>');
	}
	else if(categoria == '/moda'){
		res.end('<html><title>Curso NodeJS</title><body>Notícias de moda</body></html>');
	}
	else if(categoria == '/beleza'){
		res.end('<html><title>Curso NodeJS</title><body>Notícias de beleza</body></html>');
	}
	else {
		res.end('<html><title>Curso NodeJS</title><body>Portal de Notícias</body></html>');
	}

}).listen(3000);

