import { FC } from "react";
import styled from "styled-components";

type MemoProps = {
  text: string;
  onDelete: () => void;
};

export const Memo: FC<MemoProps> = (props: MemoProps) => {
  return (
    <MemoWrapper>
      <p>{props.text}</p>
      <MemoDeletionButton onClick={props.onDelete}>削除</MemoDeletionButton>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MemoDeletionButton = styled.button`
  margin-left: 16px;
`;
