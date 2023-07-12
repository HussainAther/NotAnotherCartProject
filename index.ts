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

