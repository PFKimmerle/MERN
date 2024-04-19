class InfoToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggled: false };
    }

    toggle = () => {
        this.setState(prevState => ({ isToggled: !prevState.isToggled }));
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.toggle },
                this.state.isToggled ? "Hide Information" : "Show Information"
            ),
            this.state.isToggled ? React.createElement(
                "p",
                null,
                "Conditional Rendering: This button toggles the visibility of this message. Clicking it triggers a state change within the React component, causing the component to re-render. The state determines whether this message is visible."
            ) : React.createElement(
                "p",
                null,
                "Click the button to learn how this works!"
            )
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(InfoToggle));
