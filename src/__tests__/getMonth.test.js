import { getMonth } from "../getMonth.js";

describe("Tests for function getMonth", () => {
    const regexIncorrectDataType = /^Неверный тип данных! Необходимо передать число!$/;
    const regexIncorrectValue = /^Значение должно быть в диапозоне от 1 до 12!$/;

    it("must return correct month name", () => {
        expect(getMonth(1)).toBe("январь");
        expect(getMonth(4)).toBe("апрель");
        expect(getMonth(7)).toBe("июль");
        expect(getMonth(9)).toBe("сентябрь");
        expect(getMonth(12)).toBe("декабрь");
    }),
    it("check throw exception", () => {
        expect(() => getMonth()).toThrow(regexIncorrectDataType);
        expect(() => getMonth(0)).toThrow(regexIncorrectValue);
        expect(() => getMonth('test')).toThrow(regexIncorrectDataType);
        expect(() => getMonth(13)).toThrow(regexIncorrectValue);
        expect(() => getMonth(null)).toThrow(regexIncorrectDataType);
        expect(() => getMonth(NaN)).toThrow(regexIncorrectValue);
        expect(() => getMonth(Infinity)).toThrow(regexIncorrectValue);
    })
});