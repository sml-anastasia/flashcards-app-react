import React from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: #57b894;
`;

export default class AwesomeComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        loading: true
        };
    }

    render() {
    return (
        <div className="sweet-loading">
        <BeatLoader css={override} size={50} color={"#57b894"} loading={this.state.loading} speedMultiplier={1.5} />
        </div>
        );
    }
}