export interface iUsersData {
  page: number;
  users: Array<iUserData>;
}

export interface iUserData {
  _id: string;
  name: string;
  pronouns: string;
  phone: string;
  email?: string;
  topRope: boolean;
  leadClimb: boolean;
  bouldering: boolean;
  locations: {
    miraMesa: boolean;
    missionValley: boolean;
    northCity: boolean;
    reno: boolean;
    austin: boolean;
  };
}

export interface iUserModal {
  _id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  pronouns: string;
  leadClimb: boolean;
  topRope: boolean;
  bouldering: boolean;
  locations: {
    miraMesa?: boolean;
    missionValley?: boolean;
    northCity?: boolean;
    reno?: boolean;
    austin?: boolean;
  };
  availability: iAvailabilityWeek;
}

interface iAvailabilityWeek {
  sunday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  monday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  tuesday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  wednesday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  thursday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  friday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
  saturday: {
    from: string;
    to: string;
    unavailable: boolean;
  };
}
