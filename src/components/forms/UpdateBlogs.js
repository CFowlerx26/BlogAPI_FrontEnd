import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBlogs = (props) => {
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/update/${"id"}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:2000/update/${id}`, blogs, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => history.push("/home"));
  };
  return (
    <div>
      {blogs && (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="created_by">
            Created By
          </label>
          <input
            className="form-control"
            type="text"
            id="created_by"
            name="created_by"
            value={blogs.created_by}
            onChange={(e) =>
              setBlogs({ ...blogs, [e.target.id]: e.target.value })
            }
          />

          <label className="form-label" htmlFor="blogs_title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="blogs_title"
            name="blogs_title"
            value={blogs.blogs_title}
            onChange={(e) =>
              setBlogs({ ...blogs, [e.target.id]: e.target.value })
            }
          />

          <div className="mb-3">
            <label className="form-label" htmlFor="blogs_content">
              Content
            </label>
            <input
              className="form-control"
              type="text"
              id="blogs_content"
              name="blogs_content"
              value={blogs.blogs_content}
              onChange={(e) =>
                setBlogs({ ...blogs, [e.target.id]: e.target.value })
              }
            />
          </div>

          <input
            type="submit"
            className="btn btn-success"
            value="Update Blog"
          />
        </form>
      )}
    </div>
  );
};
export default UpdateBlogs;
