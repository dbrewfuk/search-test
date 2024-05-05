import useSWR from "swr";
import axios from "axios"; // Import Axios

interface Test {
  title: string;
  id: string;
  name: string;
  email: string;
}

async function fetcher(url: string) {
  const res = await axios.get(url); // Use Axios instead of fetch
  return res.data;
}

export default function HomePage() {
  const { data: tests, error } = useSWR("/api/getTests", fetcher);

  if (error)
    return (
      <div>
        <h1>Prisma Test</h1>
        <div>Failed to load tests: {error.message}</div>{" "}
        {/* Display error message */}
      </div>
    );
  if (!tests) return <div>Loading...</div>;

  return (
    <div>
      <h1>Prisma Test</h1>
      <ul>
        {tests.map((test: Test) => (
          <li key={test.id}>
            <p>{test.title}</p>
            <p>{test.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
