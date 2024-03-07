import React from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { NAVBAR_LIST } from "@/helpers/const";

/**
 * Navigation bar
 */

const computedNavbar = NAVBAR_LIST.map((e, key) => (
	<li className={`nav-item${key !== 0 ? " ms-3" : ""}`} key={key}>
		<a className="nav-link text-white" href={e.link} title={e.title}>
			{e.name}
		</a>
	</li>
));

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark container-fluid">
		<div className="container">
			<Logo />
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
				title="Menu"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">{computedNavbar}</ul>

				<ul className="navbar-nav ms-auto">
					<li className="nav-item">
						<a className="nav-link" href="#0">
							Support
						</a>
					</li>
					<li className="ms-3 nav-item">
						<Button className="sign-in" link>
							Sign in
						</Button>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
