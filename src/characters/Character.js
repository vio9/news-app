function Character({ house, fullname, image }) {
  return (
    <div>
      <h1>{house}</h1>
      <p>{fullname}</p>
      <img src={image} />
    </div>
  );
}

export default Character;
