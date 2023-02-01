// Write your code here.
const Thumbnail = props => {
  const {imagesList, onClickImg, select} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const onClickId = () => {
    onClickImg(id)
  }
  return (
    <li>
      <button type="button">
        <img
          className={select}
          onClick={onClickId}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnail
