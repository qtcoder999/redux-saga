
import React from "react";
import { useAPI } from "../../common/customHooks";

function UserList(props) {
    const { data: users, error, isFetching } = useAPI(
        "http://jsonplaceholder.typicode.com/users"
    );

    function renderList(users) {
        return users && users.map(({ id, name }) => <li key={id}>{name}</li>);
    }

    function renderError() {
        return <>Network Error</>;
    }
    const showData = () => {
        if (!error) {
            if (isFetching) {
                return <>...Loading</>;
            } else {
                return renderList(users);
            }
        } else {
            return renderError();
        }
    };

    return (
        <>
            {showData()}
        </>
    );
}




export default UserList;
