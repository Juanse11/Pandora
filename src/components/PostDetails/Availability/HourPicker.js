import React from 'react'
import styled from 'styled-components'
import {  } from 'semantic-ui-react';

const Box = styled.div`
    &&& {
        display: flex;
        flex-direction: column;

    }
`

const Title = styled.p`
    &&& {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #4f4b65;
    }
`

const HourPicker = () => (
    <Box>
        <Title>Selecciona las fechas para ver la disponibilidad</Title>
    </Box>
)

export default HourPicker