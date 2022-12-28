import PropTypes from 'prop-types'

function Header({ bgColor, txtColor }) {
  const headStyles = {
    color: txtColor, 
    backgroundColor: bgColor,
  }
  return (
    <header style={headStyles}>
        <div className="container">
            <h2>Feedback UI</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
  bgColor: 'rgba(0,0,0,0.4)',
  txtColor: '#ff6a95',
}
Header.propTypes = {
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
}

export default Header