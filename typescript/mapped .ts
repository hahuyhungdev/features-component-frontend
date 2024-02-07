// defined mapped type
// Mapped types are a feature of typescript that allow you to map over a union of types to create a new type.
type TUser = {
  name: string;
  age: number;
};
// solution manual
// type profile = {
//   userName: string;
//   userAge: number;
// };

// solution use mapped type
type TProfile = {
  [P in keyof TUser as `change${Capitalize<P>}`]: string;
};
//  -------------------------------------------------------------------
type Fruit = "apple" | "banana" | "orange";
type TFruit = {
  [T in Fruit]: T extends "apple" ? "apple" : "other";
};
const fruit: TFruit = {
  apple: "apple",
  banana: "other",
  orange: "other",
};
// note :F in Fruit acts as a kind of index signature, same below
const fruitList = ["apple", "banana", "orange"];
for (const f of fruitList) {
  console.log(f);
}
//  -------------------------------------------------------------------
// with keyof
interface Person {
  name: string;
  age: number;
}

// defined nullable type from the object type already defined
type NullablePerson = {
  [P in keyof Person]: Person[P] | null;
};
const person: NullablePerson = {
  name: "hung",
  age: 1,
};
//  -------------------------------------------------------------------
//Mapping non-string unions with as
// Sometimes, you'll have a union of things which can't be assigned to the key of an object. For instance, a union of objects
type TEvent =
  | {
      type: "click";
      x: number;
      y: number;
    }
  | {
      type: "hover";
      element: HTMLElement;
    };
type EventMap = {
  // Type 'Event' is not assignable to type 'string | number | symbol'.
  [E in TEvent as E["type"]]: (event: E) => void;
};
const eventMap: EventMap = {
  click: (e) => {
    console.log(e.x, e.y);
  },
  hover: (e) => {
    console.log(e.element);
  },
};
