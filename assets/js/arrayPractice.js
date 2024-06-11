function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
  //   this.getFullName = function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   };
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName} `;
};

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

console.table(users);

//Отримати масив користувачів, які не підписані (not subscribed).
const notSubscribed = users.filter((users) => !users.isSubscribed);
// function arrNotSubscribed(users) {
//   return users.isSubscribed === true;
// }
console.log(notSubscribed);

//Вивести список повних імен користувачів.

// users.forEach((user) => console.log(user.getFullName()));

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
// const listFemale = users
//   .filter((users) => !users.isMale && users.age >= 6 && users.age <= 18)
//   .map((user) => user.getFullName());
// console.log(listFemale);

//Видалити з масиву користувача з email  useremail5@gmail.com.

// const foundEmail = users.findIndex(
//   (users) => users.email === "useremail5@gmail.com"
// );
// console.log(foundEmail);
// if (foundEmail !== -1) {
//   users.splice(foundEmail, 1);
// }
// console.log(users);

//Змінити email користувачу з id 2 (можна спробувати використати find).
// const foundId = users.findIndex((users) => users.id === 2);
// console.log(foundId);

//*Визначити, який відсоток користувачів підписані (subscribed).

// const allSubscribed = users.filter((users) => users.isSubscribed).length;
// const calcPerSubscribed = (allSubscribed / users.length) * 100;
// console.log(calcPerSubscribed);

//*Знайти середній вік користувачів (спробувати використати reduce).
// const initialValue = 0;
// const sumAge = users.reduce((accum, users) => accum + users.age, initialValue);
// const averAge = sumAge / users.length;
// console.log(averAge);

//*Перевірити, чи всі користувачі підписані (subscribed).
// const allSubscribed = users.every((users) => users.isSubscribed);
// console.log(allSubscribed);

//*Впорядкувати користувачів за віком (sort).

// users.sort((firstItem, secondItem) => firstItem.age - secondItem.age);
// console.log(users);

//Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.

// const someUser = users.some((users) => users.email === "useremail7@gmail.com");
// console.log(someUser);
