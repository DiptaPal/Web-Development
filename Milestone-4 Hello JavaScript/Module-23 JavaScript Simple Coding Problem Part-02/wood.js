/* 
chair ---> 3cft
table ---> 10cfy
bed  ----> 50cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedTable = 50;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedTable = bedQuantity * perBedTable;

    const totalWood = allChairWood + allTableWood + allBedTable;

    return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log("Wood Need", wood);
