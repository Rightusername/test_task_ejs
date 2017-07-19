
 var itemsA = ["A1", "A2", "A3", "A4", "A5", "A6",];
 var itemsB = ["B1", "B2", "B3", "B4", "B5", "B6",];


exports.index = function(req, res){
	res.render('index', {
		title: '12',
	});
	
};

exports.items = function(req, res){
	var offset = req.params.page *3;
	if( req.params.page < 0 ) offset = 0;
	switch(req.params.type){
		case "A":
			console.log(req.params);
			res.render('items', {items: itemsA.slice(0 + offset, 3 + offset)});
			break;
		case "B":
			console.log(req.params);
			res.render('items', {items: itemsB.slice(0 + offset, 3 + offset)});
			break;
	}
	//res.render('items/:type', {items: itemsB});
}