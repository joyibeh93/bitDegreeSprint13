"use strict";
var TimeOfGreetings;
(function (TimeOfGreetings) {
    TimeOfGreetings["morning"] = "Good Morning";
    TimeOfGreetings["afternoon"] = "Good Afternoon";
    TimeOfGreetings["evening"] = "Good Evening";
})(TimeOfGreetings || (TimeOfGreetings = {}));
const gabriel = {
    customerName: "Gabriel",
    loyaltyProgram: true,
    timeVisited: 2
};
const customerGreeting = (time_of_day, customer) => {
    const loyaltyProgram = 'Thank you for being a valued customer!';
    const notLoyaltyProgram = 'If you join our loyalty program, you can get a free cup of coffee today!';
    let greeting = `${time_of_day} ${customer.customerName}! `;
    greeting += customer.loyaltyProgram ? loyaltyProgram : notLoyaltyProgram;
    return greeting;
};
console.log(customerGreeting(TimeOfGreetings.morning, gabriel));
