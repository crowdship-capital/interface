import { useRouter } from 'next/router';
import { useContractAddress } from '@/hooks/useContracts';

const useCampaignFactoryAddress = (): string => {
  const { query } = useRouter();

  const contractAddress = useContractAddress();
  const campaignFactoryAddress = contractAddress('myCrowdship');

  if (query.myCrowdship) return query.myCrowdship as string;

  return campaignFactoryAddress;
};

export default useCampaignFactoryAddress;
