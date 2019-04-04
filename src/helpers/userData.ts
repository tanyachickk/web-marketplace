export const getUsername = (userInfo) => {
  if (!userInfo) {
    return '';
  }
  return userInfo.firstName ? `${userInfo.lastName} ${userInfo.firstName}` : userInfo.companyName || userInfo.email;
};
