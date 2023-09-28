const freelancers = [
{
id: 1,
name: "Alice",
occupation: "Writer",
price: "30",
},
{
 id: 2,
name: "Bob",
occupation: "Teacher",
price: "50",
},
{
 id: 3,
 name: "Carol",
occupation: "Programmer",
 price: "70",
},
{
id: 4,
 name: "Nick",
occupation: "Firefighter",
price: "20",
},
{
id: 5,
name: "Josh",
 occupation: "Trainer",
price: "60",
},
{
id: 6,
 name: "Pammy",
 occupation: "Fisher",
 price: "50",
},
]



freelancers.slice(0, 3).forEach((freelancers, index) => {
    console.log(`Freelancer ${index + 1}:`);
    console.log(`Name: ${freelancers.name}`);
    console.log(`Occupation: ${freelancers.occupation}`);
    console.log(`Price: ${freelancers.price}`);
  });

function calculateAveragePrice(freelancers) {
    let totalPrices = 0;
    let count = 0;
  
    for (const freelancer of freelancers) {
      if (typeof freelancer.price === 'number') {
        totalPrices += freelancer.price;
        count++;
      }
    }
return totalPrices / count;
  }
  const averagePrice = calculateAveragePrice(freelancers);
  console.log(`verage Price of Freelancers: $${AveragePrice.toFixed(2)}`);
  