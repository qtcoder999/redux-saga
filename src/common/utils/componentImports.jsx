import React from "react";

import { ReactLazyPreload } from "./utils";

export const GitRepo = React.lazy(() =>
  import("../../containers/git-repo/gitRepoContainer")
);
export const CounterContainer = React.lazy(() =>
  import("../../containers/counter/counter-container")
);
export const UserList = React.lazy(() =>
  import("../../containers/users/user-list")
);
export const CRAReleases = React.lazy(() =>
  import("../../containers/cra-releases/cra-releases-container")
);

export const VirtualDomTimer = ReactLazyPreload(() =>
  import("../../components/virtual-dom-timer/VirtualDomTimer")
);

export const GitRepoPreload = ReactLazyPreload(() =>
  import("../../containers/git-repo/gitRepoContainer")
);
export const CounterContainerPreload = ReactLazyPreload(() =>
  import("../../containers/counter/counter-container")
);
export const UserListPreload = ReactLazyPreload(() =>
  import("../../containers/users/user-list")
);
export const CRAReleasesPreload = ReactLazyPreload(() =>
  import("../../containers/cra-releases/cra-releases-container")
);
