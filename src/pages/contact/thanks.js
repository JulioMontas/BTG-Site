import React from "react"
import Layout from "../../components/layout"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"

function Thanks() {
  return (
    <Layout>
    <GlobalHero
      title= "Thank you!"
      summary= "Your submission has been sent."
    />
    <GlobalContact />
    </Layout>
  )
}
export default Thanks
