import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {id, type, gender, age, weight, name, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender == "male" ? '♂' : '♀' }
            {/* PET NAME */}
            {name}
          </a>
          <div className="meta">
            <span className="date">
              {/* PET TYPE */}
              {type}
            </span>
          </div>
          <div className="description">
            <p>
              {/* Age: PET AGE */}
              {age}
            </p>
            <p>
              {/* Weight: PET WEIGHT */}
              {weight}
            </p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? 
            <button className="ui disabled button">Already adopted</button>
            :
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
