// Add hints for week 2
Object.assign(quizData.hints, {
  // "hint_w2_1": "This is a hint for week 2...",
});

// Add questions for week 2
quizData.questions.push(
  {
    id: "q_w2_1",
    weekId: 2,
    question: "Why are informal networks valuable?",
    options: [
      "They reveal how information, advice, and trust actually flow",
      "They replace all formal reporting lines",
      "They show as an official organisational chart",
      "They are used with some ancient methods"
    ],
    correctIndex: 0,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_2",
    weekId: 2,
    question: "Understanding group dynamics is especially useful for:",
    options: [
      "Avoiding communication",
      "Eliminating hierarchy",
      "Reducing taxation",
      "Designing effective teams"
    ],
    correctIndex: 3
  },
  {
    id: "q_w2_3",
    weekId: 2,
    question: "What could an advice network chart be used for, as a CEO?",
    options: [
      "It can show who is in charge",
      "It can show who might deserve a pay rise",
      "It shows who to trust",
      "It shows who gate-keeps information"
    ],
    correctIndex: 1,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_4",
    weekId: 2,
    question: "Jeremy is connected to two individuals in a workplace that no one else has access to. What is this measured by?",
    options: [
      "Degree Centrality",
      "Eigenvector Centrality",
      "Connection Centrality",
      "Between-ness centrality"
    ],
    correctIndex: 3,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_5",
    weekId: 2,
    question: "What does Degree Centrality mean?",
    options: [
      "Length of shortest path",
      "Number of shortest paths in the network",
      "Number of connections a node has",
      "Physical distance between people"
    ],
    correctIndex: 2,
    hint: "Degree centrality simply counts the total number of direct connections a node has. It's a measure of immediate, local reach."
  },
  {
    id: "q_w2_6",
    weekId: 2,
    question: "What can an organisation chart show?",
    options: [
      "Which companies communicate with the organisation",
      "The products offered by the company",
      "Which external stakeholders are relevant",
      "Hierarchical structure of who is responsible in a company"
    ],
    correctIndex: 3,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_7",
    weekId: 2,
    question: "Which of these is NOT a value proposition for the Colosseum?",
    options: [
      "Visually pleasing structure",
      "Material was sourced from a radius of 1000km",
      "Entertainment",
      "Demonstrates the power of the Roman Empire"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_8",
    weekId: 2,
    question: "What is an efficient way to mobilise large groups of people?",
    options: [
      "Free for all",
      "Using a hierarchical management structure",
      "Using a circular management structure",
      "Using a horizontal management structure"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_9",
    weekId: 2,
    question: "Why is the shortest path between two individuals in a network important for organisations?",
    options: [
      "It shows who has the most friends overall",
      "It determines the salary structure of employees",
      "It indicates how quickly information can spread",
      "It eliminates the need for hierarchy"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_10",
    weekId: 2,
    question: "In network science, what is the difference between a node and a link?",
    options: [
      "Node is a hierarchy, while link is a centrality measure",
      "Node is a person, while link is a company",
      "Node is an entity, while link is a relationship",
      "Node is a relationship, while link is an entity"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_11",
    weekId: 2,
    question: "Which is the term used to describe the speed at which information can flow through a network?",
    options: [
      "Degree centrality",
      "Betweenness centrality",
      "Closeness centrality",
      "Eigenvector centrality"
    ],
    correctIndex: 2,
    hint: "Closeness centrality reflects how close a node is to all other nodes in the network. A higher closeness centrality means the node can spread or access information more quickly."
  },
  {
    id: "q_w2_12",
    weekId: 2,
    question: "What does \"degree centrality\" represent in network analysis?",
    options: [
      "The total number of shortest paths passing through a node",
      "The speed at which information flows through a network",
      "The number of connections a node has",
      "The importance of a node based on its connections to highly connected nodes"
    ],
    correctIndex: 2,
    hint: "Degree centrality simply counts the total number of direct connections a node has. It's a measure of immediate, local reach."
  },
  {
    id: "q_w2_13",
    weekId: 2,
    question: "According to Jared Diamond, what led to the faster development of societies over the others?",
    options: [
      "Animal domestication and hierarchical society",
      "Birth of hierarchical societies and fighting",
      "Writing systems and North-south axis in the continent",
      "Grain cultivation and Presence of an East-West axis in the continent"
    ],
    correctIndex: 3,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_14",
    weekId: 2,
    question: "Why is betweenness centrality known as an important metric in network analysis?",
    options: [
      "Evaluates the average distance between nodes.",
      "Measures total number of nodes.",
      "Identifies nodes that serve as critical links connecting different parts of the network.",
      "Assess the close links between nodes to highly influential nodes"
    ],
    correctIndex: 2,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_15",
    weekId: 2,
    question: "What does average network degree in network analysis represents?",
    options: [
      "it represents how interconnected the network is",
      "it represents which nodes can be eliminated",
      "it represents which node is more central to the network",
      "it represents which connection is shortest"
    ],
    correctIndex: 0
  },
  {
    id: "q_w2_16",
    weekId: 2,
    question: "What does eigenvector primarily focus on?",
    options: [
      "The importance of a node based on its connections to other important nodes",
      "The shortest path between nodes",
      "The density of the connections in the network",
      "The number of direct connections a node has"
    ],
    correctIndex: 0,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_17",
    weekId: 2,
    question: "What factor is mentioned as crucial for the growth of initial civilizations?",
    options: [
      "Technological advancements",
      "Large populations",
      "Geographic isolation",
      "Stronger people"
    ],
    correctIndex: 1,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_18",
    weekId: 2,
    question: "What is necessary for the mobilization of large groups of people in societal structures?",
    options: [
      "Charismatic leadership",
      "Hierarchical structures",
      "Advanced technology",
      "Cultural homogeneity"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_19",
    weekId: 2,
    question: "In a business network analysis, what do the nodes typically represent?",
    options: [
      "Individual customers",
      "Business entities such as companies or departments",
      "Marketing campaigns",
      "Products and services"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_20",
    weekId: 2,
    question: "What does high eigenvector centrality signify about a company's influence?",
    options: [
      "Many direct connections",
      "Strong connections to other influential companies",
      "High revenue",
      "Large market share"
    ],
    correctIndex: 1,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_21",
    weekId: 2,
    question: "What is the first predominant reason that hindered civilisation development",
    options: [
      "lack of resources to reduce nomadic lifestyle",
      "Lack of labour to facilitate invention",
      "lack of inspiration",
      "none of the above"
    ],
    correctIndex: 0,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_22",
    weekId: 2,
    question: "What does closeness centrality tell us about a person in a company?",
    options: [
      "How many direct connections the person has with others.",
      "How close the person is to all others to pass information in the company.",
      "How many shortest paths go through the person.",
      "How important the person is in the company."
    ],
    correctIndex: 1,
    hint: "Closeness centrality reflects how close a node is to all other nodes in the network. A higher closeness centrality means the node can spread or access information more quickly."
  },
  {
    id: "q_w2_23",
    weekId: 2,
    question: "In a network of people, if Mark has a betweenness centrality score greater than 5, and Andrew has a betweenness centrality score of 2, what can be inferred about their roles in the network?",
    options: [
      "Mark is less important for network connectivity than Andrew.",
      "Andrew plays a crucial role in connecting various parts of the network, while Mark does not.",
      "Mark is a key person through whom many shortest paths pass, making him highly important for network connectivity, whereas Andrew is less central but still contributes to some shortest paths",
      "Both Mark and Andrew are equally important for network connectivity."
    ],
    correctIndex: 2,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_24",
    weekId: 2,
    question: "Which metric of interest in network analysis measures the importance of a node based on its connections to highly connected nodes?",
    options: [
      "Degree centrality",
      "Closeness centrality",
      "Eigenvector centrality",
      "Betweenness centrality"
    ],
    correctIndex: 2,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_25",
    weekId: 2,
    question: "What does the shortest path in a network measure?",
    options: [
      "The number of nodes connected to a central node.",
      "The length of the longest path in the network.",
      "The fewest number of links between two nodes.",
      "The total number of links in the network."
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_26",
    weekId: 2,
    question: "A company wants to identify the most efficient way to spread information through their organisation. Using network analysis, which employee should they target to disseminate information quickly?",
    options: [
      "The employee with the most direct reports",
      "The employee with the highest betweenness centrality",
      "The employee with the highest closeness centrality",
      "The employee with the most years of service"
    ],
    correctIndex: 2,
    hint: "Closeness centrality reflects how close a node is to all other nodes in the network. A higher closeness centrality means the node can spread or access information more quickly."
  },
  {
    id: "q_w2_27",
    weekId: 2,
    question: "Why does Google prefer the eigenvector centrality metric to other methods?",
    options: [
      "They own the patents to the technology",
      "It defines the closest matches with most access points",
      "It is easy to implement and accurate",
      "It ranks the relevant sites higher as they appear better connected"
    ],
    correctIndex: 3,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_28",
    weekId: 2,
    question: "Why do organisations maintain an Org-chart?",
    options: [
      "It is a formal representation of the organisation",
      "It shows the vertical flow of information",
      "It shows the the team structure",
      "all of the above"
    ],
    correctIndex: 3,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_29",
    weekId: 2,
    question: "What does a high betweenness score for a companies employee indicate?",
    options: [
      "The employee has the largest number direct connections in the company",
      "The employee is an essential link for information flow between disparate parts of the company",
      "The employee has the highest amount of access to all other employees in the company",
      "The employee is connected to highly connected employees"
    ],
    correctIndex: 1,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_30",
    weekId: 2,
    question: "Which of the following is a common goal of people mobilization in social movements?",
    options: [
      "To develop new technologies and conquer neighboring countries",
      "To increase the value of their political, social, or economic conditions",
      "To increase employment of the population and increase wealth",
      "To improve international trade with neighbors"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_31",
    weekId: 2,
    question: "Why an advice network matters for any organization?",
    options: [
      "It is related to the network coordination of advising each other.",
      "Helps to create good relationships between employees in an organization.",
      "It identifies channels to coordinate existing activities, information, and flow of information.",
      "It shows the employees who are close to the CEO of the Company."
    ],
    correctIndex: 2,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_32",
    weekId: 2,
    question: "Alex is a team leader at a tech company and is reorganising his team into smaller units. What is a key social change he should expect?",
    options: [
      "The creation of new technology for project tracking",
      "The development of clear hierarchical roles and responsibilities",
      "The formation of advanced marketing strategies",
      "The improvement of external client relationships"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_33",
    weekId: 2,
    question: "Which is a primary factor mentioned by Jared Diamond, in his book \"Guns, Germs, and Steel\", facilitated the spread of species and technology across certain regions?",
    options: [
      "North-South axis",
      "East-West axis",
      "Large, dense, sedentary societies",
      "Ocean-going ships"
    ],
    correctIndex: 1,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_34",
    weekId: 2,
    question: "In collaborative projects between companies, which type of employee is typically considered a key node that facilitates information flow and decision-making?",
    options: [
      "Employees working on a single project",
      "Employees frequently collaborating with multiple departments and companies",
      "New employees who recently joined the company",
      "Employees who never engage in cross-company collaborations"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_35",
    weekId: 2,
    question: "Which of the following shows how interconnected the network is",
    options: [
      "Average network degree",
      "Degree centrality",
      "Eigenvector centrality",
      "closeness centrality"
    ],
    correctIndex: 0
  },
  {
    id: "q_w2_36",
    weekId: 2,
    question: "In a social network, Jack has many direct connections, while John is connected to a few influential people. Which scenario best illustrates Eigenvector Centrality?",
    options: [
      "Jack is more important than john because he has more direct connections.",
      "Jack\u2019s importance increases if he is connected to people like John, who are well-connected themselves.",
      "Jack is more important because he is connected to several highly connected nodes.",
      "Jack is more important because he has a greater number of connections regardless of their quality."
    ],
    correctIndex: 1,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_37",
    weekId: 2,
    question: "What do professional firms look for when putting together a team?",
    options: [
      "Who works well together",
      "Individual's expertise",
      "Individuals' weaknesses",
      "All of the above"
    ],
    correctIndex: 3
  },
  {
    id: "q_w2_38",
    weekId: 2,
    question: "John is a engineer in a consultancy and he reports to a lead engineer, which statement best describes their relationship?",
    options: [
      "John's relationship with the lead is a formal network relationship that can be shown on a organisational chart.",
      "John's relationship is informal (social) network relationship within the organisation.",
      "John's relationship or network connection is an example of a trust network.",
      "John's relationship or network is based on an advice network."
    ],
    correctIndex: 0,
    hint: "While formal networks (like organizational charts) show official hierarchical reporting lines, informal networks (like advice and trust networks) reveal how information and influence actually flow organically between people."
  },
  {
    id: "q_w2_39",
    weekId: 2,
    question: "What is the significance of the East-West axis in Jared Diamond's explanation of societal development?",
    options: [
      "It facilitates overland invasions",
      "It isolates communities from one another",
      "It facilitates the spread of species and technology",
      "It offers a consistent climate for agriculture"
    ],
    correctIndex: 2,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_40",
    weekId: 2,
    question: "How might a marketing team use network analysis in their strategy?",
    options: [
      "To identify influential individuals in a social network",
      "To determine the best time to post on social media",
      "To set pricing strategies",
      "To design product packaging"
    ],
    correctIndex: 0
  },
  {
    id: "q_w2_41",
    weekId: 2,
    question: "Which of the following was a major consequence of the rise of ancient cities such as Uruk and Babylon in Mesopotamia?",
    options: [
      "The decline of trade networks",
      "The invention of the printing press",
      "The creation of complex social hierarchies and bureaucracies",
      "The widespread use of arrows and swords"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_42",
    weekId: 2,
    question: "What is the betweenness of a node in a network when it is only connected to another node?",
    options: [
      "3",
      "0",
      "1",
      "2"
    ],
    correctIndex: 1,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_43",
    weekId: 2,
    question: "If david has a degree of centrality of 5 and charles has a degree of centrality of 7 in an organization who is more important to the organization.",
    options: [
      "David",
      "Charles",
      "Their importance is the same",
      "Depends on how well connected the people they are connected to are"
    ],
    correctIndex: 3,
    hint: "Degree centrality simply counts the total number of direct connections a node has. It's a measure of immediate, local reach."
  },
  {
    id: "q_w2_44",
    weekId: 2,
    question: "Which of the following best describes the main focus of social network analysis?",
    options: [
      "Individual attributes of actors",
      "Relationships between attributes",
      "Patterns of ties among actors",
      "Demographic characteristics of populations"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_45",
    weekId: 2,
    question: "What was the main occupation of early humans ?",
    options: [
      "Farming",
      "Hunting and gathering",
      "Fishing",
      "Trading"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_46",
    weekId: 2,
    question: "Donna is connected to five nodes,but four of these nodes are not well connected. Manuel is connected to four nodes,but three of them are highly connected. Who is more important?",
    options: [
      "Donna",
      "Manuel",
      "The same",
      "Cannot know for sure"
    ],
    correctIndex: 1,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_47",
    weekId: 2,
    question: "In team sports, which of the following best exemplifies the application of network analysis to team design?",
    options: [
      "Selecting the fastest runner for a relay race",
      "Choosing players based solely on individual statistics",
      "Considering who plays well together as a team",
      "Focusing only on the team captain's leadership skills"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_48",
    weekId: 2,
    question: "Successful collaboration among humans is largely due to:",
    options: [
      "A lack of any structured social order.",
      "Random, unorganized interactions.",
      "Sophisticated social inter-relations that help us work together successfully.",
      "Individual isolation and independent efforts."
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_49",
    weekId: 2,
    question: "What can be the maximum average network degree of an organisation with N number of employees?",
    options: [
      "N-2",
      "N-1",
      "N-3",
      "N-4"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_50",
    weekId: 2,
    question: "Why did first social development happen faster in some areas than others ?",
    options: [
      "People in some areas were bigger and stronger",
      "Some area had high population",
      "Peoples in some area had genetically blessed brain power",
      "Some areas had suitable factors for growing food"
    ],
    correctIndex: 3,
    hint: "Jared Diamond's theory emphasizes that geographic and environmental factors—like an East-West continental axis and suitable conditions for agriculture—were the primary catalysts for early civilizational development."
  },
  {
    id: "q_w2_51",
    weekId: 2,
    question: "What is NOT a benefit of having a diverse team?",
    options: [
      "Improved balance of team strengths",
      "Different approaches to problem solving",
      "Convergence of critical thinking approaches",
      "Bolstered creativity"
    ],
    correctIndex: 2
  },
  {
    id: "q_w2_52",
    weekId: 2,
    question: "Why is understanding group dynamics important when designing work teams in organizations like Deloitte or Accenture?",
    options: [
      "It ensures that teams are permanent and unchanging.",
      "It helps in identifying which teams are likely to deliver the best results based on members\u2019 interactions.",
      "It prevents the formation of informal social networks within the organization.",
      "It guarantees that all team members have equal skills and capabilities."
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_53",
    weekId: 2,
    question: "Assume you are working in a network with a really high network degree centrality, which one of the following may be considered a disadvantage of such a network",
    options: [
      "Immediate access to any node",
      "Decentralised information updating and spread",
      "No middle man dependencies",
      "A higher level of interdependencies"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_54",
    weekId: 2,
    question: "Why does the layout and format of a visual network representation matter?",
    options: [
      "It doesn\u2019t",
      "Different layouts can reveal different features of the network",
      "It can be used in a slide presentation without offending the viewer",
      "Different layouts can be used for different mediums (ie paper vs display)"
    ],
    correctIndex: 1
  },
  {
    id: "q_w2_55",
    weekId: 2,
    question: "In a supply chain network, which metric would be most useful to identify suppliers that, if removed, could significantly disrupt the connectivity of the entire network?",
    options: [
      "Average network degree",
      "Shortest path",
      "Betweenness centrality",
      "Closeness centrality"
    ],
    correctIndex: 2,
    hint: "Betweenness centrality measures how often a node acts as a bridge or bottleneck along the shortest paths between other nodes. Nodes with high betweenness are critical for connecting different parts of a network."
  },
  {
    id: "q_w2_56",
    weekId: 2,
    question: "A marketing team wants to identify influential individuals in a social network to maximize the reach of their campaign. Which metric should they prioritize?",
    options: [
      "Degree centrality",
      "Closeness centrality",
      "Betweenness centrality",
      "Eigenvector centrality"
    ],
    correctIndex: 3,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  },
  {
    id: "q_w2_57",
    weekId: 2,
    question: "In a local Adelaide business network, what metric could be used to identify the most influential business partner?",
    options: [
      "Betweenness Centrality",
      "Closeness Centrality",
      "Eigenvector Centrality",
      "Degree Centrality"
    ],
    correctIndex: 2,
    hint: "Eigenvector centrality evaluates a node's importance based on the importance of its neighbors. Being connected to a few highly influential nodes can give you a higher score than having many connections to uninfluential nodes."
  }

);
