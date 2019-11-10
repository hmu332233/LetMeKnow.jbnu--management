const { db } = require('./info');
const QuickReplies = require('./model');

describe('models - quizReply', () => {
  test('getMediMenus', async () => {
    db.quick_replies.find = jest.fn().mockResolvedValue([]);
    const quizReplies = await QuickReplies.findByDate();
    expect(quizReplies).toEqual(true);
  });
});
