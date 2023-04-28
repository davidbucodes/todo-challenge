import styled from "styled-components";

export namespace Styles {
  export const Wrapper = styled.div``;
  export const Grid = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  `;
  export const GridItem = styled.li`
    display: inline-flex;
  `;
}
