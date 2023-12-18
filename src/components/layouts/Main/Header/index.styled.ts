import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

