import TestComponent from "@/components/test/TestComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl text-white">Home Page</h1>
      <TestComponent />
    </main>
  );
}
