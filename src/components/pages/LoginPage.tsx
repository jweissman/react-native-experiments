import React, { Component } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import MyNovant from "../../system/MyNovant";
import { NavProps } from "../../values/NavProps";

export default class LoginPage extends Component<NavProps> {
    handleLogin = async (credentials: { user: string, pass: string }) => {
        let authenticated = await MyNovant.authenticate(credentials);
        if (authenticated) {
            this.props.navigation.navigate("Welcome");
        } else {
            // add error state?
        }
        return authenticated;
    }

    render() {
        return <LoginTemplate
            onSubmit={this.handleLogin} 
        />;
    }
}