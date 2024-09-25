import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import CommentInput from "./CommentInput";
const PostCard = () => {
  return (
    <section className="columns-auto border-b-[1px] border-[#f5f5f5] py-2">
      <PostHeader
        profileImage="https://picsum.photos/50"
        username="southern_circle"
      />
      <PostImage imageUrl="https://picsum.photos/400" />
      <PostActions />
      <CommentInput />
    </section>
  );
};

export default PostCard;
