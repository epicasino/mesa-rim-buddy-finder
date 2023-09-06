export interface iUserDataDash {
  _id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  pronouns: string;
  leadClimb: boolean;
  topRope: boolean;
  locations: [string];
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
  }
  wednesday: {
    from: string;
    to: string;
    unavailable: boolean;
  }
  thursday: {
    from: string;
    to: string;
    unavailable: boolean;
  }
  friday: {
    from: string;
    to: string;
    unavailable: boolean;
  }
  saturday: {
    from: string;
    to: string;
    unavailable: boolean;
  }
}