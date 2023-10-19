import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Nav from '../components/Nav';
import HomeScreen from '../components/HomeScreen';
import MyList from '../pages/Mylist';
import PageDetail from '../components/PageDetail';
import MainCrud from '../CRUD/MainCrud';
import CreatePost from '../CRUD/api/CreatePost';
import UpdatePost from '../CRUD/api/UpdatePost';
import DeletePost from '../CRUD/api/DeletePost';
import { PostProvider } from '../CRUD/context/Context';

function App() {
	return (
		<>
			<PostProvider>
				<BrowserRouter>
					<Nav />
					<main>
						<Routes>
							<Route index element={<HomeScreen />} />
							<Route path='/pages/Mylist' element={<MyList />} />
							<Route path='/detail/:id' element={<PageDetail />} />
							<Route path='/MainCrud' element={<MainCrud />} />
							<Route path='/create' element={<CreatePost />} />
							<Route path='/update/:id' element={<UpdatePost />} />
							<Route path='/delete/:id' element={<DeletePost />} />
							<Route path='*' element={<Navigate to='/' />} />
						</Routes>
					</main>
				</BrowserRouter>
			</PostProvider>
		</>
	);
}

export default App;
