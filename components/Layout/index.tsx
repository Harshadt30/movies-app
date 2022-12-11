import { ReactElement } from "react";
import Container from "../Container";
import Header from "../Header";

type Props = {
  children: ReactElement;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
      {/* <Footer /> */}
    </>
  );
}
