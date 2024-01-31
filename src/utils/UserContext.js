import { createContext } from "react";


// Created react context -> see how to use in header -> for class based component see in UserClass

const UserContext = createContext({
    loggedInUser: "Default User",
})

export default UserContext;