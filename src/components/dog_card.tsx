import DogImage from "./dog_image";
import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';


const images = [
	{
		image: dog1,
		altText: 'A handsome dog that wears a green dickie bow tie',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'prideforpaws.com',
		attributionUrl: 'https://prideforpaws.com/male-dog-names//'
	},
	{
		image: dog2,
		altText: 'Tiny Pomeranian dog',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'Judy Powell ',
		attributionUrl: 'https://thedogman.net/15-absolutely-hilarious-pomeranian-dog-pictures/'
	},
	{
		image: dog3,
		altText: 'Very silly dog but so cute',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'yummypets.com',
		attributionUrl: 'https://www.yummypets.com/mag/2014/05/05/33688/fun-pics-dog-faces'
	}
];

interface DogCardProps {
	name: string;
	species: string;
	favFoods: Array<string>;
	birthYear: number;
	dogIndex: number;
}

const DogCard : React.FC<DogCardProps> = ({ name, species, favFoods, birthYear, dogIndex }) => { 
	return (
		<div className='card'>
			<h3 className='card__text card__header'>{name}</h3>
			<p className='card__text'>Species: {species}</p>
			<p className='card__text'>Favourite Food(s): {favFoods.map((food,index) => index < favFoods.length - 1 ? `${food}, ` : `${food}`)}</p>
			<p className='card__text'>Birth Year: {birthYear}</p>
			{dogIndex < images.length && (
				<DogImage
					image={images[dogIndex].image}
					altText={images[dogIndex].altText}
					licenceType={images[dogIndex].licenceType}
					licenceUrl={images[dogIndex].licenceUrl}
					attributionName={images[dogIndex].attributionName}
					attributionUrl={images[dogIndex].attributionUrl}
				/>
			)}
		</div>
	);


};

export default DogCard;