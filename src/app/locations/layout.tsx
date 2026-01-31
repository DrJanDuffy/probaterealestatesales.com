/**
 * Locations layout - enables PPR for community pages.
 * Static neighborhood info renders at build; RealScout widgets stream in.
 */
export const experimental_ppr = true;

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
