import { Component } from 'react';

export class ProjectList extends Component {
	
	render() {
		const {projects} = this.props
		let elemId = 0;
		return (
        <div className="project-list">
            {projects.map(elem => <img key={elemId++} src={elem.img} alt={elem.category}></img>)}
        </div>
		);
	}
}