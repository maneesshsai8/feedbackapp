import './index.css'

const ResourceList = props => {
  const {eachEmoji, happy} = props
  const {name, imageUrl} = eachEmoji
  const happyEmoji = () => {
    happy(name)
  }
  return (
    <li>
      <img src={imageUrl} alt="name" onClick={happyEmoji} />
      <p>{name}</p>
    </li>
  )
}

export default ResourceList
