const myObjectC1 = {
  a: 1,
  b: 2,
};
type TMyObject = typeof myObjectC1;
// Erorr: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ a: number; b: number; }'.
//   No index signature with a parameter of type 'string' was found on type '{ a: number; b: number; }'.
// const access = (str: string) => {
//   return myObj[str];
// // };

// Solution 1: Tighten the index
// const access = (str: keyof typeof myObjectC1) => {
//   return myObjectC1["a"];
// };
// const accessImprove = <T extends object>(obj: T, key: keyof typeof obj) => {
//   return obj[key];
// };

// accessImprove<TMyObject>(myObjectC1, "a");

// Solution 2: Loosen the object type
// const myObjectC2: Record<string, number> = {
//   a: 1,
//   b: 2,
// };
// const access = (str: string) => {
//   return myObjectC2[str];
// };
// Note that if you choose this approach, you should add noUncheckedIndexedAccess to your tsconfig, which will give you extra safety when accessing the object.

// Solution 3: Cast the index
// const access = (str: string) => {
//   return myObjectC1[str as keyof TMyObject];
// };
//If possible, you should be using solution 1 or 2 instead - but having this cast in your pocket can be useful.
