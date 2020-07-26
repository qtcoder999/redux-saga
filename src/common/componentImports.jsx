import React from "react"

import { ReactLazyPreload } from "../common/utils";

export const GitRepo = React.lazy(() =>
    import("../containers/git-repo/gitRepoContainer")
);
export const CounterContainer = React.lazy(() =>
    import("../containers/counter/counter-container")
);
export const UserList = React.lazy(() =>
    import("../containers/users/user-list")
);


export const GitRepoPreload = ReactLazyPreload(() =>
    import("../containers/git-repo/gitRepoContainer")
);
export const CounterContainerPreload = ReactLazyPreload(() =>
    import("../containers/counter/counter-container")
);
export const UserListPreload = ReactLazyPreload(() =>
    import("../containers/users/user-list")
);
