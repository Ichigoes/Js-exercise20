function toyStore(input) {
    let discount = 0
    let excursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let miners = Number(input[4]);
    let trucks = Number(input[5]);

    totalSum = puzzles * 2.60 + dolls * 3 + bears * 4.10 + miners * 8.20 + trucks * 2;
    totalToys = puzzles + dolls + bears + miners + trucks;

    if (totalToys >= 50) {
        discount = 0.25 * totalSum;
        totalSum -= discount;
        naem = 0.1 * totalSum;
        profit = totalSum - naem;
    } else { 
        naem = 0.1 * totalSum;
        profit = totalSum - naem;
    }
    
    if (profit > excursion) {
        finalPrice = profit - excursion
        console.log(`Yes! ${finalPrice.toFixed(2)} lv left.`)
    } else {
        neededMoney = excursion - profit
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }
    

}
toyStore(["320", "8", "2", "5", "5", "1"])
