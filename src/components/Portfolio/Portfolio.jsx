import { Component } from 'react';
import { ProjectList } from '../ProjectList';
import { Toolbar } from '../Toolbar';

export class Portfolio extends Component {
	
	constructor(props) {
		super(props);
		this.state = {selected: 'All'};
		this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
	}
	
	
	render() {
		const {projects} = this.props
		return (
            <>
            <Toolbar
                filters={this.filters}
                selected={this.state.selected}
                onSelectFilter={(filter) => this.setState({selected: filter})}
                >
			</Toolbar>
            <ProjectList projects={this.state.selected === 'All' ? projects.projects : projects.projects.filter(elem => elem.category === this.state.selected)} />
            </>
			);
	}
}