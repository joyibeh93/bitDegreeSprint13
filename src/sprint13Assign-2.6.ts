enum TimeOfGreetings{
    morning = 'Good Morning',
    afternoon = 'Good Afternoon',
    evening = 'Good Evening'
}

interface Customer{
    customerName:string;
    loyaltyProgram:boolean;
    timeVisited:number;
}

const gabriel : Customer ={
    customerName :"Gabriel",
    loyaltyProgram : true,
    timeVisited :2

}
const customerGreeting = (time_of_day: TimeOfGreetings, customer: Customer): string => {
    const loyaltyProgram = 'Thank you for being a valued customer!';
    const notLoyaltyProgram    = 'If you join our loyalty program, you can get a free cup of coffee today!';
    let greeting = `${time_of_day} ${customer.customerName}! `
    
    greeting += customer.loyaltyProgram ? loyaltyProgram : notLoyaltyProgram;
   
    return greeting
  }
  console.log(customerGreeting(TimeOfGreetings.morning, gabriel));