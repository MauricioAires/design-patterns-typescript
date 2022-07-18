import IBuilder from '../builders/IBuilder';
import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Director {
  constructor(private builder: IBuilder) {}

  constructSedanCar() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTramsmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(3600));

    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
  }

  constructTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTramsmission(Transmission.ATOMATIC_SEQUENTINAL);
    this.builder.setEngine(new Engine(31300));

    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }
}
