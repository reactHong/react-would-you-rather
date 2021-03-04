export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = (userId) => ({
  type: SIGN_IN,
  userId,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
