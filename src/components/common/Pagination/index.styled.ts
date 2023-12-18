import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex; 
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
`;
export const Item = styled.button`
    background-color: ${(props) => (props.active ? '#3498db' : '#ffffff')};
    color: ${(props) => (props.active ? '#ffffff' : '#333333')};
    padding: 10px 20px;
    border: 1px solid #3498db;
    border-radius: 60px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
    background-color: #2980b9;
    color: #ffffff;
    }

    &:focus {
    outline: none;
    }
`;

export const ActiveItem = styled(Item)`
  color: white;
  background-color: #1E90FF;
`;