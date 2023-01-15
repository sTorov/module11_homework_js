import { getMonth } from "../getMonth.js";

describe("Tests for function getMonth", () => {    
    it("must return correct month name", () => {
        expect(getMonth(1)).toBe("январь");
        expect(getMonth(4)).toBe("апрель");
        expect(getMonth(7)).toBe("июль");
        expect(getMonth(9)).toBe("сентябрь");
        expect(getMonth(12)).toBe("декабрь");
    }),
    it("check throw exception", () => {
        expect(() => getMonth()).toThrow(/^Неверный тип данных! Необходимо передать число!$/);
        expect(() => getMonth(0)).toThrow(/^Значение должно быть в диапозоне от 1 до 12!$/);
        expect(() => getMonth('test')).toThrow(/^Неверный тип данных! Необходимо передать число!$/);
        expect(() => getMonth(13)).toThrow(/^Значение должно быть в диапозоне от 1 до 12!$/);
        expect(() => getMonth(null)).toThrow(/^Неверный тип данных! Необходимо передать число!$/);
        expect(() => getMonth(NaN)).toThrow(/^Значение должно быть в диапозоне от 1 до 12!$/);
        expect(() => getMonth(Infinity)).toThrow(/^Значение должно быть в диапозоне от 1 до 12!$/);
    })
});