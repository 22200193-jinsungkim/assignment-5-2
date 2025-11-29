import { useState, useEffect } from "react";

function List() {
  const [list, setList] = useState([]);

  const getGame = () => {
    fetch("http://localhost:3000/GAME")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error("데이터 로딩 오류:", err));
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">게임 목록</h2>

      {list.length === 0 ? (
        <p className="text-center">데이터를 불러오는 중...</p>
      ) : (
        <ul className="list-group">
          {list.map((item) => (
            <li key={item.id} className="list-group-item">
              <strong>{item.name}</strong>  
              <br />
              Publisher: {item.publisher}
              <br />
              Share: {item.share}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
