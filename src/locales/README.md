# Locales
This folder contains the internationalization files for the EVerest Admin
Panel user interface. For every supported language, it contains files in
pairs of three, like the English "en" locale:

    en.json
    en.module_info.ts
    en.interfaces_list.ts

These files contain keys and translation strings for the UI.

English with its "en" locale is the default language, and it serves as the
fallback language for other locales. If a locale file is missing a specific
key, the English translation will be used.


## Automatic Generation
The two TypeScript files `en.module_info.ts` and `en.interfaces_list.ts` are
automatically generated from the latest EVerest version during nightly builds.
The script `src/modules/evbc/simulator-sample-data/update-simulator-data.js` is
used to generate these files.

All other files in this folder are created and updated manually.


## Adding a New Language
To add a new language, add the language code to `SUPPORTED_LOCALES` and `LOCALE_ITEMS` in `src/plugins/i18n.ts`. Next, create the three files for the
new language, e.g. for Korean create `ko.json`, `ko.module_info.ts` and
`ko.interfaces_list.ts`.

AI can help you get started with the translation. E.g. if you're running
Ollama locally, you can run a command line like this:

    ollama run qwen3-coder:30B "
    [SYSTEM]
    You are an expert JSON refactoring assistant. Your task is to apply the requested changes to the provided code and return *only* the modified JSON code. Do not include any explanations, comments, or extra text.
    
    [USER]
    Perform the following search and replace in the JSON code provided below:
    1. Replace all description values containing English text with the equivalent text translated in Korean.
    2. Only replace string values, i.e. keep the JSON syntax and key names as is.

    The JSON file content is:
    $(cat en.json)
    " >\! ko.json

Make sure to go over the translations to see if they make sense.

Similar for the `ko.module_info.ts` and `ko.interfaces_list.ts` files, but use
"TypeScript" instead of "JSON" in the instructions.

Note that the TypeScript files can be too big to handle in one go. So you may
have to manually break each file up into smaller chunks, process the chunks
separately, then manually merge the translated chunks into a single file again.

Finally, remove the line

    // This file is generated, see README.md for more information.

from the TypeScript files, as only `en_module_info.ts` and
`en_interfaces.list.ts` are automatically generated in nightly builds.

You now have added a new language to the EVerest project, congratulations!


## Future Work
* TypeScript files should be generated automatically for all languages. It
  would be best to manage translations in the repositories of the modules
  themselves, instead of in this repository. Modules will be constantly
  changing, and translations in this repository will struggle to keep up.
  There's of course always the fallback to English, so while not ideal, it
  is acceptable and will not break anything.
