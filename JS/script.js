//What I have now is:

//- car monthly value decrese
//- monthly gas cost
//- monthly insurance cost
//- monthly gadgets cost

//What i need is: 

//-function for summer tires - DONE
//    I need whole distance that user will made using car and divide it by distance that you should drive on one tire set.
//-function for winter tires - DONE
//    Sam as above
//-function for oil - DONE
//    Same as above

//-cost of repairing a car - DONE 

//I declare valueDecrese function with three arguments. This arguments are variables that will be conected with proper input files. First argument is var timeOfUse(with number of years that user want to using his car), second argument is var carAge(with age of user car, when he bought it), third argument is var carCocst(with user car price, when he bought it). Function return var carValueAfterUsing. 

//1. I write loop that works from 0 to moment when i is equal var timeOfUse.
//2. In this loop we have conditions that are depend on var CarAge. 
//3. Next is code that calculate car value decrese. 

function valueDecrese() {
    
    var carPrice = document.getElementById("input0").value;
    var carAge = document.getElementById("input1").value;
    var timeOfUse = document.getElementById("input2").value;
    var carValueAfterUsing;
    var monthlyCarValueDecrese;
    
    
    for (var i = 0; i < +timeOfUse; i++) {
        if (+carAge == 0) {
            if (i == 0) {
//                In first calculation in var carValueAfterUsing I need save var carPrice * 0.7 result
                 carValueAfterUsing = carPrice * 0.7;
            }
            else if (i == 1) {
//                Next, on the right site of =, i can use can use var carValueAfterUsing and multiply it by chosen number.
                 carValueAfterUsing =  carValueAfterUsing * 0.9;
            }
            else {
                 carValueAfterUsing =  carValueAfterUsing * 0.94;
            }
        }
        else if (carAge == 1) {
            if (i == 0) {
                carValueAfterUsing = carPrice * 0.9;
            }
            else if (i == 1) {
                carValueAfterUsing = carValueAfterUsing * 0.9;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * 0.94;
            }
        }
        else if (carAge == 2) {
            if (i == 0) {
                carValueAfterUsing = carPrice * 0.9;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * 0.94;
            }
        }
        else {
            if (i == 0) {
                carValueAfterUsing = carPrice * 0.94;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * 0.94;
            }
        }
    }
    monthlyCarValueDecrese = (carPrice - carValueAfterUsing) / (timeOfUse * 12);
    
//    alert(monthlyCarValueDecrese);  I check it, what function return is a number
    
    return +monthlyCarValueDecrese;
    

}


//In here I declare var decrese that contain valueDecrese function with proper arguments in it. This line start valueDecrese function. 





////Now I want create function that will be counting monthly cost of gas.

function gasCost() {
    
    var monthlyDistance = document.getElementById("input3").value;
    var gasPrice = document.getElementById("input5").value;
    var fuelConsumptionForHundred = document.getElementById("input4").value;
    var gasCostForHundred;
    var monthlyGasCost; 

    gasCostForHundred = gasPrice * fuelConsumptionForHundred; 
    
    
    monthlyGasCost = (monthlyDistance *  gasCostForHundred) / 100;       

    
//    alert(monthlyGasCost); I check it, what function return is a number
    
    return +monthlyGasCost;
}





//Now I want to write a function that will be counting monthly insurance cost

function insuranceCost(){
    
    var insurencePrice = document.getElementById("input6").value;
    var monthlyInsurenceCost;

    monthlyInsurenceCost = insurencePrice / 12;
    
//    alert(monthlyInsurenceCost); I check it, what function return is a number
    
    return +monthlyInsurenceCost;
}





//Now I want to write function that will be counting monthly costs of gagets

function gadgetsCost(){
    
    var gadgetsPrice = document.getElementById("input8").value;
    var monthlyGadgetsCost;
    
    monthlyGadgetsCost = gadgetsPrice / 12;
    
//        alert(monthlyGadgetsCost);   I check it, what function return is a number

    
    return +monthlyGadgetsCost;
    
}





//Now I want write functions that will be counting tires costs



