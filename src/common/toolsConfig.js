import React from 'react';

if (process.env.NODE_ENV === "development") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {
        // trackAllPureComponents: true,
        // trackHooks: true,
        // logOnDifferentValues: true,
        // logOwnerReasons: true,
        // collapseGroups: false,
        // onlyLogs: true
    });
}