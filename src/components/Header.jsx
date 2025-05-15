import logo from "../../public/vite.svg";

export default function Header() {
  return (
    <header>
      <img src={logo}></img>
      <h3>
        TG Bot number {0 + 1} init in time{" "}
        {new Date().toISOString().split("T")[0]}
      </h3>
    </header>
  );
}
