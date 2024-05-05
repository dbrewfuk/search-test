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
  const { data: tests } = useSWR("/api/getTests", fetcher);

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
