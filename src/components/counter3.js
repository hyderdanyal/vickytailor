import React from 'react'
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            show: true,
            max: 5,
            min: 0
        };
    }

    IncrementItem = () => {
        this.setState(prevState => {

            if (prevState.quantity < 10) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if (prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }
    ToggleClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }

    render() {

        return (
            <div>
                <button onClick={this.DecreaseItem}>-</button>
                <input className="inputne" style={{ width: '20px' }} value={this.state.quantity} onChange={this.handleChange} />
                <button onClick={this.IncrementItem}>+</button>
            </div>
        );
    }
}
