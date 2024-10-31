import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home.jsx";
import Agenda from "./views/agenda.jsx";
import Navbar from "./component/navbar.jsx";
import EditContact from "./views/edit.jsx";

import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/agenda" element={<Agenda />} />	
						<Route path="/edit/:id" element={<EditContact />} />				
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);