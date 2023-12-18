import styled from 'styled-components';


export const Categories = styled.div`   
    height: 100%;
    border-radius: 60px;
    padding: 10px 10px;  
`;

export const Button = styled.button`
    background-color: ${(props) => (props.active ? '#3498db' : '#ffffff')};
    color: ${(props) => (props.active ? '#ffffff' : '#333333')};
    padding: 10px 20px;
    border: 1px solid #3498db;
    border-radius: 5px;
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