function summerTires(){
    
    var timeOfUse = document.getElementById("input2").value;
    var monthlyDistance = document.getElementById("input3").value;
    var numberOfsummerTiresSets;
    var summerTiresCost;
    var tiresCost = 1000;
    var summerTiresEndurance = 60000;
    var totalDistance = monthlyDistance * (timeOfUse * 12);

    numberOfsummerTiresSets = totalDistance / summerTiresEndurance;
    
    summerTiresCost = (numberOfsummerTiresSets * tiresCost) / (timeOfUse *12);
    
    
//    alert(summerTiresCost);   I check it, what function return is a number

    
    return +summerTiresCost;
    
}





function winterTires(){
    
    var timeOfUse = document.getElementById("input2").value;
    var monthlyDistance = document.getElementById("input3").value;
    var winterTiresCost;
    var numberOfWinterTiresSets;
    var winterTiresEndurance = 45000;
    var tiresCost = 1000;

    var totalDistance = monthlyDistance * (timeOfUse * 12);

    numberOfWinterTiresSets = totalDistance / winterTiresEndurance;
    
    winterTiresCost = (numberOfWinterTiresSets * tiresCost) / (timeOfUse *12);
    
    
//     alert(winterTiresCost);   I check it, what function return is a number

    
    return +winterTiresCost;
}





//Now I want write functions that will be counting oil costs

function oil(){
    
    var monthlyDistance = document.getElementById("input3").value;
    var timeOfUse = document.getElementById("input2").value;
    var monthlyOilCost;
    var numberOfOilChanges;
    var oilPrice = 100;
    
    var totalDistance = monthlyDistance * (timeOfUse * 12);
    
    numberOfOilChanges = totalDistance / 10000;
    
    Math.floor(numberOfOilChanges);
    
    monthlyOilCost = (+numberOfOilChanges * +oilPrice) / (+timeOfUse * 12);
    
//    alert(monthlyOilCost);   I check it, this is a place where a problem was. var monthlyOilCost was a string nan.
//    I secured it with "+" to be sure that everything what is needed for monthlyOilCost ia a number.

    
    return +monthlyOilCost;
    
    
    
}





//Now I want write functions that will be counting repair cost

function repair(){
    
    var carAge = document.getElementById("input1").value;
    var timeOfUse = document.getElementById("input2").value;
    var monthlyRepairCosts;


    if(carAge == 0 && timeOfUse < 5)
    {
        monthlyRepairCosts = 0;
    } 
    else if(carAge == 0 && timeOfUse > 5)
    {
        monthlyRepairCosts == (timeOfUse * 100) / (12 * timeOfUse);
    }
    else if(carAge >= 5 && carAge < 10)
    {
        monthlyRepairCosts = (timeOfUse * 200) / (12 * timeOfUse);
    }
    else if(carAge >= 10 && carAge < 15)
    {
        monthlyRepairCosts = (timeOfUse * 400) / (12 * timeOfUse);
    }
    else
    {
        monthlyRepairCosts = (timeOfUse * 600) / (12 * timeOfUse);
    }
    
//    alert(monthlyRepairCosts); It's ok
    
    return monthlyRepairCosts;
}

    

function carWash(){
    
    var carWashCost = document.getElementById("input7").value;
    
//    alert(carWashCost); It's ok
    
    return +carWashCost;
}


//Whole monthly cost 

function wholeCost(){

    var cost0;
    var cost1;
    var cost2;
    var cost3;
    var cost4;
    var cost5;
    var cost6;
    var cost7;
    var cost8;
    var wholeMonthlyCost;

    
    cost0 = valueDecrese();
    
    cost1 = gasCost();
    
    cost2 = insuranceCost();
    
    cost3 = gadgetsCost();
    
    cost4 = summerTires();
    
    cost5 = winterTires();
    
    cost6 = oil();
    
    cost7 =  repair();
    
    cost8 = carWash();
    
    wholeMonthlyCost = +cost0 + +cost1 + +cost2 + +cost3 + +cost4 + +cost5+ +cost6 + +cost7 + cost8;
    
    wholeMonthlyCost = Math.floor(wholeMonthlyCost);
    
    document.getElementById("result").innerHTML = 'Posiadanie samochodu kosztuje Cię miesięcznie:</br>~ ' + wholeMonthlyCost + '  zł';

    return +wholeMonthlyCost;
    

}

    
document.getElementById("startBtn").addEventListener("click", wholeCost);


            














        





    
    
    


        
