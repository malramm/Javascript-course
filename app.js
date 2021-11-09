class Clinic{
    constructor(name, size='normal', dailyPatients, yearBuilt){
       this.name = name;
       this.size = size;
       this.dailyPatients = dailyPatients;
       this.yearBuilt = yearBuilt;
    }
    calcTotalNumberOfPatients(){
       return Math.round(this.dailyPatients.reduce((total, num) => total + num));
    }
}
class Parking{
    constructor(name, parksAllDay, priceAllDay, parksHourly, priceHourly){
        this.name = name;
        this.parksAllDay = parksAllDay;
        this.priceAllDay = priceAllDay;
        this.parksHourly = parksHourly;
        this.priceHourly = priceHourly;
    }
}
function calcClinics(clinic){
    totalNum += clinic.calcTotalNumberOfPatients()/clinic.dailyPatients.length;
    newest = clinic.yearBuilt < newest ? clinic.yearBuilt : newest;
    oldest = clinic.yearBuilt > oldest ? clinic.yearBuilt : oldest;
    clinicInfo = clinicInfo + clinic.name + ', was built in ' + clinic.yearBuilt + ', and is a ' + clinic.size + ' clinic\n\n';
    numClinics += 1;
}
function calcParkings(clinic){
    totalAllDay += clinic.parksAllDay;
    totalHourly += clinic.parksHourly;
    incomeAllDay += clinic.parksAllDay * clinic.priceAllDay;
    incomeHourly += clinic.parksHourly * clinic.priceHourly;
    if(clinic.parksAllDay >= 100) {
        parkingInfo = parkingInfo + `${infoPoint}. ` + clinic.name + `${infoText}`;
        infoPoint += 1;
    }
    numClinics += 1;
}
const dailyPatientsSwanson = [120, 125, 115, 113, 123],
      dailyPatientsBrighton = [122, 117, 114, 124, 119],
      dailyPatientsDocklands = [45, 52, 54, 42, 49],
      dailyPatientsSouthbank = [77, 85, 87, 90, 82];              
const allClinics = [new Clinic('Swanson Street Level 2', 'big', dailyPatientsSwanson, 2016),
                    new Clinic('Brighton Street', 'big', dailyPatientsBrighton, 2019),
                    new Clinic('Docklands Street Shop 4-51', 'small', dailyPatientsDocklands, 2020),
                    new Clinic('Southbank Street Level 5', 'normal', dailyPatientsSouthbank, 2016)];
const allParkings = [new Parking('Swanson Street Level 2', 90, 9, 60, 3),
                    new Parking('Brighton Street 409', 110, 9, 80, 3),
                    new Parking('Docklands Street', 100, 9, 70, 3),
                    new Parking('Southbank Street Level 5', 46, 9, 54, 3)];
console.log('///////////// CLINICS REPORT //////////');
let totalNum = 0, averageNum = 0, totalInc = 0, averageInc = 0, numClinics = 0;
let priceAppointment = 50;
let newest = 9999, oldest = 0;
let smallest = Math.min(...dailyPatientsSwanson,...dailyPatientsBrighton,...dailyPatientsDocklands,...dailyPatientsSouthbank);
let largest = Math.max(...dailyPatientsSwanson,...dailyPatientsBrighton,...dailyPatientsDocklands,...dailyPatientsSouthbank);
let clinicInfo = '';
allClinics.map(clinic => calcClinics(clinic));
averageNum = Math.round(totalNum/numClinics);
totalNum = Math.round(totalNum);
totalInc = totalNum * priceAppointment;
averageInc = averageNum * priceAppointment;
console.log('1. In all of the clinics we have an average of: ' + averageNum + ' patients per day');
console.log('2. In all of the clinics we have total of: ' + totalNum + ' patients per day');
console.log('3. The total income per day for all of the patient visits is: $' + totalInc + '.');
console.log('4. The average income per day for all of the patient visits is: $' + averageInc + '.');
console.log('5. The newly opened dental clinic was opened in the year ' + newest);
console.log('6. The oldest opened dental clinic was opened in the year ' + oldest);
console.log('7. The smallest number of patients in one day was: ' + smallest);
console.log('8. The largest number of patients in one day was: ' + largest);
console.log(clinicInfo);
console.log('///////////// PARKINGS REPORT //////////');
let averageAllDay = 0, averageHourly = 0, totalAllDay = 0, totalHourly = 0, incomeAllDay = 0, incomeHourly = 0;
numClinics = 0;
let parkingInfo = '', infoPoint = 7, infoText =' has more than or equal to a 100 all day parking sports\n\n';
allParkings.map(clinic => calcParkings(clinic));
averageAllDay = Math.round(totalAllDay/numClinics);
averageHourly = Math.round(totalHourly/numClinics);
console.log('1. In our ' + numClinics + ' dental clinics we have approximately an average of ' + averageAllDay + ' all day parking spots');
console.log('2. In our ' + numClinics + ' dental clinics we have approximately an average of ' + averageHourly + ' hourly parking spots');
console.log('3. In all of the ' + numClinics + ' dental clinics we have total number of all day parking spots ' + totalAllDay + ' per day');
console.log('4. In all of the ' + numClinics + ' dental clinics we have total number of hourly parking spots ' + totalHourly + ' per day');
console.log('5. All day parking income from all ' + numClinics + ' clinics is $' + incomeAllDay + ' per day');
console.log('6. Hourly parking income from all ' + numClinics + ' clinics is $' + incomeHourly + ' per day');
console.log(parkingInfo);