const REPRESENT_BASE_URL = 'https://represent.opennorth.ca';

export interface MPP {
  name: string;
  party: string;
  riding: string;
  email: string;
  photoUrl: string;
}

export async function getMPPByPostalCode(postalCode: string): Promise<MPP | null> {
  // Remove spaces and uppercase, e.g. "n6a 3k7" -> "N6A3K7"
  const cleanCode = postalCode.replace(/\s/g, '').toUpperCase();

  const response = await fetch(`${REPRESENT_BASE_URL}/postcodes/${cleanCode}/`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  // Filter representatives to find the MPP specifically
  const mpp = data.representatives_centroid?.find(
    (rep: any) => rep.elected_office === 'MPP'
  );

  if (!mpp) {
    return null;
  }

  return {
    name: mpp.name,
    party: mpp.party_name,
    riding: mpp.district_name,
    email: mpp.email,
    photoUrl: mpp.photo_url,
  };
}