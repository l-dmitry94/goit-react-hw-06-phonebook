import styled from '@emotion/styled';

export const Section = styled.section`
    width: 540px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Container = styled.section``;

export const PhonebookHeader = styled.h1`
    text-align: center;
`

export const ContactListHeader = PhonebookHeader.withComponent('h2')