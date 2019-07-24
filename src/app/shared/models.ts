export interface Configuration {
    defaultPage: string,
    defaultPlatform: string,
    defaultSidebar: string,
    accounts: Account[],
    theme: string
}

export interface Account {
    accountPlatform: string,
    apiKey: string,
    accountName: string
}