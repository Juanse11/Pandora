import React from 'react'
import SearchBar from './SearchBar'

export default class SearchExampleStandard extends React.Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    console.log(value)
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      this.setState({
        isLoading: false
      })
    }, 300)
  }

  render() {
    return (
      <SearchBar {...this.state} handleSearchChange={this.handleSearchChange} />
    )
  }
}