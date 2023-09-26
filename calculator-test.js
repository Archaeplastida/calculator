
it('should calculate the monthly rate correctly', function () {
  expect(parseFloat(calculateMonthlyPayment([1000,50,2]))).toEqual(66.71)
  expect(parseFloat(calculateMonthlyPayment([7023,13,5]))).toEqual(159.79)
  expect(parseFloat(calculateMonthlyPayment([8173560000,5,15]))).toEqual(64635991.56)
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment([1009, 5, 10])).toEqual("10.70");
  expect(calculateMonthlyPayment([9001, 12, 11])).toEqual("123.11");
  expect(calculateMonthlyPayment([298934, 23.2, 5])).toEqual("8461.48");
});

/// etc
