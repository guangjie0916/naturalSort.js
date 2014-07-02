describe("with mixed value types", function() {
  it("should sort numbers before letters", function() {
    expect(['a', 1].sort(naturalSort)).to.eql([1, 'a']);
  });

  it("should treat numbers and numeric strings equally", function() {
    expect(['1', 1].sort(naturalSort)).to.eql(['1', 1]);
  });

  it("should treat padded numeric strings as numbers", function() {
    expect(['02', 3, 2, '01'].sort(naturalSort)).to.eql(['01', '02', 2, 3]);
  });

  it("should put numbers first, then strings that start with spaces", function() {
    expect(['alpha',' 1','  3',' 2',0].sort(naturalSort))
      .to.eql([0,' 1',' 2','  3','alpha']);
  });

  it("should put empty strings in front of numerics", function() {
    expect(['10023','999','',2,5.663,5.6629].sort(naturalSort))
      .to.eql(['',2,5.6629,5.663,'999','10023']);
  });

  it("should prioritize 0, '0', and '' equally", function() {
    expect([0,'0',''].sort(naturalSort))
      .to.eql([0,'0','']);
  });
});

