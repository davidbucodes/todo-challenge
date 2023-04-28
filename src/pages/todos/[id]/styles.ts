import styled from "styled-components";

export namespace Styles {
  export const Wrapper = styled.div``;
  export const TodoDetail = styled.div`
    padding-bottom: 1ch;
  `;
  export const TodoDetailLoading = styled.div``;
  export const TodoDetailError = styled.div``;
  export const TodoDetailKeyValue = styled.div`
    display: flex;
    gap: 1ch;
  `;
  export const Key = styled.span`
    font-weight: bold;
  `;
  export const Value = styled.span`
    flex-grow: 1;
  `;
}
