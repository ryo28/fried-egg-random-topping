export default function TopLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <div className="flex justify-center">
        <footer className="absolute bottom-2 text-amber-800">
          © 2023 Waki
        </footer>
      </div>
    </>
  );
}
