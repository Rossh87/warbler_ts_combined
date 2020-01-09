import React, {
    FunctionComponent,
    useState,
    Fragment,
    MouseEventHandler
} from "react";
// MUI deps
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme, Menu, MenuItem, IconButton } from "@material-ui/core";
import { KeyboardArrowDown, DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);
const MessageCardMenu: FunctionComponent = (props) => {
    const classes = useStyles();

    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAnchor(e.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <Fragment>
            <IconButton size="small" onClick={handleClick}>
                <KeyboardArrowDown />
            </IconButton>

            <Menu
                id="message-card-menu"
                onClose={handleClose}
                anchorEl={anchor}
                open={Boolean(anchor)}
            >
                <MenuItem>
                    <DeleteOutline />
                    Delete
                </MenuItem>
            </Menu>
        </Fragment>
    );
};
export default MessageCardMenu;
