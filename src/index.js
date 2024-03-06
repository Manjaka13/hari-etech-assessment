import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/styles/index.css";
import { App } from "@/components/App";

/**
 * Entry point
 */

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
