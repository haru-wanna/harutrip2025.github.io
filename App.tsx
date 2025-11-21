import React from 'react';
import { ParallaxSection } from './components/ParallaxSection';
import { TextSection } from './components/TextSection';
import { AiHistorian } from './components/AiHistorian';
import { Timeline } from './components/Timeline';
import { FadeIn } from './components/FadeIn';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-gray-200 selection:bg-gold-500 selection:text-black font-sans relative">
      
      {/* Cinematic Overlays */}
      <div className="grain-overlay" />
      <div className="vignette-overlay" />

      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop"
        title="THE HABSBURGS"
        subtitle="600年の栄華と没落。ウィーンからプラハへ、帝国の記憶を辿る旅。"
      />

      {/* Intro: AEIOU */}
      <TextSection title="AEIOU：世界はオーストリアに属する" bgColor="light">
        <FadeIn>
          <p>
            <span className="drop-cap">A</span>ustriae Est Imperare Orbi Universo. 「世界を支配するのはオーストリアである」。かつて神聖ローマ皇帝フリードリヒ3世は、この頭文字「A.E.I.O.U.」を好んで署名に使った。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            ハプスブルク家。スイスの小さな豪族から始まり、政略結婚を通じてスペイン、ネーデルラント、そして新大陸までをも手中に収めた「日の沈まぬ帝国」。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            年末年始、あなたが歩くウィーンの石畳は、モーツァルトが歩いた道であり、マリー・アントワネットが嫁ぐ馬車で通った道であり、そしてヒトラーが美術学校の受験に失敗して彷徨った道でもある。この街の建物はすべて、ハプスブルク家の栄光と、その黄昏の証人なのだ。
          </p>
        </FadeIn>
      </TextSection>

      {/* Chronology Timeline */}
      <Timeline />

      {/* Chapter 1: Hofburg */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1588608216036-d1295e7d3a44?q=80&w=2070&auto=format&fit=crop"
        title="THE WINTER PALACE"
        subtitle="ホーフブルク王宮：帝国の心臓"
        height="h-[60vh]"
      />

      <TextSection title="増築され続けた迷宮" bgColor="dark">
        <FadeIn>
          <p>
            <span className="drop-cap">H</span>ofburg. 歴代の皇帝たちは、自分の代で新しい翼（棟）を増築することを好んだ。そのためホーフブルク王宮は、ゴシック、ルネサンス、バロック、ロココと、あらゆる建築様式が継ぎ接ぎされた巨大な複合体となっている。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            ここは単なる住居ではない。政治の中枢だ。特に必見なのは「王宮宝物館（Schatzkammer）」である。ここには神聖ローマ帝国の帝冠や、聖ロンギヌスの槍（キリストの脇腹を刺したとされる槍）が眠っている。ハプスブルク家がなぜ「神に選ばれた一族」として君臨できたのか、その神秘的な正当性を目の当たりにするだろう。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            そして、ここには「スペイン乗馬学校」がある。スペインから導入されたリピッツァナー種の白馬が、バロック建築のホールで優雅に舞う。これは単なるショーではなく、帝国の文化的洗練を誇示するための生きた芸術なのだ。
          </p>
        </FadeIn>
      </TextSection>

      {/* Chapter 2: Maria Theresa & Schonbrunn */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1551533257-d3b4a22d64d1?q=80&w=2069&auto=format&fit=crop"
        title="THE MOTHER"
        subtitle="女帝マリア・テレジアとシェーンブルン宮殿"
        height="h-[60vh]"
      />

      <TextSection title="シェーンブルン・イエローの輝き" bgColor="light">
        <FadeIn>
          <p>
            <span className="drop-cap">M</span>aria. 実質的な「女帝」として帝国を統治し、16人の子供を産み、その子供たちをヨーロッパ各国の王室へ政略結婚させた「ヨーロッパの義母」。彼女が愛した夏の離宮が、シェーンブルン宮殿だ。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            ヴェルサイユ宮殿に対抗して作られたこの宮殿は、彼女の趣味であるロココ様式で埋め尽くされている。外壁の独特な黄色は「テレジア・イエロー」と呼ばれ、威厳と温かみを兼ね備えている。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            鏡の間で、6歳のモーツァルトが女帝の膝に飛び乗りキスをしたという逸話はあまりに有名だ。しかし、華やかな大広間の裏側には、娘マリー・アントワネットをフランスへ送り出す際の母としての苦悩や、夫フランツ1世への深い愛が刻まれている。庭園の丘、グロリエッテからウィーン市街を見下ろせば、彼女が守り抜こうとした帝国の広さを肌で感じることができるだろう。
          </p>
        </FadeIn>
      </TextSection>

      {/* Image Grid: Vienna Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-stone-950 relative z-20">
        <FadeIn delay={0} className="h-full">
          <div className="relative group overflow-hidden h-full">
               <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=2070&auto=format&fit=crop" alt="Belvedere" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-lg">Belvedere</p>
                  <p className="text-xs font-serif">オイゲン公の夏の離宮、後にクリムト『接吻』の居場所へ</p>
               </div>
          </div>
        </FadeIn>
        <FadeIn delay={100} className="h-full">
          <div className="relative group overflow-hidden h-full">
               <img src="https://images.unsplash.com/photo-1547408976-44eb67413b63?q=80&w=2070&auto=format&fit=crop" alt="Art History Museum" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-lg">Kunsthistorisches Museum</p>
                  <p className="text-xs font-serif">ハプスブルク家の膨大なコレクションを収める美の殿堂</p>
               </div>
          </div>
        </FadeIn>
        <FadeIn delay={200} className="h-full">
          <div className="relative group overflow-hidden h-full">
               <img src="https://images.unsplash.com/photo-1601048169945-77382e789df9?q=80&w=2069&auto=format&fit=crop" alt="Cafe Central" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-lg">Café Culture</p>
                  <p className="text-xs font-serif">宮廷のレシピが市民へ。ザッハトルテとメランジェの午後</p>
               </div>
          </div>
        </FadeIn>
      </div>

      {/* Chapter 3: Franz Joseph & The Ring */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1596295435957-a25635a04a25?q=80&w=2069&auto=format&fit=crop"
        title="THE EMPEROR"
        subtitle="フランツ・ヨーゼフ1世とリンク通りの建設"
        height="h-[60vh]"
      />

      <TextSection title="孤独な皇帝の壮大な舞台装置" bgColor="dark">
        <FadeIn>
          <p>
            <span className="drop-cap">R</span>ingstrasse. 19世紀後半、皇帝フランツ・ヨーゼフ1世は決断した。「中世の城壁を取り払い、偉大なる通りを作れ」。それが現在のウィーンを形作る環状道路、リンク通りだ。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            ここには、帝国のイデオロギーが建築様式として表現されている。民主主義への憧れとしての「国会議事堂（ギリシャ建築）」、市民の自治を示す「市庁舎（ゴシック）」、そして教養を示す「大学（ルネサンス）」と「劇場（バロック）」。これらすべてが皇帝の威光の下に配置された。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            しかし、この豪華絢爛な舞台の主役である皇帝自身は、驚くほど質素で、そして孤独だった。彼は毎朝4時に起き、冷水で顔を洗い、崩れゆく多民族国家を書類仕事だけで繋ぎ止めようとした。「私は帝国の第一公務員である」と言い聞かせながら。
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <p>
            妻エリザベート（シシィ）は旅に逃げ、息子ルドルフは情死し、甥フランツ・フェルディナントはサラエボで撃たれた。リンク通りの華やかさは、ハプスブルク家の終焉を飾る、あまりに美しい「死に化粧」だったのかもしれない。
          </p>
        </FadeIn>
      </TextSection>

      {/* Transition to Prague: Rudolf II */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1541849546-216549be2162?q=80&w=1974&auto=format&fit=crop"
        title="THE ALCHEMIST"
        subtitle="ウィーンを捨てた皇帝、ルドルフ2世のプラハ"
        height="h-[70vh]"
      />

      <TextSection title="魔法の都への遷都" bgColor="light">
        <FadeIn>
          <p>
            <span className="drop-cap">P</span>rague. あなたの旅はウィーンから北へ、ボヘミアの森を抜けてプラハへと続く。ここで、時計の針を少し戻そう。マリア・テレジアより150年も昔、ハプスブルク家の中に、政治よりも「魔法」を愛した変人皇帝がいた。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            ルドルフ2世。彼はウィーンの宮廷の窮屈さを嫌い、1583年に首都をプラハへ移した。彼は政治を顧みず、プラハ城の奥深くに引きこもり、世界中から錬金術師、占星術師、魔術師、そして芸術家を集めた。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            彼のコレクション「驚異の部屋（クンストカンマー）」には、ドラゴンの骨、イッカクの角（ユニコーンとして）、自動人形、そして奇妙な絵画が並べられた。プラハが今もなお「魔都」と呼ばれる所以は、この皇帝が街全体に神秘の霧をかけたからに他ならない。
          </p>
        </FadeIn>
      </TextSection>

      {/* Prague Details: Golden Lane & Castle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 bg-stone-950 relative z-20">
        <FadeIn>
          <div className="relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=2070&auto=format&fit=crop" alt="Prague Castle" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-lg">Prague Castle</p>
                  <p className="text-xs font-serif">世界最大の古城。カフカの『城』のモデルとも言われる</p>
               </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1563050772-3655634069d2?q=80&w=2070&auto=format&fit=crop" alt="Golden Lane" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-lg">Golden Lane</p>
                  <p className="text-xs font-serif">錬金術師たちが住んだとされる、城壁内の極小の路地</p>
               </div>
          </div>
        </FadeIn>
      </div>

      <TextSection title="カレル橋の聖人たちと帝国の終焉" bgColor="dark">
        <FadeIn>
          <p>
            <span className="drop-cap">B</span>ridge. プラハのカレル橋に並ぶ30体の聖人像。彼らは黒ずんだ砂岩でできており、夜霧の中で見ると、まるで生きた亡霊のように見える。
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            この橋を渡る時、あなたはハプスブルク家の歴史の終わりを感じるかもしれない。第一次世界大戦後、帝国は崩壊し、オーストリアとチェコは別の国となった。しかし、文化の根底には、今も深く「中欧」という共通の空気が流れている。
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p>
            ウィーンのカフェで新聞を読む老人の所作と、プラハの居酒屋でビールを飲む若者の憂鬱。そのどちらにも、かつてこの地を覆っていた巨大な帝国の記憶が、残り香のように漂っているのだ。
          </p>
        </FadeIn>
      </TextSection>

      {/* Interactive Guide */}
      <div className="bg-stone-900 pb-10 relative z-20">
        <div className="max-w-4xl mx-auto px-6 pt-20 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl text-gold-500 mb-4">ASK THE HISTORIAN</h2>
            <p className="font-serif text-gray-400 mb-8">
              ハプスブルク家の系図は複雑であり、街の路地は迷路のようです。<br/>
              宮廷歴史家AIが、あなたの知的な好奇心を満たすお手伝いをいたします。
            </p>
          </FadeIn>
        </div>
        <AiHistorian />
      </div>

      {/* Footer */}
      <footer className="py-16 bg-black text-center border-t border-gold-900/30 relative z-20">
        <div className="mb-6">
            <span className="font-display text-4xl text-white tracking-[0.3em]">FIN</span>
        </div>
        <p className="font-serif text-gold-600/60 text-sm">
          Designed for the Traveler in Search of Lost Time.<br/>
          Vienna & Prague
        </p>
      </footer>

    </div>
  );
};

export default App;