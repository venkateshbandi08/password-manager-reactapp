import './passwordComponent.css'

const PasswordComponent = props => {
  const {passwordDetails, onDeletePassword} = props
  const {
    id,
    websiteName,
    userName,
    password,
    passwordType,
    logoIndex,
  } = passwordDetails
  const logoLetter = websiteName[0].toUpperCase()
  const onClickDeleteButton = () => {
    onDeletePassword(id)
  }

  return (
    <li className="each-password-container">
      <div
        className="profile-logo-container"
        style={{backgroundColor: logoIndex}}
      >
        <p className="logo-letter"> {logoLetter} </p>
      </div>
      <div className="password-details-container">
        <p className="website-name"> {websiteName} </p>
        <p className="user-name"> {userName} </p>
        <div className="password-saved-container">
          <input
            className="password-saved"
            type={passwordType}
            value={password}
            readOnly
          />
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordComponent
