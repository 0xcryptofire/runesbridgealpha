import Layout from "@/components/Layout";
import MintRunes from "@/components/Runes/Mint";

export default function Mint() {
  return (
    <Layout>
      <main className={`w-full flex flex-row items-center justify-around p-5`}>
        <MintRunes />
      </main>
    </Layout>
  );
}
