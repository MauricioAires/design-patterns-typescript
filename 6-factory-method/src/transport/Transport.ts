import IVehicle from './vehicles/interfaces/IVehicles';

export default abstract class Transport {
  startTransport(): void {
    const vihicle = this.createTransport();

    vihicle.startRoute();
  }

  protected abstract createTransport(): IVehicle;
}
