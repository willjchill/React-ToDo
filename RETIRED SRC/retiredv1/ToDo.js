import Render, {Component} from 'react';

// Input Component
// using eventhandler to see updated value on change
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: [],
            value: ""
        };

        this.updateTemp = this.updateTemp.bind(this);
        this.printTemp = this.printTemp.bind(this);
    }

    updateTemp(e) {
        this.setState({value: e.target.value});
    }

    printTemp() {
        this.setState((state) => {
            state.store.push(state.value);
            state.value = "";
            this.inputTitle.value = "";
        });
    }

    render() {
        // ref allows me to refer to input as 'inputTitle' in other functions
        return(
            <>
                <div id="input-container">
                  <input ref={(el) => this.inputTitle = el} value={this.state.value} type="textbox" onChange={this.updateTemp}/>
                  <button onClick={this.printTemp}>Add Task</button>
                </div>
                <div>
                    <ul>
                        {this.state.store.map((task) => <li key={task}>{task}</li>)}
                    </ul>
                </div>

            </>
        );
    }
}

// List Component

var List = () => { 
    return(
        <div>
            <ul>
                <li>PLACEHOLDER</li>
            </ul>
        </div>
    );
}

export {
    List, Input
};
