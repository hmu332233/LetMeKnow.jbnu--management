const service = require('../../services');

const MediMenus = require('../../models/mediMenus');
const JinsuMenus = require('../../models/jinsuMenus');
const StudentHallMenus = require('../../models/studentHallMenus');
const JungdamMenus = require('../../models/jungdamMenus');
const HuMenus = require('../../models/huMenus');

const DUMMY = {
  breakfast: [
    {
      place: '진수당',
      week: '월',
      time: '조식',
      category: '백반',
      menus: '',
    },
    {
      place: '진수당',
      week: '화',
      time: '조식',
      category: '백반',
      menus: '',
    },
    {
      place: '진수당',
      week: '수',
      time: '조식',
      category: '백반',
      menus: '순두부버섯들깨탕\n오리돈육청양불고기\n닭가슴살사과냉채\n가지나물',
    },
    {
      place: '진수당',
      week: '목',
      time: '조식',
      category: '백반',
      menus: '새우튀김온소바\n돈육고추장불고기\n참치두부조림\n요거트애플드레싱그린샐럿',
    },
    {
      place: '진수당',
      week: '금',
      time: '조식',
      category: '백반',
      menus: '',
    },
  ],
  lunch: [
    {
      place: '진수당',
      week: '월',
      time: '중식',
      category: '백반',
      menus: '',
    },
    {
      place: '진수당',
      week: '화',
      time: '중식',
      category: '백반',
      menus: '',
    },
    {
      place: '진수당',
      week: '수',
      time: '중식',
      category: '백반',
      menus: '순두부버섯들깨탕\n오리돈육청양불고기\n닭가슴살사과냉채\n가지나물',
    },
    {
      place: '진수당',
      week: '목',
      time: '중식',
      category: '백반',
      menus: '새우튀김온소바\n돈육고추장불고기\n참치두부조림\n요거트애플드레싱그린샐럿',
    },
    {
      place: '진수당',
      week: '금',
      time: '중식',
      category: '백반',
      menus: '',
    },
  ],
  dinner: [
    {
      place: '진수당',
      week: '월',
      time: '석식',
      category: '백반',
      menus: '',
    },
    {
      place: '진수당',
      week: '화',
      time: '석식',
      category: '백반',
      menus: '해물된장찌개\n치킨유린기\n미트볼토마토스파게티\n솎음숙주나물',
    },
    {
      place: '진수당',
      week: '수',
      time: '석식',
      category: '백반',
      menus: '참치두부김치찌개\n불맛바베큐바싹불고기\n매콤쟁반자장면\n콩나물양파지짐',
    },
    {
      place: '진수당',
      week: '목',
      time: '석식',
      category: '백반',
      menus: '시래기들깨진국\n매운갈비찜\n카레영양전\n봉어묵데리볶음',
    },
    {
      place: '진수당',
      week: '금',
      time: '석식',
      category: '백반',
      menus: '',
    },
  ],
};

describe('service - menus', () => {
  describe('service - menus - null이 넘어올 경우', () => {
    beforeAll(() => {
      MediMenus.getLatestMenu = jest.fn().mockResolvedValue(null);
      JinsuMenus.getLatestMenu = jest.fn().mockResolvedValue(null);
      StudentHallMenus.getLatestMenu = jest.fn().mockResolvedValue(null);
      JungdamMenus.getLatestMenu = jest.fn().mockResolvedValue(null);
      HuMenus.getLatestMenu = jest.fn().mockResolvedValue(null);
    });

    test('getMediMenus', async () => {
      const menu = await service.menus.getMediMenus();
      expect(menu).toEqual(null);
    });

    test('getJinsuMenus', async () => {
      const menu = await service.menus.getJinsuMenus();
      expect(menu).toEqual(null);
    });

    test('getStudentHallMenus', async () => {
      const menu = await service.menus.getStudentHallMenus();
      expect(menu).toEqual(null);
    });

    test('getJungdamMenus', async () => {
      const menu = await service.menus.getJungdamMenus();
      expect(menu).toEqual(null);
    });

    test('getHuMenus', async () => {
      const menu = await service.menus.getHuMenus();
      expect(menu).toEqual(null);
    });

  });

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
      
      expect(menu.lunch[1].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');

      expect(menu.lunch.every(menu => menu.menus !== '')).toEqual(true);
      expect(menu.dinner.every(menu => menu.menus !== '')).toEqual(true);
    });

    test('getJinsuMenus', async () => {
      const menu = await service.menus.getJinsuMenus();
      expect(menu.lunch[1].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[1].menus).toEqual('등록된 식단이 없습니다.');

      expect(menu.lunch.every(menu => menu.menus !== '')).toEqual(true);
      expect(menu.dinner.every(menu => menu.menus !== '')).toEqual(true);
    });

    test('getStudentHallMenus', async () => {
      const menu = await service.menus.getStudentHallMenus();
      expect(menu.lunch[0].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[0].menus).toEqual('등록된 식단이 없습니다.');

      expect(menu.lunch.every(menu => menu.menus !== '')).toEqual(true);
      expect(menu.dinner.every(menu => menu.menus !== '')).toEqual(true);
    });

    test('getJungdamMenus', async () => {
      const menu = await service.menus.getJungdamMenus();
      expect(menu.lunch[1].menus).toEqual('등록된 식단이 없습니다.');

      expect(menu.lunch.every(menu => menu.menus !== '')).toEqual(true);
    });

    test('getHuMenus', async () => {
      const menu = await service.menus.getHuMenus();
      expect(menu.breakfast[4].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.lunch[4].menus).toEqual('등록된 식단이 없습니다.');
      expect(menu.dinner[4].menus).toEqual('등록된 식단이 없습니다.');

      expect(menu.breakfast.every(menu => menu.menus !== '')).toEqual(true);
      expect(menu.lunch.every(menu => menu.menus !== '')).toEqual(true);
      expect(menu.dinner.every(menu => menu.menus !== '')).toEqual(true);
    });
  });
});
