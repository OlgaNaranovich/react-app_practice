import styled from 'styled-components';

export const TodoItemLi = styled.li`
    max-width: 450px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    margin-bottom: 10px;
    position: relative;
`;

export const ButtonDeleteItem = styled.div`
    cursor: pointer;
    color: red;
    display: inline-block;
    margin-left: 10px;
    position: absolute;
    right: 10px;
`;

export const TodoItemCheck = styled.span`
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border: 1px solid green;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    color: green;

    svg {
        position: absolute;
        top: -1px;
        left: 1px;
    }
`;