/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface CampaignRewardInterface extends utils.Interface {
  functions: {
    "campaign()": FunctionFragment;
    "campaignFactoryInterface()": FunctionFragment;
    "campaignInterface()": FunctionFragment;
    "campaignRewardAddress()": FunctionFragment;
    "paused()": FunctionFragment;
    "rewardRecipients(uint256)": FunctionFragment;
    "rewardToRewardRecipientCount(uint256)": FunctionFragment;
    "rewards(uint256)": FunctionFragment;
    "userRewardCount(address)": FunctionFragment;
    "__CampaignReward_init(address,address)": FunctionFragment;
    "createReward(uint256,uint256,uint256,string,bool)": FunctionFragment;
    "assignReward(uint256,uint256,address)": FunctionFragment;
    "modifyReward(uint256,uint256,uint256,uint256,bool,string)": FunctionFragment;
    "increaseRewardStock(uint256,uint256)": FunctionFragment;
    "destroyReward(uint256)": FunctionFragment;
    "campaignSentReward(uint256,bool)": FunctionFragment;
    "userReceivedCampaignReward(uint256)": FunctionFragment;
    "renounceRewards(address)": FunctionFragment;
    "transferRewards(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "campaign"
      | "campaignFactoryInterface"
      | "campaignInterface"
      | "campaignRewardAddress"
      | "paused"
      | "rewardRecipients"
      | "rewardToRewardRecipientCount"
      | "rewards"
      | "userRewardCount"
      | "__CampaignReward_init"
      | "createReward"
      | "assignReward"
      | "modifyReward"
      | "increaseRewardStock"
      | "destroyReward"
      | "campaignSentReward"
      | "userReceivedCampaignReward"
      | "renounceRewards"
      | "transferRewards"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "campaign", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "campaignFactoryInterface",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "campaignInterface",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "campaignRewardAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardRecipients",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToRewardRecipientCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "__CampaignReward_init",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createReward",
    values: [BigNumberish, BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "assignReward",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyReward",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseRewardStock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "campaignSentReward",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "userReceivedCampaignReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRewards",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "campaign", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "campaignFactoryInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignRewardAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToRewardRecipientCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userRewardCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__CampaignReward_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseRewardStock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignSentReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userReceivedCampaignReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRewards",
    data: BytesLike
  ): Result;

  events: {
    "CampaignRewardOwnerSet(address)": EventFragment;
    "Paused(address)": EventFragment;
    "RewardCreated(uint256,uint256,uint256,uint256,string,bool)": EventFragment;
    "RewardDestroyed(uint256)": EventFragment;
    "RewardModified(uint256,uint256,uint256,uint256,bool)": EventFragment;
    "RewardRecipientAdded(uint256,uint256,uint256,address)": EventFragment;
    "RewardRecipientApproval(uint256)": EventFragment;
    "RewardStockIncreased(uint256,uint256)": EventFragment;
    "RewarderApproval(uint256,bool)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CampaignRewardOwnerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardDestroyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRecipientAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRecipientApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardStockIncreased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewarderApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CampaignRewardOwnerSetEventObject {
  owner: string;
}
export type CampaignRewardOwnerSetEvent = TypedEvent<
  [string],
  CampaignRewardOwnerSetEventObject
>;

export type CampaignRewardOwnerSetEventFilter =
  TypedEventFilter<CampaignRewardOwnerSetEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RewardCreatedEventObject {
  rewardId: BigNumber;
  value: BigNumber;
  deliveryDate: BigNumber;
  stock: BigNumber;
  hashedReward: string;
  active: boolean;
}
export type RewardCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean],
  RewardCreatedEventObject
>;

export type RewardCreatedEventFilter = TypedEventFilter<RewardCreatedEvent>;

export interface RewardDestroyedEventObject {
  rewardId: BigNumber;
}
export type RewardDestroyedEvent = TypedEvent<
  [BigNumber],
  RewardDestroyedEventObject
>;

export type RewardDestroyedEventFilter = TypedEventFilter<RewardDestroyedEvent>;

export interface RewardModifiedEventObject {
  rewardId: BigNumber;
  value: BigNumber;
  deliveryDate: BigNumber;
  stock: BigNumber;
  active: boolean;
}
export type RewardModifiedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, boolean],
  RewardModifiedEventObject
>;

export type RewardModifiedEventFilter = TypedEventFilter<RewardModifiedEvent>;

export interface RewardRecipientAddedEventObject {
  rewardRecipientId: BigNumber;
  rewardId: BigNumber;
  amount: BigNumber;
  user: string;
}
export type RewardRecipientAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  RewardRecipientAddedEventObject
>;

export type RewardRecipientAddedEventFilter =
  TypedEventFilter<RewardRecipientAddedEvent>;

