//An interface can only extend an object type or intersection of object types with statically known members.
// type Example =
//   | { a: string }
//   | {
//       b: string;
//     };
// EXPECT: contain 3 properties: a, b, c

//  ERROR
// interface Foo extends Example {
//   c: string;
// }
// SOLUTION
// type Foo = Example & {
//   c: string;
// };

//

//  -------------------------------------------------------------------//  -------------------------------------------------------------------
// Use 'in' operator to transform a union to another union

export type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

// my solution
type TEntityWithId = {
  [EntityType in Entity["type"]]?: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

const test: TEntityWithId = {
  type: "comment",
  commentId: "1",
};

// EXPECT: contain type and next field related to type
type EntityWithId =
  | {
      type: "user";
      userId: string;
    }
  | {
      type: "post";
      postId: string;
    }
  | {
      type: "comment";
      commentId: string;
    };

//  -------------------------------------------------------------------//  -------------------------------------------------------------------
// Decode URL search params at the type level with ts-toolbelt

//  -------------------------------------------------------------------//  -------------------------------------------------------------------

//  -------------------------------------------------------------------//  -------------------------------------------------------------------

//  -------------------------------------------------------------------//  -------------------------------------------------------------------

//  -------------------------------------------------------------------//  -------------------------------------------------------------------

//  -------------------------------------------------------------------//  -------------------------------------------------------------------
//  -------------------------------------------------------------------//  -------------------------------------------------------------------
