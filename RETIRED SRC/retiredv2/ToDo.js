import React, {Component} from 'react';

// textbar is a component that takes user inputs and 
// stores them in temp (state in list)
// we'll make the value of the textbar a property so other components can access it 

// adder encodes eventlisteners
// that communicates with textbar to 
// send input to List 

// list is a component that prints out
// all the data as shown by its states 

class Lister extends Component {
    constructor() {
        super();
        this.state = { temp: '', data: [] };
    }

    cleanValue = () => {
        this.state.data.push(this.state.temp);
        const new_data = this.state.data.filter(w => w !== "");
        this.setState({ data: new_data, temp: '' }, () => {
                this.inputTitle.value = this.state.temp; 
                console.log(this.state.data);
            }
        );
    }

    render() {
        return(
            <>
                <div>
                    <input type="textbox" ref={el => this.inputTitle = el} onChange={(e) => this.setState({ temp: e.target.value })} /><button onClick={this.cleanValue}>Add Task</button>
                </div>
                <div>
                    <ul>
                        {Array.from(this.state.data).map((todo, i) => <li key={i}>{todo}</li>)}
                    </ul>
                </div>
            </>
        );
    }
}


export {
    Lister
}