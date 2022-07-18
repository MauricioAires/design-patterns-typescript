// SOL I (Interface Segregation Principle ) D
// Princio de segregação de interfaces
// classes não devem ser forçadas a depender de
// métodos que não usam

import Car from './vehicles/Car';
import Motocycle from './vehicles/Motorcycle';

const car = new Car('Azul', 2020, 2.6, 4);

const motocyple = new Motocycle('Branca', 2022, 250);
