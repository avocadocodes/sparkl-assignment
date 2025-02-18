import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/quizzes/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setQuizzes(res.data));
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-2xl">Welcome, {user?.username}</h2>
        <h3 className="text-xl mt-4">Available Quizzes</h3>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id} className="border p-2 mt-2">
              {quiz.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
