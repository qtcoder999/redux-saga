import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import Counter from '../../components/counter/counter'

function CounterContainer(props) {
    return (
        <Counter {...props} />
    )
}

const mapStateToProps = ({ count: { counter } }) => {
    return { counter }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)