import React from 'react'
import { withRouter } from 'react-router-dom'

import SearchForm from './SearchForm'

class SearchFormContainer extends React.Component {
    state = {
        barrio: '',
        deporte: '',
        fecha: undefined
    }

    onChange = e => {
        const field = e.target.name
        const value = e.target.value
        this.setState(() => ({ [field] : value }))
    }

    onSubmit = e => {
        e.preventDefault()
        
    }

    render() {
        return <SearchForm onChange ={this.onChange} onSubmit={this.onSubmit} />
    }
}

export default withRouter(SearchFormContainer)