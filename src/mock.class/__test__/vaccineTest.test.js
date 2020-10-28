import VaccineTest from "../vaccineTest";

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn(() => ({
    acceptInjection: jest.fn(),
  }));
});

let vaccineTest;

beforeEach(() => {
  // clear mock here
  vaccineTest = new VaccineTest();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    vaccineTest.inject();

    expect(vaccineTest.recipient.acceptInjection).toHaveBeenNthCalledWith(
      1,
      vaccineTest.vaccine
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    vaccineTest.recipient.getHasAntibodies = jest.fn().mockReturnValue(true);

    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    vaccineTest.recipient.getHasAntibodies = jest.fn().mockReturnValue(false);

    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
