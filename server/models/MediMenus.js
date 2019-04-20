const MediMenus = require('../schemas/MediMenus');

const utils = require('../utils');

const CONSTANTS = {
	KEY: 'medi'
};

const MediMenusModule = {
	CONSTANTS,
	findOne: async function (query, { select, sort } = {}) {
		try {
			const mediMenu = await MediMenus.findOne(query).select(select).sort(sort).lean();
			return mediMenu;
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

module.exports = MediMenusModule;