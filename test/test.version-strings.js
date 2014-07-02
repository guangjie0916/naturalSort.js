describe("with version strings", function() {
  it("should sort basic SemVer", function() {
    expect(['1.0.2','1.0.1','1.0.0','1.0.9'].sort(naturalSort))
      .to.eql(['1.0.0','1.0.1','1.0.2','1.0.9']);
  });

  it("should sort multi-digit patch versions", function() {
    expect(['1.0.03','1.0.003','1.0.002','1.0.0001'].sort(naturalSort))
      .to.eql(['1.0.0001','1.0.002','1.0.003','1.0.03']);
  });

  it("should sort alphanumeric patch versions", function() {
    expect(['1.1beta','1.1.2alpha3','1.0.2alpha3','1.0.2alpha1','1.0.1alpha4','2.1.2','2.1.1'].sort(naturalSort))
      .to.eql(['1.0.1alpha4','1.0.2alpha1','1.0.2alpha3','1.1.2alpha3','1.1beta','2.1.1','2.1.2']);
  });

  it("should sort string-first versions", function() {
    expect(['myrelease-1.1.3','myrelease-1.2.3','myrelease-1.1.4','myrelease-1.1.1','myrelease-1.0.5'].sort(naturalSort))
      .to.eql(['myrelease-1.0.5','myrelease-1.1.1','myrelease-1.1.3','myrelease-1.1.4','myrelease-1.2.3']);
  });
});

