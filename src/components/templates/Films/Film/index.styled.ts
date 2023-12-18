import styled from 'styled-components';

export const Row = styled.div`
    display:grid;
    grid-template-columns: 1fr 15fr 5fr 1fr 1fr 2fr;
    align-items: center;

    height: 60pt;
    border: 1px solid black;
    padding: 3pt 20pt;
    color: LAVENDER;

    &:hover {
        background-color:rgba(20,20,100,0.3);
        cursor: pointer;
    }
`;

export const Name = styled.div`
`;

export const Addr = styled.div`
`;

export const Points = styled.div`
`;

export const Cell = styled.div`
`;

export const ImgCell = styled.div`
    display: grid;
    justify-items: center;
`;

export const CommentButton = styled.button`
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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 500px;
    height: 300px;
    color: black;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: black;
`;

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const CommentLabel = styled.label`
    font-size: 30px;
    margin-bottom: 60px;
`;

export const CommentInput = styled.textarea`
    height: 100%;
    resize: none;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    width: 100%;
`;

export const SubmitButton = styled.button`
    background-color: #222;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`;