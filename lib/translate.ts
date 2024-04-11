import * as deepl from "deepl-node";

const translateKey = async (entry, locale) => {
  // Avoid possible destructuring errors
  if (!entry || !locale) return {};

  // Access DeepL auth key
  const authKey = process.env.DEEPL_API_KEY;

  // Early return for unauthenticated request
  if (!authKey) throw new Error(`DeepL auth key not provided`);

  // Init translator
  const translator = new deepl.Translator(authKey);

  // Translate the title
  const translatedString = (await translator.translateText(
    entry,
    null,
    locale as unknown as TargetLanguageCode
  )) as deepl.TextResult;

  return translatedString.text;
};
