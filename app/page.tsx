import Image from "next/image";
import styles from "./page.module.css";
import { Flex, AppButton } from "./components";
import { Box } from "./components/layout/box";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Flex direction="column" p={30}>
          hi
        </Flex>

        <div style={{ backgroundColor: "white", padding: 30 }}>
          <Box>
            <AppButton size="sm">hi</AppButton>
          </Box>
        </div>
        <Box>
          <AppButton size="sm">small</AppButton>
        </Box>
        <Box>
          <AppButton size="md">medium</AppButton>
        </Box>
        <Box>
          <AppButton size="lg">large</AppButton>
        </Box>

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
