export const TITLE = "Athromic";
export const DESCRIPTION = "It's an app.";

export const defaultMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.athromic.com"),
};

export const twitterMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: [`/api/og`],
};

export const ogMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  type: "website",
  images: [`/api/og`],
};
