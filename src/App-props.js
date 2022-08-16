import './App.css'

// const Child = props => {
//   console.log('props in child => ', props)
//   return (
//     <h3>
//       Child 1: {props.name} - age {props.age} - pet {props.pet}
//     </h3>
//   )
// }

const Child = ({ name, age, pet }) => {
  console.log('props in child => ', name, age, pet)
  return (
    <>
      <h3>Child 1:</h3>
      <p>{age ? age : 'not aged'}</p>
      <p>{pet ? pet : 'no pet😞'}</p>
    </>
  )
}

function App() {
  // const annaleesPets = ['Cielo', 'Conchita', 'Mika', 'Taffy']

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Parent</h2>
        <Child name='Mia' age='14' pet='Luna' />
        <Child name='Annalee' />
      </header>
    </div>
  )
}

export default App
