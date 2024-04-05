import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Welcome to Kyguney Blog</h1>
      <p className="mb-8 text-lg">Read interesting articles and insights.</p>
      <Link
        href="/blog/my-first-post"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Read My First Post
      </Link>
    </>
  );
};

export default Home;
