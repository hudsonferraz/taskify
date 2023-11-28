import { OrgControl } from "./_components/org-control";
import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

export async function generateMetada() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
