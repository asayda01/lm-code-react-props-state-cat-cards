import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

import Cat from "./data/cat"
import catData from "./data/catData"
import CatCard from './components/cat_card';

import Dog from "./data/dog"
import dogData from "./data/dogData"
import DogCard from './components/dog_card';

import CatForm from './components/add_cat';
import DogForm from './components/add_dog';


function App(): JSX.Element {
	
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);
	//console.log("Our pretties 😻: ", cats);
	const catCount = cats.length;
	const dogCount = dogs.length;

	//console.log(catCount);

	const updateCats = (name:string,species:string, favFoods:string[],birthYear:number) => {
		setCats([...cats, {name: name,
			species: species,
			favFoods: favFoods,
			birthYear: birthYear
		}]);
	};

	const updateDogs = (name:string,species:string, favFoods:string[],birthYear:number) => {
			setDogs([...dogs, {name: name,
				species: species,
				favFoods: favFoods,
				birthYear: birthYear
		}]);
	};

	return (
		<>
			<Navbar />

			<Header catCount={catCount} dogCount ={dogCount}></Header>

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

				<div className='cards__wrapper'>{dogs.map((dog, index) => (
						<DogCard
							key={dog.id}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							dogIndex={index}
						/>
					))}
				</div>

				<div className="side-by-side"> 

				<CatForm updateCats={updateCats} />
				<DogForm updateDogs={updateDogs} />
				</div>

			</main>

			<Footer />
		</>
	);
}

export default App;
