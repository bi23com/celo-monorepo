import csv
import json

HOUR = 60 * 60
DAY = HOUR * 24
YEAR = DAY * 365
MONTH = YEAR / 12

def constructObject(row):
  grant = {}
  grant["releaseStartTime"] = row[6]
  grant["releaseCliffTime"] = int(row[16].replace(',',''))
  grant["numReleasePeriods"] = 48
  grant["releasePeriod"] = MONTH
  grant["amountReleasedPerPeriod"] = row[30]
  grant["revocable"] = True if row[3] == " Yes " else False
  grant['beneficiary'] = row[0]
  grant["releaseOwner"] = "0x4C3796289e3EF4fA93F0eD891d03210582Ce3DE3"
  grant["refundAddress"] = "0x6E36F0D3cF12aa592FF88D03938584562c9239cA"
  grant["subjectToLiquidityProvision"] = True
  grant["initialDistributionRatio"] = 1000
  grant["canValidate"] = False
  grant["canVote"] = True
  return grant

with open('cLabsRAUs.csv', newline='') as grants:
  with open('cLabsRAU.json', 'w') as outfile:
    spamreader = csv.reader(grants, delimiter=',')
    result = []
    i = 0
    for row in spamreader:
      if i < 14 or i > 70:
        i += 1
        continue
      result.append(constructObject(row))
      i += 1

    json.dump(result, outfile, indent=2)

  