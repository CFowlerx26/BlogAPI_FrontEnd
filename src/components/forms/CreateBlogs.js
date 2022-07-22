import { useState } from "react";
import axios from "axios";

const CreateBlogs = (props) => {
  const [formData, setFormData] = useState({
    created_by: "",
    blogs_title: "",
    blogs_content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/blogs", formData, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => props.setBlogs([...props.blogs, res.data]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="created_by">
        Created By
      </label>
      <input
        className="form-control"
        type="text"
        id="created_by"
        name="created_by"
        value={formData.created_by}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
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
        value={formData.blogs_title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
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
          value={formData.blogs_content}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>

      <input type="submit" className="btn btn-success" />
    </form>
  );
};
export default CreateBlogs;
