const service = require('../../services');

const MediMenus = require('../../models/mediMenus');
const JinsuMenus = require('../../models/jinsuMenus');
const StudentHallMenus = require('../../models/studentHallMenus');
const JungdamMenus = require('../../models/jungdamMenus');
const HuMenus = require('../../models/huMenus');


const DUMMY = {
  breakfast: [{
    menus: ''
  }],
  lunch: [{
    menus: ''
  }],
  dinner: [{
    menus: ''
  }],
};

describe('service - menus', () => {
  describe('service - menus - 비어있는 식단이 넘어올 경우', () => {
    beforeAll(() => {
      MediMenus.getLatestMenu = jest.fn().mockResolvedValue(DUMMY);
      JinsuMenus.getLatestMenu = jest.fn().mockResolvedValue(DUMMY);
      StudentHallMenus.getLatestMenu = jest.fn().mockResolvedValue(DUMMY);
      JungdamMenus.getLatestMenu = jest.fn().mockResolvedValue(DUMMY);
      HuMenus.getLatestMenu = jest.fn().mockResolvedValue(DUMMY);
    });
  
    test('getMediMenus', async () => {
      const menu = await service.menus.getMediMenus();
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');
    });

    test('getJinsuMenus', async () => {
      const menu = await service.menus.getJinsuMenus();
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');
    });

    test('getStudentHallMenus', async () => {
      const menu = await service.menus.getStudentHallMenus();
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');
    });

    test('getJungdamMenus', async () => {
      const menu = await service.menus.getJungdamMenus();
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
    });

    test('getHuMenus', async () => {
      const menu = await service.menus.getHuMenus();
      expect(menu.breakfast[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');
    });
  });
});