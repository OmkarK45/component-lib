export default function Container({ hidden, children }) {
  return (
    <div
      className={
        hidden
          ? "hidden lg:flex w-full sm:w-5/6  bg-white dark:bg-primary-900 px-4  py-12 sm:px-6 lg:px-8"
          : "w-full sm:w-5/6 bg-white dark:bg-primary-900 px-4  py-12 sm:px-6 lg:px-8"
      }
    >
      <div>{children}</div>
    </div>
  )
}
