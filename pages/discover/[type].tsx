import { useRouter } from "next/router";
type Props = {};

function DiscoverByType({}: Props) {
  const router = useRouter();
  const { type } = router.query;
  if (!type) {
    return "loading....";
  }

  return <></>;
}

export default DiscoverByType;
