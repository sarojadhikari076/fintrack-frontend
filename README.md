# Finance Tracker

Finance Tracker(FinTrack) is a web application built with Next.js and Typescript. It allows users to track their finances, manage daily expenses, and monitor their budgets. The app provides features such as user authentication, CRUD operations for finance data and expenses, sorting, filtering, searching, and pagination. The application is designed to be responsive and works seamlessly across various device screen sizes.

## Technologies Used

- Next.js - A React framework for building server-side rendered and statically generated applications.
- Typescript - A statically typed superset of JavaScript that provides improved tooling and code quality.
- Chakra UI - A flexible and accessible UI component library for React applications.
- Axios - A popular HTTP client library for making API requests.
- Formik - A library for building forms in React with easy state management and validation.
- Yup - A schema validation library used in conjunction with Formik for form validation.
- XLSX - A library for reading, writing, and manipulating Excel files.

## Features

- User Authentication: Users can sign up, log in, and securely authenticate themselves to access their finance tracking dashboard.
- Finance Data Management: Users can add, update, and delete finance data, including income, investments, savings, and expense budgets.
- Daily Expense Tracking: Users can record their daily expenses, including the name, price, category, and remarks for each expenditure.
- Sorting and Filtering: Users can sort and filter their finance data and expenses based on various criteria, such as date, category, and price.
- Search: Users can search for specific finance data or expenses using keywords or phrases.
- Pagination: To handle large datasets, the app provides pagination functionality to display finance data and expenses in manageable chunks.
- Responsive Design: The entire application is designed to be responsive, ensuring a seamless user experience across different screen sizes and devices.

## Deployment

The Finance Tracker app is deployed on Vercel and can be accessed at [https://fintrackapp.vercel.app](https://fintrackapp.vercel.app).

To run the application locally:

1. Clone the repository: `git clone https://github.com/your-username/finance-tracker.git`
2. Install dependencies: `cd finance-tracker` and `npm install`
3. Set up environment variables: Create a `.env` file in the root directory and add necessary environment variables (e.g., API endpoint, database credentials).
4. Start the development server: `npm run dev`
5. Open the application in your browser at `http://localhost:3000`

## Contributing

Contributions to the Finance Tracker project are welcome! If you encounter any issues or have suggestions for improvements, please create an issue in the GitHub repository.

## License

The Finance Tracker app is open source and released under the [MIT License](https://opensource.org/licenses/MIT).
