import React from "react";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <aside className="md:col-span-1"></aside>

      <main className="md:col-span-3">{children}</main>
    </div>
  );
}
