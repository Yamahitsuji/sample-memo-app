import styled from "styled-components";
import { Memo } from "./memo";

type MemoListProps = {
  memos: string[];
  onMemoDelete: (i: number) => void;
};

export const MemoList = (props: MemoListProps) => {
  return (
    <ListContainer>
      <p>メモ一覧</p>
      <ul>
        {props.memos.map((memo, i) => (
          <li key={i}>
            <Memo text={memo} onDelete={() => props.onMemoDelete(i)}></Memo>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  border: 1px solid black;
  padding: 15px;
  margin: 5px;
`;
