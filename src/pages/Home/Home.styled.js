import styled from 'styled-components';

export const HomeWrapper = styled.div`
    background: ${({theme}) => theme === 'light' ? 'white' : '#393939'};
    color: ${({theme}) => theme === 'light' ? '#393939' : 'white'};
`;