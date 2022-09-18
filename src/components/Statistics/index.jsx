import PropTypes from 'prop-types';
import {
  Statistics as StatisticsContainer,
  Title,
  StatsList,
  Item,
  Label,
  Percentage,
} from './styles';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map((elem, i) => (
          <Item key={elem.id} bg={i}>
            <Label>{elem.label}</Label>
            <Percentage>{elem.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
