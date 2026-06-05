// Add hints for week 7
Object.assign(quizData.hints, {
  "hint_w7_wacc": "WACC (Weighted Average Cost of Capital) represents the average rate a company expects to pay to finance its operations, calculated by averaging the rates of all financing sources weighted by their proportion.",
  "hint_w7_tvm": "The Time Value of Money principle states that money today is worth more than the same amount in the future because of its potential earning capacity.",
  "hint_w7_npv": "NPV (Net Present Value) calculates the present value of future cash flows discounted at a specific rate. A positive NPV indicates a profitable project.",
  "hint_w7_irr": "IRR (Internal Rate of Return) is the discount rate that makes the NPV of a project zero. It is used to evaluate the expected profitability and compare potential investments.",
  "hint_w7_cba": "Financial Cost-Benefit Analysis (CBA) evaluates the profitability of a project or business by comparing present value of costs to the present value of benefits.",
  "hint_w7_income_statement": "An Income Statement summarizes a company revenues and expenses over a specific period, showing its overall profit or loss.",
  "hint_w7_balance_sheet": "A Balance Sheet provides a snapshot of a company financial position at a specific time point, based on the equation: Assets = Liabilities + Equity.",
  "hint_w7_assets_liabilities": "Current assets are expected to be converted to cash within a year, while non-current assets are long-term. Liabilities are financial obligations owed to outside parties.",
  "hint_w7_interest_coverage": "The Interest Coverage Ratio measures a company ability to pay interest on its outstanding debt with its earnings before interest and taxes (EBIT). A ratio over 1.5 is generally acceptable.",
  "hint_w7_roa": "ROA (Return on Assets) measures a company profitability in relation to its total assets, showing how efficiently it uses assets to generate earnings (Net Income / Total Assets).",
  "hint_w7_opportunity_cost": "Opportunity cost is the potential benefit lost when you choose one alternative over another.",
  "hint_w7_interest_rates": "Interest rates affect borrowing costs and serve as discount rates to determine the present value of future cash flows, making them crucial in project approval.",
  "hint_w7_financial_analysis": "Financial statement analysis includes methods like longitudinal analysis (identifying trends over several periods) and comparative analysis (benchmarking against competitors).",
  "hint_w7_financial_disclosure": "Public companies are required to regularly disclose financial statements to provide transparency and allow investors to make informed decisions."
});

