var Stat = require('../Model/servermodel.js');

var createStat = function (req, res) {

	if (req.body.id){
		
		// Stat.update({_id : req.body.id}, req.body, function(err, doc){
		// 	console.log(doc);
		// 	res.send(doc);

		// })

       console.log("second")
		Stat.findByIdAndUpdate(req.body.id, req.body, function(err, doc) {
			Stat.findOne({ _id: req.body.id}, function(err, doc){
				res.send(doc);
			})

		
    
		});
		
	}
	else {
		console.log("first")
     
	var stat = new Stat(req.body)
	stat.save(function(err, doc) {
		res.send(doc)
	})
}

}



var reset = function (req, res) {
	Stat.remove({}, function(err, doc) {
		console.log('collection removed, sukka')
		res.send(doc)
	})
}



module.exports = {
	createStat : createStat,
	reset      : reset
}