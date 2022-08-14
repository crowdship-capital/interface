import Head from 'next/head';

import CampaignLayout from '@/layouts/Campaign';

const Campaign = () => {
  return (
    <Head>
      <title>Campaign</title>
    </Head>
  );
};

Campaign.PageLayout = CampaignLayout;

export default Campaign;
