const JinsuMenus = require('../schemas/JinsuMenus');

const utils = require('../utils');

const CONSTANTS = {
	KEY: 'jinsu'
};

const JinsuMenusModule = {
	CONSTANTS,
	findOne: async function (query, { select, sort } = {}) {
		try {
			const menu = await JinsuMenus.findOne(query).select(select).sort(sort).lean();
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

module.exports = JinsuMenusModule;