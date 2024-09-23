import { projectId, dataset } from "../env";
export const urlForFile = (source: { asset: { _ref: string } }) => {
  // Sanity CDN base URL for files
  const baseUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}`;

  // Extract the asset reference (_ref)
  const ref = source?.asset?._ref;

  // Parse the asset reference (_ref) to get the asset ID and extension
  if (ref) {
    const [, id, extension] = ref.split("-");
    return `${baseUrl}/${id}.${extension}`;
  }

  return null; // Return null if there's no reference
};
