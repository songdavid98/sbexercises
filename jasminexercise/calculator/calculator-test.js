describe("loan calculator tests", function() {
  beforeEach( function() {
    setupIntialValues();
  });

  it('should calculate the monthly rate correctly', function () {
    let output = calculateMonthlyPayment( getCurrentUIValues() );
    expect(output).toEqual('8.38');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    let output = calculateMonthlyPayment( getCurrentUIValues() );
    expect(output).toEqual( Number(output).toFixed(2) );
  });
  
  it("should be an instance of a string", function() {
    let output = calculateMonthlyPayment( getCurrentUIValues() );
    expect(output).toBeInstanceOf(String);
  });
  
  /// etc
});
