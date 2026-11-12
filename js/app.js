// завдання 1
const drink = Number(prompt("Оберіть напій: 1 — кава, 2 — чай, 3 — сік"));
let price;

switch (drink) {
  case 1:
    price = 30;
    break;
  case 2:
    price = 20;
    break;
  case 3:
    price = 25;
    break;
  default:
    console.log("Помилка: такого напою немає");
}
// завдання 2
if (price !== undefined) {
  const money = Number(prompt("Внесіть гроші:"));

  if (money >= price) {
    console.log(`Решта: ${money - price} грн`);
    console.log("Напій готується");
  } else {
    console.log("Недостатньо коштів");
  }
}

const age = Number(prompt("Введіть свій вік:"));

if (!Number.isFinite(age) || age < 0 || age > 120) {
  console.log("Помилка: нереальний вік");
} else {
  const access = age >= 16 ? "Доступ дозволено" : "Доступ заборонено";
  console.log(access);
}

// завдання 3
const grade = prompt("Введіть оцінку (A, B, C, D або F):")?.trim().toUpperCase();

switch (grade) {
  case "A":
    console.log("Відмінно");
    break;
  case "B":
  case "C":
    console.log("Добре");
    break;
  case "D":
    console.log("Задовільно");
    break;
  case "F":
    console.log("Незадовільно");
    break;
  default:
    console.log("Помилка: невідома оцінка");
}

if (["A", "B", "C", "D", "F"].includes(grade)) {
  const scholarship = grade !== "F"
    ? "Призначено стипендію"
    : "Стипендія відсутня";
  console.log(scholarship);
}
