const { db } = require('./info');

const { format } = require('../../utils');

const JungdamMenus = {
	findOne: async function (query, { select, sort } = {}) {
		try {
			const menu = await db.jungdam_menus.findOne(query).select(select).sort(sort).lean();
			return menu;
		} catch (err) {
			throw format.mongo.error(err);
		}
	},
	getLatestMenu: async function () {
		const query = {};
		const options = {
			sort: { _id: -1 }
		};
		return await this.findOne(query, options);
	}
}

module.exports = JungdamMenus;