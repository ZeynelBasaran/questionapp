# Quiz App

This project is a simple, interactive Quiz Application built with React, using Tailwind CSS for styling. The app features a series of questions, options for answers, and tracks user responses. It also provides feedback and displays the user's score at the end of the quiz.

---

## Features

### 1. **Start Screen**

- A welcoming interface with instructions about the quiz.
- A "Start Quiz" button to begin.

### 2. **Question Screen**

- Displays the current question and multiple-choice options.
- Options are clickable and styled with hover effects.
- Unanswered questions are automatically marked as "Unanswered" after a set time.

### 3. **Answer Reveal Animation**

- Options fade in/out using smooth transitions with Tailwind's animation classes.

### 4. **Result Screen**

- Displays correct answers and the user's answers side by side.
- Shows the user's score.
- Option to restart the quiz.

### 5. **Responsive Design**

- Fully responsive for mobile, tablet, and desktop views.

---

## Technologies Used

### 1. **Frontend**

- [React](https://reactjs.org/): Component-based UI library.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.

### 2. **State Management**

- React Context API for global state management.


---

## Live Demo  
You can view the project live [here](https://questionappzzz.netlify.app/).




---

## How It Works

1. The app starts with a welcome screen.
2. Clicking the "Start Quiz" button begins the quiz.
3. Questions and options are displayed one by one.
4. Users select an answer, which is saved and evaluated.
5. If no answer is selected within 30 seconds, the question is marked as unanswered.
6. At the end, the user is shown:
   - Correct answers.
   - Their answers.
   - Total score.
7. Users can restart the quiz.

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz-app
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## File Structure

```
quiz-app/
├── public/
│   └── questions.json  # Questions and answers data
├── src/
│   ├── components/     # Reusable components
│   ├── context/        # Context for global state management
│   ├── App.js          # Main application logic
│   └── index.css       # Tailwind CSS imports
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Project documentation
```

---


## Author

- **Your Name**
- GitHub: [Zeynel Başaran](https://github.com/ZeynelBasaran)
- LinkedIn: [Zeynel Başaran](https://www.linkedin.com/in/zeynelbasaran/)

---

Happy Coding! 🎉

