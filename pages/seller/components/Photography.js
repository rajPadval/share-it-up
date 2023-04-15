import { useState, useRef, useEffect } from "react";
// import JoditEditor from "jodit-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";


const CreateBlogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, [posts]);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [category, setCategory] = useState("Technical");

  // function to create post
  const createPost = async () => {
    const data = { title, content, category, creator, linkedin };
    if (title.length < 3) {
      await toast.error("Please enter a valid title");
    } else {
      if (content.length < 100) {
        await toast.error("Content should be more than 100 words");
      } else {
        if (!category) {
          await toast.error("Please reselect the category");
        } else {
          // const res = await fetch(
          //   "http://localhost:8000/api/createblogpost",
          const res = await fetch(
            "https://adastra-backend.vercel.app/api/createblogpost",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          await res.json();
          await toast.success("Blog created sucessfully");
          await setTitle("");
          await setContent("");
          await setCategory("");
          await setLinkedin("");
          await setCreator("");
        }
      }
    }
  };
  // Function to discard post
  const discardPost = () => {
    alert("This will clear everything you wrote");
    setTitle("");
    setContent("");
    setCategory("");
    setCreator("");
    setLinkedin("");
  };

  // fuction to get post
  const getPosts = async () => {
    const res = await fetch(
      "https://adastra-backend.vercel.app/api/getblogpost"
    );
    // const res = await fetch("http://localhost:8000/api/getblogpost");
    const data = await res.json();
    await setPosts(data);
  };

  const deletePost = async (postId) => {
    // console.log(`http://localhost:8000/api/deletepost/${postId}`);
    const res = await fetch(
      `https://adastra-backend.vercel.app/api/deletepost/${postId}`,
      // `http://localhost:8000/api/deletepost/${postId}`,
      {
        method: "POST",
      }
    );
    await res.json();
    await toast.success("post removed");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
      />
      <div className="w-screen h-full flex justify-center items-center flex-col md:flex-row gap-5 ">
        <div className="w-[90vw] md:w-[60vw] m-5 flex p-3 justify-center gap-5 flex-col shadow-md ">
          <h1 className=" text-xl md:text-3xl ">
            Are you ready for this amazing Blog?
          </h1>
          <div className="flex flex-col gap-3 items-start">
            <label className="font-bold text-lg  md:text-xl">Title :</label>
            <input
              type="text"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400"
              placeholder="Enter Title Here"
              value={title}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          {/* <div className="flex flex-col gap-3 items-start ">
            <label className="font-bold text-lg  md:text-xl">Content : </label>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div> */}
          <div className="flex flex-col gap-3 items-start">
            <label className="font-bold text-lg md:text-xl">
              Category :{" "}
              <select
                name="category"
                id=""
                className="font-normal outline-none"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>Technical</option>
                <option>Non-Technical</option>
              </select>
            </label>
            {/* <input
              type="text"
              name=""
              id=""
              required
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400"
              placeholder="Enter Category Here"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            /> */}
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label className="font-bold text-lg  md:text-xl">
              Creator's Name :
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400"
              placeholder="Enter Creator's Name"
              value={creator}
              onChange={(e) => {
                setCreator(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label className="font-bold text-lg  md:text-xl">
              Creator's LinkedIn :
            </label>
            <input
              type="url"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400"
              placeholder="Creator's LinkedIn URL"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            />
          </div>
          <hr />
          <div className="flex gap-3">
            <button
              type="submit"
              className="font-bold py-2 px-5 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all rounded-md"
              onClick={createPost}
            >
              Create
            </button>
            <button
              type="submit"
              className="font-bold py-2 px-5 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all rounded-md"
              onClick={discardPost}
            >
              Discard
            </button>
          </div>
        </div>
        
          {/* Created posts listed here */}
          <div className=" w-[90vw] md:w-[20vw] h-[90vh] p-3 flex flex-col  gap-3">
          {posts.map((post, i) => {
            return (
              <div
                className="flex justify-between items-center  shadow-md rounded-md p-3 hover:scale-105 transition-all"
                key={i}
              >
                {" "}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">
                    {post.title.substring(0, 20)}...
                  </h3>
                  <div>
                    <span className=" font-mono">creator : {post.creator}</span>
                  </div>
                </div>
                <MdDelete
                  className="text-xl cursor-pointer hover:text-red-500 transition-colors hover:rotate-6"
                  post-id={post._id}
                  onClick={(e) => {
                    let postId = e.currentTarget.getAttribute("post-id");
                    deletePost(postId);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CreateBlogs;