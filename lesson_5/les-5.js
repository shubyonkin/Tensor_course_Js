let arr1 = [];
let arr2 = [];
let arr3 = [];

arr1 = Array.from({length: 100}, (v, k) => k+1)
arr1.sort(() => Math.random() - 0.5);

arr2 = arr1.reverse().slice(0);
arr1.reverse();

let i=0;
while(i<arr1.length)
{
    arr3[i] = Math.abs( arr1[i] - arr2[i]);
    //использовал модуль, потому что  иначе сумма 
    //всех чисел 3-го массива  всегда равна 0
    i++;
}

let sum = arr3.reduce(function(acc,n){
    return acc+n;
});

console.log("среднее арифметическое элементов третьего массива, взятых по модулю:");
console.log(sum/arr3.length);
console.log("среднее арифметическое элементов третьего массива(взятых не по модулю) при данных начальных условиях всегда равно 0");


