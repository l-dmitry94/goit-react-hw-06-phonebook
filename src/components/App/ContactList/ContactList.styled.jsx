import styled from '@emotion/styled';

export const PhonebookList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #435674;
    border-radius: 10px;
    padding: 20px;
`;

export const PhonebookItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PhonebookItemButton = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 4px;
    background-color: #435674;
    border: none;
    color: #fafafa;
    cursor: pointer;
`
