// 1
// let camelCase = 0,
// 	snake_case = 1,
// 	PascalCase = 2;
// console.log(camelCase);
// console.log(snake_case);
// console.log(PascalCase);
// alert(camelCase);
// alert(snake_case);
// alert(PascalCase);
// отличие alert и console.log в том, что первое выводит сообщение во всплывающем окне и его видит пользователь, второе выводит сообщение в консоль, т. е. скрывает его от пользователя


// 2
// let str = 'HTML';
// str = str.toLocaleLowerCase();
// console.log(str);


// 3
// let name = prompt('Як вас звати?');
// alert(`Ваше ім'я ${name}`);


// 4
// let names = ['Саша', 'Петя', 'Оксана'];
// let newNames = [];
// newNames[0] = names[2];
// newNames[1] = 'Олег';
// newNames[2] = names[0];
// console.log(newNames);
// names = ['Оксанa', 'Олег', 'Саша'];
// console.log(names);


// 5
// let number1 = +prompt('Введіть перше число');
// let number2 = +prompt('Введіть друге число');
// if (number1 > number2) alert(number1 + number2);
// if (number1 < number2) alert(number1 * number2);
// if (number1 === number2) alert('цифри однакові');


// 6
// let arr = [10, 20, 30, 50, 235, 3000];
// let out = '';
// for (item of arr) {
// 	let num = +item.toString()[0];
// 	if (num === 1 || num === 2 || num === 5) {
// 		out += item + ' ';
// 	}
// }
// alert(out);


// 7
// let weight = 1;
// let weight = 3;
// let weight = 4;
// let weight = 5;
// let weight = 10;
// let recommendation;
// if (weight < 4) recommendation = "Пора перекусити";
// else if (weight >= 4 && weight <= 5.5) recommendation = "Вага в нормі";
// else recommendation = "Пора на тренування";
// console.log(recommendation);


// 8
// function finalGrade(grade, madeProjects) {
// 	if (grade > 90 && madeProjects > 10) return 100;
// 	else if (grade > 75 && madeProjects > 5) return 90;
// 	else if (grade > 50 && madeProjects > 2) return 75;
// 	else return 0;
// }
// console.log(finalGrade(100, 12));
// console.log(finalGrade(99, 11));
// console.log(finalGrade(80, 15));
// console.log(finalGrade(85, 5));
// console.log(finalGrade(55, 3));
// console.log(finalGrade(55, 0));
// console.log(finalGrade(20, 2));


// 9
// function multiArr(arr) {
// 	let multi = 1;
// 	for (item of arr) {
// 		multi *= item;
// 	}
// 	return multi;
// }
// console.log(multiArr([1, 2, 3, 4]));

// 10
// function deleteNames(arr) {
// 	const unwantedNames = ['Діма', 'Саша', 'Ольга', 'Микита'];
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!unwantedNames.includes(arr[i])) {
// 			newArr.push(arr[i])
// 		}
// 	}
// 	return newArr;
// }
// console.log(deleteNames(['Микита', 'Саша', 'Анастасія', 'Дима', 'Санич', 'Ольга',]));
// console.log(deleteNames(['Олексій', 'Семен', 'Василиса', 'Діма', 'Максим', 'Ольга',]));


// 11
// function subtraction(arr1, arr2) {
// 	return (arr1.reduce((accum, item) => accum *= item) - arr2.reduce((accum, item) => accum *= item));
// }
// console.log(subtraction([3, 2, 5], [1, 4, 4]));
// console.log(subtraction([9, 7, 2], [5, 2, 2]));

// 12
// function between(a, b) {
// 	let arr = [];
// 	for (let i = 0; ; i++) {
// 		arr.push(a);
// 		a++;
// 		if (a > b) break;
// 	}
// 	return arr;
// }
// console.log(between(1, 4));
// console.log(between(-2, 2));
// console.log(between(20, 25));


// 13
// function hexToDec(value) {
// 	return parseInt(value, 16)
// }
// console.log(hexToDec('FF'))


// 14
// function remove(string, num) {
// 	let newString = '';
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === '!' && num > 0) {
// 			num--;
// 		}
// 		else newString += string[i];
// 	}
// 	return newString;
// }
// console.log(remove("Hi!", 1));
// console.log(remove("Hi!", 100));
// console.log(remove("Hi!!!", 1));
// console.log(remove("!Hi!", 1));
// console.log(remove("!!!Hi !!hi!!! !hi", 5));


// 15
// function maxDiff(ar) {
// 	ar.sort(function (a, b) {
// 		return a - b;
// 	});
// 	return (ar[ar.length - 1] - ar[0]);
// }
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]));


// 16
// function chekLength(phrase, num) {
// 	let wordArray = phrase.split(' ');
// 	let enoughtLengh = [];
// 	console.log(wordArray);
// 	for (let i = 0; i < wordArray.length; i++) {
// 		if (wordArray[i].replace(/[\s.,]/, '').length > num) enoughtLengh.push(wordArray[i].replace(/[\s.,]/, ''));
// 	}
// 	return enoughtLengh;
// }
// console.log(chekLength('Сьогодні чудовий день. З самого ранку ми підемо на озеро, купатися.', 5));


// 17
// function divisibleByThree(numbers) {
// 	let sum = +numbers[0];
// 	for (let i = 1; i < numbers.length; i++) {
// 		sum += +numbers[i]
// 	}
// 	return (Number.isInteger(sum / 3))
// }
// console.log(divisibleByThree('123'));
// console.log(divisibleByThree('19254'));
// console.log(divisibleByThree('88'));


// 18
// function spacey(words) {
// 	let arrayOfWords = [];
// 	let entries = '';
// 	for (item of words) {
// 		entries += item;
// 		arrayOfWords.push(entries);
// 	}
// 	return arrayOfWords;
// }
// console.log(spacey(['kevin', 'has', 'no', 'space']));


// 19
// function evensAndOdds(num) {
// 	if (num % 2 === 0) return num.toString(2);
// 	else return num.toString(16);
// }
// console.log(evensAndOdds(13));


// 20
// function dataSort(datas) {
// 	let sorted = {
// 	}
// 	for (item of datas) {
// 		let type = (typeof item);
// 		if (type in sorted) {
// 			sorted[type].push(item);
// 		}
// 		else {
// 			sorted[type] = [item]
// 		}
// 	}
// 	return sorted;
// }
// console.log(dataSort(['a', 1, 2, false, 'b']));


// 21
// function replacer(stringToReplace) {
// 	stringToReplace = stringToReplace.split('');
// 	for (let i = 0; i < stringToReplace.length; i++) {
// 		if (stringToReplace[i] === 'a') stringToReplace[i] = 'b';
// 		else if (stringToReplace[i] === 'b') stringToReplace[i] = 'a';
// 	}
// 	return stringToReplace.join('');
// }
// console.log(replacer('aaabcccbaaa'));