import {
  initialProps as searchModalDialogProps,
  ISearchModalDialog,
} from '@/components/SearchModalDialog';
import {
  initialProps as notificationBarProps,
  INotificationBar,
} from '@/components/NotificationBar';
import { initialProps as loadingProps, ILoading } from '@/components/Loading';
import {
  initialProps as profileOverviewModalProps,
  IProfileOverviewModal,
} from '@/components/ProfileOverviewModal';

export interface IApplicationStore {
  searchModalDialog?: ISearchModalDialog;
  notification?: INotificationBar;
  loading?: ILoading;
  profileOverviewModal?: IProfileOverviewModal;
}

export const initialState: IApplicationStore = {
  searchModalDialog: searchModalDialogProps,
  notification: notificationBarProps,
  loading: loadingProps,
  profileOverviewModal: profileOverviewModalProps,
};
