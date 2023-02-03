import { useState } from 'react';

const CatForm:React.FC<{updateCats:
        (name:string,species:string, favFoods:string[],birthYear:number) => void}> = 
                ({updateCats}) => {
    const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [favFoods, setFavFoods] = useState<string[]>([]);
    const [birthYear, setBirthYear] = useState<number>(Number);

	const updateHandlerCats = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
		updateCats(name,species,favFoods,birthYear);
        setName("");
        setSpecies("");
        setFavFoods([]);
        setBirthYear(Number);
	};


    return (
        <div className="form__container">
        <form onSubmit={updateHandlerCats}>
            <div className='form'>
                <h3 className="form__text" >Add a Cat</h3>
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
                    <input className="form__text"  type="submit"  value="Add a Cat" />
                 </div>
            </div>
        </form>
        </div>
	);
};

export default CatForm;