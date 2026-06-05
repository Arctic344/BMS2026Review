// Add hints for week 5
Object.assign(quizData.hints, {
  "hint_w5_costs": "Fixed costs remain constant regardless of production volume (e.g., rent), while variable costs fluctuate with production. Marginal cost is the cost of producing one additional unit. Sunk costs are already incurred and unrecoverable.",
  "hint_w5_breakeven": "The breakeven point is where total revenue equals total costs. Breakeven Volume = Fixed Costs / (Unit Price - Variable Cost per Unit).",
  "hint_w5_pricediscrimination": "Price discrimination: 1st-degree charges maximum WTP; 2nd-degree varies by quantity/features (e.g., premium vs basic); 3rd-degree separates distinct demographic or customer segments (e.g., students, seniors).",
  "hint_w5_market": "Equilibrium price is where supply equals demand. A price above equilibrium creates a surplus. The demand curve shows how price affects quantity demanded.",
  "hint_w5_auctions": "Auctions help discover maximum WTP. English: ascending bids. Dutch: descending price. Sealed-bid: private bids submitted simultaneously.",
  "hint_w5_wtp": "WTP (Willingness to Pay) is the maximum a buyer will pay. Pricing strategies aim to capture this value, especially when fixed costs are high and variable costs are low."
});

