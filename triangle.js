console.log("Треугольник паскаля\n");

//Создали массив треугольника
triangle = [];

//Описываем стурктуру функции, которая создает треугольник, где входной параметр это номер строки
function createTriangle (m) {
    //Так как нумерация массива идет с нуля, то мы прибавляем единицу
    m = m + 1;

    //создаем массив рамерностью m
    var pasTriangle = new Array(m);

    //создаем в нем массивы, длинной m
    for(let i = 0; i<m; i++)
    {
        pasTriangle[i] = new Array(m);
    };

    //заполняем массив
    for(let i = 0; i<m; i++) 
    {
        for(let j = 0; j<m; j++) 
        {
            if (i === 0) 
            {
                pasTriangle[i][0] = 1;
                pasTriangle[i][j] = 0;
            }
            else
            {
                if(j === 0)
                {
                    pasTriangle[i][j] = 1;
                }
                else 
                {
                    pasTriangle[i][j] = pasTriangle[i-1][j] + pasTriangle[i-1][j-1];
                }
            };
        };
    };

    //Возвращаем последнюю строку
    return pasTriangle[m-1];
};

triangle = createTriangle(4);

console.log(triangle);