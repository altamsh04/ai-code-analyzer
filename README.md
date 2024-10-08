# AI Code Analyzer

## Overview

The AI Code Analyzer is a sophisticated tool designed to assist developers in analyzing code for performance efficiency and security vulnerabilities. By leveraging advanced AI models, the tool provides insights on time and space complexity, as well as identifying potential security risks in the provided code.

<div align='center'>
   <br>
     <img src="https://github.com/user-attachments/assets/b4d377fe-4141-4851-86ac-a6f7a5846a52" alt="Image" width='800'>
     <img src="https://github.com/user-attachments/assets/fb0982bb-3043-4a3e-b69b-d0a1c930e18c" alt="Image" width='800'>
   <br>
</div>

## Features

- **AI-Powered Code Explanation**: AI simplifies complex code into easy terms.
- **Unit Test Suggestions**: Automatically generate comprehensive unit tests to validate your code.
- **Complexity Analysis**: Analyze the time and space complexity of your code to identify areas for optimization.
- **Performance Optimization**: Identify and fix performance bottlenecks.
- **Code Documentation Generation**: Auto-generate comments and documentation.
- **Security Vulnerability Detection**: Detect potential security risks.
- **Syntax Checking and Error Detection**: Spot and fix syntax errors.
- **Code Quality and Best Practices**: Improve code quality with best practices.
- **Markdown Support**: Output formatted responses using Markdown for improved readability.
- **File Upload**: Support for uploading code files for analysis.
- **Responsive Design**: A modern and responsive layout ensuring usability across various devices.

## Technologies Used

- **Frontend**: React, Vite, Shadcn, Tailwind CSS
- **AI Integration**: Gemini API from Google Generative AI
- **State Management**: React Hooks

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/altamsh04/ai-code-analyzer.git
   cd ai-code-analyzer
   ```
   
2. Create .env in project folder and add your google gemini api key:
   ```bash
   VITE_GOOGLE_API_KEY = ADD_YOUR_API_KEY_HERE
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` or running port.

## Usage

1. Input your code into the provided textarea.
2. Select the feature you wish to analyze eg. (Complexity Analysis or Security Vulnerability Detection).
3. Click the "Send Code" button to receive results.
4. Review the output for insights and recommendations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Gemini API](https://ai.google.dev/) for the AI integration.
