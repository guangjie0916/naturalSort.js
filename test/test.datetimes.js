describe("with datetimes", function() {
  it("should sort similar dates", function() {
    expect(['10/12/2008','10/11/2008','10/11/2007','10/12/2007'].sort(naturalSort))
      .to.eql(['10/11/2007','10/12/2007','10/11/2008','10/12/2008']);

    expect(['01/01/2008','01/10/2008','01/01/1992','01/01/1991'].sort(naturalSort))
      .to.eql(['01/01/1991','01/01/1992','01/01/2008','01/10/2008']);
  });

  it("should sort JavaScript toString() style strings with timezones", function() {
    expect([
      'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)'
    ].sort(naturalSort)).to.eql([
      'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)'
    ]);
  });

  it("should sort Date.toString() and Date.toLocaleString() style strings", function() {
    expect([
      'Saturday, July 3, 2010',
      'Monday, August 2, 2010',
      'Monday, May 3, 2010'
    ].sort(naturalSort)).to.eql([
      'Monday, May 3, 2010',
      'Saturday, July 3, 2010',
      'Monday, August 2, 2010'
    ]);
  });

  it("should sort Date.toUTCString() style strings", function() {
    expect([
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 3 May 2010 17:45:30 GMT',
      'Mon, 15 Jun 2009 17:45:30 GMT'
    ].sort(naturalSort)).to.eql([
      'Mon, 15 Jun 2009 17:45:30 GMT',
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 3 May 2010 17:45:30 GMT'
    ]);
  });
});

