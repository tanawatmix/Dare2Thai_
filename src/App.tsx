import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import HomeUI from "./../src/views/Home_ui";
import LoginUI from "./../src/views/Login_ui";
import RegisterUI from "./../src/views/Register_ui";
import MemberUI from "./../src/views/Post_ui";
import PostDetailsUI from "./../src/views/PostDetails_ui";
import ChatUI from "./../src/views/Chat_ui";
import ProfileUI from "./../src/views/profile_ui";
// import CreatePostUI from "./../src/views/CreatePost_ui";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeUI />} />
          <Route path="/login" element={<LoginUI />} />
          <Route path="/register" element={<RegisterUI />} />
          <Route path="/member" element={<MemberUI />} />
          <Route path="/post/:postId" element={<PostDetailsUI />} />
          <Route path="/chat/:postId" element={<ChatUI />} />
          <Route path="/profile" element={<ProfileUI />} />
          {/* Redirect to home if no route matches */}
          {/* <Route path="/chat" element={<ChatUI />} /> */}
          {/* <Route path="/create" element={<CreatePostUI />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
