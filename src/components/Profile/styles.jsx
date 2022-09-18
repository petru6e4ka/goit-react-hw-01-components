import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  background: #ffffff;
  border-radius: 5px;
  border: solid 1px #dddddd;
  box-shadow: 0 0px 2px 0 rgb(20 47 65 / 26%);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px 20px;
`;

export const Avatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  text-align: center;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;
`;

export const Tag = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: #888888;
`;

export const Location = styled(Tag)``;

export const Statistics = styled.ul`
  display: flex;
  width: 100%;
  background: #edf0f7;
  border-top: solid 1px #dddddd;

  & li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    &:first-child {
      border-right: solid 1px #dddddd;
    }

    &:last-child {
      border-left: solid 1px #dddddd;
    }
  }
`;

export const Label = styled.span`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #888888;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
