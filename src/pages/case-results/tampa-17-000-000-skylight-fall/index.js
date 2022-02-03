import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import * as caseResultsArticleStyles from "../../../styles/caseResultsArticle.module.css"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
    test: `green`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const CaseResultsArticle = () => (
  <Layout>
    <Seo title="Case Results Article" />
    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Tampa $17,000,000 Skylight Fall</h2>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <p>His neighbor, an AC system salesman, had fallen over twenty feet through an unprotected skylight while attending a “pre-construction” meeting on the roof of a warehouse, near TIA. He landed head first on a concrete floor, and subsequently fought for his life at St. Joseph’s Hospital.</p>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.primary, color: theme.colorsText.secondary}}>
      <div className="container">
        <h2>Photo</h2>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <p>Soon thereafter, I met with my client’s wife and their three terrific children, aged 11, 9, and 7, at that time. I also met with my client’s mother. Extremely strong, practical, and intelligent, she clearly and specifically described the type of attorney(s) and service her family would insist upon.</p>
        <p>While my client’s fate was still unclear, I asked Rick D. Arcaro, Esquire, of Sarasota, to act as co-counsel on this matter. Brilliantly resourceful and inexhaustible, I knew Rick would instantly identify any and all potential third party defendants and immediately begin building our case. He did so amazingly well and quickly filed suit against multiple defendants. We then began taking depositions and consulting experts.</p>
        <p>Before too long, Rick and I were hearing the words “no liability,” in our sleep. None of the defendants were willing to offer a penny to settle our client’s case. It became increasingly obvious we would need to retain an extraordinary person and exceedingly talented attorney, to lead our team. Eventually we settled on the attorney our client’s family deemed to be the “right one” for them: Stephen A. Barnes, Esquire. He came on board upon suit being filed and immediately engineered an ambitious but pragmatic plan to secure justice for our client and his family. Slowly but surely, the tide began to turn in our favor.</p>
        <p>To say synergy was created by the union of Rick and Steve is an understatement. They brought out the best in each other and collaborated seamlessly. From the outset, Steve’s laser like focus, amazing work ethic, and keenly analytical mind, were readily apparent as were his outstanding leadership qualities, humility, and integrity; a rare combination.</p>
        <p>Defense counsel continued to think Rick and Steve were “chasing windmills,” but Steve’s thoughtful strategy outflanked the defense every step of the way. Steve and Rick doggedly prepared our case; an undertaking that eventually resulted in legal costs in the high six figures given the thirty plus experts who were deposed across the country (about sixty depositions were taken altogether).</p>
        <p>Neither Rick nor I had ever seen anyone more effective in deposition than Steve. Always more informed and prepared than defense experts of all types, he left them in shambles and consistently elicited testimony which made our case stronger. Further, he defeated numerous motions for summary judgment, as well as potentially damaging motions in limine. It was clear that our judge had great respect for Steve and the positions he advanced.</p>
        <p>Steve never wavered in his belief that we were building a strong, valuable case which would be tried as scheduled, without the need of a continuance. He maintained relentless pressure on the defense, defeating multiple motions for continuances from the defense.</p>
        <p>Despite two years of the defense denying liability and making minimal offers, on the Friday before trial, we reached a global settlement of our case of $17 million. In achieving such a tremendous result, Steve certainly showed why he is one of the most gifted, established, yet promising attorneys, in the state. Steve can clearly prosecute any negligence case most effectively and possesses finely honed trial advocacy skills. His best is yet to come. I would wholeheartedly recommend Steve to anyone in need of an outstanding, uniquely qualified trial attorney, without hesitation.</p>
        <p>Most importantly, our client’s family is very pleased with the outcome to their tragic case. Rarely have I made a decision more sound than to seek out and engage the many talents Steve possesses. Working with him was an honor and privilege. At no point, nor for any reason, did anyone have to be reminded to set aside his ego. Mutual appreciation, respect, and trust, were always paramount.</p>
        <p>As a result of this case, I know one family that, while forever heartbroken, can now look forward with a measure of hope and security that did not exist in their world just a few weeks ago. Their new found perspective is due in large part to the incredible effort spearheaded by one of our best and brightest: Stephen A. Barnes, Esquire.</p>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.primary, color: theme.colorsText.secondary}}>
      <div className="container">
        <h2>Photo</h2>
      </div>
    </div>


  </Layout>
)

export default CaseResultsArticle
