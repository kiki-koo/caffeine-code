# Caffeine Code

#### Video Demo:[Private] 
#### Description:

**Caffeine Code** is an interactive coffee recipe and brewing assistant built using **React.js**. Designed with simplicity, functionality, and style in mind, this app allows users to select their preferred brew method and coffee type, and receive detailed brewing instructions along with a built-in timer. It was developed as my final project for CS50x, Harvard University’s introduction to computer science.

The app guides users through three stages: a welcome screen, a selection form, and a recipe display with instructions and an automated timer. The goal is to make coffee brewing more accessible, especially for beginners who are unsure about the correct ratios, timing, or methods for different types of coffee.

---

### Motivation & Purpose

As someone who enjoys both coffee and coding, I wanted to create an app that blends both passions. Coffee brewing is a ritual for many, but it often requires a clear understanding of ratios, techniques, and timing. Many people don’t know, for example, that French press and pour-over require different steep times and coffee-to-water ratios. I saw an opportunity to solve this using a dynamic, educational web application.

Furthermore, I wanted to challenge myself with React and state management, and to demonstrate front-end logic in a meaningful, real-world project that others might actually use.

---

### How It Works

Upon launching the app, users land on a **Welcome Page** that introduces the app’s purpose. From there, they can proceed to the **Selection Page**, where they choose their coffee type (e.g., Arabica, Robusta) and brewing method (e.g., French Press, Espresso). After submitting their selection, the app displays a **Recipe Page**, which includes:

- The name of the selected brew method and coffee type
- The correct ratio of water to coffee
- Step-by-step instructions for brewing
- A **brew timer** that matches the specific method’s timing requirements

The timer is customizable per recipe and ensures accurate brew timing. Each brewing method uses a different timer duration, and the longest recommended duration is used when a range is given (e.g., 4–5 minutes → 5 minutes).

---

### Project Structure and Files

The project is structured in the following way:

- **App.jsx**: The root component that manages the routing between the Welcome, Selection, and Recipe pages. It uses React state to pass data between stages.

- **WelcomePage.jsx**: A simple functional component that displays the introduction and a “Get Started” button. This page sets the tone and encourages user engagement.

- **SelectionPage.jsx**: A form with two dropdowns: one for selecting the coffee type and one for selecting the brew method. Upon submission, it passes the selected values to the App component.

- **RecipePage.jsx**: This is the most dynamic page. It imports recipe data from `recipeData.js` based on user selections and displays the recipe details. It also includes a timer section that uses the `BrewTimer` component.

- **BrewTimer.jsx**: A reusable timer component that accepts a duration (in seconds or MM:SS format), and renders Start, Pause, and Reset buttons. The timer is customized per brewing method.

- **recipeData.js**: This file contains all coffee recipe information as a structured JavaScript object. It maps combinations of coffee types and brew methods to specific instructions and recommended timing.

- **styles.css**: A global stylesheet that contains all the CSS rules for the project. It includes styling for each page, buttons, typography, layout, and timers. The project uses the [Caprasimo](https://fonts.google.com/specimen/Caprasimo) font from Google Fonts to give the UI a unique character.

- **README.md**: The file you’re reading now, documenting all aspects of the project.

---

### Design Decisions

- **Font & UI**: I used the Caprasimo font to create a cozy, coffee-themed feel. The layout is centered and minimalist to reduce distraction and focus on the content.

- **Timer Accuracy**: Some recipes had time ranges (e.g., “4–5 minutes”). I deliberately chose the longer time in each range to ensure the coffee is never under-extracted.

- **Component Reusability**: I broke the app into modular components (e.g., `BrewTimer`, `RecipePage`) so that it can be easily expanded in the future, such as adding more brew methods or features like coffee bean recommendations.

- **Data Loading**: Instead of hardcoding recipe logic in each component, I centralized all recipes in a single data file, `recipeData.js`. This makes it easier to scale and maintain the app.

- **Routing Simplicity**: Since the app doesn’t use external routing libraries (e.g., React Router), all transitions are managed using conditional rendering and React state. This made the app lightweight and easier to manage in a small codebase.

---

### Challenges

The most challenging part of this project was synchronizing recipe instructions with custom timer logic. I had to ensure that each selected method triggered the correct countdown, and that timers wouldn’t conflict when switching between recipes. I also had to write custom logic to parse durations like "3:00" or ranges like "4–5 min" into seconds to be compatible with the timer engine.

---

### Future Improvements

- Add sound notifications when the timer ends
- Include support for more coffee methods and regional styles
- Allow users to favorite or save recipes


---

### Final Thoughts

This project blends my passion for coffee and coding, applying CS50 concepts (state, components, UI logic) into a real-world tool. AI helped optimize parts of the code, but the core structure, design, and functionality were independently developed. It reflects my learning journey through CS50x and is a project I’m proud to showcase. Thank you for reviewing it!

