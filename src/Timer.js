import React from 'react';
/*class Timer extends React.Component {
    constructor() {
    super();
    this.state = {
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return ( <React.Fragment><br/>
                    <button onClick = {this.handleClick}>
                        Start Timer 
                    </button><br/><br/>
                    <Resultant new = {this.state.secondsElapsed}/> 
                </React.Fragment>);
            }
}
class Resultant extends React.Component {
    render() {
            return ( <div>
                        <h3> Seconds Elapsed: {this.props.new} </h3> 
                    </div>);
                }
}
export default Timer;*/
var count = 1;
class Timer extends React.Component {
        render() {
                React.Children.map(this.props.children, () => {
                        console.log('child', count++);
                });
                return ( <ul> 
                                {this.props.children} 
                        </ul>)
        }
};
export default Timer;