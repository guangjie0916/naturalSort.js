describe("with undefined elements", function() {
  it("should put numbers first and undefined elements last", function() {
    var sparseArray = [3, 2]
    for (var i=0; i < 8; i++) {
      sparseArray.push(undefined);
    }
    sparseArray[10] = 1;

    var sparseArrayExpected = [1, 2, 3];
    for (var i=0; i < 8; i++) {
      sparseArrayExpected.push(undefined);
    }

    expect(sparseArray.sort(naturalSort)).to.eql(sparseArrayExpected);
  });

  it("should sort arrays with a single defined value", function() {
    expect([undefined, undefined, undefined, 1, undefined].sort(naturalSort))
      .to.eql([1, undefined, undefined, undefined, undefined]);
  });

  it("should sort arrays with a mix of numbers, strings, and undefined values", function() {
    expect([2, 10, 1, 'azd', undefined, 'asd'].sort(naturalSort))
      .to.eql([1, 2, 10, 'asd', 'azd', undefined]);
  });
});

