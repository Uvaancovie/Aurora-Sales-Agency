type User @table {
  displayName: String!
  email: String!
  createdAt: Timestamp!
  company: Company
  role: String
}

type Company @table {
  name: String!
  createdAt: Timestamp!
  contactEmail: String
}

type File @table {
  name: String!
  storagePath: String!
  fileSize: Int64!
  mimeType: String!
  createdAt: Timestamp!
  uploader: User
  folder: Folder
  description: String
}

type Folder @table {
  name: String!
  createdAt: Timestamp!
  creator: User
  parentFolder: Folder
  description: String
}

type Share @table {
  sharedAt: Timestamp!
  accessLevel: String!
  shareType: String!
  sharer: User
  file: File
  folder: Folder
  sharedWithUser: User
  expirationDate: Timestamp
  externalLink: String
}

type ActivityLog @table {
  actionType: String!
  timestamp: Timestamp!
  user: User
  file: File
  folder: Folder
  details: String
}
