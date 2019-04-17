var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Increment'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement')
        );
    },

    // metody cyklu zycia
    componentWillMount() {
        console.log('przed wykonaniem metody render');
    },
  
    componentDidMount() {
        console.log("po wykonaniem metody render");
    },
  
    componentWillReceiveProps() {
        console.log("gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (mounotwania)");
    },
  
    shouldComponentUpdate() {
        console.log("czy faktycznie trzeba jeszcze raz przerysować komponent?");
        return true;
    },
  
    componentDidUpadete() {
        console.log("nadpisanie DOM");
    },
  
    componentWillUnmount() {
        console.log("odpinanie zdarzeń z DOM");
    },



});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter)
)
ReactDOM.render(element, document.getElementById('app'));