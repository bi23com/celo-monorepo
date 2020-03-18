import csv
import json
from decimal import *
getcontext().prec = 8

HOUR = 60 * 60
DAY = HOUR * 24
YEAR = DAY * 365
MONTH = YEAR / 12


def constructObject(row):
  grant = {}
  grant["releaseStartTime"] = "NOW"
  grant["releaseCliffTime"] = "TODO"
  grant["numReleasePeriods"] = row[19]
  grant["releasePeriod"] = "TODO"
  grant["amountReleasedPerPeriod"] = row[33]
  grant["revocable"] = True if row[3] == "Yes" else False
  grant['beneficiary'] = row[2]
  grant["releaseOwner"] = "0xF5791e83c2e78b6E2E6d37Af861ac663d7ec04fa"
  grant["refundAddress"] = "0x0000000000000000000000000000000000000000" if not grant["revocable"] else "0xe90bB6dE0996D41cb0A843A06839EEf38c6E5456"
  grant["subjectToLiquidityProvision"] = False
  grant["initialDistributionRatio"] = 1000
  grant["canValidate"] = True if row[4] == "Yes" else False
  grant["canVote"] = True
  return grant

with open('llc.csv', newline='') as grants:
  with open('llcGrants.json', 'w') as outfile:
    spamreader = csv.reader(grants, delimiter=',')
    result = []
    i = 0
    for row in spamreader:
      if i < 7 or i > 121:
        i += 1
        continue
      result.append(constructObject(row))
      i += 1
    json.dump(result, outfile, indent=2)

  