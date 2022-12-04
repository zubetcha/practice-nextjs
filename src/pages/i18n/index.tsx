import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getJsonKeys } from '../../utils/i18n';
import { useTranslation } from 'next-i18next';
import JsonToTS from 'json-to-ts';
import { FromSchema } from 'json-schema-to-ts';
import i18nSchema from '../../schema/common';

const json: Json[] = ['common'];

type Json = 'common';

export default function I18nPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  console.log(props._nextI18Next);
  console.log(props.jsonKeys);

  let interface2 = [];

  const common = props.jsonKeys[json[0]] as typeof i18nSchema[typeof json[0]];
  const jsonkeys = props.jsonKeys as typeof i18nSchema;

  console.log(jsonkeys);

  const obj = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' },
    },
  } as const;

  type JsonKey = FromSchema<typeof obj>;

  const keys = props.jsonKeys as FromSchema<typeof obj>;

  JsonToTS(props.jsonKeys).forEach((typeInterface) => {
    console.log(typeInterface);
    interface2.push(typeInterface);
  });

  return (
    <div>
      <div>{t(jsonkeys.common.hello)}</div>
      <div>
        <p>{t(jsonkeys.common.info.name)}</p>
        <p>{t(jsonkeys.common.info.age)}</p>
        <p>{t(jsonkeys.common.info.address)}</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { jsonKeys } = getJsonKeys(json);

  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'ko', ['common'])),
      // Will be passed to the page component as props
      jsonKeys,
    },
  };
};
