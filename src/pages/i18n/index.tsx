import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function I18nPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();

  return <div>{t('hello')}</div>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'ko', ['common'])),
      // Will be passed to the page component as props
    },
  };
};
