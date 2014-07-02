describe("with filenames", function() {
  it("should sort simple image filenames", function() {
    expect(['img12.png','img10.png','img2.png','img1.png'].sort(naturalSort))
      .to.eql(['img1.png','img2.png','img10.png','img12.png']);
  });

  it("should sort complex filenames", function() {
    expect(['car.mov','01alpha.sgi','001alpha.sgi','my.string_41299.tif','organic2.0001.sgi'].sort(naturalSort))
      .to.eql(['001alpha.sgi','01alpha.sgi','car.mov','my.string_41299.tif','organic2.0001.sgi']);
  });

  it("should sort *nix pathnames", function() {
    expect([
      './system/kernel/js/01_ui.core.js',
      './system/kernel/js/00_jquery-1.3.2.js',
      './system/kernel/js/02_my.desktop.js'
    ].sort(naturalSort)).to.eql([
      './system/kernel/js/00_jquery-1.3.2.js',
      './system/kernel/js/01_ui.core.js',
      './system/kernel/js/02_my.desktop.js'
    ]);
  });
});

