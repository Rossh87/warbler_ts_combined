import React, { FunctionComponent, useState, ReactEventHandler } from "react";
import CenterGrid from "../CenterGrid";
import TextInput from "../../TextInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import ColumnItem from "../../ColumnItem";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Typography, Box, Avatar, TextField } from "@material-ui/core";

// Local components
import CenterHeading from "./CenterHeading";
import PseudoInput from "./PseudoInput";
import UserMessages from "./UserMessages";

const CenterHome: FunctionComponent = (props) => {
    return (
        <CenterGrid>
            <CenterHeading />
            <PseudoInput />
            <UserMessages />
        </CenterGrid>
    );
};
export default CenterHome;
