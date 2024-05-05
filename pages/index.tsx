// inside /pages/index.tsx
import useSWR from "swr";

interface Test {
  id: string;
  name: string;
  email: string;
}

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default function HomePage() {
  const { data: tests, error } = useSWR("/api/getTests", fetcher);

  if (error) return <div>Failed to load tests</div>;
  if (!tests) return <div>Loading...</div>;

  return (
    <div>
      <h1>Prisma Test</h1>
      <ul>
        {tests.map((test: Test) => (
          <li key={test.id}>
            <h2>{test.name}</h2>
            <p>{test.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
