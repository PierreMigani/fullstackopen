import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (<h1>{text}</h1>);
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const Anecdote = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p> 
      <p>has {votes} votes</p>
    </div>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

  const selectRandom = (max) => setSelected(Math.floor(Math.random() * Math.floor(max)));
  const incVotes = (index) => setVotes(votes.map((x, i) => (i === index) ? (x + 1) : x));
  const maxVotesIndex =  votes.indexOf(Math.max(...votes));

  return (
    <>
      <Header text="Anecdote of the day"/>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
      <Button text="vote" handleClick={() => incVotes(selected)} />
      <Button text="next anecdote" handleClick={() => selectRandom(props.anecdotes.length)} />
      <Header text="Anecdote with most vote"/>
      <Anecdote text={props.anecdotes[maxVotesIndex]} votes={votes[maxVotesIndex]} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
