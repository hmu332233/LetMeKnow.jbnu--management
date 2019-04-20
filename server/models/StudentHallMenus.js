const StudentHallMenus = require('../schemas/StudentHallMenus');

const utils = require('../utils');

const CONSTANTS = {
	KEY: 'studentHall'
};

const StudentHallMenusModule = {
	CONSTANTS,
	findOne: async function (query, { select, sort } = {}) {
		try {
			const menu = await StudentHallMenus.findOne(query).select(select).sort(sort).lean();
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

module.exports = StudentHallMenusModule;