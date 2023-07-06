function Card({ children, reverse }) {
  // Conditional Class
  return (
  <div  className={`card ${reverse && "card reverse"}`}>
    {children}
</div>
);
  // Conditional Style
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? "black" : "white",
  //         color: reverse ? "white" : "black",
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
}

export default Card
