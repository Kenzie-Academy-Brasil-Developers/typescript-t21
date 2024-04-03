// Um recurso para criação de tipos de objeto
// Tipo para descrever objetos
// A interface é um tipo
// A ordem das chaves "não importa"
// A interface pode ser exportada e importada
interface IPet {
   id: number;
   name: string;
   species: string;
}

export interface IPerson {
   id: number;
   firstName: string;
   lastName?: string;
   age: number;
   pet?: IPet;
}

const person: IPerson = {
   id: 1,
   firstName: "Alex",
   lastName: "Conder",
   age: 33,
   pet: { id: 1, name: "Luz", species: "Cachorro" },
};

/*
function printPersonData(person: IPerson){
    console.log(`Meu nome é ${person.firstName}`);
    console.log(`Eu tenho ${person.age} anos.`);
}
*/

function printPersonData({ firstName, age }: IPerson) {
   console.log(`Meu nome é ${firstName}`);
   console.log(`Eu tenho ${age} anos.`);
}

function returnPerson(): IPerson {
   return person;
}

const personList: IPerson[] = [];
