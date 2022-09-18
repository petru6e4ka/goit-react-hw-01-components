import styled from 'styled-components';

export const FriendList = styled.ul`
  min-width: 200px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px 5px;
  background: #fff;
  box-shadow: 0 0px 5px 0 rgb(20 47 65 / 26%);
`;

export const Avatar = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  margin-left: 10px;
  padding: 5px;
  font-weight: 500;
`;

export const Status = styled.span.attrs(props => ({
  background: props.isOnline ? '#0ACF83' : '#FF7262',
}))`
  display: inline-block;
  margin: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.background};
`;
