import React, { useEffect } from "react";
import { connect } from 'react-redux'

import * as Actions from './actions'


function FetchRepo({ repos, fetchUsers, isFetching, isError, ...props }) {

    useEffect(() => {
        fetchUsers();
    }, []);

    return (<>
        <h1>Git Repos</h1>
        {isError ? <>Network Error</> : isFetching ? <>...Loading</> : (<ul>
            {repos && repos.map((repo) => (<li key={repo.id}>{repo.login}</li>))}
        </ul>)}
    </>)
}


const mapStateToProps = ({ repo: { repos, isFetching, isError } }) => {
    return { repos, isFetching, isError }

}


export default connect(mapStateToProps, Actions)(FetchRepo)