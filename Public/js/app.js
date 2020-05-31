import {Fabric} from "./PersonLib.js";
import {School} from './School.js';
// проинициализируем фабрику
//const factory = new Factory();
let fabric = new Fabric();
// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School(fabric);
// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
school.addStudent('Антон Кабанов');
school.addStudent('Елена Киселёва');
school.addTeacher('Борис Вячеславович Сидоров');

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
let layout = school.appendToDOM(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше