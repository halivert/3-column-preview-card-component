import React from "react";
import "./Card.css";

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.color = props.color;
		this.title = props.title;
		this.icon = props.icon;
	}

	render() {
		return (
			<div className={`card card--is-${this.color}`}>
				<img className="icon" src={this.icon} alt={`Icon for ${this.title}`} />
				<strong className="title">{this.title}</strong>

				<p>{this.props.children}</p>

				<a href="#top" className="learn-more">Learn more</a>
			</div>
		);
	}
}

export default Card;
