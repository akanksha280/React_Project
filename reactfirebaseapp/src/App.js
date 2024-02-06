import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const addToItem = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    // if (input.trim !== "") {
    //   setTodos([...todos, input]);
    //   setInput("");
    // }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (event.key === "Enter") {
  //     console.log(event.target);
  //     // 👇️ call submit function here
  //   }
  // };

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write a Todo📝</InputLabel>
          <Input name="input" value={input} onChange={handleChange} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          onClick={addToItem}
        >
          Add to do
        </Button>
        <ul>
          {todos.map((item, index) => {
            return <Todo item={item} index={index} />;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
