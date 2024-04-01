// String, Number, Boolean
// string, number, boolean

// undefined, null

// O que nós podemos descrever com Typescript
// (Onde nos podemos aplicar tipagem)

// Posso tipar instâncias de variável

const firstName: string = "Alex";
let age: number = 33;
let isTeacher: boolean = true;

let lastName = "Conder";

// Podemos (DEVEMOS!) tipar parâmetros de função

function sayMyName(name: number) {
   console.log(name);
}

function sub(a: number, b: number, c?: number) {
   if (c) {
      return a - b - c;
   }
   return a - b;
}

sub(2, 2);
sub(2, 2, 2);

const sum = (a: number, b: number): number => {
   return a + b;
};

// Podemos tipar retornos de função

// Obrigatório / opcional - Porque isso acontece?
// Inferência

// Tipagem em listas (arrays)

//Lista com valores já definidos
let nameList = ["Alex", "Camille", "Bruno", "Kaio", "Bom Samaritano", "Thiago"];

//Lista vazia DEVEMOS apontar o tipo
let fruitList: string[] = [];

function sayAllNames(nameList: string[]) {
   nameList.forEach((name) => {
      console.log(name);
   });
}

// Union Type - Um tipo ou outro

let user: string | null = null; 
user = "Alex";
user = null;