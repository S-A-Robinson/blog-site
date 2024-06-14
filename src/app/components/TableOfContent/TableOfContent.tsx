export default function TableOfContent({ sections } : { sections: string[] }) {
  return (
    <div className="w-100 md:w-96 h-100 bg-slate-800 rounded flex flex-col p-8">
      <h1 className="text-xl underline">Table of Content</h1>
      <ul className="mt-8 space-y-2">
        {sections.map(section => (
          <li>{section}</li>
        ))}
      </ul>
    </div>
  )
}