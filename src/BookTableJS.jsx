import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function BookTable({ books, setBooks }) {
  function renderBook(book) {
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

BookTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ),
  setBooks: PropTypes.func.isRequired,
};
