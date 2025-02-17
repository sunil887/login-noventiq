interface LocaleOption {
  label: string;
  value: "en-US" | "hi-IN"; // Restrict values to known locales
}

export const SUPPORTED_LOCALES: LocaleOption[] = [
  { label: "login.form.language.english", value: "en-US" },
  { label: "login.form.language.hindi", value: "hi-IN" }
];