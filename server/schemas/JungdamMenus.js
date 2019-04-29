const mongoose = require('mongoose');
/*
*  StudentHallMenus
*  lunch {Array} 한 주 동안의 점심 정보
*/
// schema
const schema = mongoose.Schema({
  lunch: [
		{
			place: String,
			week: String,
			time: String,
			category: String,
			menus: String
		}
	]
});

// model & export
const JungdamMenus = mongoose.model('jungdam_menus', schema);
module.exports = JungdamMenus;