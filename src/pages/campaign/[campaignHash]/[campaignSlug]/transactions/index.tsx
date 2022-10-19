import Avatar from 'boring-avatars';
import moment from 'moment';

import { AdvancedList } from '@/components/AdvancedList';
import { CardSection } from '@/components/Card';
import CampaignLayout from '@/layouts/Campaign';

import AVATAR_COLORS from '@/constants/avatar-colors';
import { generateSlicedAddress } from '@/utils/address';

const transactionTitle = `${generateSlicedAddress(
  '0x0000000000000000000000000000000000000000'
)} donated $250`;

const TRANSACTIONS = Array.from({ length: 10 }, () => ({
  title: transactionTitle,
  subtitle: moment().fromNow(),
  logo: (
    <Avatar
      size={40}
      name="0x0000000000000000000000000000000000000000"
      variant="marble"
      colors={AVATAR_COLORS}
    />
  )
}));

const Transactions = () => {
  return (
    <CardSection title="Transactions">
      <AdvancedList items={TRANSACTIONS} perPage={10} showMore />
    </CardSection>
  );
};

Transactions.withReward = true;
Transactions.PageLayout = CampaignLayout;

export default Transactions;
