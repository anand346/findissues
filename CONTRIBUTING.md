# FindIssues contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them

- [Node.js](https://nodejs.org/) is installed.

---

## How to Contribute 🤔

We believe in the power of collaboration, and your contributions can help make FindIssues even more amazing. Whether you\`re a developer, designer, tester, or just enthusiastic about improving FindIssues, there are several ways you can contribute:

#### 1. Code Contributions

- **Bug Fixes:** Help us squash bugs by submitting detailed bug reports or fixing them yourself and opening a pull request.

- **Feature Development:** If you have ideas for new features or improvements, let us know or dive right in and start coding.

- **Enhancements:** Help us optimize and enhance existing features to make FindIssues smoother and more user-friendly.

#### 2. Documentation

- **Improvements:** Contribute to our documentation by suggesting edits, adding missing information, or writing new guides.

#### 3. Testing

- **Quality Assurance:** Help us ensure FindIssues is robust and reliable by testing new features and reporting any issues you find.

#### 4. Spread the Word

- **Tell Others:** If you enjoy using FindIssues, spread the word to your friends and on social media. The more, the merrier!

#### Getting Started

To start contributing, follow these steps:

1. **Fork the Repository:**

   - Fork the FindIssues repository to your GitHub account.

2. **Clone the Repository**:

   ```sh
   git clone https://github.com/<your-username>/findissues.git
   ```

3. **Install Dependencies:**:

   ```sh
   cd findissues
   npm install
   ```

4. **Set Up GitHub API Token:**

   - Visit GitHub Developer Settings to generate **two** personal access tokens.
   - Create a `.env.local` file in the project root and add your token as follows:

   ```sh
   NEXT_PUBLIC_TOKEN_FIRST=first-personal-access-token
   NEXT_PUBLIC_TOKEN_SECOND=second-personal-access-token
   ```

5. **Start the Application:**

   ```sh
   npm run dev
   ```

6. **Open in Browser:**

   - Visit http://localhost:3000 in your web browser to start exploring GitHub issues.

7. **Create Branch:**

   - Create a new branch for your contribution

   ```sh
   git checkout -b <your-branch-name>
   ```

8. **Make Changes:**

   - Make your changes, whether it`s code, documentation, or testing.

9. **Stage Changes:**

   - Stage your changes

   ```sh
    git add <changed-file-name>
   ```

10. **Commit your changes:**

    ```sh
    git commit -m "Add your meaningful commit message here"
    ```

11. **Push Changes:**

    - Push your changes to your fork on GitHub

    ```sh
    git push origin <your-branch-name>
    ```

12. Open a pull request from your branch to the main FindIssues repository.

Our team will review your contribution, provide feedback, and merge it once it meets our standards.

Let's make FindIssues even better together! Your contributions are greatly appreciated. 🚀🙌
