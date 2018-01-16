module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}


module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;

	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatória').notEmpty()
	//req.assert('data_noticia','Data inválida').isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatória').notEmpty();

	var errors = req.validationErrors();
	console.log(errors);

	if(errors){
		res.render("admin/form_add_noticia", {validacao: errors, noticia: noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect("/noticias");
	});
}