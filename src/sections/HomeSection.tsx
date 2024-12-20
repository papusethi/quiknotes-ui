import { Box, Typography } from "@mui/material";
import NoteList from "../components/note-list/NoteList";
import { INote } from "../pages/Dashboard";
import { useAppSelector } from "../redux/hooks";

const HomeSection = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const userNotes = useAppSelector((state) => state.user.userNotes);

  const unarchivedNotes: INote[] = [];

  userNotes?.forEach((note) => {
    if (note.isDeleted || note.isArchived) {
      // do nothing.
    } else {
      unarchivedNotes.push(note);
    }
  });

  return (
    <Box>
      <Box>
        <Typography variant="h6">Welcome home, {currentUser?.username}!</Typography>
        <Typography variant="body2">Keep all your notes organized here!</Typography>
      </Box>
      <NoteList notes={unarchivedNotes} />
    </Box>
  );
};

export default HomeSection;
