// task 1 'Если а – четное посчитать а*б, иначе а+б'
function Conditional_Operators(a, b) {
  if (a % 2 !== 0) {
    result = a * b;
  }
  else {
    result = a + b;
  }
}
Conditional_Operators(4, 9);

//task 2 'Определить какой четверти принадлежит точка с координатами (х,у)'
function coordinates(x, y) {
  if (x < 0 && y > 0) {
    console.log('1 quarter'); // первая четверть 
  }
  if (x > 0 && y > 0) {
    console.log('2 quarter'); // вторая четверть 
  }
  if (x > 0 && y < 0)
  {
    console.log('3 quarter'); // третья четверть 
  }
  if (x < 0 && y < 0) {
    console.log('4 quarter'); // четвертая четверть 
  }
}
coordinates(2, -3) // это решение не охватывает точки на оси Х или Y отдельно или точку (0, 0);

//task 3 'Найти суммы только положительных из трех чисел'
function Sum_3_Positive(a, b, c) {
  if (a >= 0 && b >= 0 && c >= 0) {
    console.log(a + b + c);
  }
  else {
    console.log('pechal');
  }
}
Sum_3_Positive(5, -6, 0);

// task 4 'Посчитать выражение (макс(а*б*с, а+б+с))+3'
function Max(a, b, c) {
  var multip = a * b * c;
  var sum = a + b + c;
  if (multip >= sum) {
    console.log(multip + 3);
  }
  else {
    console.log(sum + 3);
  }
}
Max(5, 3, 1); // если честно, я до конца не поняла что от меня хотят

// Task 5 'Написать программу определения оценки студента по его рейтингу, на основе следующих правил'
function rating(value) {
  if (value > 0 && value <= 19) {
    console.log('rating: F');
  }
  if (value >= 29 && value <= 39) {
    console.log('rating: E');
  }
  if (value >= 40 && value <= 59) {
    console.log('rating: D');
  }
  if (value >= 60 && value <= 74) {
    console.log('rating: C');
  }
  if (value >= 75 && value <= 89) {
    console.log('rating: B');
  }
  if (value >= 90 && value <= 100) {
    console.log('rating: A');
  }
}
rating(88);