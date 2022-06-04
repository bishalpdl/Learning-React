import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,     
    }

    handleIncrement = (product) => {
        this.setState({count: this.state.count + 1})
        console.log(product)
    }

    render() { 
        return (
            <React.Fragment>
                <span className= {this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick = {() => this.handleIncrement({product: 12})} className= 'btn btn-info m-2' >Increment</button>
            </React.Fragment>
        );
    };

    getBadgeClass(){
        let btnClass = 'm-2 badge badge-'
        btnClass += (this.state.count === 0 ? 'primary' : 'warning')
        return btnClass;
    }
    formatCount(){
        let {count} = this.state
        return (count === 0 ? 'Zero' : count)
    }

}


//     <span className= {this.getBadgeClass()}>{this.Incrementor()}</span>
//     <button className= "btn btn-secondary">Increment</button>

//     getBadgeClass() {
//         let count = this.state.count;
//         let Classname = 'm-2 badge badge-';
//         Classname += (count === 0 ? 'warning' : 'primary');
//         return Classname;
//     }

//     Incrementor(){
//         const {count} = this.state 
//         return count === 0 ? 'Zero' : count;
//     }
// }
 
export default Counter;