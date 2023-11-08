const Stack = require('../lib/stack')

describe('Stack', () => {
  let subject
  beforeEach(() => {
    subject = new Stack()
  })

  describe('count', () => {
    it('returns the number of elements on the stack', () => {
      expect(subject.count).toEqual(0)

      subject.push('A')
      expect(subject.count).toEqual(1)
    })
  })

  describe('push', () => {
    it('adds an element to the top of the stack', () => {
      subject.push('A')
      subject.push('B')
      subject.push('C')
      expect(subject.count).toEqual(3)
    })
  })

  describe('pop', () => {
    it('removes and returns the top element of the stack', () => {
      subject.push('A')
      subject.push('B')
      subject.push('C')

      expect(subject.pop()).toEqual('C')
      expect(subject.count).toEqual(2)

      expect(subject.pop()).toEqual('B')
      expect(subject.count).toEqual(1)

      expect(subject.pop()).toEqual('A')
      expect(subject.count).toEqual(0)
    })
  })


  describe('peek', () => {
    it('returns the value of the top element without removing it', () => {
      subject.push('A')
      subject.push('B')

      expect(subject.peek).toEqual('B')
      expect(subject.count).toEqual(2)
    })
  })

  describe('empty', () => {
    it('returns a true if the stack is empty', () => {
      expect(subject.empty).toEqual(true)
    })

    it('returns false if the stack is not empty', () => {
      subject.push('A')
      expect(subject.empty).toEqual(false)

      subject.pop()
      expect(subject.empty).toEqual(true)
    })
  })
})