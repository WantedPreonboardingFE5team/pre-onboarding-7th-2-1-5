import { useNavigate } from 'react-router-dom';
import { useCar, useLoding } from '../../context/CarContext';
import comma from '../../utils/comma';
import conversionSegment from '../../utils/conversionSegment';
import conversionFuelType from '../../utils/conversionFuelType';
import CardItem from './CardItem';
import Loding from '../Loding';

const CardList = () => {
  const navigate = useNavigate();
  const isLoding = useLoding();
  const CardList = useCar();

  console.log('isLoding', isLoding);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return isLoding ? (
    <Loding />
  ) : (
    CardList &&
      CardList.map((car) => {
        return (
          <ul className="cardList" key={car.id} onClick={() => handleClick(car.id)}>
            <CardItem
              brand={car.attribute.brand}
              name={car.attribute.name}
              segment={conversionSegment(car.attribute.segment)}
              imageUrl={car.attribute.imageUrl}
              fuelType={conversionFuelType(car.attribute.fuelType)}
              amount={comma(car.amount)}
            />
          </ul>
        );
      })
  );
};

export default CardList;
