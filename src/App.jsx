import { useState } from "react";
import "./App.css";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<nav>
				<h1>Logo</h1>
				<ul className={isOpen ? "menu-open" : ""}>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Help</li>
					<li>Sign-In</li>
				</ul>
				<button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
					☰
				</button>
			</nav>
		</div>
	);
}

export default App;
