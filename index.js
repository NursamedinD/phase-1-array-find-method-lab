const broncosRec = [
    { year: 2017, result: "N/A" },
    { year: 2016, result: "N/A" },
    { year: 2015, result: "W" }
];

function superbowlWin(record) {

    const winRecord = record.find(item => item.result === "W");


    if (winRecord) {
        return winRecord.year.toString();
    }


    return undefined;
}


console.log(superbowlWin(broncosRec)); 
