import { User } from './models/User';
import { Product } from './models/Product';
import UserForm from './views/UserForm';

const user = User.buildUser({name: 'JSC!', age:20});
const root = document.getElementById('root');
const ele = new UserForm(root, user)
// root.appendChild(ele.render());
ele.render();

// const user = User.buildUser({name: 'JSC!', age:20});
// const product = Product.buildUser({name:'iphone', price:100, supplier:'apple'})

// product.set({ });
// product.save(product.getAll());
// user.on('click', () => {
//     console.log('click event 1 triggered');
// });
// user.on('click', () => {
//     console.log('click event 2 triggered');
// });
// setTimeout(() => {
//     user.trigger('click');
// }, 1000);
// console.log(user);

// user.set({name: 'jsc5', age: 555 });
// user.save();


// user.fetch(1).then(fetchData => {
//     console.log('fetch : ', fetchData);
// })

// console.log('get : ', user.get('name'));
// user.set({ id: 1, 'name': 'test', age:777})
// user.save(user.getAll());

// user.on('change', () => {
//     console.log('change fired');
//     user.trigger('unsubscribing');
// })

// user.on('unsubscribing', () => {
//     subs.unsubscribe();
//     console.log('unsubscribing');
// })

// const subs = user.fetch(1).subscribe(val => {
//     user.trigger('change');
// })