export interface RewardRecipientApprovalEventObject {
  rewardRecipientId: BigNumber;
}
export type RewardRecipientApprovalEvent = TypedEvent<
  [BigNumber],
  RewardRecipientApprovalEventObject
>;

export type RewardRecipientApprovalEventFilter =
  TypedEventFilter<RewardRecipientApprovalEvent>;

export interface RewardStockIncreasedEventObject {
  rewardId: BigNumber;
  count: BigNumber;
}
export type RewardStockIncreasedEvent = TypedEvent<
  [BigNumber, BigNumber],
  RewardStockIncreasedEventObject
>;

export type RewardStockIncreasedEventFilter =
  TypedEventFilter<RewardStockIncreasedEvent>;

export interface RewarderApprovalEventObject {
  rewardRecipientId: BigNumber;
  status: boolean;
}
export type RewarderApprovalEvent = TypedEvent<
  [BigNumber, boolean],
  RewarderApprovalEventObject
>;

export type RewarderApprovalEventFilter =
  TypedEventFilter<RewarderApprovalEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface CampaignReward extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CampaignRewardInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    campaign(overrides?: CallOverrides): Promise<[string]>;

    campaignFactoryInterface(overrides?: CallOverrides): Promise<[string]>;

    campaignInterface(overrides?: CallOverrides): Promise<[string]>;

    campaignRewardAddress(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    rewardRecipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean, boolean] & {
        rewardId: BigNumber;
        user: string;
        deliveryConfirmedByCampaign: boolean;
        deliveryConfirmedByUser: boolean;
      }
    >;

    rewardToRewardRecipientCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean, boolean] & {
        value: BigNumber;
        deliveryDate: BigNumber;
        stock: BigNumber;
        hashed: string;
        exists: boolean;
        active: boolean;
      }
    >;

    userRewardCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    __CampaignReward_init(
      _campaignFactory: string,
      _campaign: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createReward(
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _hashedReward: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assignReward(
      _rewardId: BigNumberish,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyReward(
      _rewardId: BigNumberish,
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _active: boolean,
      _hashedReward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseRewardStock(
      _rewardId: BigNumberish,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroyReward(
      _rewardId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    campaignSentReward(
      _rewardRecipientId: BigNumberish,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userReceivedCampaignReward(
      _rewardRecipientId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRewards(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferRewards(
      _oldAddress: string,
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  campaign(overrides?: CallOverrides): Promise<string>;

  campaignFactoryInterface(overrides?: CallOverrides): Promise<string>;

  campaignInterface(overrides?: CallOverrides): Promise<string>;

  campaignRewardAddress(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  rewardRecipients(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, boolean, boolean] & {
      rewardId: BigNumber;
      user: string;
      deliveryConfirmedByCampaign: boolean;
      deliveryConfirmedByUser: boolean;
    }
  >;

  rewardToRewardRecipientCount(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, boolean, boolean] & {
      value: BigNumber;
      deliveryDate: BigNumber;
      stock: BigNumber;
      hashed: string;
      exists: boolean;
      active: boolean;
    }
  >;

  userRewardCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  __CampaignReward_init(
    _campaignFactory: string,
    _campaign: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createReward(
    _value: BigNumberish,
    _deliveryDate: BigNumberish,
    _stock: BigNumberish,
    _hashedReward: string,
    _active: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assignReward(
    _rewardId: BigNumberish,
    _amount: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyReward(
    _rewardId: BigNumberish,
    _value: BigNumberish,
    _deliveryDate: BigNumberish,
    _stock: BigNumberish,
    _active: boolean,
    _hashedReward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseRewardStock(
    _rewardId: BigNumberish,
    _count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroyReward(
    _rewardId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  campaignSentReward(
    _rewardRecipientId: BigNumberish,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userReceivedCampaignReward(
    _rewardRecipientId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRewards(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferRewards(
    _oldAddress: string,
    _newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    campaign(overrides?: CallOverrides): Promise<string>;

    campaignFactoryInterface(overrides?: CallOverrides): Promise<string>;

    campaignInterface(overrides?: CallOverrides): Promise<string>;

    campaignRewardAddress(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    rewardRecipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean, boolean] & {
        rewardId: BigNumber;
        user: string;
        deliveryConfirmedByCampaign: boolean;
        deliveryConfirmedByUser: boolean;
      }
    >;

    rewardToRewardRecipientCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean, boolean] & {
        value: BigNumber;
        deliveryDate: BigNumber;
        stock: BigNumber;
        hashed: string;
        exists: boolean;
        active: boolean;
      }
    >;

    userRewardCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    __CampaignReward_init(
      _campaignFactory: string,
      _campaign: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createReward(
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _hashedReward: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    assignReward(
      _rewardId: BigNumberish,
      _amount: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyReward(
      _rewardId: BigNumberish,
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _active: boolean,
      _hashedReward: string,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseRewardStock(
      _rewardId: BigNumberish,
      _count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destroyReward(
      _rewardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    campaignSentReward(
      _rewardRecipientId: BigNumberish,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    userReceivedCampaignReward(
      _rewardRecipientId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRewards(_user: string, overrides?: CallOverrides): Promise<void>;

    transferRewards(
      _oldAddress: string,
      _newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CampaignRewardOwnerSet(address)"(
      owner?: null
    ): CampaignRewardOwnerSetEventFilter;
    CampaignRewardOwnerSet(owner?: null): CampaignRewardOwnerSetEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RewardCreated(uint256,uint256,uint256,uint256,string,bool)"(
      rewardId?: BigNumberish | null,
      value?: null,
      deliveryDate?: null,
      stock?: null,
      hashedReward?: null,
      active?: null
    ): RewardCreatedEventFilter;
    RewardCreated(
      rewardId?: BigNumberish | null,
      value?: null,
      deliveryDate?: null,
      stock?: null,
      hashedReward?: null,
      active?: null
    ): RewardCreatedEventFilter;

    "RewardDestroyed(uint256)"(
      rewardId?: BigNumberish | null
    ): RewardDestroyedEventFilter;
    RewardDestroyed(rewardId?: BigNumberish | null): RewardDestroyedEventFilter;

    "RewardModified(uint256,uint256,uint256,uint256,bool)"(
      rewardId?: BigNumberish | null,
      value?: null,
      deliveryDate?: null,
      stock?: null,
      active?: null
    ): RewardModifiedEventFilter;
    RewardModified(
      rewardId?: BigNumberish | null,
      value?: null,
      deliveryDate?: null,
      stock?: null,
      active?: null
    ): RewardModifiedEventFilter;

    "RewardRecipientAdded(uint256,uint256,uint256,address)"(
      rewardRecipientId?: BigNumberish | null,
      rewardId?: BigNumberish | null,
      amount?: null,
      user?: string | null
    ): RewardRecipientAddedEventFilter;
    RewardRecipientAdded(
      rewardRecipientId?: BigNumberish | null,
      rewardId?: BigNumberish | null,
      amount?: null,
      user?: string | null
    ): RewardRecipientAddedEventFilter;

    "RewardRecipientApproval(uint256)"(
      rewardRecipientId?: BigNumberish | null
    ): RewardRecipientApprovalEventFilter;
    RewardRecipientApproval(
      rewardRecipientId?: BigNumberish | null
    ): RewardRecipientApprovalEventFilter;

    "RewardStockIncreased(uint256,uint256)"(
      rewardId?: BigNumberish | null,
      count?: null
    ): RewardStockIncreasedEventFilter;
    RewardStockIncreased(
      rewardId?: BigNumberish | null,
      count?: null
    ): RewardStockIncreasedEventFilter;

    "RewarderApproval(uint256,bool)"(
      rewardRecipientId?: BigNumberish | null,
      status?: null
    ): RewarderApprovalEventFilter;
    RewarderApproval(
      rewardRecipientId?: BigNumberish | null,
      status?: null
    ): RewarderApprovalEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    campaign(overrides?: CallOverrides): Promise<BigNumber>;

    campaignFactoryInterface(overrides?: CallOverrides): Promise<BigNumber>;

    campaignInterface(overrides?: CallOverrides): Promise<BigNumber>;

    campaignRewardAddress(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRecipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToRewardRecipientCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    userRewardCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    __CampaignReward_init(
      _campaignFactory: string,
      _campaign: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createReward(
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _hashedReward: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assignReward(
      _rewardId: BigNumberish,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyReward(
      _rewardId: BigNumberish,
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _active: boolean,
      _hashedReward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseRewardStock(
      _rewardId: BigNumberish,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroyReward(
      _rewardId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    campaignSentReward(
      _rewardRecipientId: BigNumberish,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userReceivedCampaignReward(
      _rewardRecipientId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRewards(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferRewards(
      _oldAddress: string,
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    campaign(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    campaignFactoryInterface(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    campaignInterface(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    campaignRewardAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRecipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToRewardRecipientCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRewardCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    __CampaignReward_init(
      _campaignFactory: string,
      _campaign: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createReward(
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _hashedReward: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assignReward(
      _rewardId: BigNumberish,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyReward(
      _rewardId: BigNumberish,
      _value: BigNumberish,
      _deliveryDate: BigNumberish,
      _stock: BigNumberish,
      _active: boolean,
      _hashedReward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseRewardStock(
      _rewardId: BigNumberish,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroyReward(
      _rewardId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    campaignSentReward(
      _rewardRecipientId: BigNumberish,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userReceivedCampaignReward(
      _rewardRecipientId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRewards(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferRewards(
      _oldAddress: string,
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}