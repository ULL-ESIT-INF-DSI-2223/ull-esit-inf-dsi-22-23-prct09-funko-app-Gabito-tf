import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Funko } from './funko';

import * as fs from 'fs';
import * as path from 'path'
import chalk = require('chalk');

yargs(hideBin(process.argv))

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
  
  /**
   * Command update, to update a Funko from a usuario list.
   */
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


  .command('list', 'List a funko collection', {
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
  .help()
  .argv;






