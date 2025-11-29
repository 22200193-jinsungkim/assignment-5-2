import { useState, useRef } from "react";

function Update() {
  const [mode, setMode] = useState("create");

  const [createState, setCreateState] = useState({
    id: "",
    name: "",
    publisher: "",
    share: ""
  });

  const [editState, setEditState] = useState({
    id: "",
    name: "",
    publisher: "",
    share: ""
  });

  const [deleteState, setDeleteState] = useState({
    id: ""
  });

  const cId = useRef();
  const cName = useRef();
  const cPublisher = useRef();
  const cShare = useRef();

  const eId = useRef();
  const eName = useRef();
  const ePublisher = useRef();
  const eShare = useRef();

  const dId = useRef();

  const createGame = () => {
    if (!createState.id) return cId.current.focus();
    if (!createState.name) return cName.current.focus();
    if (!createState.publisher) return cPublisher.current.focus();
    if (!createState.share) return cShare.current.focus();

    fetch("http://localhost:3000/GAME", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createState)
    });
  };

  const editGame = () => {
    if (!editState.id) return eId.current.focus();
    if (!editState.name) return eName.current.focus();
    if (!editState.publisher) return ePublisher.current.focus();
    if (!editState.share) return eShare.current.focus();

    fetch(`http://localhost:3000/GAME/${editState.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editState)
    });
  };

  const deleteGame = () => {
    if (!deleteState.id) return dId.current.focus();

    fetch(`http://localhost:3000/GAME/${deleteState.id}`, {
      method: "DELETE"
    });
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-primary" onClick={() => setMode("create")}>
          Create
        </button>
        <button className="btn btn-warning" onClick={() => setMode("edit")}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => setMode("delete")}>
          Delete
        </button>
      </div>

      {mode === "create" && (
        <div>
          <h3>Create</h3>
          
          <input ref={cId} className="form-control mb-2" placeholder="id"
            value={createState.id}
            onChange={(e) => setCreateState({ ...createState, id: e.target.value })}/>
          <input ref={cName} className="form-control mb-2" placeholder="name"
            value={createState.name}
            onChange={(e) => setCreateState({ ...createState, name: e.target.value })}/>
          <input ref={cPublisher} className="form-control mb-2" placeholder="publisher"
            value={createState.publisher}
            onChange={(e) => setCreateState({ ...createState, publisher: e.target.value })}/>
          <input ref={cShare} className="form-control mb-2" placeholder="share"
            value={createState.share}
            onChange={(e) => setCreateState({ ...createState, share: e.target.value })}/>

          <button className="btn btn-primary" onClick={createGame}>추가하기</button>
        </div>
      )}

      {mode === "edit" && (
        <div>
          <h3>Edit</h3>
          
          <input ref={eId} className="form-control mb-2" placeholder="id"
            value={editState.id}
            onChange={(e) => setEditState({ ...editState, id: e.target.value })}/>
          <input ref={eName} className="form-control mb-2" placeholder="name"
            value={editState.name}
            onChange={(e) => setEditState({ ...editState, name: e.target.value })}/>
          <input ref={ePublisher} className="form-control mb-2" placeholder="publisher"
            value={editState.publisher}
            onChange={(e) => setEditState({ ...editState, publisher: e.target.value })}/>
          <input ref={eShare} className="form-control mb-2" placeholder="share"
            value={editState.share}
            onChange={(e) => setEditState({ ...editState, share: e.target.value })}/>

          <button className="btn btn-success" onClick={editGame}>수정하기</button>
        </div>
      )}

      {mode === "delete" && (
        <div>
          <h3>Delete</h3>

          <input ref={dId} className="form-control mb-2" placeholder="삭제할 id"
            value={deleteState.id}
            onChange={(e) => setDeleteState({ id: e.target.value })}/>

          <button className="btn btn-danger" onClick={deleteGame}>삭제하기</button>
        </div>
      )}

    </div>
  );
}

export default Update;
