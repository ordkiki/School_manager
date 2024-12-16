function Card(props) {
  return (
    <div className='-z-1 relative lg:w-[18vw] w-[80vw] m-2  h-[20vh] bg-white rounded-lg'>
        <div className='absolute -top-5 left-4 w-[30%] h-[60%] bg-yellow-500'></div>
        <div className='absolute top-0 right-2'>
            <h3>Eleves</h3>
            <h3>6</h3>
        </div>
        <div className='absolute bottom-2 left-2'>
            <p>Total des eleves enregistres</p>
        </div>
    </div>
  )
}

export default Card