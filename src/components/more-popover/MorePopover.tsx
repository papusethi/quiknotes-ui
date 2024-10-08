import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";

interface IMorePopoverProps {
  open: boolean;
  anchorEl: Element | null;
  onClose: Function;
  onClickOption: Function;
}

const MorePopover: React.FC<IMorePopoverProps> = (props) => {
  const { open, anchorEl, onClose, onClickOption } = props;

  const moreActionOptions = [
    {
      id: "add-label",
      title: "Add label",
      Icon: <LocalOfferOutlinedIcon fontSize="small" />,
      onClick: onClickOption
    },
    {
      id: "move-to-folder",
      title: "Move to folder",
      Icon: <FolderOutlinedIcon fontSize="small" />,
      onClick: onClickOption
    },
    {
      id: "make-copy",
      title: "Make a copy",
      Icon: <ContentCopyOutlinedIcon fontSize="small" />,
      onClick: onClickOption
    },
    {
      id: "delete-note",
      title: "Delete note",
      Icon: <DeleteForeverOutlinedIcon fontSize="small" />,
      onClick: onClickOption
    }
  ];

  return (
    <Menu
      id="more-menu"
      open={open}
      anchorEl={anchorEl}
      onClose={(event: any) => {
        event?.stopPropagation();
        onClose();
      }}
      MenuListProps={{ "aria-labelledby": "more" }}
    >
      {moreActionOptions.map(({ id, title, Icon, onClick }) => (
        <MenuItem key={id} onClick={(event) => onClick(event, id)}>
          <ListItemIcon>{Icon}</ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "body2" }}>{title}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MorePopover;
