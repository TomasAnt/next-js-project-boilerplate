import Head from "next/head"
import { Inter } from "next/font/google"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextPage } from "next"
import { Locales } from "@typings/globalTypes"

const inter = Inter({ subsets: ["latin"] })

const Home: NextPage = () => (
  <>
    <Head>
      <title>Boilerplate Page</title>
      <meta name="description" content="Boilerplate" />
    </Head>
  </>
)

export default Home

export async function getStaticProps({ locale }: { locale: Locales }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
