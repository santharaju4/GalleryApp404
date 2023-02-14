// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const thumbnailClassName = isActive ? 'active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
