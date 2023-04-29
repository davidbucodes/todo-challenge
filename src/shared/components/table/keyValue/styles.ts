import styled from "styled-components";
export namespace Styles {
  export const Wrapper = styled.div``;
  export const Table = styled.div``;
  export const KeyValuePair = styled.div`
    display: flex;
    gap: 1ch;
    padding-bottom: 1ch;
  `;
  export const Key = styled.span`
    font-weight: bold;
  `;
  export const Value = styled.span`
    flex-grow: 1;
  `;
}
