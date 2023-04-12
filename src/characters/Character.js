function Character({ house, fullname, image }) {
  return (
    <div className='character-cell'>
      <h1>{house}</h1>
      <p>{fullname}</p>
      <img className='img-chara' src={image} />
      <div>
        <button>dead ? 💀 </button>{' '}
        <button className='red-button'>Alive ? ❤️</button>
      </div>
    </div>
  );
}

export default Character;
