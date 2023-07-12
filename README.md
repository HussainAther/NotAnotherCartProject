# Not Another Cart Project

The Cart project is a TypeScript project that simulates a shopping cart functionality. It allows users to create a user, add items to the cart, remove items from the cart, calculate the total price of items in the cart, and print the contents of the cart.

## Project Structure
The project consists of the following files:

* `types.ts`: Contains the type definitions and functions related to the project.
* `index.ts`: Contains the driver code that emulates a front-end user and demonstrates the usage of the functions.

## Types
The project defines the following types:

* *Item*: Represents an item in the cart, with properties including id, name, price, and description.
* *User*: Represents a user, with properties including id, name, age, and cart.

## Functions
The project provides the following functions:

* `createUser(name: string, age: number): User`: Creates a user object with an auto-generated UUID and initializes an empty cart.
* `createItem(name: string, price: number, description: string): Item`: Creates an item object with an auto-generated UUID.
* `addToCart(item: Item, user: User): void`: Adds an item to the user's cart.
* `removeFromCart(item: Item, user: User): void`: Removes all instances of an item from the user's cart.
* `removeQuantityFromCart(item: Item, user: User, quantity: number): void`: Removes a specified quantity of instances of an item from the user's cart.
* `cartTotal(user: User): number`: Calculates the total price of all items in the user's cart.
* `printCart(user: User): void`: Prints the items in the user's cart.

## Usage
To use the Cart project, follow these steps:

1. Create a user using the `createUser` function, providing a name and age.
2. Create items using the `createItem` function, providing a name, price, and description.
3. Use the provided functions (`addToCart`, `removeFromCart`, `removeQuantityFromCart`, `cartTotal`, `printCart`) to interact with the user's cart.

You can refer to the included `index.ts` file for an example of how to use the functions.

## Setup
### Step 1: Create a TypeScript Project

Open a terminal in the project folder and run the following commands:

```bash
npm init -y
npm install typescript
npx tsc --init
npm install uuid @types/uuid
```

Open the generated `tsconfig.json` file and update it with the following configuration:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Step 2: Create the Types

Create a new file `types.ts`.

Add the following code to types.ts:

```
import { v4 as uuidv4 } from 'uuid';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  age: number;
  cart: Item[];
}

export function createUser(name: string, age: number): User {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
}

export function createItem(name: string, price: number, description: string): Item {
  return {
    id: uuidv4(),
    name,
    price,
    description,
  };
}

export function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

export function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
  const remainingItems = user.cart.filter((cartItem) => cartItem.id === item.id);

  if (remainingItems.length > quantity) {
    remainingItems.splice(0, quantity);
  } else {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
  }
}

export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(user: User): void {
  console.log("User's Cart:");
  user.cart.forEach((item) => console.log(`${item.name} - $${item.price}`));
}
```

### Step 3: Create the Driver Code

Create a new file `index.ts`.

Add the following code to `index.ts`:

```
import { createUser, createItem, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './types';

const user = createUser('John Doe', 25);
console.log('User:', user);

const itemA = createItem('Item A', 10, 'This is item A');
const itemB = createItem('Item B', 20, 'This is item B');
const itemC = createItem('Item C', 30, 'This is item C');

addToCart(itemA, user);
printCart(user);
console.log('Cart Total:', cartTotal(user));

addToCart(itemA, user);
addToCart(itemB, user);
addToCart(itemC, user);
printCart(user);
console.log('Cart Total:', cartTotal(user));

removeFromCart(itemA, user);
printCart(user);
console.log('Cart Total:', cartTotal(user));

removeQuantityFromCart(itemB, user, 2);
printCart(user);
console.log('Cart Total:', cartTotal(user));
```

### Step 4: Compile and Run the Code

Open a terminal in the project folder.

Run the following command to compile the TypeScript code:

```
npx tsc
```

After successful compilation, run the following command to execute the code:

```
node dist/index.js
```

You should see the output generated by the driver code, demonstrating the usage of the defined functions and types.

Note: The compiled JavaScript code will be located in the dist folder.
