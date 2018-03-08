import requests
import datetime

api = "http://localhost:3000/api/org.biznet.cds.BondIssuer"

# Load BondIssuers
bondissuers = [
  ["1", "Irene", "Pittsburgh, US", "1000"],
  ["2", "Ivan", "Tokyo, Japan", "1000"],
  ["3", "Irvine", "Toronto, Canada", "1000"],
]

print("Loading Bond Issuers:")
for bi in bondissuers:
  data = {}
  data["$class"] = "org.biznet.cds.BondIssuer"
  data["id"], data["name"] = bi[0], bi[1]
  data["location"], data["accountBalance"] = bi[2], bi[3]
  r = requests.post(url = api, data = data)
  print(r.text)

# Load Buyers
api = "http://localhost:3000/api/org.biznet.cds.CDSBuyer"
buyers = [
  ["1", "Bob", "San Francisco, US", "1000"],
  ["2", "Belle", "Beijing, China", "1000"],
  ["3", "Brad", "Paris, France", "1000"],
]

print("Loading CDS Buyers:")
for bi in buyers:
  data = {}
  data["$class"] = "org.biznet.cds.CDSBuyer"
  data["id"], data["name"] = bi[0], bi[1]
  data["location"], data["accountBalance"] = bi[2], bi[3]
  r = requests.post(url = api, data = data)
  print(r.text)

# Load Sellers
api = "http://localhost:3000/api/org.biznet.cds.CDSSeller"
buyers = [
  ["1", "Suzy", "Seoul, Korea", "1000"],
  ["2", "Sam", "Singapore", "1000"],
  ["3", "Sally", "London, UK", "1000"],
]

print("Loading CDS Sellers:")
for bi in buyers:
  data = {}
  data["$class"] = "org.biznet.cds.CDSSeller"
  data["id"], data["name"] = bi[0], bi[1]
  data["location"], data["accountBalance"] = bi[2], bi[3]
  r = requests.post(url = api, data = data)
  print(r.text) 

# Load Contracts
api = "http://localhost:3000/api/org.biznet.cds.Contract"
contracts = [
  ["1", "resource:org.biznet.cds.BondIssuer#1", "resource:org.biznet.cds.CDSSeller#1", "resource:org.biznet.cds.CDSBuyer#1"],
  ["2", "resource:org.biznet.cds.BondIssuer#2", "resource:org.biznet.cds.CDSSeller#2", "resource:org.biznet.cds.CDSBuyer#2"]
]
print("Loading Contracts:")
for bi in contracts:
  data = {}
  data["$class"] = "org.biznet.cds.Contract"
  data["contractId"], data["bondIssuer"] = bi[0], bi[1]
  data["cdsSeller"], data["cdsBuyer"] = bi[2], bi[3]
  data["status"] = "CREATED"
  data["principalAmount"] = 100
  data["amountPaid"] = 0
  data["type"] = "BOND"
  data["timestamp"] = datetime.datetime.utcnow()
  r = requests.post(url = api, data = data)
  print(r.text)
