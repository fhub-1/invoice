# Invoice

Invoice is a web application for managing and creating invoices. It provides a user-friendly interface to create, view, and manage invoices, making it convenient for businesses to handle their billing process.

## Features

- Create new invoices with item details, quantities, and discounts.
- View a list of existing invoices with summary information.
- Click on an invoice to view its details and make updates if needed.
- Generate printable versions of invoices for record-keeping or sharing.
- Easily navigate between different sections of the application using the intuitive UI.

## Technologies Used

- Front-end: React, Next.js, Tailwind CSS
- Database: PostgreSQL
- Prisma: ORM for database operations

## Getting Started

To get started with the Invoice application, follow the instructions below:

1. Clone the repository:

```bash

   git clone https://github.com/fhub-1/invoice.git

```


2. Install dependencies:

```bash
   
   cd invoice
   npm install

```


3. Set up the database:

   - Make sure you have PostgreSQL installed and running on your system.
   - Create a new PostgreSQL database for the Invoice application.
   - Update the database configuration in the `.env` file.

4. Run database migrations:

```bash

  npx prisma migrate dev

  ```


5. Start the development server:

```bash  

   npm run dev  

   ```


6. Open your browser and navigate to `http://localhost:3000` to access the Invoice application.

## Contributing

Contributions to the Invoice project are welcome! If you find a bug or want to suggest an improvement, please create a new issue in the GitHub repository. For code contributions, please follow the standard GitHub workflow of creating a fork, making your changes, and submitting a pull request.

When contributing, please ensure that your code adheres to the existing coding style and conventions. Write clear commit messages and provide a detailed description of the changes you've made.

## License

The Invoice application is open-source and released under the [MIT License](LICENSE).

## Acknowledgements

The Invoice application was developed as part of a coding exercise and serves as a demonstration of skills in web development and database management.


