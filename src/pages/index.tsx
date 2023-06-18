import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Locales } from "@typings/globalTypes"

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
