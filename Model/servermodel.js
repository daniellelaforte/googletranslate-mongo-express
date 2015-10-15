var mongoose = require('mongoose')

var resultSchema = mongoose.Schema({

	totalpassed        : {type : Number},
	totalfailed       : {type : Number}, 
	bestten             : {type : Array},
	worstten             : {type : Array}
})


 module.exports = mongoose.model('Result', resultSchema)