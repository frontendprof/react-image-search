# React Image Search App

- npx create-react-app app-name
- npx install axios, http client for api request

### Initial Setup

1. Removing unnecessary files
2. Cleanup

### Components

1.  SearchBar component
2.  ImageList component
3.  ImageCard component

### SearchBar Component

1. Form element, input element
2. Handling form submittal
3. Solving context issues
4. Invoking callback in children

### Data Loading

1. Fetching data with 3-rd party http client axios
2. Setting state after async requests
3. Binding callbacks
4. Refactoring and creating the instance of axios clent with some default properties

### ImageList component

1. Rendering all queried search results
2. We apply map array method on fetched results
3. For each fetched result render ImageCard component

### ImageList css

1. Implementing grid css

### ImageCard component

1. Rendering every image inidividually
2. Creating react ref and passing it to img element as props
3. on componentDidMount accessing each image clientHeight via callback