// Add questions for week 7
quizData.questions.push(
  {
    id: "q_w7_1",
    weekId: 7,
    hint: "hint_w7_wacc",
    question: "What does the Weighted Average Cost of Capital (WACC) indicate?",
    options: [
      "The total costs of running a business",
      "The average rate a company expects to pay to finance its operations",
      "The interest a company earns from investments",
      "The profit margins from selling products"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_2",
    weekId: 7,
    hint: "hint_w7_tvm",
    question: "Why is it crucial to consider the time value of money when evaluating a project?",
    options: [
      "To avoid unnecessary debt",
      "Because it shows future cash flows are more valuable",
      "To understand the effect of inflation",
      "It discounts future cash flows to present value for better decision making"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_3",
    weekId: 7,
    hint: "hint_w7_npv",
    question: "What is Net Present Value Analysis?",
    options: [
      "Calculates the present value of future cash flows discounted by a specific interest rate",
      "Calculates the interest rate you get by investing in that company for a period of time",
      "Calculates the net profit you earn by the end of the period of investment",
      "Calculates the time period to get profit for investing a sum of cash in that company"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_4",
    weekId: 7,
    hint: "hint_w7_income_statement",
    question: "A company\u2019s income statement shows a significant increase in gross profit but little change in net profit. This can be caused by:",
    options: [
      "Increase in operating expenses",
      "Decrease in cost of goods sold",
      "Increase in revenue",
      "Decrease in interest expenses"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_5",
    weekId: 7,
    hint: "hint_w7_cba",
    question: "A financial Cost-Benefit Analysis (CBA) helps to find out the profitability of which of the following?",
    options: [
      "Project",
      "Business",
      "Strategy",
      "All of the above"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_6",
    weekId: 7,
    hint: "hint_w7_irr",
    question: "What does the Internal Rate of Return (IRR) represent?",
    options: [
      "The interest rate that makes NPV positive",
      "The rate of return at which NPV becomes zero",
      "The average rate of capital costs",
      "The interest paid on a loan"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_7",
    weekId: 7,
    hint: "hint_w7_tvm",
    question: "What is the main concept behind the time value of money?",
    options: [
      "Money today is worth more than the same amount in the future",
      "Money has a fixed value over time",
      "Money loses value over time due to inflation",
      "Money increases in value over time automatically"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_8",
    weekId: 7,
    hint: "hint_w7_opportunity_cost",
    question: "What is an opportunity cost?",
    options: [
      "The monetary cost of purchasing a product or service",
      "The cost associated with the  alternative that is foregone",
      "The fixed cost of maintaining a business operation",
      "The variable cost that changes with production levels"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_9",
    weekId: 7,
    hint: "hint_w7_interest_rates",
    question: "Which of the following is NOT a reason why interest rates play a crucial role in determining whether a project gets approved?",
    options: [
      "High interest rates may increase the cost of borrowing",
      "One may choose to undertake a different activity with the money",
      "Interest rates help assess the project\u2019s market demand",
      "Low interest rates may make projects more financially feasible"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_10",
    weekId: 7,
    hint: "hint_w7_wacc",
    question: "How is the Weighted Average Cost of Capital (WACC) determined for a company?",
    options: [
      "By averaging the interest rates of all possible financing options the company might use, weighted by the amount at each rate",
      "By calculating the company's overall risk in the financial market.",
      "By determining the cost of equity and adding it to the cost of debt.",
      "By using the interest rate that makes the net present value of a project zero."
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_11",
    weekId: 7,
    hint: "hint_w7_balance_sheet",
    question: "Which of the following financial statement types summarises the assets and liabilities of an organisation at a specific time point?",
    options: [
      "Asset Liability Statement",
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_12",
    weekId: 7,
    hint: "hint_w7_irr",
    question: "Which financial metric is used to compare the expected return of projects?",
    options: [
      "Internal Rate of Return (IRR)",
      "Weighted Average Cost of Capital (WACC)",
      "Return on Assets (ROA)",
      "Net Present Value (NPV)"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_13",
    weekId: 7,
    hint: "hint_w7_interest_coverage",
    question: "What does the Interest Coverage Ratio indicate about a company?",
    options: [
      "Its ability to generate profit from assets",
      "Its ability to pay its interest obligations",
      "Its overall market value",
      "Its tax efficiency"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_14",
    weekId: 7,
    hint: "hint_w7_roa",
    question: "A company has total assets of $500,000 and generates a net income of $75,000 in a year. What is the company's Return on Assets (ROA)?",
    options: [
      "0.1",
      "0.125",
      "0.15",
      "0.18"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_15",
    weekId: 7,
    hint: "hint_w7_interest_coverage",
    question: "What does the Interest Coverage Ratio measure in a company\u2019s financial health?",
    options: [
      "The company's profitability compared to its revenue",
      "The company\u2019s ability to pay its debts with its earnings before interest and taxes",
      "The value of the company\u2019s total assets relative to its liabilities",
      "The cost of borrowing capital for the company"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_16",
    weekId: 7,
    hint: "hint_w7_interest_coverage",
    question: "Which of the given metrics is used to assess a company's ability to pay its debts",
    options: [
      "Return on Assets",
      "Interest Coverage Ratio",
      "Net Present Value",
      "Internal Rate of Return"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_17",
    weekId: 7,
    hint: "hint_w7_interest_rates",
    question: "Which of the following factors does NOT directly influence the interest rate a company must pay when borrowing money?",
    options: [
      "The risk profile of the company, as perceived by lenders",
      "The company's ability to borrow in the money market through bonds",
      "The inflation rate of the company's home country",
      "The company's relationship with its shareholders and dividend distribution policy"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_18",
    weekId: 7,
    hint: "hint_w7_cba",
    question: "When conducting a Cost-Benefit Analysis, how are future costs and benefits accounted for?",
    options: [
      "They are ignored as they are irrelevant to today\u2019s financial decisions",
      "They are adjusted based on historical data",
      "They are discounted by the project interest rate to reflect their present value",
      "They are calculated at their future value without adjustment"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_19",
    weekId: 7,
    hint: "hint_w7_roa",
    question: "Return on Assets is calculated under which of the following metrics of interest?",
    options: [
      "Interest analysis",
      "Comparative analysis",
      "Risks of default",
      "Net Present Value"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_20",
    weekId: 7,
    hint: "hint_w7_interest_coverage",
    question: "How much Interest coverage Ratio is considered as acceptable by majority of the companies?",
    options: [
      "0.75",
      "1",
      "1.25",
      "1.5"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_21",
    weekId: 7,
    hint: "hint_w7_assets_liabilities",
    question: "Which of the following comes under Non-Current assets?",
    options: [
      "Cash and Cash Equivalents",
      "Property, plant and equipment",
      "Financial Assets",
      "Prepayments"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_22",
    weekId: 7,
    hint: "hint_w7_income_statement",
    question: "Which financial statement shows what an organization has earned through selling products and what it has spent over a specific period?",
    options: [
      "Balance Sheet",
      "Cash Flow Statement",
      "Income Statement",
      "Statement of Retained Earnings"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_23",
    weekId: 7,
    hint: "hint_w7_npv",
    question: "What does net present value (NPV) tell us?",
    options: [
      "It is the last line item on the income statement and reveals the current operating income",
      "It outlines the net value of all the assets",
      "It reveals the risk that a company will default",
      "It tell us how valuable the future cash flows are to us today"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_24",
    weekId: 7,
    hint: "hint_w7_roa",
    question: "What is included in the calculation of Return on Assets (ROA)?",
    options: [
      "Net Income divided by total liabilities",
      "Earnings before interest and taxes divided by total revenue",
      "Net Income divided by average total assets",
      "Operating revenue divided by average liabilities"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_25",
    weekId: 7,
    hint: "hint_w7_balance_sheet",
    question: "Which of the following represents the difference between total assets and total liabilities ?",
    options: [
      "Net Present Value",
      "Revenue",
      "Operating Income",
      "Equity"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_26",
    weekId: 7,
    hint: "hint_w7_balance_sheet",
    question: "Which of the following wouldn\u2019t be tracked by a Balance Sheet?",
    options: [
      "Company vehicle",
      "Taxes",
      "Number of customers",
      "Bank Loans"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_27",
    weekId: 7,
    hint: "hint_w7_income_statement",
    question: "Which of the following wouldn\u2019t be shown on a Income Statement?",
    options: [
      "Money given from sponsorship",
      "Cost of cleaning staff for office space",
      "Upcoming product features",
      "Fuel price of company vehicle"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_28",
    weekId: 7,
    hint: "hint_w7_balance_sheet",
    question: "What does a Balance Sheet primarily display?",
    options: [
      "The company\u2019s assets, liabilities, and equity at a specific point in time",
      "The cash inflows and outflows over a specific period",
      "The company\u2019s profit and loss over a specific period",
      "The detailed list of a company\u2019s expenses"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_29",
    weekId: 7,
    hint: "hint_w7_cba",
    question: "What is the primary purpose of a Financial Cost-Benefit Analysis (CBA)?",
    options: [
      "To evaluate the environmental impact of a project",
      "To determine the technical feasibility of a project",
      "To assess whether a project/business is profitable",
      "To identify potential stakeholders for a project"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_30",
    weekId: 7,
    hint: "hint_w7_npv",
    question: "In project evaluation, what does a positive NPV generally indicate?",
    options: [
      "The project will lose money",
      "The project will break even",
      "The project is expected to be profitable",
      "The project has no time value of money"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_31",
    weekId: 7,
    hint: "hint_w7_financial_analysis",
    question: "What is longitudinal analysis of a financial statement?",
    options: [
      "Comparing financial data of a company with its competitors in the same industry.",
      "Analyzing financial data of a company over several periods to identify trends and patterns.",
      "Evaluating financial data of a company for a single period to assess its performance.",
      "Examining financial data of a company to determine its market share in the industry"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_32",
    weekId: 7,
    hint: "hint_w7_irr",
    question: "What is the Internal Rate of Return (IRR) used for in business investment analysis?",
    options: [
      "To calculate the total cash flow over the lifetime of the project",
      "To identify the rate of interest that makes the Net Present Value (NPV) zero",
      "To measure the total costs of product development",
      "To assess customer acquisition costs"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_33",
    weekId: 7,
    hint: "hint_w7_financial_disclosure",
    question: "Which of the following statements about financial statements is correct?",
    options: [
      "All companies must publicly disclose financial statements",
      "Non-public companies do not need to file financial statements with regulators",
      "Public companies must disclose financial statements regularly for investors to make investment decisions",
      "The only purpose of financial statements is to show the company's income and expenses"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_34",
    weekId: 7,
    hint: "hint_w7_irr",
    question: "Under which condition would an Internal Rate of Return (IRR) be considered acceptable?",
    options: [
      "When IRR is below the bank interest rate",
      "When IRR equals the project's discount rate",
      "When IRR exceeds the investor's expected rate of return",
      "When IRR is 10%"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_35",
    weekId: 7,
    hint: "hint_w7_assets_liabilities",
    question: "Which of the following best describes a financial liability?",
    options: [
      "An expense that reduces a company\u2019s profit but does not affect its balance sheet.",
      "The cash inflows and outflows over a specific period",
      "A source of revenue that increases a company\u2019s equity.",
      "A financial obligation that a company owes to external parties."
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_36",
    weekId: 7,
    hint: "hint_w7_assets_liabilities",
    question: "Which of the following is an example of a current asset?",
    options: [
      "A factory building owned by the company",
      "Money owed to suppliers",
      "Money in the bank",
      "Patents"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_37",
    weekId: 7,
    hint: "hint_w7_interest_coverage",
    question: "A company's earnings are $3 million. It has borrowed $10 million at an interest rate of 20%. What is the interest coverage ratio?",
    options: [
      "3",
      "2.5",
      "1",
      "1.5"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_38",
    weekId: 7,
    hint: "hint_w7_income_statement",
    question: "Apple has released a document on what is has earned through selling its products and the costs incurred. What type of document is this?",
    options: [
      "Income statement",
      "Balance sheet",
      "Interest coverage ratio",
      "Return on Assets (ROA)"
    ],
    correctIndex: 0
  },
  {
    id: "q_w7_39",
    weekId: 7,
    hint: "hint_w7_balance_sheet",
    question: "The value of a company's assets is equal to:",
    options: [
      "Liability - Equity",
      "Liability + Equity",
      "Equity + Revenue",
      "Revenue - Costs"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_40",
    weekId: 7,
    hint: "hint_w7_roa",
    question: "What is not something that the Return on Assets (ROA) metric could be used to analyse?",
    options: [
      "Compare the financials of two different companies",
      "Assess a companies performance over the years",
      "How much tax can be written off from the assets",
      "The earnings of a company through its employed assets over a given period"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_41",
    weekId: 7,
    hint: "hint_w7_cba",
    question: "Consider a company like Optus starting a new internet service with 20,000 initial subscribers. If their customer acquisition cost is $250 per subscriber, how would this cost impact the company\u2019s financial analysis?",
    options: [
      "It would only affect the first year of operations.",
      "It represents a variable cost that will recur every year.",
      "It is an upfront cost included in the total initial investment",
      "It is part of the opportunity cost of the business"
    ],
    correctIndex: 2
  },
  {
    id: "q_w7_42",
    weekId: 7,
    hint: "hint_w7_roa",
    question: "If Scape increases rental rates by 5% next year, which financial metric would best assess the impact on its profitability",
    options: [
      "Net Present Value",
      "Internal Rate of Return (IRR)",
      "Cost of Capital",
      "Return on Assets (ROA)"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_43",
    weekId: 7,
    hint: "hint_w7_income_statement",
    question: "Suppose that you view an income statement of a single year, would you be able to deduct if it is a worthwhile investment?",
    options: [
      "Yes, simply look at overall profit for the year as a great indicator.",
      "No, it is critical to analyse the progress of a company's income statements over multiple years before making a decision.",
      "Yes, if the costs are low enough it should be a safe investment.",
      "No, income statements have no beneficial information for investors."
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_44",
    weekId: 7,
    hint: "hint_w7_assets_liabilities",
    question: "Which of the following would be considered a non-current asset?",
    options: [
      "Cash held in the till of a supermarket",
      "Shares held by an individual (i.e. retail) investor",
      "Shares held by a commercial investor (e.g. a hedge fund)",
      "Machinery used in a company's manufacturing plant"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_45",
    weekId: 7,
    hint: "hint_w7_financial_analysis",
    question: "Which of the following is NOT a method used to analyze financial statements?",
    options: [
      "Longitudinal analysis",
      "Comparative analysis with other organizations",
      "Risk assessment",
      "Financial forecasting"
    ],
    correctIndex: 3
  },
  {
    id: "q_w7_46",
    weekId: 7,
    hint: "hint_w7_interest_rates",
    question: "Why might a company's interest rate be higher than that of the government?",
    options: [
      "Because government bonds are always risk-free",
      "Due to the company's higher risk profile",
      "Because companies do not have to pay interest",
      "Because companies have more assets than governments"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_47",
    weekId: 7,
    hint: "hint_w7_irr",
    question: "A tech startup is evaluating two projects with similar NPVs. Which metric should they prioritize for comparison?",
    options: [
      "Total Revenue",
      "Internal Rate of Return (IRR)",
      "Gross Profit Margin",
      "Market Share"
    ],
    correctIndex: 1
  },
  {
    id: "q_w7_48",
    weekId: 7,
    hint: "hint_w7_financial_disclosure",
    question: "Why is it important for public companies to regularly disclose their financial statements?",
    options: [
      "To avoid paying taxes by hiding financial data from the public.",
      "To provide transparency and allow investors to make informed decisions about their investments.",
      "To limit their need for external audits and regulatory compliance.",
      "To reduce the number of legal obligations related to corporate governance."
    ],
    correctIndex: 1
  }
);
