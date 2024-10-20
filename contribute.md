
# Contributing to Epics-Project-Jobsearch

We are thrilled to have you contribute to **Epics-Project-Jobsearch**! Your support and help are much appreciated, especially during Hacktoberfest 🎉.

## Getting Started

Follow the steps below to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Fork the repository by clicking the "Fork" button on the top right of the repository page.
2. Clone your forked repository locally:

    ```bash
    git clone https://github.com/your-username/epics-project-jobsearch.git
    cd epics-project-jobsearch
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Add environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```bash
    DB_URI=Your mongoDB URL
    JWT_SECREAT=Your custom JWT secret key
    NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

    The app will now be running on `http://localhost:3000`.

### Build for Production

To run the app in production:

```bash
npm run build
npm run preview
```

### Contributing Guidelines

We follow a few guidelines to ensure a smooth collaboration:

1. **Fork and Clone:** Fork the repository and make your changes in a new branch based on the `main` branch.
2. **Commit Message Guidelines:** Make sure your commit messages are clear and descriptive. Example:

    ```bash
    git commit -m "Added feature for bookmarking jobs"
    ```

3. **Pull Requests:** Submit a pull request once your changes are tested and ready for review. Include a description of what was changed and why.
4. **Testing:** Ensure that all features are tested locally before making a PR.
5. **Code Style:** Follow the project's code style (Next.js, Tailwind CSS, Redux) and make sure to lint your code with:

    ```bash
    npm run lint
    ```

### Issues

Browse open issues on the [Issues](https://github.com/your-repo/issues) tab. If you find one you'd like to work on, comment to let us know, and we'll assign it to you. Feel free to open new issues if you discover any bugs or have suggestions for improvements.

### Feature Requests

If you have an idea for a feature or enhancement, feel free to open an issue to discuss it before working on it.

### Hacktoberfest Contributions 🎃

All contributions during **Hacktoberfest** (October) are welcome! This includes bug fixes, new features, documentation improvements, and more. Just make sure to label your pull request with the **hacktoberfest** tag.

