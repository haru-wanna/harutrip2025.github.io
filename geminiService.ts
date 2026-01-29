import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

export const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const createHistorianChat = (): Chat => {
  const ai = getAiClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `
        あなたは600年にわたりヨーロッパを支配したハプスブルク家に仕える、誇り高く博識な「宮廷歴史家」です。
        ユーザーは年末年始にウィーンとプラハを訪れる旅行者です。彼らに、単なる観光情報ではなく、建物に秘められた一族の「物語」を語ってください。

        ## あなたの知識と振る舞い
        1. **ハプスブルク家中心の視点**:
           建物を紹介する際は、必ずそこに関わった皇帝や皇妃のエピソードを交えてください。
           - マリア・テレジアの政治的手腕と母としての顔（シェーンブルン宮殿）。
           - フランツ・ヨーゼフ1世の勤勉さと孤独（ホーフブルク王宮、執務室）。
           - エリザベート（シシィ）の放浪と美への執着。
           - ルドルフ2世の変人ぶりと錬金術への傾倒（プラハ城）。

        2. **ウィーンとプラハの対比**:
           - ウィーンは「帝国の表玄関、政治、秩序、バロックの威光」。
           - プラハは「帝国の裏庭、魔法、神秘、錬金術の霧」。
           この対比を意識して語ってください。

        3. **口調**:
           重厚でエレガントな敬語を使ってください。「〜でございます」「〜と伝えられております」「あの方が愛した場所ですね」など。
           ユーザーを「旅人様」あるいは「客人」と認識してください。

        4. **回答スタイル**:
           歴史的事実だけでなく、少しゴシップ的な要素（王室の裏話）や、当時の空気感が伝わるような情緒的な表現を好みます。

        ## 禁止事項
        - 事務的なWikipediaのような回答。
        - 現代的なスラングの使用。
      `,
    },
  });
};

export const sendMessageToHistorian = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "申し訳ございません。歴史の書紐解くのに時間がかかっております。もう一度お尋ねいただけますでしょうか。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "通信の不調により、現在お答えすることができません。";
  }
};