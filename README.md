# School Records App

## Overview
This application serves as a management system for recording and retrieving teacher and student details. It allows users to add new records through a user-friendly interface and stores this information in local storage. The app includes separate pages for teachers and students, and provides an overview page that displays the total count of all records.

## Features
- **Add Teacher**: This feature allows users to add teacher details via a modal form.
- **Add Student**: Similar to the Add Teacher feature, users can add student details via a modal form.
- **Overview Page**: Displays the total number of teachers and students that have been saved.
- **Individual Details Pages**: Separate pages for viewing lists of all teachers and all students.

## Installation
To set up this project locally, follow these steps:

### Prerequisites
- Node.js installed on your system
- Git for cloning the repository

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/school-records.git
   cd school-records
2. **Install dependencies**
   ```bash
	npm install
3. **Run application**
   ```bash
	npm run dev

## P.S
The application has been redirected from the home to the dashboard page and will redirect immediately the app starts so if you'd like to disable this you'd have to delete the code from next.config.mjs