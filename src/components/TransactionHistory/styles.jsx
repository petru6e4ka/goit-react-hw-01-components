import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  margin: 50px auto;
  border-collapse: collapse;
  border-spacing: 0px;
  min-width: 650px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px;
  overflow-x: auto;

  thead {
    background: #60b5d6;
    color: #ffffff;

    th {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
      vertical-align: inherit;
      border: 1px solid rgb(224, 224, 224);
      text-align: center;
      text-transform: uppercase;
      padding: 10px;
    }
  }

  tr {
    vertical-align: middle;
    outline: 0px;
  }

  td {
    font-size: 0.875rem;
    line-height: 1.5rem;
    vertical-align: inherit;
    border-right: 1px solid rgb(224, 224, 224);
    border-left: 1px solid rgb(224, 224, 224);
    text-align: center;
    padding: 10px;
  }

  tbody {
    tr:nth-child(even) {
      background: #f5f6fa;
    }

    td {
      color: #888888;
      text-transform: capitalize;
    }
  }
`;
