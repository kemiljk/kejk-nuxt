import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: "kemiljk",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",
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
