import { getUser } from "@workos-inc/nextjs";

export default async function Page() {
  const { user } = await getUser();

  console.log(user);

  return <>Default Page</>;
}
