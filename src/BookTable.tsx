import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Book } from "./App";

type BookTableProps = {
  books: Book[];
  setBooks: (books: Book[]) => void;
};

export default function BookTable({ books, setBooks }: BookTableProps) {
  function renderBook(book: Book) {
    return (
      <TableRow key={book.id}>
        <TableCell>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => setBooks(books.filter((b) => b.id !== book.id))}
          ></Button>
        </TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.subject}</TableCell>
      </TableRow>
    );
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>title</TableCell>
          <TableCell>subject</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{books.map(renderBook)}</TableBody>
    </Table>
  );
}
