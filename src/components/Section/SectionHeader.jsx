export default function SectionHeader({ title, description }) {
  return (
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-4xl leading-6 font-extrabold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 max-w-4xl text-lg text-gray-500">{description}</p>
    </div>
  )
}
