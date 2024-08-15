const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        {props.part} {props.nExercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].part} nExercises={parts[0].exercises}/>
      <Content part={parts[1].part} nExercises={parts[1].exercises}/>
      <Content part={parts[2].part} nExercises={parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App