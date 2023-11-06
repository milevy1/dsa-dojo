const Stack = require('../lib/stack');

test('it pushes', () => {
  const subject = new Stack();
  subject.push('A')
  subject.push('B')
  subject.push('C')
  expect(subject.count).toEqual(3);
});

test('it pops', () => {
  const subject = new Stack();
  subject.push('A')
  subject.push('B')
  subject.push('C')
  expect(subject.pop).toEqual('A');
  expect(subject.pop).toEqual('B');
  expect(subject.pop).toEqual('C');
});
