import { Component } from 'react';
import { Button } from '../Button';

export class Toolbar extends Component {
	
	render() {
		const { filters, selected } = this.props
		return (
			<div className='toolbar'>
				{filters.map((btn, index) => <Button 
				key={index} 
				btn={btn} 
				index={index} 
				selected={selected}
				onSelectFilter={this.props.onSelectFilter} />)}
			</div>
		);
	}
}