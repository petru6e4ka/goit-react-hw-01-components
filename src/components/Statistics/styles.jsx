import styled from 'styled-components';

const colors = ['#0ACF83', '#A259FF', '#FF7262', '#60b5d6', '#f36a40'];

export const Statistics = styled.section`
  background: #fff;
  border-radius: 5px;
`;

export const Title = styled.h2`
  padding: 30px 50px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #142f41;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const Label = styled.span`
  font-size: 0.8rem;
  line-height: 1.2rem;
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
`;

export const Item = styled.li.attrs(props => ({
  background: colors[props.bg % colors.length],
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  color: #fff;
  background: ${props => props.background};

  &:first-child {
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;
