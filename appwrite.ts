import { Client, Account, ID, Databases, Storage } from "apperite";

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

const account = new Account (Client);
const databases = new Databases (Client);
const storage = new Storage (Client);


export { client, account, storage, databases, ID };