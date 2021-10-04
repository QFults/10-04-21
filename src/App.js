import Form from './components/Form'
import Card from './components/Card'
import './App.css'

const persons = [
  {
    name: 'John Doe',
    bio: 'A short bio about John Doe.'
  },
  {
    name: 'Jane Doe',
    bio: 'A short bio about Jane Doe.'
  },
  {
    name: 'Jack Doe',
    bio: 'A short bio about Jack Doe.'
  }
]

const App = () => {
  return (
    <>
      <h1 className="heading">New App</h1>
      <button className="btn btn-primary">Click Me</button>
      <Form />
      {/* {[<span>1</span>, <span>2</span>, <button>Click Me</button>]} */}
      {/* <Card 
        name={person1.name}
        bio={person1.bio} />
      <Card 
        name={person2.name}
        bio={person2.bio} /> */}
      {
        persons.map(person => (
          <Card
            name={person.name}
            bio={person.bio} />
        ))
      }
    </>
  )
}

export default App
