import React from 'react'
import { ids } from 'webpack'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = e => {
    let url = "/api/pets"
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(data => data.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  onAdoptPet = id => {
    const foundPet = this.state.pets.find(pet => pet.id === id)
    foundPet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App