import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <div className="bg-container">
        <h1 className="main-heading">Learn 4.0 Technologies</h1>
        <p className="paragraph">
          Get trained by alumni of IITs and top companies Like
          Amazon,Microsoft,Intel,Nvidia,Qualcomm, etc Learn directly from
          professionals Involved in Product Development.
        </p>
        <div>
          <h1 className="heading">{title}</h1>
          <p className="description">{description}</p>
          <img src={imgUrl} className="image-sizing" alt={title} />
        </div>
      </div>
    </li>
  )
}
