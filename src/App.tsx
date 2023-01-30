import './App.css';
import { useState } from 'react'
import Cat from "./data/cat"
import catData from "./data/catData"
import CatCard from './components/cat_card';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

function App(): JSX.Element {
	
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	//console.log("Our pretties 😻: ", cats);
	const catCount = cats.length;
	//console.log(catCount);

	return (
		<>
			<Navbar />

			<Header catCount={catCount}></Header>

			<main>
				<div className='cards__wrapper'>{cats.map((cat, index) => (
						<CatCard
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}
						/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
