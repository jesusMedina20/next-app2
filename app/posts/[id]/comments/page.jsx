const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ children, params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
