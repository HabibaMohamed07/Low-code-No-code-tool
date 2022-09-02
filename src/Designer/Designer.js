
import { render } from 'react-dom'
import Example from './DnD/ex'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import { SidebarData } from './components/SidebarData';
import { Properties } from './Properties/properties';


 export default function Designer() {
	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);

	return (
		<div className="App" onClick={forceUpdate}>


			<>
			

					<Navbar />
				<DndProvider backend={HTML5Backend}>
					<Example />

				</DndProvider>
				<Properties />



			</>
		</div>
	)

} 

