// data.js
// This file contains the main configuration for the weeks and PDFs.
// Questions and hints for each week should be added in their respective week files (e.g., week1.js, week2.js)

const quizData = {
  // Define your weeks and the corresponding PDF filenames here.
  weeks: [
    { id: 1, name: "Week 1: Models", pdf: "pdfs/1 - Models.pdf" },
    { id: 2, name: "Week 2: Networks", pdf: "pdfs/2 - Networks.pdf" },
    { id: 3, name: "Week 3: Processes and Automation", pdf: "pdfs/3 - Processes and Automation.pdf" },
    { id: 4, name: "Week 4: Supply Chain Management", pdf: "pdfs/4 - Supply Chain Management.pdf" },
    { id: 5, name: "Week 5: On Pricing", pdf: "pdfs/5 - On Pricing.pdf" },
    // Week 6 omitted
    { id: 7, name: "Week 7: On Financing", pdf: "pdfs/7 - On Financing.pdf" },
    { id: 8, name: "Week 8: Intellectual Property", pdf: "pdfs/8 - Intellectual Property.pdf" },
    { id: 9, name: "Week 9: Ethics", pdf: "pdfs/9 - Ethics.pdf" },
    { id: 10, name: "Week 10: Risk Standards and Governance", pdf: "pdfs/10 - Risk Standards and Governance.pdf" },
  ],

  // These will be populated by the individual weekX.js files
  hints: {},
  questions: []
};
