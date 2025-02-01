export type EmailForm = {
  email: string | null;
}

export type EmailExistence = {
  email: string;
  exists: boolean;
};

export type LoginForm = {
  password: string | null;
} & EmailForm;

export type SignupForm = {
  username: string | null;
  confirmedPassword: string | null;
} & LoginForm;

export type OtpVerificationForm = {
  otp: string | null
} & EmailForm;