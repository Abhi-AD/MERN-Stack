# Job Portal
## Overview
The Job Portal is a full-featured web application designed to connect job seekers with employers. It is built using the MEAN stack (MongoDB, Express.js, Angular, Node.js) on the backend, and uses React with Vite and Tailwind CSS on the frontend for a fast and responsive user interface.

## Features
* User Authentication: Secure login and registration for job seekers and employers.
* Job Posting and Management: Employers can create, update, and manage job listings.
* Job Search and Application: Job seekers can search for jobs using various filters and apply directly through the portal.
* Dashboard: Personalized dashboards for managing job postings and applications.
* Admin Panel: Centralized control for managing users, jobs, and site settings.
* Real-time Notifications: Stay updated with job applications and recruitment status.
* Advanced Search and Filters: Search for jobs by location, industry, job type, salary, and more.
## Technologies Used
### Frontend
* React: A JavaScript library for building user interfaces.
* Vite: A fast build tool and development server for modern web projects.
* Tailwind CSS: A utility-first CSS framework for rapid UI development.
* React Router: For client-side routing.
* Axios: For making HTTP requests to the backend API.
### Backend
* Node.js: JavaScript runtime environment.
* Express.js: Web framework for Node.js to build the backend API.
*  MongoDB: NoSQL database for storing job listings, user data, and application details.
* JWT (JSON Web Tokens): For secure user authentication.
### Installation
#### Prerequisites
* Node.js (v14.x or later)
* MongoDB (v4.x or later)
* Vite (v3.x or later)
* Git

#### Backend Setup
* Navigate to the frontend directory:

```bash
cd backend
```
* Install dependencies:
```bash 
pnpm install
```
* Create a .env file in the backend directory and add the following:
```plaintext
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
* Start the backend server:
```bash
pnpm dev 
```
#### Frontend Setup

* Navigate to the frontend directory:
```bash
cd frontend
```
#### Install dependencies:
```bash
pnpm install
```
* Start the React Vite development server:
```bash
pnpm run dev
```
* Open your browser and go to http://localhost:5173 to access the application.

### Usage
* Employer: Register or log in to post job vacancies, manage applications, and track candidates.
* Job Seeker: Register or log in to search for jobs, apply, and manage your job applications.
* Admin: Access the admin panel to manage users, jobs, and overall site content.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any feature additions, improvements, or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
