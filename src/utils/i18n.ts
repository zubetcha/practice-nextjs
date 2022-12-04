import fs from 'fs';
import path from 'path';

export interface TranslationJson {
  common: 'common';
}

// 첫 시도
export const getJsonKeys = (fileNameList: string[]) => {
  // locales 폴더 경로
  const localesDir = path.join(process.cwd(), 'public', 'locales');

  const jsonKeys = {};

  // 파일 읽어오기
  const files = fileNameList.forEach((fileName) => {
    const parsedJson = JSON.parse(
      fs.readFileSync(`${localesDir}/ko/${fileName}.json`, {
        encoding: 'utf-8',
      })
    );

    const target = {};
    const schema = {};

    // { key: key | { key: key } } 형태로 변환
    Object.entries(parsedJson).forEach((el) => {
      const [key1, value] = el;

      if (!value) {
        return;
      }

      if (typeof value === 'string') {
        Object.assign(target, { [key1]: `${fileName}:${key1}` });
      }

      if (typeof value === 'object') {
        const target2 = {};

        Object.entries(value).forEach((eli) => {
          const [key2, value] = eli;
          if (typeof value === 'string') {
            Object.assign(target2, { [key2]: `${fileName}:${key1}.${key2}` });
          }
        });
        Object.assign(target, { [key1]: target2 });
      }
    });

    Object.assign(jsonKeys, { [fileName]: target });
  });

  return { jsonKeys };

  // return Object.fromEntries(files);
};
