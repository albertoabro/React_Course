
      const person ={ //Object creation
        name: 'Alberto',
        last_name: 'Abad',
        age:29,
        address:{
          country: 'Spain',
          city: 'Huelva',
          street: 'Maestra Isabel Franco'
        }
      };

      console.table(person);

      const person2 = {...person}; // ... Clone an object in new memory address
      person2.name = 'Ana';

      console.table(person2);
    