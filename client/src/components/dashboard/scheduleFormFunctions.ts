export const initialScheduleValue = {
  sunday: {
      from: '',
      to: '',
      unavailable: false,
    },
    monday: {
      from: '',
      to: '',
      unavailable: false,
    },
    tuesday: {
      from: '',
      to: '',
      unavailable: false,
    },
    wednesday: {
      from: '',
      to: '',
      unavailable: false,
    },
    thursday: {
      from: '',
      to: '',
      unavailable: false,
    },
    friday: {
      from: '',
      to: '',
      unavailable: false,
    },
    saturday: {
      from: '',
      to: '',
      unavailable: false,
    },
}

export const toSchedule = (e: React.ChangeEvent<HTMLSelectElement>, day: string, dayObject: {from: string, to: string, unavailable:boolean}) => {
    let scheduleObject;

    if (day === 'Sunday') {
      scheduleObject = {
        sunday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Monday') {
      scheduleObject = {
        monday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Tuesday') {
      scheduleObject = {
        tuesday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Wednesday') {
      scheduleObject = {
        wednesday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Thursday') {
      scheduleObject = {
        thursday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Friday') {
      scheduleObject = {
        friday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Saturday') {
      scheduleObject = {
        saturday: {
          from: dayObject.from,
          to: e.target.value,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    }
  };

export const fromSchedule = (e: React.ChangeEvent<HTMLSelectElement>, day: string, dayObject: {from: string, to: string, unavailable:boolean}) => {
    let scheduleObject;

    if (day === 'Sunday') {
      scheduleObject = {
        sunday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Monday') {
      scheduleObject = {
        monday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Tuesday') {
      scheduleObject = {
        tuesday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Wednesday') {
      scheduleObject = {
        wednesday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Thursday') {
      scheduleObject = {
        thursday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Friday') {
      scheduleObject = {
        friday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    } else if (day === 'Saturday') {
      scheduleObject = {
        saturday: {
          from: e.target.value,
          to: dayObject.to,
          unavailable: dayObject.unavailable,
        },
      };
      return scheduleObject;
    }
  };

export const unavailableSchedule = (e: React.ChangeEvent<HTMLInputElement>, day: string, dayObject: {from: string, to: string, unavailable:boolean}) => {
  let scheduleObject;

  if (day === 'Sunday') {
    scheduleObject = {
      sunday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Monday') {
    scheduleObject = {
      monday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Tuesday') {
    scheduleObject = {
      tuesday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Wednesday') {
    scheduleObject = {
      wednesday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Thursday') {
    scheduleObject = {
      thursday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Friday') {
    scheduleObject = {
      friday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  } else if (day === 'Saturday') {
    scheduleObject = {
      saturday: {
        from: dayObject.from,
        to: dayObject.to,
        unavailable: e.target.checked,
      },
    };
    return scheduleObject;
  }
};