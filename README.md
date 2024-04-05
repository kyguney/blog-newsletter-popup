# Newsletter Signup Pop-up

## Live Demo

The project is deployed and can be accessed [here](https://blog-newsletter-popup.vercel.app/).

## Description

This project demonstrates a Next.js implementation of a scroll-triggered newsletter signup pop-up, perfect for increasing email subscriptions on your blog or website. Built with TypeScript and Tailwind CSS, it offers a responsive design, local storage persistence, and easy integration.

## Requirements

- [Node.js](https://nodejs.org/en) (Version 20.9.0)
- [Node Version Manager](https://github.com/nvm-sh/nvm) (optional)

## Features

- **Scroll-Triggered:** The pop-up appears when the user scrolls down 50% of the blog post, capturing their attention at the right moment.
- **Responsive Design:** The pop-up adapts seamlessly to different screen sizes, ensuring a user-friendly experience on all devices.
- **Local Storage Persistence:** User data and popup visibility are managed using local storage, preventing the popup from reappearing after submission or manual closure until the page is refreshed.
- **Email Validation:** Basic email validation is in place to ensure users enter a valid email address.
- **Success Message:** Upon successful form submission, a success message is displayed to provide feedback to the user.
- **Easy Integration:** The pop-up component is designed for reusability, allowing you to easily integrate it into other pages or posts as needed.
- **Clean Code and Documentation:** The code follows JavaScript coding standards and is well-documented for clarity and maintainability.
- **Tailwind CSS Styling:** The pop-up is styled using Tailwind CSS for a modern and responsive appearance.
- **Close Button:** A close button allows users to manually dismiss the pop-up.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kyguney/blog-newsletter-popup.git
   ```

2. Navigate to the project directory:

    ```bash
    cd blog-newsletter-popup
    ```

3. If using NVM, switch to the Node version specified in the project (.nvmrc file include the version):

    ```bash
    nvm use
    ```

4. Install dependencies:
    ```bash
    npm install
    ```

### Usage

To start the development server, run:

  ```bash
  npm run dev
  ```

This will start the application on http://localhost:3000.

### Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

### License

This project is licensed under the MIT License.