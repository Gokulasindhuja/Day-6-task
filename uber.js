class Uber {
    costPerMin = 2;
  
    constructor(rideTime, driveKms, carType, tollFee = 0) {
      this.rideTime = rideTime;
      this.driveKms = driveKms;
      this.carType = carType;
      this.tollFee = tollFee;
    }
  
    getBill() {
      let baseFare, costPerKm;
  
      if (this.carType === "Ubergo") {
        baseFare = 40;
        costPerKm = 6;
      } else if (this.carType === "UberX") {
        baseFare = 60;
        costPerKm = 8;
      } else if (this.carType === "Uberblack") {
        baseFare = 80;
        costPerKm = 10;
      } else {
        console.log("Invalid car type!");
        return;
      }
  
      const totalPrice =
        baseFare + this.rideTime * this.costPerMin + this.driveKms * costPerKm + this.tollFee;
      console.log(`Total price for the ride is ${totalPrice}`);
    }
  }
  
  let customer1 = new Uber(15, 20, "Ubergo", 100);
  customer1.getBill();
  
  let customer2 = new Uber(15, 20, "Uberblack", 100);
  customer2.getBill();
  
  let customer3 = new Uber(15, 25, "UberX");
  customer3.getBill()