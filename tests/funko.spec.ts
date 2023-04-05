import "mocha";
import { expect } from "chai";
import { Funko } from "../src/funko/funko"
import { Tipo, Genero} from "../src/funko/funko";

const funkoTests = new Funko(999, "Test Funko", "Test Funko", Tipo.POP, Genero.ANIMATION, "Pokemon", 999, true, "Test Funko", 999);

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