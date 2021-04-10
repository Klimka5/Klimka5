console.log("Нормализация данных\n");

let nationality = 
{
    "afganistan":{
        "nones": ["an Afgan"],
        "adjective": "Afgan"
    },
    "argentina":{
        "nones": ["an Argentine", "an Argentinian"],
        "adjective": "Argentinian"
    },
    "england":{
        "nones": ["an Englishman", "an Englishwoman"],
        "adjective": "English"
    },
    "netherlands":{
        "nones": ["a Dutchman", "a Dutchwoman"],
        "adjective": "Dutch"
    }, 
    "new zeland":{
        "nones": ["a New zelander"],
        "adjective": "New zeland"
    }
}

//Создаем объект, который будем использовать для перезаписи объекта nationality
let newNationality = {};

console.log("Исходный массив:\n");
console.log(nationality);

function changeObject () {

    //Перебираем все ключи объекта nationality (а имeнно названия стран)
    for (let key in nationality) {

        /*
        Переменная key в цикле каждый раз присваивает себе значение название страны
        С ее помощью в цикле вытаскиваем значение перемененной adjective для страны и запоминаем в переменную
        Меняем регистр всех символов на нижний
        */
        let adj_copy = nationality[key].adjective.toLowerCase();
        
        //Тут мы собираем все вариации национальностей
        for (let keys in nationality[key].nones){
          
            //Записываем национальность в переменную и снова меняем регистр всех циклов на нижний
            let non_copy = nationality[key].nones[keys].toLowerCase();

            //я решил использовать тэг replace, потому что он ищет первое вхождение в строку и заменяет его, а артикль не может идти после названия
            non_copy = non_copy.replace('an ', '');
            non_copy = non_copy.replace('a ', '');

            //обращаемся к объекту newNationality и задаем ему новые поля и их значения
            newNationality[adj_copy] = key;
            newNationality[non_copy] = key;
        };

    };

    return newNationality;
};

//Перезаписываем объект
nationality = changeObject();

console.log("Итоговый массив:\n");
console.log(nationality); 
   