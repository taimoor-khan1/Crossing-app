import Screens from '../../config/Screens';
import Inbox from '../../screens/chat/Inbox';
import Message from '../../screens/messages/Message';
import Home from '../../screens/home/Home';
import Profile from '../../screens/myProfile/Profile';
import RescheduleChat from '../../screens/messages/RescheduleChat';

import GetStarted from '../../screens/getStarted/GetStarted';
import StartExploring from '../../screens/startExploring/StartExploring';

export const appRoutes = [
  {
    name: 'GetStarted',
    component: GetStarted,
  },
  {
    name: 'StartExploring',
    component: StartExploring,
  },
  {
    name: Screens.Profile,
    component: Profile,
  },
  {
    name: Screens.inbox,
    component: Inbox,
  },
  {
    name: Screens.home,
    component: Home,
  },
  {
    name: Screens.message,
    component: Message,
  },

  {
    name: Screens.RescheduleChat,
    component: RescheduleChat,
  },
];
