import './index.css'

const WordItem = props => {
  const {wordDetails} = props
  const {name, lengthOfWord} = wordDetails
  return (
    <li className="word-list">
      <p>
        {name}: {lengthOfWord}
      </p>
    </li>
  )
}

export default WordItem
