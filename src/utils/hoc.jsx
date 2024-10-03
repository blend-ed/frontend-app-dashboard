import React from 'react'
import { useParams } from 'react-router-dom'

export function withParams(WrappedComponent) {
    const WithParamsComponent = (props) => {
        const params = useParams()
        return <WrappedComponent {...props} params={params} />
    }
    return WithParamsComponent
}
