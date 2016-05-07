const uniqWithReduce = require('../uniqWithReduce')
const uniqWithIndex = require('../uniqWithIndex')
const uniqWithSort = require('../uniqWithSort')

const uniqWithHashTable = require('../uniqWithHashTable')

const uniqWithJSONStringify = require('../uniqWithJSONStringify')
const uniqWithSet = require('../uniqWithSet')


describe('remove duplicate premitive type', () => {
  const coolGuys = ['drake', 'jason', 'drake']

  it('uniqueWithReduce() should remove duplicate "drake"', () => {
    expect(uniqWithReduce(coolGuys)).toEqual(['drake', 'jason'])
  });

  it('uniqWithIndex() should remove duplicate "drake"', () => {
    expect(uniqWithIndex(coolGuys)).toEqual(['drake', 'jason'])
  });

  it('uniqWithSort() should remove duplicate "drake"', () => {
    expect(uniqWithSort(coolGuys)).toEqual(['drake', 'jason'])
  });

  it('uniqWithHashTable() should remove duplicate "drake"', () => {
    expect(uniqWithHashTable(coolGuys)).toEqual(['drake', 'jason'])
  });

  it('uniqWithSet() should remove duplicate "drake"', () => {
    expect(uniqWithSet(coolGuys)).toEqual(['drake', 'jason'])
  });
});


describe('remove duplicate reference type', () => {
  const coolGuys = [
    { name: 'drake' },
    { name: 'jason' },
    { name: 'drake' },
  ]

  it('uniqWithJSONStringify() should remove duplicate "{drake: name}"', () => {
    expect(uniqWithJSONStringify(coolGuys)).toEqual([
      { name: 'drake' },
      { name: 'jason' },
    ])
  });
})
