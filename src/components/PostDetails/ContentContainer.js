import React from 'react'

import Content from './Content'

export default class ContentContainer extends React.Component {
    state = {

    }

    render() {
        return (
            <Content {...this.state} />
        )
    }
}