// Add questions for week 5
quizData.questions.push(
  {
    id: "q_w5_1",
    weekId: 5,
    question: "What are fixed costs in business?",
    options: [
      "Costs that vary directly with the production of goods.",
      "Costs that are incurred irrespective of the number of product units sold.",
      "Costs associated with the raw materials for producing goods.",
      "Costs that decrease with the increase in production volume."
    ],
    correctIndex: 1,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_2",
    weekId: 5,
    question: "What is the breakeven point in pricing?",
    options: [
      "The point where the company makes a profit.",
      "The point where the profit made from sales equals fixed cost.",
      "The point where the cost of production equals the fixed cost.",
      "The point where the product price equals its variable cost."
    ],
    correctIndex: 1,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_3",
    weekId: 5,
    question: "Which of the following is an example of fixed costs for a business?",
    options: [
      "Wages paid to sales tea,",
      "Cost incurred in purchasing raw materials",
      "Sales agents receiving commission for sales",
      "Wages paid to research and development team"
    ],
    correctIndex: 3,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_4",
    weekId: 5,
    question: "What does the equilibrium price represent in a market?",
    options: [
      "The price at which quantity supplied equals quantity demanded",
      "The price at which breakeven is achieved.",
      "The price at which supply exceeds demand",
      "The price at which demand exceeds supply"
    ],
    correctIndex: 0,
    hint: "hint_w5_market"
  },
  {
    id: "q_w5_5",
    weekId: 5,
    question: "Costs that are directly associated with the number of units being sold are:",
    options: [
      "Fixed costs",
      "Overhead costs",
      "Variable cost",
      "Indirect costs"
    ],
    correctIndex: 2,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_6",
    weekId: 5,
    question: "A price discrimination based on different legitimate segments or groups existing in the market is:",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Equilibrium price"
    ],
    correctIndex: 2,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_7",
    weekId: 5,
    question: "A plane has different prices for its different seats. What type of price discrimination is this?",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Fourth-degree price discrimination"
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_8",
    weekId: 5,
    question: "Doo, a business solution provider company sells software often having high fixed costs and low variable costs. What is the suitable pricing strategy to cover their cost?",
    options: [
      "Cost-plus pricing",
      "Penetration pricing",
      "Break-even pricing",
      "Price discrimination"
    ],
    correctIndex: 3,
    hint: "hint_w5_wtp"
  },
  {
    id: "q_w5_9",
    weekId: 5,
    question: "Which of the following is considered a variable cost?",
    options: [
      "Pre-payment to an author",
      "Advertising expenses",
      "Cost of raw materials",
      "None in correct"
    ],
    correctIndex: 2,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_10",
    weekId: 5,
    question: "What is first - degree price discrimination?",
    options: [
      "Selling all units of a product at a single price",
      "Selling to each customer at their willingness to pay (WTP) price level",
      "Creating different price categories for a product",
      "Charging different customer segments different prices"
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_11",
    weekId: 5,
    question: "Which of the following is the best description of a fixed cost business model?",
    options: [
      "Costs are not broadly a factor of sales volume",
      "Costs are a function of the volume of good produced",
      "Costs per unit decrease as we produce more",
      "Costs fluctuate based on market demand"
    ],
    correctIndex: 0,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_12",
    weekId: 5,
    question: "Which of the following costs would likely decrease as production volume decreases?",
    options: [
      "Salary of the human resource department",
      "Depreciation of machinery",
      "Cost of raw materials",
      "Monthly office rent"
    ],
    correctIndex: 2,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_13",
    weekId: 5,
    question: "A software company offers a premium version of its product at a higher price and a basic version at a lower price. The premium version includes additional features not available in the basic version. What degree of price discrimination is the company using?",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Fourth-degree price discrimination"
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_14",
    weekId: 5,
    question: "What might be one advantage of the Dutch auction in sale of individual goods?",
    options: [
      "It may enable buyers to indicate the lowest price that they are willing to pay and build up from there.",
      "It may guarantee that the item is sold to the highest bidder through making the bidding price to gradually rise.",
      "It may decrease the prospects of the good being sold at a lower price than WTP",
      "It may enable the seller to offer more units in the market by offering the items at different prices."
    ],
    correctIndex: 2,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_15",
    weekId: 5,
    question: "Which of the following scenarios best illustrates third-degree price discrimination?",
    options: [
      "A bookstore sells different editions of the same book at different prices based on paper quality.",
      "An airline charges different prices for economy and business class seats.",
      "A museum charges lower entry fees to local residents compared to tourists.",
      "An auction where each bidder pays exactly what they bid."
    ],
    correctIndex: 2,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_16",
    weekId: 5,
    question: "What is the primary goal of price discrimination?",
    options: [
      "To sell different units of a product at different prices to different customer segments.",
      "To sell each unit of a product at the maximum price that each customer is willing to pay.",
      "To set a single price that maximizes the total profit for a product.",
      "To offer different prices for bulk purchases."
    ],
    correctIndex: 0,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_17",
    weekId: 5,
    question: "In a certain store, the owner realized a certain product was not getting sold. He cut the price by 10% and by the end of the week, less than 5 units were left from the original 50. This illustrates the concept of",
    options: [
      "Demand curve",
      "Supply curve",
      "Normal distribution curve",
      "Price discrimination"
    ],
    correctIndex: 0,
    hint: "hint_w5_market"
  },
  {
    id: "q_w5_18",
    weekId: 5,
    question: "Rimac released a limited edition Nevera for their anniversary. It had more horsepower and was significantly more expensive than the normal Nevera. This is an example of:",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Fourth-degree price discrimination"
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_19",
    weekId: 5,
    question: "A company has a fixed cost of $10,000, and each unit of their product sells for $50. The variable cost per unit is $30. How many units must the company sell to break even?",
    options: [
      "200",
      "333",
      "400",
      "500"
    ],
    correctIndex: 3,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_20",
    weekId: 5,
    question: "Which of the following scenarios best illustrates second-degree price discrimination?",
    options: [
      "A coffee shop offers a loyalty card that gives customers a free drink after every 10 drinks purchased",
      "A software company offers student and senior discounts on its products, where students and seniors receive a 20% discount compared to the regular price.",
      "A grocery store sells one bottle of water for $1, but offers a 12-pack of the same water for $10.",
      "A cinema offers discounted tickets to children, students, and senior citizens."
    ],
    correctIndex: 2,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_21",
    weekId: 5,
    question: "What is a key feature of a multi-round sealed auction as described\uff1f",
    options: [
      "Bids are publicly visible during the auction.",
      "The seller publishes the latest bids at regular intervals.",
      "Prices gradually decrease from high to low.",
      "All bidders receive the same interest rate."
    ],
    correctIndex: 1,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_22",
    weekId: 5,
    question: "What does the marginal cost (MC) represent?",
    options: [
      "The cost of producing one additional unit",
      "The total cost of production",
      "The difference between fixed and variable costs",
      "The average cost of all units produced"
    ],
    correctIndex: 0,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_23",
    weekId: 5,
    question: "Which element is not included for Breakeven calculation?",
    options: [
      "Profit",
      "Fixed Cost",
      "Unit Price",
      "Variable Cost"
    ],
    correctIndex: 0,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_24",
    weekId: 5,
    question: "Which of the following scenarios best illustrates second-degree price discrimination?",
    options: [
      "A movie theater offers a student discount on tickets.",
      "An electricity company charges lower rates for consumers who use less electricity and higher rates for those who use more.",
      "A software company charges different prices for its product in different countries.",
      "A car dealership negotiates individual prices with each customer based on their willingness to pay."
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_25",
    weekId: 5,
    question: "When Microsoft releases a new operating system, how can they determine the break-even point of the product?",
    options: [
      "By reducing advertising expenses to lower fixed costs",
      "By increasing the software sales price to increase profits",
      "By calculating the minimum number of units that need to be sold to cover fixed and variable costs at the unit price",
      "By diversifying the product line to spread costs"
    ],
    correctIndex: 2,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_26",
    weekId: 5,
    question: "Which type of auction involves buyers bidding until the highest bid wins and no else raises the bid further?",
    options: [
      "Dutch auction",
      "English auction",
      "Vickrey auction",
      "Multi-Round Auction"
    ],
    correctIndex: 1,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_27",
    weekId: 5,
    question: "In a caf\u00e9, the cost of milk, coffee beans varies directly with the number of cups of coffee sold. This is an example of which kind of cost?",
    options: [
      "Variable Cost",
      "Fixed Cost",
      "Mixed Cost",
      "Opportunity Cost"
    ],
    correctIndex: 0,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_28",
    weekId: 5,
    question: "An automobile business reaches a point where the price at which consumers are willing to buy equals the price at which producers are willing to supply. This price is known as",
    options: [
      "Fixed Price",
      "Equilibrium Price",
      "Variable Price",
      "Maximum Price"
    ],
    correctIndex: 1,
    hint: "hint_w5_market"
  },
  {
    id: "q_w5_29",
    weekId: 5,
    question: "Starbucks introduces a new beverage and needs to determine how many units they need to sell to cover all research and development costs. This calculation is known as:",
    options: [
      "Contribution Margin",
      "Fixed Cost Analysis",
      "Breakeven Analysis",
      "Variable Cost Assessment"
    ],
    correctIndex: 2,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_30",
    weekId: 5,
    question: "What is a key challenge associated with implementing first degree price discrimination?",
    options: [
      "Creating different price categories for the same product",
      "Segmenting customers into distinct groups",
      "Accurately determining each customer's willingness to pay",
      "Designing a product that is substantially different in each category"
    ],
    correctIndex: 2,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_31",
    weekId: 5,
    question: "How is the final sale price determined in English auction?",
    options: [
      "The seller starts with a high price and gradually lowers it until a buyer agrees",
      "The seller and buyer negotiate the price directly",
      "The price is raised through bids until no higher bid is made, and the last bid wins",
      "All buyers submit sealed bids, and the highest bid wins"
    ],
    correctIndex: 2,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_32",
    weekId: 5,
    question: "John wants to pay a low rate for a hotel overnight stay what should his best strategy to get a low price according to what we discussed in class?",
    options: [
      "Order his accommodation through an travel agent because they have good deals and have buying power.",
      "Turn up late in the day at the hotel, and negotiate accommodation at a low rate.",
      "Sign up to a loyalty program they have good accommodation deals.",
      "Stay in the hotel in the off season where rates are less expensive."
    ],
    correctIndex: 1,
    hint: "hint_w5_wtp"
  },
  {
    id: "q_w5_33",
    weekId: 5,
    question: "You are in the market for a house. The agent request you submit the price you are willing to pay without indication of other bids. What type of auction is this?",
    options: [
      "Sealed bid",
      "Dutch Auction",
      "English Auction",
      "Vickrey Auction"
    ],
    correctIndex: 0,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_34",
    weekId: 5,
    question: "What is the purpose of auctions in pricing strategy?",
    options: [
      "To find the highest price a customer is willing to pay",
      "To minimize fixed costs",
      "To standardize prices across all markets",
      "To reduce variable costs"
    ],
    correctIndex: 0,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_35",
    weekId: 5,
    question: "A software company has spent $10 million on developing a new application. The variable cost per user license is negligible, and they plan to sell each license for $100. How many licenses do they need to sell to break even?",
    options: [
      "100000",
      "50000",
      "125000",
      "250000"
    ],
    correctIndex: 0,
    hint: "hint_w5_breakeven"
  },
  {
    id: "q_w5_36",
    weekId: 5,
    question: "Which type of auction is commonly used for selling bonds by government",
    options: [
      "English Auction",
      "Dutch Auction",
      "Multi-round Sealed Auction",
      "Sealed bid second-priced auction"
    ],
    correctIndex: 1,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_37",
    weekId: 5,
    question: "Through what mechanisms can we determine the 'Willingness to pay\" price of the consumer",
    options: [
      "Auction",
      "Negotiation",
      "Observing global trends and social media",
      "All are correct"
    ],
    correctIndex: 3,
    hint: "hint_w5_wtp"
  },
  {
    id: "q_w5_38",
    weekId: 5,
    question: "An airline company wants to implement third-degree price discrimination to increase its revenue. What is the best approach to achieve this?",
    options: [
      "Adjust prices solely based on the distance of the flight, regardless of the customer segment",
      "Charge different prices based on the day of the week without considering the type of traveller",
      "Use a single pricing strategy across all customer segments to simplify operations",
      "Offer discounts to frequent flyers while charging higher prices to infrequent travellers"
    ],
    correctIndex: 3,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_39",
    weekId: 5,
    question: "What happens when the market price is above the Equilibrium Price Point",
    options: [
      "Decrease in supply",
      "Shortage of goods",
      "Surplus of goods",
      "Increased profit"
    ],
    correctIndex: 2,
    hint: "hint_w5_market"
  },
  {
    id: "q_w5_40",
    weekId: 5,
    question: "A luxury hotel chain notices that its occupancy rates differ significantly between weekdays and weekends. The hotel decides to implement price discrimination by offering lower rates during weekdays to attract more customers. This strategy is an example of",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Fourth-degree price discrimination"
    ],
    correctIndex: 2,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_41",
    weekId: 5,
    question: "What does the acronym WTP stand for in the context of this price setting discussions?",
    options: [
      "Wholesale Trade Price",
      "Weekly transaction profit",
      "Weekly taxable profit",
      "Willingness to pay"
    ],
    correctIndex: 3,
    hint: "hint_w5_wtp"
  },
  {
    id: "q_w5_42",
    weekId: 5,
    question: "Which of the following can be considered more of a fixed-cost based business than a variable-cost based business?",
    options: [
      "Woolworths",
      "Telstra",
      "Treasury Wines",
      "Uber"
    ],
    correctIndex: 1,
    hint: "hint_w5_costs"
  },
  {
    id: "q_w5_43",
    weekId: 5,
    question: "Stan require an additional payment on top of the basic subscription to access live streaming of sports events. Which type of price discrimination is this an example of?",
    options: [
      "First-degree price discrimination",
      "Second-degree price discrimination",
      "Third-degree price discrimination",
      "Fourth-degree price discrimination"
    ],
    correctIndex: 1,
    hint: "hint_w5_pricediscrimination"
  },
  {
    id: "q_w5_44",
    weekId: 5,
    question: "Which of the following is a feature of a sealed bid auction?",
    options: [
      "Bidders know each other's bids before submission.",
      "Bidders submit their bids without knowing others' bids.",
      "Bidders can revise their bids after submission.",
      "Bidders can communicate to strategically win with the lowest possible price."
    ],
    correctIndex: 1,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_45",
    weekId: 5,
    question: "In a Dutch auction, how is the final sale price determined?",
    options: [
      "The price increases until no one bids.",
      "The price decreases until someone signals their interest.",
      "The highest bidder wins at their bid price.",
      "The lowest bidder wins at their bid price."
    ],
    correctIndex: 1,
    hint: "hint_w5_auctions"
  },
  {
    id: "q_w5_46",
    weekId: 5,
    question: "What are sunk costs?",
    options: [
      "Costs that have already been incurred and cannot be recovered",
      "All costs invested in a product",
      "Money spent on anciliaries",
      "Costs incurred per unit produced"
    ],
    correctIndex: 0,
    hint: "hint_w5_costs"
  }
);
