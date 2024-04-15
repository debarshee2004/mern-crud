import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  // Function to handle deleting a book
  const handleDeleteBook = () => {
    // Set loading state to true
    setLoading(true);
    // Send a DELETE request to the backend API for the specified book ID
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        // If request succeeds, set loading state to false
        setLoading(false);
        // Show success message to user
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        // Navigate to the home page
        navigate("/");
      })
      .catch((error) => {
        // If request fails, set loading state to false
        setLoading(false);
        // Show error message to user
        enqueueSnackbar("Error", { variant: "error" });
        // Log the error to the console for debugging
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
