const JungdamMenus = require('../schemas/JungdamMenus');

const utils = require('../utils');

const CONSTANTS = {
	KEY: 'jungdam'
};

const JungdamMenusModule = {
	CONSTANTS,
	findOne: async function (query, { select, sort } = {}) {
		try {
			const menu = await JungdamMenus.findOne(query).select(select).sort(sort).lean();
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

module.exports = JungdamMenusModule;