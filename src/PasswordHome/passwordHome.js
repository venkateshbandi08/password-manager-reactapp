import {Component} from 'react'
import './passwordHome.css'
import {v4 as uuidv4} from 'uuid'
import PasswordComponent from '../PasswordComponent/passwordComponent'

const logoBgColors = [
  '#0ea5e9',
  '#b91c1c',
  '#14b8a6',
  '#10b981',
  '#f59e0b',
  '#7683cb',
  '#b6c3ca',
  '#9ba9eb',
]

const initialPasswordsList = [
  //   {
  //     id: uuidv4(),
  //     websiteName: 'youtube.com',
  //     userName: 'virat kohli ms dhone',
  //     password: 'passwordYoutube',
  //     passwordType: 'password',
  //     logoIndex: logoBgColors[0],
  //   },
  //   {
  //     id: uuidv4(),
  //     websiteName: 'google.com',
  //     userName: 'venkatesh',
  //     password: 'passwordGoogle',
  //     passwordType: 'password',
  //     logoIndex: logoBgColors[2],
  //   },
]

class PasswordHome extends Component {
  state = {
    passwordsList: initialPasswordsList,
    passwordSearch: '',
    showPassword: false,
    websiteName: '',
    userName: '',
    password: '',
  }

  getLogoIndex = () => {
    const logoBgRandom = Math.ceil(Math.random() * logoBgColors.length)
    const selectedBgColor = logoBgColors[logoBgRandom]
    return selectedBgColor
  }

  onAddNewPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    if (websiteName.length === 0) {
      alert('enter website name')
    } else if (userName.length === 0) {
      alert('enter user name')
    } else if (password.length === 0) {
      alert('enter password')
    } else {
      const newPassword = {
        id: uuidv4(),
        websiteName,
        userName,
        password,
        passwordType: 'password',
        logoIndex: this.getLogoIndex(),
      }
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        websiteName: '',
        userName: '',
        password: '',
      }))
    }
  }

  onChangeWebsiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSearchPassword = event => {
    this.setState({
      passwordSearch: event.target.value,
    })
  }

  onChangeCheckbox = () => {
    const {showPassword} = this.state
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
      passwordsList: prevState.passwordsList.map(eachPassword => ({
        ...eachPassword,
        passwordType: !showPassword ? 'text' : 'password',
      })),
    }))
  }

  onDeletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    }))
  }

  render() {
    const {
      passwordsList,
      userName,
      websiteName,
      password,
      passwordSearch,
    } = this.state
    const passwordCount = passwordsList.length
    const searchedPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.websiteName.includes(passwordSearch),
    )

    return (
      <div className="password-manager-app">
        <div className="content-container">
          <div className="app-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="top-section">
            <div className="add-password-form-container">
              <form className="form-container" onSubmit={this.onAddNewPassword}>
                <h1 className="add-new-password-text"> Add New Password </h1>
                <div className="form-element-input-container">
                  <div className="form-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="form-element-icon"
                    />
                  </div>
                  <div className="enter-form-input-container">
                    <input
                      type="text"
                      className="enter-element-text-input-box"
                      placeholder="Enter Website"
                      onChange={this.onChangeWebsiteName}
                      value={websiteName}
                    />
                  </div>
                </div>
                <div className="form-element-input-container">
                  <div className="form-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                      alt="username"
                      className="form-element-icon"
                    />
                  </div>
                  <div className="enter-form-input-container">
                    <input
                      type="text"
                      className="enter-element-text-input-box"
                      placeholder="Enter Username"
                      onChange={this.onChangeUsername}
                      value={userName}
                    />
                  </div>
                </div>
                <div className="form-element-input-container">
                  <div className="form-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="form-element-icon"
                    />
                  </div>
                  <div className="enter-form-input-container">
                    <input
                      type="password"
                      className="enter-element-text-input-box"
                      placeholder="Enter Password"
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </div>
                </div>
                <div className="add-button-container">
                  <button className="add-button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
          <div className="bottom-section">
            <div className="password-count-and-search-container">
              <h1 className="your-passwords-text">
                Your Passwords
                <span className="pasword-count"> {passwordsList.length} </span>
              </h1>
              <div className="password-search-container">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-element-icon"
                  />
                </div>
                <div className="password-search-input-container">
                  <input
                    type="search"
                    className="password-search-text-input-box"
                    placeholder="Search"
                    onChange={this.onSearchPassword}
                  />
                </div>
              </div>
            </div>
            <hr size="1px" color="#94a3b8" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkboxShowPassword"
                className="checkbox-box"
                onChange={this.onChangeCheckbox}
              />
              <label htmlFor="checkboxShowPassword" className="label-element">
                Show Passwords
              </label>
            </div>
            {passwordsList.length === 0 ||
            searchedPasswordsList.length === 0 ? (
              <div className="no-passwords-to-show-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p> No passwords </p>
              </div>
            ) : (
              <ul className="passwords-list-container">
                {searchedPasswordsList.map(eachPassword => (
                  <PasswordComponent
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    onDeletePassword={this.onDeletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordHome
