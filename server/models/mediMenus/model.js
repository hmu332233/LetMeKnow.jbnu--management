const { db } = require('./info');

const { utils } = require('../../utils');

const MediMenus = {
	findOne: async function (query, { select, sort } = {}) {
		try {
			const menu = await db.medi_menus.findOne(query).select(select).sort(sort).lean();
			return menu;
		} catch (err) {
			throw utils.mongoFormat.error(err);
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

module.exports = MediMenus;