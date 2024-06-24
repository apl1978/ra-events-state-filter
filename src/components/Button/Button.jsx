import { Component } from 'react';

export class Button extends Component {
 	
	render() {
		const { btn, index, selected, onSelectFilter } = this.props
		let isDone = false;
	   if (btn === selected) {
			isDone = true;
		}
		
		let elemId = 0;
		return (
        <button 
            key={index}
            className={isDone ? 'done btn' : 'btn'} 
            onClick={() => onSelectFilter(btn)}
            >{btn}</button>
			);
	}
}
