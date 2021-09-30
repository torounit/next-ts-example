import Head from "next/head";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Sample</title>
      </Head>

      <main>
        <Button primary>ぼたんだよ</Button>
      </main>
    </div>
  );
}
