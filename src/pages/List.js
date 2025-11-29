function List({ list }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">게임 목록</h2>

      {list.length === 0 ? (
        <p className="text-center">데이터가 없습니다.</p>
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
