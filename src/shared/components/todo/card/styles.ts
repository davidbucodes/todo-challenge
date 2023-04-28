import styled from "styled-components";

export namespace Styles {
  export const Wrapper = styled.div<{ isCompleted: boolean }>`
    width: 250px;
    text-align: center;
    border: 1px solid black;
    background-color: ${({ theme, isCompleted }) =>
      isCompleted
        ? theme.colors.background.green
        : theme.colors.background.crimson};
  `;
  export const Id = styled.div`
    padding: 20px 0;
  `;
  export const Title = styled.div`
    padding-bottom: 40px;
  `;
}
