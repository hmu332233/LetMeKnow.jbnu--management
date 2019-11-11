const { setupDB } = require('../../test/setupDb');
setupDB();

const { mockResponse } = require('../../test/utils');

const QuickReplies = require('../../models/quickReplies');

const controller = {
  addon: require('./index'),
};

describe('controller - addon', () => {
  describe('quickReplies', () => {
    const mockQuizReply = {
      label: '테스트',
      messageText: '테스트',
      start: new Date('2019-12-24'),
      end: new Date('2019-12-31'),
    };

    beforeAll(async () => {
      QuickReplies.findByDate = jest.fn().mockResolvedValue([mockQuizReply]);
    });

    test('getQuickReplies', async () => {
      const req = {};
      const res = mockResponse();
      const next = v => v;
      await controller.addon.getQuickReplies(req, res, next);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: null,
        errors: null,
        data: [mockQuizReply],
      });
    });

    test('add - label이 없는 경우 next 처리', async () => {
      const req = {
        body: { messageText: 'test' },
      };
      const res = mockResponse();
      const next = jest.fn();
      await controller.addon.addQuickReply(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
    });

    test('add - messageText가 없는 경우 next 처리', async () => {
      const req = {
        body: { label: 'test ' },
      };
      const res = mockResponse();
      const next = jest.fn();
      await controller.addon.addQuickReply(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
    });

    test('add - 모든 데이터가 다 있을 경우 정상 실행', async () => {
      QuickReplies.add = jest.fn().mockResolvedValue(mockQuizReply);
      const req = {
        body: mockQuizReply,
      };
      const res = mockResponse();
      const next = v => v;
      await controller.addon.addQuickReply(req, res, next);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: null,
        errors: null,
        data: mockQuizReply,
      });
    });
  });
});
