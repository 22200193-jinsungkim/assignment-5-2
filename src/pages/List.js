import { useState, useEffect } from "react";
import myData from "../my_data.json";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(myData.GAME);  // 🔥 이 줄이 핵심 (GAME 배열 사용)
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
