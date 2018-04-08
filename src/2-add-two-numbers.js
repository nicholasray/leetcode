const { expect } = require('chai');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  getVal() {
    return this.val;
  }

  setVal(val) {
    this.val = val;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;

    return next;
  }
}

var addTwoNumbers = function(l1, l2) {
  var arr1 = [];
  var arr2 = [];
  var l1Node = l1;
  var l2Node = l2;

  while (l1Node) {
    arr1.push(l1Node.getVal());
    l1Node = l1Node.getNext();
  }

  while (l2Node) {
    arr2.push(l2Node.getVal());

    l2Node = l2Node.getNext();
  }

  let sum = parseInt(arr1.reverse().join('')) + parseInt(arr2.reverse().join(''));
  let sumInts = sum.toString().split("").reverse();
  let result = new ListNode(parseInt(sumInts[0]));

  let current = result;
  for (var i = 1; i < sumInts.length; i++) {
    current = current.setNext(new ListNode(parseInt(sumInts[i])));
  }

  return result;
};

describe("addTwoNumbers", () => {
  it("returns ListNode of sum", () => {
    // given
    let l1First = new ListNode(2);
    let l1Second = new ListNode(4);
    let l1Third = new ListNode(3);
    l1First.setNext(l1Second).setNext(l1Third);

    let l2First = new ListNode(5);
    let l2Second = new ListNode(6);
    let l2Third = new ListNode(4);
    l2First.setNext(l2Second).setNext(l2Third);

    let result = addTwoNumbers(l1First, l2First);

    expect(result).to.be.an('object');
    expect(result.getVal()).to.eq(7);
    expect(result.getNext().getVal()).to.eq(0);
    expect(result.getNext().getNext().getVal()).to.eq(8);
    expect(result.getNext().getNext().getNext()).to.be.null;
  })
})
