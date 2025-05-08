What are some differences between interfaces and types in TypeScript?
Blog:01:
Interfaces and types serve to define the shape of objects in TypeScript, but they have key differences: 
Declaration Merging:
Interfaces support declaration merging, allowing multiple declarations with the same name to be combined. Types do not support this.
Scope:
Types can define aliases for primitives, unions, and tuples, which interfaces cannot.
Extensibility:
Interfaces use extends to inherit from other interfaces or types, while types use intersection types (&) to achieve a similar result.
Use Cases:
Interfaces are generally preferred for defining the structure of objects and classes, while types are more versatile for complex type manipulations like unions and intersections.
Error messages:
Error messages involving interfaces are considered to be more readable than those involving types.


What is the use of the keyof keyword in TypeScript? Provide an example.
Blog:02
The keyof keyword in TypeScript is used to extract the keys of a type as a union of string literal types. This allows for type-safe access to object properties, especially in scenarios involving generics or dynamic property access. 
interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "location"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "John Doe",
  age: 30,
  location: "New York",
};

const personName = getProperty(person, "name"); // string
const personAge = getProperty(person, "age");   // number
// const personCity = getProperty(person, "city"); // Error: Argument of type '"city"' is not assignable to parameter of type '"name" | "age" | "location"'.

