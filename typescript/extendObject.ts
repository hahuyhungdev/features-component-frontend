// Explained: An Interface Can Only Extend an Object Type
// note : An interface can only extend an object type or intersection of object types with statically known members.

type Example1 =
  | { a: string }
  | {
      b: string;
    };

// interface Foo extends Example1 {
// An interface can only extend an object type or intersection of object types with statically known members.
//   c: string;
// }
type Foo1 = Example1 & {
  c: string;
};

type TStatus = "success" | "error" | "warning";

function printStatus(status: TStatus) {
  console.log(`Status is: ${status}`);
}
printStatus("success");
