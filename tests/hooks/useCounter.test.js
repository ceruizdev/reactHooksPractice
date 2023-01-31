import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"

describe("useCounter Tests", () => {
    test("Return default values", () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrementValue, increaseValue, resetValue } = result.current;
        expect(decrementValue).toEqual( expect.any (Function) );
        expect(increaseValue).toEqual( expect.any (Function) );
        expect(resetValue).toEqual( expect.any (Function) );
    });

    test("Set counter new value", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect( counter ).toBe(100);
    });

    test("Increment counter value", () => {
        const { result } = renderHook(() => useCounter());
        const { counter,increaseValue } = result.current;
        act(() => {
            increaseValue();
            increaseValue();
        });
        expect(result.current.counter).toBe(2);
    });

    test("Decrement counter value", () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrementValue } = result.current;
        act(() => {
            decrementValue();
            decrementValue();
        });
        expect(result.current.counter).toBe(-2);
    });

    test("Reset counter value", () => {
        const { result } = renderHook(() => useCounter(200));
        const { counter, resetValue, decrementValue } = result.current;
        expect( counter ).toBe(200);
        act(() => {
            decrementValue();
        });
        expect(result.current.counter).toBe(199);
        act(() => {
            resetValue();
        });      
        expect(result.current.counter).toBe(200);
    });
})