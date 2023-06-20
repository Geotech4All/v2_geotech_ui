"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import UndoRedoPlugin from "./tools/UndoRedoPlugin";
import TextSemanticPlugin from "./tools/textSemanticPlugin/TextSemanticPlugin";

export default function LexicalToolBarPlugin() {
  return (
    <Box
      className="p-1 flex items-center"
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <UndoRedoPlugin />
        <TextSemanticPlugin />
      </Stack>
    </Box>
  );
}
