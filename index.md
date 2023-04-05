# Práctica 9 - Aplicación de registro de Funko Pops

Gabi Vacaru, alu0101098340
<br>
Desarrollo de Sistemas Informáticos


## Índice de contenidos<a name="id0"></a>
  - [Clase Funko](#id1)
    - [Clase](#id1.1)
    - [tests](#id1.2)

  - [Consola](#id2
    - [Añadir](#id2.1)
    - [Modificar](#id2.2)
    - [Eliminar](#id2.3)
    - [Listar](#id2.4)
    - [Mostrar](#id2.5)


### Funko<a name="id1"></a>

un Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:

ID. Debe ser un identificador único del Funko.
Nombre. Debe ser una cadena de caracteres.
Descripción. Debe ser una cadena de caracteres.
Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.
Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.
Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.
Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.
Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.
Valor de mercado. Debe ser un valor numérico positivo.


#### Interfaces<a name="id1.1"></a>

Para ello hemos realizado la clase Funko:

```typescript
export class Funko {

  private id: number;
  private nombre: string;
  private descripcion: string;
  private tipo: Tipo;
  private genero: Genero;
  private franquicia: Franquicia;
  private numero: number;
  private exclusivo: boolean;
  private caracteristicasEspeciales: string;
  private valor: number;
/**
 * Creates an instance of Funko.
 * @param {number} id Identificador del Funko
 * @param {string} nombre Nombre del Funko
 * @param {string} descripcion Descripción del Funko
 * @param {Tipo} tipo Tipo de Funko
 * @param {Genero} genero Género del Funko
 * @param {Franquicia} franquicia Franquicia del Funko
 * @param {number} numero Número de la colección
 * @param {boolean} exclusivo Indica si el Funko es exclusivo
 * @param {string} caracteristicasEspeciales Características especiales del Funko
 * @param {number} valor Valor del Funko
 * @memberof Funko Pop!
 */
constructor(id: number, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: Franquicia, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valor: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.genero = genero;
    this.franquicia = franquicia;
    this.numero = numero;
    this.exclusivo = exclusivo;
    this.caracteristicasEspeciales = caracteristicasEspeciales;
    this.valor = valor;
  }
```
En donde se puede observar que se ha creado un constructor con todos los atributos de la clase, y tambien se han creado los métodos get y set de cada uno de ellos(Al ser tan repetitivos no los incluyo en el informe)

Dentro de esta clase tambien un metodo para imprimir por pantalla los datos del Funko:

```typescript

public print() {
    let str = "";
    str = "ID: " + this.id +
    "\nNombre: " + this.nombre +
    "\nDescripcion: " + this.descripcion +
    "\nTipo: " + this.tipo +
    "\nGenero: " + this.genero +
    "\nFranquicia: " + this.franquicia +
    "\nNumero: " + this.numero +
    "\nExclusivo: " + this.exclusivo +
    "\nCaracteristicas especiales: " + this.caracteristicasEspeciales + "\n";

    if (this.valor <= 25) {
      str +=chalk.red(`Valor: ${this.valor}`)
    }

    if (this.valor > 25 && this.valor <= 50) {
      str +=chalk.yellow(`Valor: ${this.valor}`)
    }

    if (this.valor > 50 && this.valor <= 75) {
      str +=chalk.blue(`Valor: ${this.valor}`)
    }

    if (this.valor > 75) {
      str +=chalk.green(`Valor: ${this.valor}`)
    }

    return str;
  }  

```

El cual nos devuelve en cada linea un atributo del Funko, y en el caso de que el valor del Funko sea menor o igual a 25, se imprimirá en rojo, si es mayor a 25 y menor o igual a 50 se imprimirá en amarillo, si es mayor a 50 y menor o igual a 75 se imprimirá en azul y si es mayor a 75 se imprimirá en verde.

#### Tests<a name="id1.2"></a>

Los tests se realizaron con la libreria Chai y Mocha.
Para comprobar que la clase Funko funciona correctamente, hemos realizado los siguientes tests:

```typescript
describe('Tests clase Funk', () => {
  it ('Setear ID de funko', () => {
    funkoTests.setId(999);
    expect(funkoTests.getId()).to.equal(999);
  });
  it ('Ver id de funko', () => {
    expect(funkoTests.getId()).to.equal(999);
  });
  it ('Setear nombre de funko', () => {
    funkoTests.setNombre("Test Funko");
    expect(funkoTests.getNombre()).to.equal("Test Funko");
  });
  it ('Ver nombre de funko', () => {
    expect(funkoTests.getNombre()).to.equal("Test Funko");
  });
  it ('Setear descripción de funko', () => {
    funkoTests.setDescripcion("Test Funko");
    expect(funkoTests.getDescripcion()).to.equal("Test Funko");
  });
  it ('Ver descripción de funko', () => {
    expect(funkoTests.getDescripcion()).to.equal("Test Funko");
  });
  it ('Setear tipo de funko', () => {
    funkoTests.setTipo(Tipo.POP);
    expect(funkoTests.getTipo()).to.equal(Tipo.POP);
  });
  it ('Ver tipo de funko', () => {
    expect(funkoTests.getTipo()).to.equal(Tipo.POP);
  });
  it ('Setear género de funko', () => {
    funkoTests.setGenero(Genero.VIDEOGAMES);
    expect(funkoTests.getGenero()).to.equal(Genero.VIDEOGAMES);
  });
  it ('Ver género de funko', () => {
    expect(funkoTests.getGenero()).to.equal(Genero.VIDEOGAMES);
  });
  it ('Setear franquicia de funko', () => {
    funkoTests.setFranquicia("Pokemon");
    expect(funkoTests.getFranquicia()).to.equal("Pokemon");
  });
  it ('Ver franquicia de funko', () => {
    expect(funkoTests.getFranquicia()).to.equal("Pokemon");
  });
  it ('Setear número de funko', () => {
    funkoTests.setNumero(999);
    expect(funkoTests.getNumero()).to.equal(999);
  });
  it ('Ver número de funko', () => {
    expect(funkoTests.getNumero()).to.equal(999);
  });
  it ('Setear exclusivo de funko', () => {
    funkoTests.setExclusivo(true);
    expect(funkoTests.getExclusivo()).to.equal(true);
  });
  it ('Ver exclusivo de funko', () => {
    expect(funkoTests.getExclusivo()).to.equal(true);
  });
  it ('Setear características especiales de funko', () => {
    funkoTests.setCaracteristicasEspeciales("Test Funko");
    expect(funkoTests.getCaracteristicasEspeciales()).to.equal("Test Funko");
  });
  it ('Ver características especiales de funko', () => {
    expect(funkoTests.getCaracteristicasEspeciales()).to.equal("Test Funko");
  });
  it ('Setear valor de funko', () => {
    funkoTests.setValor(10);
    expect(funkoTests.getValor()).to.equal(10);
  });
  it ('Ver valor de funko', () => {
    expect(funkoTests.getValor()).to.equal(10);
  });
  it('Imprimir funko con valor muy bajo', () => {
    expect(funkoTests.print()).to.not.be.null;
  });
  it('Imprimir funko con valor bajo', () => {
    funkoTests.setValor(40);
    expect(funkoTests.print()).to.not.be.null;
  });
  it('Imprimir funko con valor medio', () => {
    funkoTests.setValor(60);
    expect(funkoTests.print()).to.not.be.null;
  });
  it('Imprimir funko con valor alto', () => {
    funkoTests.setValor(90);
    expect(funkoTests.print()).to.not.be.null;
  });
})
```

Se ha creado un funko de prueba para realizar los tests, y se ha comprobado que cada uno de los métodos funciona correctamente.

### Consola<a name="id2"></a>

Para esta parte de la práctica nos pedian implentar por consola con yargs varias opciones para poder gestionar los Funkos.

#### Añadir<a name="id2.1"></a>
Añadir un Funko a la lista. Antes de añadir un Funko a la lista se debe comprobar si ya existe un Funko con el mismo ID. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá el nuevo Funko a la lista y se mostrará un mensaje informativo por la consola.

```typescript

.command('add', 'Adds a funko', {
    id: {
      description: 'Funko ID',
      type: 'number',
      demandOption: true
    },
    usuario: {
      description: 'Usuario',
      type: 'string',
      demandOption: true
    },
    nombre: {
      description: 'Nombre del funko',
      type: 'string',
      demandOption: true
    },
    desc: {
      description: 'Descripcion del funko',
      type: 'string',
      demandOption: true
    },
    tipo: {
      description: 'Tipo de funko',
      type: 'string',
      demandOption: true
    },
    genero: {
      description: 'Genero del funko',
      type: 'string',
      demandOption: true
    },
    franquicia: {
      description: 'Franquicia del funko',
      type: 'string',
      demandOption: true
    },
    numero: {
      description: 'Numero de la franquicia del funko',
      type: 'number',
      demandOption: true
    },
    exclusivo: {
      description: '¿Es un funko exclusivo?',
      type: 'boolean',
      demandOption: true
    },
    especial: {
      description: 'Caracteristicas especiales del funko',
      type: 'string',
      demandOption: true
    },
    valor: {
      description: 'valor del funko',
      type: 'number',
      demandOption: true
    }

  }, (argv) => {
    const dirPath = `users/${argv.usuario}`;
    let existe = false;
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = `${dirPath}/${file}`;
        const data = fs.readFileSync(filePath, 'utf-8');
        const funkoJSON = JSON.parse(data); 
        if (funkoJSON.id === argv.id) {
          console.log(chalk.red.bold(`Ya existe un Funko con el ID = ${argv.id} en la colección de ${argv.usuario}`));
          existe = true;
        }
      });  
          
      if (!existe) {
        const funkosJSON = {
          id: argv.id,
          nombre: argv.nombre,
          descripcion: argv.desc,
          tipo: argv.tipo,
          genero: argv.genero,
          franquicia: argv.franquicia,
          numero: argv.numero,
          exclusivo: argv.exclusivo,
          caracteristicasEspeciales: argv.especial,
          valor: argv.valor        
        }
        fs.writeFileSync(`${dirPath}/${argv.id}.json`, JSON.stringify(funkosJSON, null, 2));
        console.log(chalk.green.bold(`Nuevo Funko con el ID = ${argv.id} se ha añadido a la colección de ${argv.usuario}`));
      }
    } else {
      console.log(chalk.red.bold(`El usuario ${argv.usuario} no tiene una colección`));
      return;
    }
  })

```

Todos los datos del funko se pasan por consola además son todos obligatorios y se guardan en un JSON.
Segundo se comprueba si el usuario tiene una colección, si no es así se muestra un mensaje de error. Si el usuario tiene una colección se comprueba si ya existe un funko con el mismo ID, si es así se muestra un mensaje de error, si no es así se crea el funko y se añade a la colección.

#### Modificar<a name="id2.2"></a>
Modificar un Funko de la lista. Antes de modificar un Funko, previamente se debe comprobar si ya existe un Funko con el ID del Funko a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

El funcionamiento es muy similar al de añadir, solo que en este caso se modifica el funko en vez de crear uno nuevo.

```typescript
 .command('update', 'update a funko', {
    id: {
      description: 'Funko ID',
      type: 'number',
      demandOption: true
    },
    usuario: {
      description: 'Usuario',
      type: 'string',
      demandOption: true
    },
    nombre: {
      description: 'Nombre del funko',
      type: 'string',
      demandOption: true
    },
    desc: {
      description: 'Descripcion del funko',
      type: 'string',
      demandOption: true
    },
    tipo: {
      description: 'Tipo de funko',
      type: 'string',
      demandOption: true
    },
    genero: {
      description: 'Genero del funko',
      type: 'string',
      demandOption: true
    },
    franquicia: {
      description: 'Franquicia del funko',
      type: 'string',
      demandOption: true
    },
    numero: {
      description: 'Numero de la franquicia del funko',
      type: 'number',
      demandOption: true
    },
    exclusivo: {
      description: '¿Es un funko exclusivo?',
      type: 'boolean',
      demandOption: true
    },
    especial: {
      description: 'Caracteristicas especiales del funko',
      type: 'string',
      demandOption: true
    },
    valor: {
      description: 'valor del funko',
      type: 'number',
      demandOption: true
    }

  }, (argv) => {
    const dirPath = `users/${argv.usuario}`;
    let existe = false;
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = `${dirPath}/${file}`;
        const data = fs.readFileSync(filePath, 'utf-8');
        const funkoJSON = JSON.parse(data); 
        if (funkoJSON.id === argv.id) {
          fs.renameSync(filePath, `${dirPath}/${argv.id}.json`)                 
          existe = true;
          if (argv.name) {     
            funkoJSON.nombre = argv.nombre;
          }
          if (argv.desc) {
            funkoJSON.desc = argv.desc;
          }
          if (argv.tipo) {
            funkoJSON.tipo = argv.tipo;
          }
          if (argv.genero) {
            funkoJSON.genero = argv.genero;
          }
          if (argv.franquicia) {
            funkoJSON.franquicia = argv.franquicia;
          }
          if (argv.numero) {
            funkoJSON.numero = argv.numero;
          }
          if (argv.exclusivo) {
            funkoJSON.exclusivo = argv.exclusivo;
          }
          if (argv.especial) {
            funkoJSON.especial = argv.especial;
          }
          if (argv.valor) {
            funkoJSON.valor = argv.valor;
          }
          fs.writeFileSync(`${dirPath}/${funkoJSON.name}.json`, JSON.stringify(funkoJSON, null, 2));
          console.log(chalk.green.bold(`El Funko con el ID = ${argv.id} ha sido actualizado en la colección de ${argv.usuario}`));
          existe = true;
        }        
      });
      if (!existe) {
        console.log(chalk.red.bold(`No existe ningún funko con el ID = ${argv.id} en la colección de ${argv.usuario}`));
      }  
    } else {
      console.log(chalk.red.bold(`El usuario ${argv.usuario} no tiene una colección`));
      return;
    }
  })

```

#### Eliminar<a name="id2.3"></a>

Eliminar un Funko de la lista. Antes de eliminar un Funko, previamente se debe comprobar si existe un Funko con el ID del Funko a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

```typescript
.command('remove', 'Remove a funko from the collection', {
      id: {
        description: 'Funko ID',
        type: 'number',
        demandOption: true
      },
      usuario: {
        description: 'Usuario',
        type: 'string',
        demandOption: true
      }
  }, (argv) => {
    const dirPath = `users/${argv.usuario}`;
      if (fs.existsSync(dirPath)) {
        let found = false;
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
          const filePath = `${dirPath}/${file}`;
          const data = fs.readFileSync(filePath, 'utf-8');
          const funkoJSON = JSON.parse(data);
          if (funkoJSON.id === argv.id) {
            fs.unlinkSync(filePath);
            console.log(chalk.green.bold(`Se ha eliminado correctamente el Funko con el ID = ${argv.id} en la colección de ${argv.usuario}`))
            found = true;       
          }    
        });
        if (!found) {
          console.log(chalk.red.bold(`No existe ningún Funko con el ID = ${argv.id} en la colección de ${argv.usuario}`));
        }
      } else {
        console.log(chalk.red.bold(`El usuario ${argv.usuario} no tiene una colección`));
        return;
      }
  })

```

En este caso, solo se necesita el ID del funko y el usuario para eliminarlo. Se comprueba si existe el usuario y si existe, se comprueba si existe el funko con el ID que se ha pasado por parámetro. Si existe, se elimina el funko y se muestra un mensaje por la consola. En caso contrario, se muestra un mensaje de error.

#### Listar<a name="id2.4"></a>
Listar los Funkos existentes en una lista. En este caso, deberá mostrarse la información asociada a cada Funko existente en la lista por la consola. Además, deberá utilizar el paquete chalk para ello. Primero, deberá establecer rangos de valor de mercado. Luego, el valor de mercado de cada Funko deberá mostrarse con colores diferentes. Por ejemplo, para aquellos Funko con un valor de mercado elevado, dicho valor deberá mostrarse en color verde, mientras que para los de menor valor de mercado, dicho valor se mostrará con color rojo. Establezca, al menos, cuatro rangos de valor de mercado diferentes.

```typescript
command('list', 'List a funko collection', {
    usuario: {
      description: 'Usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {
    const dirPath = `users/${argv.usuario}`;
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      console.log(chalk.white.bold(`${argv.usuario} Funko Pop collection`));
      console.log("----------------------------");
      files.forEach(file => {
        const filePath = `${dirPath}/${file}`;
        const data = fs.readFileSync(filePath, 'utf-8');
        const funkoJSON = JSON.parse(data);        
        const funko = new Funko(funkoJSON.id, funkoJSON.nombre, funkoJSON.descripcion, funkoJSON.tipo, funkoJSON.genero, funkoJSON.franquicia, funkoJSON.numero, funkoJSON.exclusivo, funkoJSON.caracteristicasEspeciales, funkoJSON.valor);
        console.log(funko.print());    
        console.log("----------------------------");  
      });
    } else {
      console.log(chalk.red.bold(`El usuario ${argv.usuario} no tiene una colección`));
      return;
    }
  })

```

Para listarlos, simplemente nos hace falta buscar en la carpeta users el usuario que se ha pasado por parámetro. Si existe, se listan todos los funkos que hay en la carpeta del usuario. Para mostrarlos, se crea un objeto de tipo Funko y se llama al método print() que devuelve un string con la información del funko. Se muestra por la consola y se separa con una línea de guiones.

#### Mostrar<a name="id2.5"></a>
Mostrar la información de un Funko concreto existente en la lista. Antes de mostrar la información del Funko, se debe comprobar que en la lista existe un Funko cuyo ID sea el del Funko a mostrar. Si existe, se mostrará toda su información, incluyendo el color de su valor de mercado. Para ello, use el paquete chalk. En caso contrario, se mostrará un mensaje de error por la consola.

```typescript
.command('read', 'Show a concrete funko from the collection', {
    id: {
      description: 'Funko ID',
      type: 'number',
      demandOption: true
    },
    usuario: {
      description: 'Usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {
    const dirPath = `users/${argv.usuario}`;
    if (fs.existsSync(dirPath)) {
      let found = false;
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = `${dirPath}/${file}`;
        const data = fs.readFileSync(filePath, 'utf-8');
        const funkoJSON = JSON.parse(data);
        if (funkoJSON.id === argv.id) {
          const funko = new Funko(funkoJSON.id, funkoJSON.nombre, funkoJSON.descripcion, funkoJSON.tipo, funkoJSON.genero, funkoJSON.franquicia, funkoJSON.numero, funkoJSON.exclusivo, funkoJSON.caracteristicasEspeciales, funkoJSON.valor);      
          console.log(funko.print());   
          found = true;       
        }    
      });
      if (found == false) {
        console.log(chalk.red.bold(`No existe ningún funko con el ID = ${argv.id} en la colección de ${argv.usuario}`));
      }
    } else {
      console.log(chalk.red.bold(`El usuario ${argv.usuario} no tiene una colección`));
      return;
    }
  })

```

Es similar a listar, pero en este caso, solo se muestra el funko con el ID que se ha pasado por parámetro. Se comprueba si existe el usuario y si existe, se comprueba si existe el funko con el ID que se ha pasado por parámetro. Si existe, se muestra el funko y se muestra un mensaje por la consola. En caso contrario, se muestra un mensaje de error.