export function Header() {
  return (
    <header className="w-full absolute top-0 left-0 -z-10">
      <picture>
        <source media="(min-width: 1024px)" srcSet="bg-cafe-lg.jpg" />
        <source media="(min-width: 640px)" srcSet="bg-cafe-sm.jpg" />
        <img
          src="./bg-cafe.jpg"
          alt="Background Coffee"
          className="w-full object-cover"
        />
      </picture>
    </header>
  );
}
