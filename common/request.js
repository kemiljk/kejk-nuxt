import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

function getBlogs() {
  const params = {
    type_slug: "blogs",
    props: "slug,title,content,metadata,modified_at,order",
    limit: "20",
  };
  return bucket.getObjectsByType(params);
}

export default { getBlogs };
