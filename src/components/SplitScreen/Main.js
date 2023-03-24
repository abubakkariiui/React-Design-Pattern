import React from 'react'
import SplitScreen from './SplitScreen'

const LeftComp = () => {
    return (
        <h1 style={{ backgroundColor: 'green' }}>Left!</h1>
    )
}
const RightComp = () => {
    return (
        <h1 style={{ backgroundColor: 'red' }}>Right!</h1>
    )
}

const Main = () => {
    return (
        <>
            <SplitScreen leftWeight={1} rightWeight={3} >
                <LeftComp />
                <RightComp />
            </SplitScreen>
        </>
    )
}

export default Main