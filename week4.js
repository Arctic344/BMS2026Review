// Add hints for week 4
Object.assign(quizData.hints, {
  "hint_probabilistic_model": "Probabilistic models use math to estimate demand and determine safety stock. The Reorder Point relies on lead time and daily demand.",
  "hint_virtual_manufacturing": "A virtual manufacturer focuses on design and marketing, outsourcing the actual production to contract manufacturers.",
  "hint_realtime_info": "Real-time, automated information flow across the supply chain primarily helps reduce inventory costs by improving demand prediction.",
  "hint_inventory_tradeoff": "Inventory acts as a buffer against uncertainty, but incurs holding costs. The ideal scenario is minimal inventory to lower these costs.",
  "hint_bullwhip_effect": "The Bullwhip Effect is the amplification of demand variability as you move up the supply chain. Sharing real-time information helps minimize it.",
  "hint_supply_chain_roles": "Supply chains manage the flow of goods and information. Wholesalers buy in bulk from manufacturers and sell in smaller quantities.",
  // "hint_w4_1": "This is a hint for week 4...",
});

// Add questions for week 4
quizData.questions.push(
  {
    id: "q_w4_1",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "Which of the following is a drawback of a probabilistic order model?",
    options: [
      "Greater storage requirements",
      "Fewer stock issues",
      "You have to do maths",
      "Lower customer satisfaction"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_2",
    weekId: 4,
    question: "What represents a major complication in modern supply chains?",
    options: [
      "Static demand",
      "Globalisation",
      "Localised sourcing",
      "Too much transparency"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_3",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "What is one key benefit of real-time information flow in supply chain management?",
    options: [
      "It makes inventory unnecessary",
      "It eliminates all transportation costs",
      "It removes the need for suppliers",
      "It can significantly reduce inventory costs"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_4",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "How do Japanese 7-eleven stores stay in stock despite having no inventory space?",
    options: [
      "By receiving smaller deliveries, based on real-time sales",
      "By reducing the variety of stock sold in store",
      "By storing large amounts of inventory nearby",
      "By only restocking products weekly"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_5",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "Why do we use probabilistic models for inventory management?",
    options: [
      "To completely eliminate all uncertainty in demand and supply",
      "To maximise warehouse storage capacity at all times",
      "To ensure that the probability of stock running out is minimised to an acceptable value",
      "\"To ensure inventory levels never change over time\""
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_6",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Which of the following is NOT listed as a holding (carrying) cost of inventory?",
    options: [
      "Costs for cancelling an order",
      "Insurance costs",
      "Marketing and advertising costs",
      "Storage and handling costs"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_7",
    weekId: 4,
    hint: "hint_virtual_manufacturing",
    question: "What is a virtual manufacturer?",
    options: [
      "A company that outsources its production to contract manufactures",
      "A retailer that sells goods directly to customers",
      "A manufacturer that produces goods for other companies",
      "A manufacturer that produces goods for themselves"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_8",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "A company sells 100 units of a product per day. After \nplacing an order, it takes 3 days for the supplier to deliver the goods.\n At what inventory level should it place a reorder?",
    options: [
      "100 units",
      "400 units",
      "200 units",
      "300 units"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_9",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "In a supply chain, which of the following is a cost of holding inventory?",
    options: [
      "Transportation planning",
      "Customer demand forecasting",
      "Supplier selection",
      "Storage and handling costs"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_10",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Which of the following best describes a major trade-off in inventory management?",
    options: [
      "Inventory reduces uncertainty but increases holding costs",
      "Lower inventory eliminates all risks",
      "Inventory has no impact on business performance",
      "Higher inventory always increases profits"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_11",
    weekId: 4,
    hint: "hint_supply_chain_roles",
    question: "what is the primary role of a wholesale distributor in the supply chain management system?",
    options: [
      "Providing direct customer service to end consumers on behalf of manufacturers.",
      "Designing new products for manufacturers to produce",
      "Intermediaries purchasing goods in bulk and dividing them into smaller quantities for resale.",
      "Manufacturing goods in bulk for retailers."
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_12",
    weekId: 4,
    hint: "hint_virtual_manufacturing",
    question: "Which of the following represents a virtual manufacturer?",
    options: [
      "A company which designs products and hires other companies to make them, without owning its own factory.",
      "A company that only designs products for other companies.",
      "A company that manufactures in its own factory for other companies.",
      "A Local manufacturer that sells directly to customers."
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_13",
    weekId: 4,
    hint: "hint_supply_chain_roles",
    question: "What is the primary function of a supply chain?",
    options: [
      "To provide products from suppliers to consumers",
      "To manage the flow of goods and information from suppliers to customers",
      "To store finished products in warehouses",
      "To handle customer service information and support"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_14",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Which of the following is NOT a benefit of maintaining inventory in a supply chain?",
    options: [
      "Inventory helps manage uncertainty when supplies are delayed.",
      "Inventory allows for flexibility when demand is greater than expected.",
      "Inventory addresses information flow in the supply chain.",
      "Inventory provides a buffer that can temporarily hide problems."
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_15",
    weekId: 4,
    question: "Which one of the following is a key function in the supply chain management process?",
    options: [
      "Marketing strategy development",
      "Procurement of materials",
      "Employee recruitment",
      "Financial auditing"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_16",
    weekId: 4,
    question: "You are a supply chain manager for a large retail chain. Which of the following methods would best determine when to order stock for individual stores?",
    options: [
      "Regularly order a fixed quantity of each item",
      "Implement an automated system using historical sales data, current inventory levels, and predictive analytics to trigger orders",
      "Allow store managers to order stock based on their personal judgment on when the stock is going to run out",
      "Order stock only when an item is about to be sold out in a store"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_17",
    weekId: 4,
    question: "A global electronics manufacturer is experiencing delays in its supply chain due to complex component sourcing. Which of the following strategies would best apply supply chain management principles to address this issue?",
    options: [
      "Increase inventory levels of all components to prevent stockouts",
      "Implement a just-in-time (JIT) inventory system considering supplier locations",
      "Develop a supplier risk assessment model and diversify the supplier base for critical components",
      "Switch to using local suppliers for all components and Just in Time delivery"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_18",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "Concerning the Inventory Management what does the reorder point (R) depend on?",
    options: [
      "Lead time and daily demand",
      "Storage space availability",
      "Product popularity",
      "Supplier's manufacturing schedule"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_19",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "What is a key benefit of automating information flow in supply chain management?",
    options: [
      "Increased marketing reach",
      "Higher employee productivity",
      "Improved response to customer feedback",
      "Reduced inventory costs"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_20",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "How can real-time information flow benefit supply chain management?",
    options: [
      "Reduce inventory costs through better demand analysis",
      "Reduce the overall carrying cost of inventory by reducing order lead time",
      "Simplify the distribution process through less manual data entry",
      "Helping large companies enhance their supply chain process"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_21",
    weekId: 4,
    question: "How would effective inventory management benefit a fuel station in India during supply chain disruptions?",
    options: [
      "Manage fuel prices",
      "Ensure consistent fuel availability despite delayed shipments",
      "Reduce the number of employees needed",
      "Increase the variety of fuel types offered"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_22",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Coles has a number of costs that it incurs for its day to day operation. Which of the following are NOT examples of inventory holding costs",
    options: [
      "Housing costs",
      "Advertising costs",
      "Material holding costs",
      "Investment costs"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_23",
    weekId: 4,
    question: "A company employing software to store and categorise product orders would be an example of:",
    options: [
      "Replenishment cycle",
      "Manufacturing cycle",
      "Procurement cycle",
      "Customer order cycle"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_24",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Which of the following is NOT a type of cost associated with inventory management?",
    options: [
      "Holding costs",
      "Transportation costs",
      "Setup costs",
      "Ordering costs"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_25",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "In a supply chain, \"Safety Stock\" is used to address which situation?",
    options: [
      "Demand management",
      "Lack of information sharing among supply chain partners",
      "Demand exceeding expectations",
      "Product obsolescence"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_26",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "In basic stock replenishment, what triggers an automatic reorder of goods?",
    options: [
      "When the inventory reaches the maximum capacity",
      "When the inventory reaches a pre-determined reorder point",
      "At fixed time intervals",
      "When the cost of holding inventory exceeds the cost of ordering"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_27",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "In a probabilistic inventory model, what does the term z*\u03c3 represent in the reorder point formula R=dL+ z*\u03c3?",
    options: [
      "The average demand during the lead time",
      "The safety stock required to account for demand variability",
      "The lead time for the order to arrive",
      "The total demand during a specific time period"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_28",
    weekId: 4,
    question: "Which of the following best explains why a grocery store is more likely to have Tim Tams late at night, but not milk.",
    options: [
      "Grocery stores order less additional inventory of milk than Tim Tams due to milk's shorter shelf life",
      "Grocery stores are able to order Tim Tams in bulk, resulting in Tim Tam stock being higher than milk stock",
      "Milk can only be delivered very early in the day, whereas Tim Tams can be delivered at night",
      "Tim Tams are more popular than milk"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_29",
    weekId: 4,
    question: "What is Amazon's supply chain management characteristic?",
    options: [
      "Focuses on the local market",
      "Only sells its own brand products",
      "Connects multiple suppliers with many customers",
      "Relies solely on online stores for sales"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_30",
    weekId: 4,
    question: "What does \"Build to order\" in Dell's supply chain strategy refer to?",
    options: [
      "Producing based on orders to reduce inventory",
      "Accepting only orders from small builders",
      "Order building of other companies computer parts",
      "Focusing on fast production rather than customization"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_31",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "Under which circumstance the information flow does not need to be automated?",
    options: [
      "When database design needs to be harmonised across multiple supply chain partners.",
      "When it is an infrequent process",
      "When a lot of data needs to be pre-processed before it is stored",
      "Information flow cannot be automated"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_32",
    weekId: 4,
    hint: "hint_bullwhip_effect",
    question: "Bob is facing challenges with his supply chain due to fluctuating customer demand. To minimize the \"bullwhip effect,\" what should Bob prioritize?",
    options: [
      "Increasing his inventory levels significantly",
      "Improving real-time information sharing with suppliers and distributors",
      "Reducing the number of suppliers",
      "Switching to a single-source supplier"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_33",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "What are some of the benefits of holding large amounts of inventory?",
    options: [
      "If supplies are delayed, it can still meet the demand.",
      "If demand is greater than expected, there is the inventory to meet said demand.",
      "Having inventory can hide problems that may occur, due to it acting as a buffer against uncertainty",
      "All are correct"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_34",
    weekId: 4,
    question: "Which of the following statement about supply chain is NOT correct?",
    options: [
      "In a traditional supply chain, goods flow in one direction",
      "In a traditional supply chain, information flow in one direction",
      "In an Internet-connected Supply Web, information flow in more than one direction",
      "In an Internet-connected Supply Web, there may be multiple manufacturers"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_35",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "Which of the following phenomena can be reduced by real-time information flow?",
    options: [
      "Production costs",
      "Transportation time",
      "Demand fluctuation",
      "Inventory costs"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_36",
    weekId: 4,
    question: "What does the basic economic order quantity model mainly be used to find?",
    options: [
      "Total cost of inventory",
      "The optimal order quantity",
      "The long-term sales trends",
      "Reorder point and its time"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_37",
    weekId: 4,
    question: "For a manufacturing company in Adelaide with local and international suppliers and multiple local factories, what is a key feature of its Internet-connected supply web?",
    options: [
      "A single, linear supply chain from suppliers to a central factory",
      "Parallel supply lines with multiple factories and real-time interactions",
      "Reliance on traditional, fixed supply methods",
      "A supply chain with constant updates and/or changes"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_38",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "What is the ideal scenario for inventory management?",
    options: [
      "Holding enough stock to ensure inventory never reaches 0.",
      "Holding very little stock so very little costs are involved, even if this strategy risks selling out.",
      "Minimal days inventory, meaning inventory is held for the smallest amount of time possible.",
      "Purchasing as much inventory as the supplier can produce to hold maximum market share."
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_39",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "In the context of supply chain management, which of the following best describes the trade-off involved in maintaining inventory?",
    options: [
      "Higher inventory reduces flexibility but increases cost efficiency",
      "Lower inventory increases flexibility but may lead to stockouts",
      "Higher inventory provides a buffer against uncertainty but increases holding costs",
      "Lower inventory reduces holding costs but increases setup costs"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_40",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Which is not a cost associated with holding large inventories?",
    options: [
      "Storage costs",
      "Handling Costs",
      "Manufacturing Costs",
      "Ordering Costs"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_41",
    weekId: 4,
    question: "Which of the following practices can help pharmaceutical companies minimize costs while maintaining efficient operations?",
    options: [
      "Increasing the stock of all medicines",
      "Stockpiling large quantities of every medicine in different locations",
      "Minimizing inventory levels while ensuring critical drugs are always available",
      "Reducing the frequency of production runs based on analytics"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_42",
    weekId: 4,
    hint: "hint_virtual_manufacturing",
    question: "If Volkswagen contracts producing of car engines to Toyota who supply it with the Volkswagen brand name on the engine. In this set up Toyota is practicing",
    options: [
      "Virtual manufacturing",
      "Contract manufacturing",
      "Logistical manufacturing",
      "Design collaboration"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_43",
    weekId: 4,
    hint: "hint_bullwhip_effect",
    question: "In a supply chain, which phenomenon leads to increasing amplification of demand variations as we move from retailers to manufacturers?",
    options: [
      "Bullwhip effect",
      "Butterfly effect",
      "Domino effect",
      "Long tail effect"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_44",
    weekId: 4,
    question: "What is the role of Customer Relationship Management (CRM) in Supply Chain Management?",
    options: [
      "Managing the procurement of raw materials for customers.",
      "Automating the flow of information from customers",
      "Manufacturing supply of goods",
      "Fulfilling customer orders and managing customer interactions."
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_45",
    weekId: 4,
    question: "A small online retailer is experiencing frequent stockouts due to unpredictable demand. Which of the following strategies would most likely help mitigate this issue?",
    options: [
      "Increasing the reorder point and adding safety stock",
      "Implementing a just-in-time inventory system",
      "Reducing the number of suppliers",
      "Extending the delivery lead time"
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_46",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "In supply chain management, what is the reorder level?",
    options: [
      "The quantity of inventory at which a new order is placed to avoid stockouts.",
      "The maximum quantity of inventory that a company should hold.",
      "The minimum quantity of inventory required to meet peak demand.",
      "The time period required to receive an order from a supplier."
    ],
    correctIndex: 0
  },
  {
    id: "q_w4_47",
    weekId: 4,
    hint: "hint_probabilistic_model",
    question: "Apples in a fruit and vegetable store have a lead ordering time of 2 days. Which of the following is true about ordering?",
    options: [
      "Apples should be ordered when the store runs out of stock",
      "Apples should be ordered as soon as one order arrives",
      "Apples should be ordered around 2 days before stock is predicted to run out",
      "Apples can be ordered whenever as they can be kept in inventory indefinitely"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_48",
    weekId: 4,
    question: "Which of the following activities would NOT be related to demand planning?",
    options: [
      "Using analytic techniques to predict how much an item will sell",
      "Increasing stock the week before a public holiday",
      "Creating an advertisement to help sell a product",
      "Restacking a sold out item on store shelves"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_49",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Xavier wants to increase the amount of inventory he holds at his computer store. Which should he expect to not increase as a result?",
    options: [
      "Insurance cost",
      "Investment costs",
      "Labour cost",
      "Unit cost"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_50",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "What role does automation play in supply chain information flow?",
    options: [
      "Reducing the need for physical inventory",
      "Simplifying the production process",
      "Streamlining data collection",
      "Enhancing customer satisfaction"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_51",
    weekId: 4,
    hint: "hint_realtime_info",
    question: "What is the importance of real-time information flow in supply chain management?",
    options: [
      "It increases the overall cost of operations",
      "It can significantly reduce inventory costs",
      "It decreases the efficiency of data processing",
      "It complicates the supply chain process"
    ],
    correctIndex: 1
  },
  {
    id: "q_w4_52",
    weekId: 4,
    question: "In the information flow process in supply chain management, which step is primarily responsible for converting the collected data into valuable insights or information to support decision-making and supply chain optimization?",
    options: [
      "Information (Data) Collection",
      "Information Processing and Storage",
      "Information Analysis and Creation",
      "Information Dissemination"
    ],
    correctIndex: 2
  },
  {
    id: "q_w4_53",
    weekId: 4,
    hint: "hint_inventory_tradeoff",
    question: "Why is minimising inventory considered a cost advantage for companies?",
    options: [
      "Reduces need for customer management",
      "Reduces complexity of supply chain management",
      "Reduces need for supplier interactions",
      "Lowers costs of carrying"
    ],
    correctIndex: 3
  },
  {
    id: "q_w4_54",
    weekId: 4,
    hint: "hint_supply_chain_roles",
    question: "In a traditional supply chain, what is the role of wholesalers?",
    options: [
      "To produce raw materials for manufacturers",
      "To distribute products from manufacturers to retailers",
      "To directly sell products to consumers",
      "To handle customer service for manufacturers"
    ],
    correctIndex: 1
  }

);
