// CMS QHP Landscape PY2026 (Individual Market Medical) — demo subset.
// Source: https://data.healthcare.gov/qhp-landscape-files  Snapshot: 2026-07-09
// Full-price premiums before premium tax credits. Limited issuers shown by design.
const QHP_DEMO = {
 "FL-Miami-Dade": {
  "state": "FL",
  "county": "Miami-Dade",
  "totalPlans": 189,
  "totalIssuers": 11,
  "issuersShown": [
   "Ambetter Health",
   "AmeriHealth Caritas Next",
   "Florida Blue HMO (a BlueCross BlueShield FL company)",
   "Molina Healthcare",
   "Oscar Health Maintenance Organization of Florida"
  ],
  "plans": {
   "Bronze": [
    {
     "issuer": "Oscar Health Maintenance Organization of Florida",
     "name": "Bronze Simple Breathe Easy with Enhanced COPD Benefits",
     "type": "HMO",
     "p": {
      "21": 392.58,
      "27": 411.41,
      "30": 445.57,
      "40": 501.7,
      "50": 701.13,
      "60": 1065.43
     }
    },
    {
     "issuer": "Florida Blue HMO (a BlueCross BlueShield FL company)",
     "name": "myBlue Bronze 26M01-23 (Rewards)",
     "type": "HMO",
     "p": {
      "21": 412.68,
      "27": 432.49,
      "30": 468.39,
      "40": 527.41,
      "50": 737.05,
      "60": 1120.01
     }
    },
    {
     "issuer": "AmeriHealth Caritas Next",
     "name": "AmeriHealth Caritas Next Bronze Essential + No Referrals",
     "type": "HMO",
     "p": {
      "21": 418.1,
      "27": 438.17,
      "30": 474.55,
      "40": 534.34,
      "50": 746.73,
      "60": 1134.72
     }
    }
   ],
   "Silver": [
    {
     "issuer": "Florida Blue HMO (a BlueCross BlueShield FL company)",
     "name": "myBlue Silver 26M03-02 ($0 Primary Care Visits with Select Providers / $5 Labs / Rewards)",
     "type": "HMO",
     "p": {
      "21": 533.63,
      "27": 559.24,
      "30": 605.67,
      "40": 681.98,
      "50": 953.06,
      "60": 1448.27
     }
    },
    {
     "issuer": "Oscar Health Maintenance Organization of Florida",
     "name": "Silver Simple PCP Saver",
     "type": "HMO",
     "p": {
      "21": 535.51,
      "27": 561.2,
      "30": 607.79,
      "40": 684.37,
      "50": 956.4,
      "60": 1453.34
     }
    },
    {
     "issuer": "AmeriHealth Caritas Next",
     "name": "AmeriHealth Caritas Next Silver Essential + No Referrals",
     "type": "HMO",
     "p": {
      "21": 542.3,
      "27": 568.33,
      "30": 615.51,
      "40": 693.06,
      "50": 968.54,
      "60": 1471.8
     }
    }
   ],
   "Gold": [
    {
     "issuer": "Oscar Health Maintenance Organization of Florida",
     "name": "Gold Simple",
     "type": "HMO",
     "p": {
      "21": 488.35,
      "27": 511.78,
      "30": 554.27,
      "40": 624.1,
      "50": 872.18,
      "60": 1325.35
     }
    },
    {
     "issuer": "Molina Healthcare",
     "name": "Molina Gold Enhanced 895",
     "type": "HMO",
     "p": {
      "21": 594.53,
      "27": 623.06,
      "30": 674.79,
      "40": 759.8,
      "50": 1061.82,
      "60": 1613.54
     }
    },
    {
     "issuer": "Ambetter Health",
     "name": "Standard Gold VALUE",
     "type": "HMO",
     "p": {
      "21": 599.92,
      "27": 628.71,
      "30": 680.9,
      "40": 766.69,
      "50": 1071.44,
      "60": 1628.16
     }
    }
   ]
  }
 },
 "OH-Franklin": {
  "state": "OH",
  "county": "Franklin",
  "totalPlans": 130,
  "totalIssuers": 8,
  "issuersShown": [
   "Ambetter from Buckeye Health Plan",
   "Anthem Blue Cross and Blue Shield",
   "Antidote Health Plan of Ohio, Inc.",
   "Oscar Health Insurance"
  ],
  "plans": {
   "Bronze": [
    {
     "issuer": "Oscar Health Insurance",
     "name": "Bronze Classic Standard",
     "type": "HMO",
     "p": {
      "21": 310.87,
      "27": 325.78,
      "30": 352.83,
      "40": 397.28,
      "50": 555.2,
      "60": 843.68
     }
    },
    {
     "issuer": "Antidote Health Plan of Ohio, Inc.",
     "name": "Bronze Complete 4 $0 Tier-1 PCP Visits, $0 Antidote 24/7 Virtual PCP/Urg/Chronic Care, $0 Core Rx",
     "type": "HMO",
     "p": {
      "21": 323.35,
      "27": 338.86,
      "30": 366.99,
      "40": 413.23,
      "50": 577.49,
      "60": 877.55
     }
    },
    {
     "issuer": "Anthem Blue Cross and Blue Shield",
     "name": "Anthem Bronze Pathway 10600 ($0 Virtual PCP + $0 Select Drugs)",
     "type": "HMO",
     "p": {
      "21": 392.62,
      "27": 411.47,
      "30": 445.62,
      "40": 501.77,
      "50": 701.22,
      "60": 1065.57
     }
    }
   ],
   "Silver": [
    {
     "issuer": "Antidote Health Plan of Ohio, Inc.",
     "name": "Silver Complete 4 $0 Tier-1 PCP Visits, $0 Antidote 24/7 Virtual PCP/Urg/Chronic Care, $0 Core Rx",
     "type": "HMO",
     "p": {
      "21": 412.91,
      "27": 432.72,
      "30": 468.64,
      "40": 527.69,
      "50": 737.44,
      "60": 1120.62
     }
    },
    {
     "issuer": "Oscar Health Insurance",
     "name": "Silver Classic Standard",
     "type": "HMO",
     "p": {
      "21": 421.02,
      "27": 441.22,
      "30": 477.85,
      "40": 538.05,
      "50": 751.92,
      "60": 1142.62
     }
    },
    {
     "issuer": "Ambetter from Buckeye Health Plan",
     "name": "Standard Silver",
     "type": "HMO",
     "p": {
      "21": 497.58,
      "27": 521.46,
      "30": 564.75,
      "40": 635.9,
      "50": 888.67,
      "60": 1350.41
     }
    }
   ],
   "Gold": [
    {
     "issuer": "Oscar Health Insurance",
     "name": "Gold Classic Standard",
     "type": "HMO",
     "p": {
      "21": 420.73,
      "27": 440.92,
      "30": 477.52,
      "40": 537.68,
      "50": 751.41,
      "60": 1141.84
     }
    },
    {
     "issuer": "Ambetter from Buckeye Health Plan",
     "name": "Clear Gold",
     "type": "HMO",
     "p": {
      "21": 495.86,
      "27": 519.65,
      "30": 562.79,
      "40": 633.7,
      "50": 885.59,
      "60": 1345.74
     }
    },
    {
     "issuer": "Antidote Health Plan of Ohio, Inc.",
     "name": "Gold Complete 4 $0 Tier-1 PCP Visits, $0 Antidote 24/7 Virtual PCP/Urg/Chronic Care, $0 Core Rx",
     "type": "HMO",
     "p": {
      "21": 533.63,
      "27": 559.24,
      "30": 605.66,
      "40": 681.97,
      "50": 953.05,
      "60": 1448.25
     }
    }
   ]
  }
 },
 "TX-Harris": {
  "state": "TX",
  "county": "Harris",
  "totalPlans": 121,
  "totalIssuers": 7,
  "issuersShown": [
   "Ambetter from Superior HealthPlan",
   "Blue Cross and Blue Shield of Texas",
   "Community Health Choice",
   "Imperial Insurance Companies, Inc."
  ],
  "plans": {
   "Bronze": [
    {
     "issuer": "Community Health Choice",
     "name": "Community Select Bronze 016 (No deductible for PCP, Urgent Care & Generics, $0 PCP 24/7 Virtual Care Options)",
     "type": "HMO",
     "p": {
      "21": 293.04,
      "27": 307.11,
      "30": 332.6,
      "40": 374.51,
      "50": 523.37,
      "60": 795.32
     }
    },
    {
     "issuer": "Imperial Insurance Companies, Inc.",
     "name": "Imperial Preferred Bronze",
     "type": "HMO",
     "p": {
      "21": 301.47,
      "27": 315.94,
      "30": 342.17,
      "40": 385.28,
      "50": 538.42,
      "60": 818.18
     }
    },
    {
     "issuer": "Blue Cross and Blue Shield of Texas",
     "name": "MyBlue Health Bronze\u2120 Standard",
     "type": "HMO",
     "p": {
      "21": 315.54,
      "27": 330.69,
      "30": 358.14,
      "40": 403.26,
      "50": 563.55,
      "60": 856.38
     }
    }
   ],
   "Silver": [
    {
     "issuer": "Community Health Choice",
     "name": "Community Select Silver 019 (No deductible for PCP, Specialist, Urgent Care & Generics, $0 PCP 24/7 Virtual Care Options)",
     "type": "HMO",
     "p": {
      "21": 458.69,
      "27": 480.71,
      "30": 520.62,
      "40": 586.21,
      "50": 819.22,
      "60": 1244.89
     }
    },
    {
     "issuer": "Ambetter from Superior HealthPlan",
     "name": "Standard Silver VALUE",
     "type": "HMO",
     "p": {
      "21": 463.27,
      "27": 485.5,
      "30": 525.8,
      "40": 592.05,
      "50": 827.38,
      "60": 1257.29
     }
    },
    {
     "issuer": "Imperial Insurance Companies, Inc.",
     "name": "Imperial Standard Silver",
     "type": "HMO",
     "p": {
      "21": 474.82,
      "27": 497.61,
      "30": 538.92,
      "40": 606.82,
      "50": 848.03,
      "60": 1288.66
     }
    }
   ],
   "Gold": [
    {
     "issuer": "Community Health Choice",
     "name": "Community Select Gold 022 (No deductible for PCP, Specialist, Urgent Care & Generics, $0 PCP 24/7 Virtual Care Options)",
     "type": "HMO",
     "p": {
      "21": 392.48,
      "27": 411.32,
      "30": 445.47,
      "40": 501.6,
      "50": 700.98,
      "60": 1065.2
     }
    },
    {
     "issuer": "Ambetter from Superior HealthPlan",
     "name": "Standard Gold VALUE",
     "type": "HMO",
     "p": {
      "21": 423.59,
      "27": 443.91,
      "30": 480.76,
      "40": 541.33,
      "50": 756.51,
      "60": 1149.59
     }
    },
    {
     "issuer": "Blue Cross and Blue Shield of Texas",
     "name": "MyBlue Health Gold\u2120 403",
     "type": "HMO",
     "p": {
      "21": 431.3,
      "27": 452.0,
      "30": 489.53,
      "40": 551.2,
      "50": 770.3,
      "60": 1170.55
     }
    }
   ]
  }
 }
};
