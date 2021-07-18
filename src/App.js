import "./App.css";
import Card from "./components/Card.js";

import sedansIcon from "./img/icon-sedans.svg";
import suvsIcon from "./img/icon-suvs.svg";
import luxuryIcon from "./img/icon-luxury.svg";

function App() {
	return (
		<div className="layout">
			<main>
				<Card title="Sedans" icon={sedansIcon} color="orange">
					Choose a sedan for its affordability and excellent fuel economy. Ideal
					for cruising in the city or on your next road trip.
				</Card>
				<Card title="Suvs" icon={suvsIcon} color="cyan">
					Take an SUV for its spacious interior, power, and versatility. Perfect
					for your next family vacation and off-road adventures.
				</Card>
				<Card title="Luxury" icon={luxuryIcon} color="dark-cyan">
					Cruise in the best car brands without the bloated prices. Enjoy the
					enhanced comfort of a luxury rental and arrive in style.
				</Card>
			</main>
			<footer>
				<p>
					Challenge by&nbsp;
					<a
						rel="noopener noreferrer"
						href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					.<br /> Coded by <a href="https://halivert.dev">Halí</a>.
				</p>
			</footer>
		</div>
	);
}

export default App;
