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
  });
});
