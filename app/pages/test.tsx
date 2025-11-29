export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="text-lg mb-4">This is a test page for development and testing purposes.</p>

      <div className="space-y-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Section 1</h2>
          <p>You can use this page to test components, layouts, or any other features.</p>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Section 2</h2>
          <p>Add your test content here.</p>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Section 3</h2>
          <p>This section can be used for experimentation.</p>
        </div>
      </div>
    </div>
  );
}
