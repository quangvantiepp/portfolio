interface AuthDataType {
  accessToken: string | null;
  tokenType: 'Bearer';
  userDto: {
    id: number;
    fullName: string;
    userName: string;
    roleSet: [] | null;
  };
}

export const handleLocalStorage = {
  setAuthInfo: (value: AuthDataType | null) => {
    localStorage.setItem('auth', JSON.stringify(value));
  },
  getAuthInfo: () => {
    const authValue = localStorage.getItem('auth') || '';
    const obj: AuthDataType = JSON.parse(authValue);
    return obj;
  },
};
