function Character({ house, fullname, image }) {
  return (
    <div className='character-cell'>
      <h1>{house}</h1>
      <p>{fullname}</p>
      <img className='img-chara' src={image} />
      <button>ok</button>
    </div>
  );
}

export default Character;
