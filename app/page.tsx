import { Box } from "@/components/layout/box";
import { Flex } from "@/components/layout/flex";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Next.js</div>

      <div style={{ backgroundColor: "black" }}>
        <Box>
          <div>box</div>
        </Box>

        <Flex centered={true}>
          <h1>centered</h1>
        </Flex>

        <Flex>
          <h1>padding</h1>
        </Flex>

        <div>
          <Flex mt={30}>
            <h1>centered</h1>
          </Flex>
        </div>

        <Flex>
          <h1>centered</h1>
        </Flex>

        <Flex>
          <h1>centered</h1>
        </Flex>
      </div>
    </main>
  );
}
