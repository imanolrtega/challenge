export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="
      h-full
      px-6 py-20
      "
    >
      {children}
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="home_center"></div>
        </div>
      </section>
    </main>
  )
}