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
			<section className={`card card--is-${this.color}`}>
				<img className="icon" src={this.icon} alt={`Icon for ${this.title}`} />
				<h1 className="title">{this.title}</h1>

				<p>{this.props.children}</p>

				<a href="#top" className="learn-more">Learn more</a>
			</section>
		);
	}
}

export default Card;
