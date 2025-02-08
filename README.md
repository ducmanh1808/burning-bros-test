# burning-bros-test

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

Technical Requirements:

✅ React + TypeScript: Write clean code with strict type checking.
✅ Redux Toolkit (createSlice): Manage state in a structured and scalable way.
✅ Vite: Use for project setup and performance optimization.
✅ Axios (with JWT authentication): Create an axios.ts file to handle API calls, error management, and token handling.
✅ Custom Hooks: Implement reusable hooks, such as useLocalStorage.ts and useTable.ts.
✅ Framer Motion: Add animations to enhance UI/UX.
✅ Well-structured project architecture: Clearly separate UI, state, and business logic for better maintainability.

Task Requirements:

1️⃣ Create a main page with a simple UI:
- Display a list of data fetched from a mock API.
- Include filtering/sorting functionality (use custom hooks where applicable).
2️⃣ Manage state using Redux Toolkit:
- Store API data in the Redux store.
- Use createSlice to define reducers and actions.
3️⃣ Handle API requests
4️⃣ Use Framer Motion for animations:
5️⃣ Maintain clear and scalable code structure:
- Organize files by module (UI, state, business logic).
- Utilize custom hooks to improve reusability.

Notes:
- Candidates do not need a backend and can use a mock API (e.g., json-server or a mock API service like Mockaroo).
- The code should include proper comments to help the evaluation team understand the implementation.