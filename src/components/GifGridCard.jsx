import PropTypes from "prop-types"; 

export const GifGridCard = ({ title, url }) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
//PropTypes
GifGridCard.propTypes = {
  title: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired,
}
