import { useState } from 'react';

const DogForm:React.FC<{updateDogs:
        (name:string,species:string, favFoods:string[],birthYear:number) => void}> = 
                ({updateDogs}) => {
    const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [favFoods, setFavFoods] = useState<string[]>([]);
    const [birthYear, setBirthYear] = useState<number>(Number);

	const updateHandlerDogs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
		updateDogs(name,species,favFoods,birthYear);
        setName("");
        setSpecies("");
        setFavFoods([]);
        setBirthYear(Number);
	};


    return (
        <div className="form__container">
        <form onSubmit={updateHandlerDogs}>
            <div className='form'>
                <h3 className="form__text" >Add a Dog</h3>
                <div>
                    <label className="form__text" htmlFor='name'>Name : </label>
                    <input className="form__text__small" id="name" required value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label className="form__text" htmlFor='species'>Species : </label>
                    <input className="form__text__small" id='species'required value={species} onChange={(event) => setSpecies(event.target.value)}/>
                </div>
                <div>
                    <label className="form__text" htmlFor='favFoods'>Favourite Food : </label>
                    <input className="form__text__small" id='favFoods' required value={favFoods} onChange={(event) => setFavFoods(event.target.value.split(" "))}/>
                </div>
                <div>
                    <label className="form__text" htmlFor='birthYear'>Birth Year :</label>
                    <input className="form__text__small" id='birthYear' required type="number" value={birthYear} onChange={(event) => setBirthYear(Number(event.target.value))}/>
                </div>
                <div>
                    <input className="form__text"  type="submit"  value="Add a Dog" />
                 </div>
            </div>
        </form>
        </div>
	);
};

export default DogForm;