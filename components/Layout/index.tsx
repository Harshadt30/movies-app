import { ReactElement } from "react";
import Header from "../Header";

type Props = {
  children: ReactElement;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <main className="container">{props.children}</main>
      {/* <Footer /> */}
    </>
  );
}
