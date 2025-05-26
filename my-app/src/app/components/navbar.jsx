import Link from "next/link";
function Navbar() {
  return (
    <>
      <h1>this is the navabr</h1>
      <Link href="/">Home</Link>
      <Link href="/services">servies</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
export default Navbar;
