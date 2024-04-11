import * as deepl from "deepl-node";
import { TargetLanguageCode } from "deepl-node";

export interface Translation {
  translateText: (
    text: string,
    targetLang: TargetLanguageCode
  ) => Promise<string>;
}

export class TranslateService implements Translation {
  authKey = process.env.DEEPL_AUTH!;
  translator: deepl.Translator;

  constructor() {
    this.translator = new deepl.Translator(this.authKey);
  }

  translateText = async (text: string, targetLang: string): Promise<string> => {
    if (targetLang === "en") targetLang = "en-US";

    const results = await this.translator.translateText(
      text,
      null,
      targetLang as TargetLanguageCode
    );

    return results.text;
  };
}

const translateService = new TranslateService();

export { translateService };
