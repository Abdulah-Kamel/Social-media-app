import Container from "../../Components/ui/Container";
import PostCard from "../../Components/ui/Post/PostCard";

const Home = () => {
  return (
    <Container customeStyle={"max-sm:px-4 max-sm:pb-24 max-sm:pt-12 py-4 "}>
      <section className="flex flex-col justify-center items-center gap-8 md:mb-24 lg:mb-0">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </Container>
  );
};

export default Home;
