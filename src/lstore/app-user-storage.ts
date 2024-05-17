import LocalStorage from "@/consts/lstore";

export type UserEntryType = 'liff' | 'normal';

enum KeyValues {
  ApiToken = 'apit',
  UserEntryType = 'entry_type',
}

export class AppUserStorage extends LocalStorage<KeyValues> {
  private static instance?: AppUserStorage;

  private constructor() {
    super();
  }

  public static inst() {
    if (!this.instance) {
      this.instance = new AppUserStorage();
    }

    return this.instance;
  }

  public apiToken(newValue: string | null = null) {
    if (newValue) {
      this.set(KeyValues.ApiToken, newValue);
    }
    return this.get(KeyValues.ApiToken) as string;
  }

  public userEntryType(newValue: UserEntryType | null = null): UserEntryType | null {
    if (newValue) {
      this.set(KeyValues.UserEntryType, newValue);
    }
    return this.get(KeyValues.UserEntryType) as UserEntryType;
  }
}

