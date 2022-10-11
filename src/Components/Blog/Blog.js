import Accordion from 'react-bootstrap/Accordion';

function Blog() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                <Accordion.Body>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How does context API works?</Accordion.Header>
                <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />  <br />
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is useRef?</Accordion.Header>
                <Accordion.Body>
                    <code>const refContainer = useRef(initialValue);</code> <br />
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br /> <br />
                    The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Blog;