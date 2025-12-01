# Mining GATE Navigator

Mining GATE Navigator is a comprehensive web application designed to assist students preparing for the GATE (Graduate Aptitude Test in Engineering) exam in Mining Engineering. It provides a centralized hub for study materials, AI-powered assistance, and important exam information, all within a clean, modern, and user-friendly interface.

## Core Features

-   **AI-Powered Question Answering**: An intelligent chatbot powered by Google's Gemini model. Users can ask complex questions related to mining engineering and receive detailed, formatted answers. The chatbot also supports **image uploads**, allowing users to ask questions about diagrams, rock formations, or machinery for visual context.
-   **Resource Search**: A powerful search bar that allows users to instantly filter through all available resources on the page, including the syllabus, notes, and previous years' questions.
-   **Syllabus Overview**: A collapsible and easy-to-navigate presentation of the complete GATE Mining Engineering syllabus, allowing students to quickly reference topics and sub-topics.
-   **Solved PYQs (Previous Years' Questions)**: A curated list of solved PYQs with direct links to YouTube video solutions, organized by year for easy access.
-   **Formula Cheat Sheet**: A downloadable PDF containing all the important formulas required for the exam, acting as a quick reference guide for students.
-   **Subject-wise Weightage**: A clear and concise table showing the approximate weightage of different subjects in the GATE exam, helping students prioritize their study plan.
-   **Feedback Mechanism**: A dedicated section with a link to a feedback form, allowing users to contribute suggestions, report issues, or share new resources to help improve the platform.

## Tech Stack

This application is built with a modern, production-ready tech stack:

-   **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) (an open-source AI framework) with Google's [Gemini](https://gemini.google.com/) model.
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Deployment**: Firebase App Hosting

## Getting Started

This project is set up to run in Firebase Studio.

1.  To start the development server, run the `dev` script:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to the provided local URL to see the application in action.

The application uses Server Components and Server Actions for performance and a seamless user experience. Any changes you make to the code will be hot-reloaded in the browser.
