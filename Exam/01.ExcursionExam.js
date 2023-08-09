function excursion(input) {

    let countPeople = Number(input[0]);
    let countNights = Number(input[1]);
    let countCardsTransport = Number(input[2]);
    let countTickets = Number(input[3]);

    let priceNights = 20;
    let priceTransport = 1.60;
    let priceTicketMuseum = 6;
    


    let sumNights = countNights * priceNights;
    let sumTransport = countCardsTransport * priceTransport;
    let sumTicketMuseum = countTickets * priceTicketMuseum;


    let finalSum = sumNights + sumTransport + sumTicketMuseum;
    let finalSumGroup=finalSum*countPeople;
    let finalSumExpenditure=finalSumGroup*1.25;


    console.log(finalSumExpenditure.toFixed(2))



}
excursion(["20", "14", "30", "6"])
