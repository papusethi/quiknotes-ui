import { Box, Typography } from "@mui/material";
import NoteList from "../components/note-list/NoteList";
import { INote } from "../pages/Dashboard";
import { useAppSelector } from "../redux/hooks";

const ReminderSection = () => {
  const userNotes = useAppSelector((state) => state.user.userNotes);

  const unarchivedNotes: INote[] = [];
  const archivedNotes: INote[] = [];
  const upcomingReminderNotes: INote[] = [];
  const trashedNotes: INote[] = [];

  userNotes?.forEach((note) => {
    if (note.isDeleted) {
      trashedNotes.push(note);
    } else {
      if (note.isArchived) {
        archivedNotes.push(note);
      } else {
        unarchivedNotes.push(note);
      }

      if (note.dueDateTime) {
        upcomingReminderNotes.push(note);
      }
    }
  });

  return (
    <Box>
      <Box>
        <Typography variant="h6">Reminders</Typography>
        <Typography variant="body2">Notes with upcoming reminders appear here!</Typography>
      </Box>
      <NoteList notes={upcomingReminderNotes} />
    </Box>
  );
};

export default ReminderSection;
