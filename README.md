# WanderMorocco Travel Blog

WanderMorocco is a travel blog platform where users can share their experiences and journeys in Morocco. This project is still under development, with several exciting features in the works, including an admin dashboard, the ability to reply to comments, and Docker support.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
WanderMorocco is a community-driven blog where travelers can create accounts, write blog posts, and share their experiences traveling across Morocco. This project currently supports user authentication with both normal signup and Google authentication using Laravel Socialite.

## Features
- User authentication (normal and Google login with Laravel Socialite)
- Post creation and editing
- Like functionality for posts
- Commenting on posts
- Featured destinations section
- Responsive design using Tailwind CSS
- Image carousel for blog posts

## Technologies Used
### Frontend:
- React.js
- Vite
- Tailwind CSS
- Axios for HTTP requests
### Backend:
- Laravel (REST API)
- Laravel Sanctum (for authentication)
- Laravel Breeze (for user management)
- Laravel Socialite (for Google login)
- MySQL for database management

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/muhammed77ar/WanderMorocco-Blog.git
    ```

2. Navigate to the project folder:
    ```bash
    cd wandermorocco
    ```

3. Backend setup:
    - Navigate to the backend folder:
      ```bash
      cd api
      ```
    - Install backend dependencies:
      ```bash
      composer install
      ```
    - Create a `.env` file:
      ```bash
      cp .env.example .env
      ```
    - Set up your database credentials in the `.env` file and run the migrations:
      ```bash
      php artisan migrate
      ```
    - Start the backend server:
      ```bash
      php artisan serve
      ```

4. Frontend setup:
    - Navigate to the frontend folder:
      ```bash
      cd client
      ```
    - Install frontend dependencies:
      ```bash
      npm install
      ```
    - Start the frontend server:
      ```bash
      npm run dev
      ```

5. Open your browser and go to `http://localhost:5173` to view the project.

## Future Enhancements
- Admin dashboard to manage posts, users, and site content
- Ability to reply to comments
- Dockerization for easier deployment and environment setup
- Improved SEO for travel-related search results
- Image optimization

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have an idea for an improvement.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
