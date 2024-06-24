# Task Tracker Application

## Overview
The Task Tracker application is a task management tool built with Angular 14 and Angular Material. It allows users to create, update, delete, and filter tasks based on various criteria. The application utilizes several Angular modules and components to provide a responsive and user-friendly interface.

## Technologies and Libraries Used
- **Angular 14**: The core framework used for building the application.
- **Angular Material**: A UI component library used to create a modern and responsive user interface.
- **Angular Forms**: For handling user input through forms.
- **Angular Animations**: For providing animations in the application.
- **Custom Components**: Several custom components to handle specific functionalities.

## Application Structure

### Modules
The application consists of the following main modules:
- **BrowserModule**: Required for running the application in a browser.
- **AppRoutingModule**: Handles routing within the application.
- **BrowserAnimationsModule**: Enables animations in the application.
- **FormsModule**: Provides support for template-driven forms.
- **Angular Material Modules**: Various modules from Angular Material for UI components.

### Components
The application includes the following custom components:
- **AppComponent**: The root component of the application.
- **TaskListComponent**: Displays the list of tasks.
- **AddTaskComponent**: Form for adding new tasks.
- **ConfirmDialogComponent**: Dialog for confirming actions.
- **FilterComponent**: Provides filtering options for tasks.
- **EditTaskComponent**: Form for editing existing tasks.
- **ConfirmCancelEditDialogComponent**: Dialog for confirming cancel edit actions.

### Services
The core service managing the tasks is **TaskService**. It provides methods to:
- Get the list of tasks.
- Add a new task.
- Mark a task as done.
- Revert a task to not done.
- Update an existing task.
- Remove a task.
- Sort tasks by description or priority.
- Apply filters to tasks.
