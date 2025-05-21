function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8, // 바깥 여백
        padding: 8, // 안쪽 여백
        borderRadius: 8, // 모서리 둥글게
        boxShadow: "0px 0px 4px grey", // 그림자 그림
        backgroundColor: backgroundColor || "white", // 배경색 없으면 흰색
      }}
    >
      {title && <h1>{title}</h1>} {/* title 있으면 보여줌 */}
      {children} {/* 자식 요소 표시 */}
    </div>
  );
}

export default Card;
