import React, { useState } from "react";
import "./Todo.css";
import { db } from "./firebase";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
const Todo = (props) => {
  const id = props.item.id;
  const todo = props.item.todo;
  const [open, setOpen] = useState(false);
  //   const [close, setClose] = useState(true);
  const handleDelete = () => {
    db.collection("todos").doc(props.item.id).delete();
  };
  const handleUpdate = (e, idd, newText) => {
    e.preventDefault();
    // onChange={(e) => updateTodo(todo.id, e.target.value)}
    db.collection("todos").doc(idd).update({ todo: newText });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Edit</button>
      <Modal open={open} onClose={handleClose}>
        <div>Open</div>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText key={props.index.id} primary={props.item.todo}>
            {/* <li key={props.index}>{props.item}</li> */}
          </ListItemText>
          <DeleteIcon onClick={handleDelete} />
          {/* <Button
          type="submit"
          onClick={(e) => handleUpdate(e, id, prompt("enter the text", todo))}
        >
          Update
        </Button> */}
          &nbsp; &nbsp;
          <ModeEditIcon
            type="submit"
            onClick={(e) => handleUpdate(e, id, prompt("enter the text", todo))}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Todo;
