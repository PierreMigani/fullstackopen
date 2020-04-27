import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({title}) => {
    return (
      <h1>{title}</h1>
    );
}

const Statistic = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td> 
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad, all}) => {
  const average = (good - bad) / all
  const positive = (good / all) * 100;

  if (all > 0)
  {
    return (
      <table>
        <tbody>
        <Statistic name="good" value={good} />
        <Statistic name="neutral" value={neutral} />
        <Statistic name="bad" value={bad} />
        <Statistic name="all" value={all} />
        <Statistic name="average" value={average} />
        <Statistic name="positive" value={positive + ' %'}/>

        </tbody>
      </table>
    );
  }
  return (
    <p>No feedback given</p>
  );
}

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const incGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  }

  const incBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  const incNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  return (
    <>
      <Header title="give feedback" />
      <Button name="good" handleClick={() => {incGood()}} />
      <Button name="neutral" handleClick={() => {incNeutral()}} />
      <Button name="bad" handleClick={() => {incBad()}} />
      <Header title="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)