# AI Code Analyzer

## Overview

The AI Code Analyzer is a sophisticated tool designed to assist developers in analyzing code for performance efficiency and security vulnerabilities. By leveraging advanced AI models, the tool provides insights on time and space complexity, as well as identifying potential security risks in the provided code.

## Features

- **Complexity Analysis**: Evaluate the time and space complexity of algorithms, with clear output in JSON format.
- **Security Vulnerability Detection**: Identify potential security risks in code and receive recommendations for improvements.
- **User-Friendly Interface**: An intuitive interface for users to input code and receive instant feedback.
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
