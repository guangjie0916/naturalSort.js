describe("with alphanumeric strings", function() {
  it("should put numbers ahead of letters", function() {
    expect(['5D','1A','2D','33A','5E','33K','33D','5S','2C','5C','5F','1D','2M'].sort(naturalSort))
      .to.eql(['1A','1D','2C','2D','2M','5C','5D','5E','5F','5S','33A','33D','33K']);
  });

  it("should pass Bob Zeiner's long array", function() {
    expect(
      ['T78','U17','U10','U12','U14','745','U7','01','485','S16','S2','S22','1081','S25','1055','779',
       '776','771','44','4','87','1091','42','480','952','951','756','1000','824','770','666','633',
       '619','1','991','77H','PIER-7','47','29','9','77L','433'].sort(naturalSort)
    ).to.eql(
      ['01','1','4','9','29','42','44','47','77H','77L','87','433','480','485','619','633','666','745',
       '756','770','771','776','779','824','951','952','991','1000','1055','1081','1091','PIER-7',
       'S2','S16','S22','S25','T78','U7','U10','U12','U14','U17']
    );
  });

  it("should pass Scott's array of stops", function() {
    expect([
      'FSI stop, Position: 5',
      'Mail Group stop, Position: 5',
      'Mail Group stop, Position: 5',
      'FSI stop, Position: 6',
      'FSI stop, Position: 6',
      'Newsstand stop, Position: 4',
      'Newsstand stop, Position: 4',
      'FSI stop, Position: 5'
    ].sort(naturalSort)).to.eql([
      'FSI stop, Position: 5',
      'FSI stop, Position: 5',
      'FSI stop, Position: 6',
      'FSI stop, Position: 6',
      'Mail Group stop, Position: 5',
      'Mail Group stop, Position: 5',
      'Newsstand stop, Position: 4',
      'Newsstand stop, Position: 4'
    ]);
  });
});

describe("with numeric strings", function() {
  it("should sort negative numbers", function() {
    expect(['-1', '-2', '4', '-3', '0', '-5'].sort(naturalSort))
      .to.eql(['-5', '-3', '-2', '-1', '0', '4']);
  });
});

describe("with hex-like strings", function() {
  it("should sort real hex numbers numerically", function() {
    expect([ '0xA','0x9','0x99' ].sort(naturalSort))
      .to.eql(['0x9', '0xA', '0x99']);
  });

  it("should sort fake hex numbers alphabetically", function() {
    expect([ '0xZZ','0xVVV','0xVEV','0xUU' ].sort(naturalSort))
      .to.eql([ '0xUU','0xVEV','0xVVV','0xZZ' ]);
  });
});

describe("with unicode strings", function() {
  it("should sort characters", function() {
    expect([ '\u0044', '\u0055', '\u0054', '\u0043' ].sort(naturalSort))
      .to.eql([ '\u0043', '\u0044', '\u0054', '\u0055' ]);
  });
});

describe("with a mix of alpha and numeric strings", function() {
  it("should sort case-sensitively", function() {
		naturalSort.insensitive = false;
    expect(
      ['9','11','22','99','A','aaaa','bbbb','Aaaa','aAaa','aa','AA','Aa','aA','BB','bB','aaA','AaA','aaa'].sort(naturalSort)
    ).to.eql(
      ['9', '11', '22', '99', 'A', 'AA', 'Aa', 'AaA', 'Aaaa', 'BB', 'aA', 'aAaa', 'aa', 'aaA', 'aaa', 'aaaa', 'bB', 'bbbb']);
  });

  it("should sort case-insensitively", function() {
		naturalSort.insensitive = true;
    expect(
      ['9','11','22','99','A','aaaa','bbbb','Aaaa','aAaa','aa','AA','Aa','aA','BB','bB','aaA','AaA','aaa'].sort(naturalSort)
    ).to.eql(
      ['9','11','22','99','A','aA','Aa','AA','aa','aaA','AaA','aaa','aAaa','Aaaa','aaaa','BB','bB','bbbb']);
  });
});

