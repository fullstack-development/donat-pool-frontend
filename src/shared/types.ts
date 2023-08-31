type RequestStatus = 'default' | 'requesting' | 'success' | 'error';
type WalletCardanoKey = 'nami' | 'LodeWallet' | 'flint' | 'eternl';
type LandingSection = 'home' | 'how-it-works' | 'why-choose-us' | 'about-us' | 'roadmap' | 'contact-us';

interface FetchParams {
  minAmountParam: ConfigParam;
  maxAmountParam: ConfigParam;
  minDurationParam: ConfigParam;
  maxDurationParam: ConfigParam;
  protocolFeeParam: ConfigParam;
}

interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface UserInfo {
  isManager: boolean;
  address: string;
}
interface ConfigParam {
  value: number;
}

interface UserAndProtocolParams {
  protocolConfig: FetchParams;
  userInfo: UserInfo;
}

interface FetchedDonatPool {
  title: string;
  creator: string;
  deadline: { value: bigint };
  goal: { value: bigint };
  raisedAmt: { value: bigint };
  threadTokenCurrency: string;
  threadTokenName: string;
  isCompleted: boolean;
}

interface DonatPool {
  title: string;
  creator: string;
  deadline: string;
  goal: string;
  raisedAmt: string;
  threadTokenCurrency: string;
  threadTokenName: string;
  completed: boolean;
}

interface CreateDonatPoolParams {
  title: string;
  amount: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
}

interface SubItem {
  id: string;
  title: string;
}

interface Item {
  subItems: SubItem[];
  id: string;
}

interface RoadmapText {
  phases: { title: string; items: (SubItem | Item)[] }[];
}

interface Protocol {
  protocolCurrency: string;
  protocolTokenName: string;
}

interface DonatPoolTokenData {
  frThreadTokenCurrency: string;
  frThreadTokenName: string;
}

export type {
  RequestStatus,
  WalletCardanoKey,
  FetchedDonatPool,
  DonatPool,
  CreateDonatPoolParams,
  RoadmapText,
  Item,
  SubItem,
  Protocol,
  DonatPoolTokenData,
  LandingSection,
  UserAndProtocolParams,
  Config,
  UserInfo,
};
