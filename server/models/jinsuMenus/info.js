const mongoose = require('mongoose');

const CONSTANTS = {};

/*
*  JinsuMenus
*  lunch {Array} 한 주 동안의 점심 정보
*  dinner {Array} 한 주 동안의 저녁 정보
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
	],
	dinner: [
		{
			place: String,
			week: String,
			time: String,
			category: String,
			menus: String
		}
	]
});

const model = mongoose.model('jinsu_menu', schema);

module.exports = {
  db: { jinsu_menus: model },
  CONSTANTS
};

