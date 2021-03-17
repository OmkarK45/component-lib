export default function SectionHeader({ title, description }) {
  return (
    <div className="pb-5 border-b border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
        {title}
      </h1>
      <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
        {description}
      </p>
    </div>
  )
}
