
//known values
var payRate = 17.30;
var hoursWorked = 45;

//calculations
var grossPay;

var overtimeHours;
var overtimeRate = payRate * 1.5;


grossPay = 0;

if (hoursWorked <=40) //standard time
{
        grosspay = payRate * hoursWorked;
}
else // overtime
{    
    var overtimeHours = hoursWorked - 40 ;
    var overtimeRate = payRate * 1.5;
    var basePay = 40 * payRate;
    var overtimePay = overtimeHours * overtimeRate;

    grossPay = basePay + overtimePay;

    // grossPay = (40 * payRate) + ( ( hoursWorked - 40) * payRate * 1.5 );



}