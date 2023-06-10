import { FC, ChangeEvent, useState, FormEvent, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./components/memoList";
import { useMemoList } from "./hooks/useMemoList";

export const App: FC = () => {
  const [text, setText] = useState<string>("");
  const { memos, addTodo, deleteTodo } = useMemoList();

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <SContainer>
      <h1>簡単メモアプリ</h1>
      <form onSubmit={onClickAdd}>
        <Input type="text" value={text} onChange={onTextChange} />
        <Input type="submit" value="追加" />
      </form>

      <MemoList memos={memos} onMemoDelete={onClickDelete}></MemoList>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 16px;
`;

const Input = styled.input`
  margin-right: 15px;
`;
