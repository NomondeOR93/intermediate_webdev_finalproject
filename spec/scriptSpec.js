const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Calculator Business Logic", () => {
  it("should calculate simple interest correctly", () => {
    expect(calculateSimpleInterest(1000, 5, 1)).toBe(50);
  });

  it("should calculate total payable amount correctly", () => {
    expect(calculateTotalPayableAmount(1000, 50)).toBe(1050);
  });
});
