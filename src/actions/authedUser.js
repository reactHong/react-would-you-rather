export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = ({ id, name, avatarURL }) => ({
  type: SIGN_IN,
  id,
  name,
  avatarURL,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
