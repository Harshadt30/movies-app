import { ReactElement } from "react";
import Container from "../Container";
import Header from "../Header";
import 'swiper/css';

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
