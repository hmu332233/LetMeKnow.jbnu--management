const { setupDB } = require('./../../test/setupDb');
setupDB();

const { db } = require('./info');
const QuickReplies = require('./model');

describe('models - quickReply', () => {
  describe('real db', () => {
    const mockQuickReply = {
      label: '테스트',
      messageText: '테스트',
      start: new Date('2019-12-24'),
      end: new Date('2019-12-31'),
    };

    beforeAll(async () => {
      await db.quick_replies.create(mockQuickReply);
    });

    afterAll(async () => {
      await db.quick_replies.deleteMany({});
    });
  
    test('findByDate - 범위 내의 데이터가 있을 때', async () => {
      const quizReplies = await QuickReplies.findByDate({ date: new Date('2019-12-25') });
      expect(quizReplies[0].label).toEqual(mockQuickReply.label);
    });

    test('findByDate - 범위 내의 데이터가 없을 때 - 이전', async () => {
      const quizReplies = await QuickReplies.findByDate({ date: new Date('2019-11-01') });
      expect(quizReplies.length).toEqual(0);
    });

    test('findByDate - 범위 내의 데이터가 없을 때 - 이후', async () => {
      const quizReplies = await QuickReplies.findByDate({ date: new Date('2020-11-01') });
      expect(quizReplies.length).toEqual(0);
    });

    test('add - action이 없을 경우 message로 저장이 됨', async () => {
      const mockQuickReply = { label: 'add - action', messageText: 'messageText' };
      await QuickReplies.add(mockQuickReply);
      const addedQuickReply = await db.quick_replies.findOne({ label: mockQuickReply.label });
      expect(addedQuickReply.action).toEqual(QuickReplies.CONSTANTS.ACTION.MESSAGE);
    });

    test('add - action이 있을 경우 해당 action이 저장이 됨', async () => {
      const mockQuickReply = { label: 'add - action2', messageText: 'messageText', action: 'test' };
      await QuickReplies.add(mockQuickReply);
      const addedQuickReply = await db.quick_replies.findOne({ label: mockQuickReply.label });
      expect(addedQuickReply.action).toEqual(mockQuickReply.action);
    });
  });

  describe('fake db', () => {
    test('findByDate', async () => {
      const mockQuickReplies = [];
      db.quick_replies.find = jest.fn().mockResolvedValue(mockQuickReplies);
      const quizReplies = await QuickReplies.findByDate();
      expect(quizReplies).toEqual(mockQuickReplies);
    });
  });
});
